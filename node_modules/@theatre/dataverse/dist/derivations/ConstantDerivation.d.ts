import AbstractDerivation from './AbstractDerivation';
/**
 * A derivation whose value never changes.
 */
export default class ConstantDerivation<V> extends AbstractDerivation<V> {
    private readonly _v;
    /**
     * @param v - The value of the derivation.
     */
    constructor(v: V);
}
//# sourceMappingURL=ConstantDerivation.d.ts.map