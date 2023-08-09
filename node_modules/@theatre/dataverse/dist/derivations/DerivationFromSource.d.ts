import type { VoidFn } from '../types';
import AbstractDerivation from './AbstractDerivation';
/**
 * Represents a derivation based on a tappable (subscribable) data source.
 */
export default class DerivationFromSource<V> extends AbstractDerivation<V> {
    private readonly _tapToSource;
    private readonly _getValueFromSource;
    private _untapFromChanges;
    private _cachedValue;
    private _hasCachedValue;
    /**
     * @param _tapToSource - A function that takes a listener and subscribes it to the underlying data source.
     * @param _getValueFromSource - A function that returns the current value of the data source.
     */
    constructor(_tapToSource: (listener: (newValue: V) => void) => VoidFn, _getValueFromSource: () => V);
}
//# sourceMappingURL=DerivationFromSource.d.ts.map