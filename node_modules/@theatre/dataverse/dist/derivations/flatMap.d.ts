import type { IDerivation } from './IDerivation';
export default function flatMap<V, R>(dep: IDerivation<V>, fn: (v: V) => R): IDerivation<R extends IDerivation<infer T> ? T : R>;
//# sourceMappingURL=flatMap.d.ts.map