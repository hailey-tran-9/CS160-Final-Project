import type { IDerivation } from './IDerivation';
export default function flatMap<V, R>(dep: IDerivation<V>, fn: (v: V) => R): IDerivation<R>;
//# sourceMappingURL=map.d.ts.map