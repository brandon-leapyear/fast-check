import { Random } from '../../random/generator/Random';
import { Arbitrary } from '../arbitrary/definition/Arbitrary';
import { Shrinkable } from '../arbitrary/definition/Shrinkable';
import { PreconditionFailure } from '../precondition/PreconditionFailure';
import { IRawProperty, runIdToFrequency } from './IRawProperty';

/**
 * Type of legal hook function that can be used to call `beforeEach` or `afterEach`
 * on a {@link IAsyncPropertyWithHooks}
 *
 * @public
 */
export type AsyncPropertyHookFunction = (() => Promise<unknown>) | (() => void);

/**
 * Interface for asynchronous property, see {@link IRawProperty}
 * @public
 */
export interface IAsyncProperty<Ts> extends IRawProperty<Ts, true> {}

/**
 * Interface for asynchronous property defining hooks, see {@link IAsyncProperty}
 * @public
 */
export interface IAsyncPropertyWithHooks<Ts> extends IAsyncProperty<Ts> {
  /**
   * Define a function that should be called before all calls to the predicate
   * @param hookFunction - Function to be called
   */
  beforeEach(hookFunction: AsyncPropertyHookFunction): IAsyncPropertyWithHooks<Ts>;

  /**
   * Define a function that should be called after all calls to the predicate
   * @param hookFunction - Function to be called
   */
  afterEach(hookFunction: AsyncPropertyHookFunction): IAsyncPropertyWithHooks<Ts>;
}

/**
 * Asynchronous property, see {@link IAsyncProperty}
 *
 * Prefer using {@link (asyncProperty:1)} instead
 *
 * @internal
 */
export class AsyncProperty<Ts> implements IAsyncPropertyWithHooks<Ts> {
  static dummyHook: AsyncPropertyHookFunction = () => {};
  private beforeEachHook: AsyncPropertyHookFunction = AsyncProperty.dummyHook;
  private afterEachHook: AsyncPropertyHookFunction = AsyncProperty.dummyHook;
  constructor(readonly arb: Arbitrary<Ts>, readonly predicate: (t: Ts) => Promise<boolean | void>) {}
  isAsync = () => true as const;
  generate(mrng: Random, runId?: number): Shrinkable<Ts> {
    return runId != null ? this.arb.withBias(runIdToFrequency(runId)).generate(mrng) : this.arb.generate(mrng);
  }
  async run(v: Ts): Promise<PreconditionFailure | string | null> {
    await this.beforeEachHook();
    try {
      const output = await this.predicate(v);
      return output == null || output === true ? null : 'Property failed by returning false';
    } catch (err) {
      // precondition failure considered as success for the first version
      if (PreconditionFailure.isFailure(err)) return err;
      // exception as string in case of real failure
      if (err instanceof Error && err.stack) return `${err}\n\nStack trace: ${err.stack}`;
      return `${err}`;
    } finally {
      await this.afterEachHook();
    }
  }

  /**
   * Define a function that should be called before all calls to the predicate
   * @param hookFunction - Function to be called
   */
  beforeEach(hookFunction: AsyncPropertyHookFunction): AsyncProperty<Ts> {
    this.beforeEachHook = hookFunction;
    return this;
  }
  /**
   * Define a function that should be called after all calls to the predicate
   * @param hookFunction - Function to be called
   */
  afterEach(hookFunction: AsyncPropertyHookFunction): AsyncProperty<Ts> {
    this.afterEachHook = hookFunction;
    return this;
  }
}
