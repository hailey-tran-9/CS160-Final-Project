import type { $FixMe } from '../types';
declare type Listener = (v: $FixMe) => void;
/**
 * A simple barebones event emitter
 */
export default class EventEmitter {
    _listenersByType: {
        [eventName: string]: Array<Listener>;
    };
    constructor();
    addEventListener(eventName: string, listener: Listener): this;
    removeEventListener(eventName: string, listener: Listener): this;
    emit(eventName: string, payload: unknown): void;
    getListenersFor(eventName: string): Listener[];
    hasListenersFor(eventName: string): boolean;
}
export {};
//# sourceMappingURL=EventEmitter.d.ts.map