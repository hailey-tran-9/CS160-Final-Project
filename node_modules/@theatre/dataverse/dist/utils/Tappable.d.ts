declare type Untap = () => void;
declare type UntapFromSource = () => void;
interface IProps<V> {
    tapToSource: (cb: (payload: V) => void) => UntapFromSource;
}
declare type Listener<V> = ((v: V) => void) | (() => void);
/**
 * Represents a data-source that can be tapped (subscribed to).
 */
export default class Tappable<V> {
    private _props;
    private _tappers;
    private _untapFromSource;
    private _lastTapperId;
    private _untapFromSourceTimeout;
    constructor(props: IProps<V>);
    private _check;
    private _scheduleToUntapFromSource;
    private _cb;
    /**
     * Tap (subscribe to) the data source.
     *
     * @param cb - The callback to be called on a change.
     */
    tap(cb: Listener<V>): Untap;
    private _removeTapperById;
}
export {};
//# sourceMappingURL=Tappable.d.ts.map