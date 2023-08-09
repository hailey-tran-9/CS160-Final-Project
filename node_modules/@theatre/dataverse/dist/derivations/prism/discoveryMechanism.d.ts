import type { $IntentionalAny } from '../../types';
import type { IDerivation } from '../IDerivation';
export declare const startIgnoringDependencies: () => void, stopIgnoringDependencies: () => void, reportResolutionEnd: (_d: IDerivation<$IntentionalAny>) => void, reportResolutionStart: (d: IDerivation<$IntentionalAny>) => void, pushCollector: (collector: (d: IDerivation<$IntentionalAny>) => void) => void, popCollector: (collector: (d: IDerivation<$IntentionalAny>) => void) => void;
//# sourceMappingURL=discoveryMechanism.d.ts.map