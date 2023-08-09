import type { Pointer } from '../pointer';
import type { IDerivation } from './IDerivation';
export default function iterateAndCountTicks<V>(pointerOrDerivation: IDerivation<V> | Pointer<V>): Generator<{
    value: V;
    ticks: number;
}, void, void>;
//# sourceMappingURL=iterateAndCountTicks.d.ts.map