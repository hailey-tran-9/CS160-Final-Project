import type { $IntentionalAny } from '../../types';
import AbstractDerivation from '../AbstractDerivation';
import type { IDerivation } from '../IDerivation';
export declare class PrismDerivation<V> extends AbstractDerivation<V> {
    readonly _fn: () => V;
    protected _cacheOfDendencyValues: Map<IDerivation<unknown>, unknown>;
    protected _possiblyStaleDeps: Set<IDerivation<unknown>>;
    private _prismScope;
    constructor(_fn: () => V);
    _recalculate(): NonNullable<V>;
    _reactToDependencyBecomingStale(msgComingFrom: IDerivation<unknown>): void;
    _keepHot(): void;
    _becomeCold(): void;
}
declare type IRef<T> = {
    current: T;
};
declare function ref<T>(key: string, initialValue: T): IRef<T>;
/**
 * An effect hook, similar to React's `useEffect()`, but is not sensitive to call order by using `key`.
 *
 * @param key - the key for the effect. Should be uniqe inside of the prism.
 * @param cb - the callback function. Requires returning a cleanup function.
 * @param deps - the dependency array
 */
declare function effect(key: string, cb: () => () => void, deps?: unknown[]): void;
/**
 * Store a value to this {@link prism} stack.
 *
 * Unlike hooks seen in popular frameworks like React, you provide an exact `key` so
 * we can call `prism.memo` in any order, and conditionally.
 *
 * @param deps - Passing in `undefined` will always cause a recompute
 */
declare function memo<T>(key: string, fn: () => T, deps: undefined | $IntentionalAny[] | ReadonlyArray<$IntentionalAny>): T;
/**
 * A state hook, similar to react's `useState()`.
 *
 * @param key - the key for the state
 * @param initialValue - the initial value
 * @returns [currentState, setState]
 *
 * @example
 * ```ts
 * import {prism} from 'dataverse'
 *
 * // This derivation holds the current mouse position and updates when the mouse moves
 * const mousePositionD = prism(() => {
 *   const [pos, setPos] = prism.state<[x: number, y: number]>('pos', [0, 0])
 *
 *   prism.effect(
 *     'setupListeners',
 *     () => {
 *       const handleMouseMove = (e: MouseEvent) => {
 *         setPos([e.screenX, e.screenY])
 *       }
 *       document.addEventListener('mousemove', handleMouseMove)
 *
 *       return () => {
 *         document.removeEventListener('mousemove', handleMouseMove)
 *       }
 *     },
 *     [],
 *   )
 *
 *   return pos
 * })
 * ```
 */
declare function state<T>(key: string, initialValue: T): [T, (val: T) => void];
/**
 * This is useful to make sure your code is running inside a `prism()` call.
 *
 * @example
 * ```ts
 * import {prism} from '@theatre/dataverse'
 *
 * function onlyUsefulInAPrism() {
 *   prism.ensurePrism()
 * }
 *
 * prism(() => {
 *   onlyUsefulInAPrism() // will run fine
 * })
 *
 * setTimeout(() => {
 *   onlyUsefulInAPrism() // throws an error
 *   console.log('This will never get logged')
 * }, 0)
 * ```
 */
declare function ensurePrism(): void;
declare function scope<T>(key: string, fn: () => T): T;
declare function sub<T>(key: string, fn: () => T, deps: undefined | $IntentionalAny[]): T;
declare function inPrism(): boolean;
declare type IPrismFn = {
    <T>(fn: () => T): IDerivation<T>;
    ref: typeof ref;
    effect: typeof effect;
    memo: typeof memo;
    ensurePrism: typeof ensurePrism;
    state: typeof state;
    scope: typeof scope;
    sub: typeof sub;
    inPrism: typeof inPrism;
};
/**
 * Creates a derivation from the passed function that adds all derivations referenced
 * in it as dependencies, and reruns the function when these change.
 *
 * @param fn - The function to rerun when the derivations referenced in it change.
 */
declare const prism: IPrismFn;
export default prism;
//# sourceMappingURL=prism.d.ts.map