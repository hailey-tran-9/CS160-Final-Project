import type { IDerivation } from './derivations/IDerivation';
import type { Pointer, PointerType } from './pointer';
import type { $FixMe } from './types';
import type { PathBasedReducer } from './utils/PathBasedReducer';
/**
 * Interface for objects that can provide a derivation at a certain path.
 */
export interface IdentityDerivationProvider {
    /**
     * Returns a derivation of the value at the provided path.
     *
     * @param path - The path to create the derivation at.
     */
    getIdentityDerivation(path: Array<string | number>): IDerivation<unknown>;
}
/**
 * Wraps an object whose (sub)properties can be individually tracked.
 */
export default class Atom<State extends {}> implements IdentityDerivationProvider {
    private _currentState;
    private readonly _rootScope;
    /**
     * Convenience property that gives you a pointer to the root of the atom.
     *
     * @remarks
     * Equivalent to `pointer({ root: thisAtom, path: [] })`.
     */
    readonly pointer: Pointer<State>;
    constructor(initialState: State);
    /**
     * Sets the state of the atom.
     *
     * @param newState - The new state of the atom.
     */
    setState(newState: State): void;
    /**
     * Gets the current state of the atom.
     */
    getState(): State;
    /**
     * Gets the state of the atom at `path`.
     */
    getIn(path: (string | number)[]): unknown;
    /**
     * Creates a new state object from the current one, where the value at `path`
     * is replaced by the return value of `reducer`, then sets it.
     *
     * @remarks
     * Doesn't mutate the old state, and preserves referential equality between
     * values of the old state and the new state where possible.
     *
     * @example
     * ```ts
     * someAtom.getIn(['a']) // 1
     * someAtom.reduceState(['a'], (state) => state + 1);
     * someAtom.getIn(['a']) // 2
     * ```
     *
     * @param path - The path to call the reducer at.
     * @param reducer - The function to use for creating the new state.
     */
    reduceState: PathBasedReducer<State, State>;
    /**
     * Sets the state of the atom at `path`.
     */
    setIn(path: $FixMe[], val: $FixMe): State;
    private _checkUpdates;
    private _getOrCreateScopeForPath;
    private _onPathValueChange;
    /**
     * Returns a new derivation of the value at the provided path.
     *
     * @param path - The path to create the derivation at.
     */
    getIdentityDerivation(path: Array<string | number>): IDerivation<unknown>;
}
/**
 * Returns a derivation of the value at the provided pointer. Derivations are
 * cached per pointer.
 *
 * @param pointer - The pointer to return the derivation at.
 */
export declare const valueDerivation: <P extends PointerType<any>>(pointer: P) => IDerivation<P extends PointerType<infer T> ? T : void>;
/**
 * Convenience function that returns a plain value from its argument, whether it
 * is a pointer, a derivation or a plain value itself.
 *
 * @remarks
 * For pointers, the value is returned by first creating a derivation, so it is
 * reactive e.g. when used in a `prism`.
 *
 * @param input - The argument to return a value from.
 */
export declare const val: <P extends IDerivation<any> | PointerType<any> | null | undefined>(input: P) => P extends PointerType<infer T> ? T : P extends IDerivation<infer T_1> ? T_1 : P extends null | undefined ? P : unknown;
//# sourceMappingURL=Atom.d.ts.map