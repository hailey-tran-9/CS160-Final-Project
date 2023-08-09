import Emitter from '../utils/Emitter';
import type { default as Tappable } from '../utils/Tappable';
import type { IDerivation } from './IDerivation';
/**
 * Like DerivationEmitter, but with a different performance model. DerivationValuelessEmitter emits every time the
 * derivation is updated, even if the value didn't change, and tappers are called without the value. The advantage of
 * this is that you have control over when the underlying derivation is freshened, it won't automatically be freshened
 * by the emitter.
 */
export default class DerivationValuelessEmitter<V> {
    readonly dontEmitValues: boolean;
    _derivation: IDerivation<V>;
    _emitter: Emitter<void>;
    _hadTappers: boolean;
    constructor(derivation: IDerivation<V>, dontEmitValues?: boolean);
    private _possiblyMarkAsStale;
    _reactToNumberOfTappersChange(): void;
    /**
     * The tappable associated with the emitter. You can use it to tap (subscribe to) the underlying derivation.
     */
    tappable(): Tappable<void>;
}
//# sourceMappingURL=DerivationValuelessEmitter.d.ts.map