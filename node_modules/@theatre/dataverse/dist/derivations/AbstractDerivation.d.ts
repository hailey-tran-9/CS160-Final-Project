import type Ticker from '../Ticker';
import type { $IntentionalAny, VoidFn } from '../types';
import type Tappable from '../utils/Tappable';
import type { IDerivation } from './IDerivation';
declare type IDependent = (msgComingFrom: IDerivation<$IntentionalAny>) => void;
/**
 * Represents a derivation whose changes can be tracked. To be used as the base class for all derivations.
 */
export default abstract class AbstractDerivation<V> implements IDerivation<V> {
    /**
     * Whether the object is a derivation.
     */
    readonly isDerivation: true;
    private _didMarkDependentsAsStale;
    private _isHot;
    private _isFresh;
    constructor();
    /**
     * Whether the derivation is hot.
     */
    get isHot(): boolean;
    /**
     * Returns a `Tappable` of the changes of this derivation.
     */
    changes(ticker: Ticker): Tappable<V>;
    /**
     * Like {@link AbstractDerivation.changes} but with a different performance model. `changesWithoutValues` returns a `Tappable` that
     * updates every time the derivation is updated, even if the value didn't change, and the callback is called without
     * the value. The advantage of this is that you have control over when the derivation is freshened, it won't
     * automatically be kept fresh.
     */
    changesWithoutValues(): Tappable<void>;
    /**
     * Keep the derivation hot, even if there are no tappers (subscribers).
     */
    keepHot(): () => void;
    /**
     * Convenience method that taps (subscribes to) the derivation using `this.changes(ticker).tap(fn)` and immediately calls
     * the callback with the current value.
     *
     * @param ticker - The ticker to use for batching.
     * @param fn - The callback to call on update.
     *
     * @see changes
     */
    tapImmediate(ticker: Ticker, fn: (cb: V) => void): VoidFn;
    /**
     * Add a derivation as a dependent of this derivation.
     *
     * @param d - The derivation to be made a dependent of this derivation.
     *
     * @see removeDependent
     */
    addDependent(d: IDependent): void;
    /**
     * Remove a derivation as a dependent of this derivation.
     *
     * @param d - The derivation to be removed from as a dependent of this derivation.
     *
     * @see addDependent
     */
    removeDependent(d: IDependent): void;
    private _internal_markAsStale;
    /**
     * Gets the current value of the derivation. If the value is stale, it causes the derivation to freshen.
     */
    getValue(): V;
    private _reactToNumberOfDependentsChange;
    /**
     * Creates a new derivation from this derivation using the provided mapping function. The new derivation's value will be
     * `fn(thisDerivation.getValue())`.
     *
     * @param fn - The mapping function to use. Note: it accepts a plain value, not a derivation.
     */
    map<T>(fn: (v: V) => T): IDerivation<T>;
    /**
     * Same as {@link AbstractDerivation.map}, but the mapping function can also return a derivation, in which case the derivation returned
     * by `flatMap` takes the value of that derivation.
     *
     * @example
     * ```ts
     * // Simply using map() here would return the inner derivation when we call getValue()
     * new Box(3).derivation.map((value) => new Box(value).derivation).getValue()
     *
     * // Using flatMap() eliminates the inner derivation
     * new Box(3).derivation.flatMap((value) => new Box(value).derivation).getValue()
     * ```
     *
     * @param fn - The mapping function to use. Note: it accepts a plain value, not a derivation.
     */
    flatMap<R>(fn: (v: V) => R): IDerivation<R extends IDerivation<infer T> ? T : R>;
}
export {};
//# sourceMappingURL=AbstractDerivation.d.ts.map