import type Ticker from '../Ticker';
import type { default as Tappable } from '../utils/Tappable';
import type { IDerivation } from './IDerivation';
/**
 * An event emitter that emits events on changes to a derivation.
 */
export default class DerivationEmitter<V> {
    private _derivation;
    private _ticker;
    private _emitter;
    private _lastValue;
    private _lastValueRecorded;
    private _hadTappers;
    /**
     * @param derivation - The derivation to emit events for.
     * @param ticker - The ticker to use to batch events.
     */
    constructor(derivation: IDerivation<V>, ticker: Ticker);
    private _possiblyMarkAsStale;
    private _reactToNumberOfTappersChange;
    /**
     * The tappable associated with the emitter. You can use it to tap (subscribe to) the underlying derivation.
     */
    tappable(): Tappable<V>;
    private _refresh;
}
//# sourceMappingURL=DerivationEmitter.d.ts.map