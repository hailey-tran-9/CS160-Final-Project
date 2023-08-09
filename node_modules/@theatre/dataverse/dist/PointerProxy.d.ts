import type { IdentityDerivationProvider } from './Atom';
import type { Pointer } from './pointer';
/**
 * Allows creating pointer-derivations where the pointer can be switched out.
 *
 * @remarks
 * This allows reacting not just to value changes at a certain pointer, but changes
 * to the proxied pointer too.
 */
export default class PointerProxy<O extends {}> implements IdentityDerivationProvider {
    private readonly _currentPointerBox;
    /**
     * Convenience pointer pointing to the root of this PointerProxy.
     *
     * @remarks
     * Allows convenient use of {@link valueDerivation} and {@link val}.
     */
    readonly pointer: Pointer<O>;
    constructor(currentPointer: Pointer<O>);
    /**
     * Sets the underlying pointer.
     * @param p - The pointer to be proxied.
     */
    setPointer(p: Pointer<O>): void;
    /**
     * Returns a derivation of the value at the provided sub-path of the proxied pointer.
     *
     * @param path - The path to create the derivation at.
     */
    getIdentityDerivation(path: Array<string | number>): import(".").IDerivation<Pointer<O> extends import("./pointer").PointerType<infer T> ? T : void>;
}
//# sourceMappingURL=PointerProxy.d.ts.map