import Tappable from './Tappable';
declare type Tapper<V> = (v: V) => void;
declare type Untap = () => void;
/**
 * An event emitter. Emit events that others can tap (subscribe to).
 */
export default class Emitter<V> {
    private _tappers;
    private _lastTapperId;
    private _onNumberOfTappersChangeListener;
    /**
     * The Tappable associated with this emitter. You can use this to tap (subscribe to) events emitted.
     */
    readonly tappable: Tappable<V>;
    constructor();
    _tap(cb: Tapper<V>): Untap;
    _removeTapperById(id: number): void;
    /**
     * Emit a value.
     *
     * @param payload - The value to be emitted.
     */
    emit(payload: V): void;
    /**
     * Checks whether the emitter has tappers (subscribers).
     */
    hasTappers(): boolean;
    /**
     * Calls callback when the number of tappers (subscribers) changes.
     *
     * @example
     * ```ts
     * emitter.onNumberOfTappersChange((n) => {
     *   console.log("number of tappers changed:", n)
     * })
     * ```
     */
    onNumberOfTappersChange(cb: (n: number) => void): void;
}
export {};
//# sourceMappingURL=Emitter.d.ts.map