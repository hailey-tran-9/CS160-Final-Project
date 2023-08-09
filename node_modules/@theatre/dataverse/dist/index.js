var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.ts
__export(exports, {
  AbstractDerivation: () => AbstractDerivation,
  Atom: () => Atom,
  Box: () => Box,
  ConstantDerivation: () => ConstantDerivation,
  DerivationFromSource: () => DerivationFromSource,
  PointerProxy: () => PointerProxy,
  Ticker: () => Ticker,
  getPointerParts: () => getPointerParts,
  isDerivation: () => isDerivation,
  isPointer: () => isPointer,
  iterateAndCountTicks: () => iterateAndCountTicks,
  iterateOver: () => iterateOver,
  pointer: () => pointer_default,
  prism: () => prism_default,
  val: () => val,
  valueDerivation: () => valueDerivation
});

// ../../node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// ../../node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// ../../node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// ../../node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// ../../node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// ../../node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// ../../node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// ../../node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// ../../node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// ../../node_modules/lodash-es/_isKey.js
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var isKey_default = isKey;

// ../../node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// ../../node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// ../../node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// ../../node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// ../../node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;

// ../../node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// ../../node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// ../../node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// ../../node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// ../../node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// ../../node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// ../../node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty3.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// ../../node_modules/lodash-es/_hashHas.js
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty4.call(data, key);
}
var hashHas_default = hashHas;

// ../../node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// ../../node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// ../../node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// ../../node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// ../../node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// ../../node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// ../../node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// ../../node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// ../../node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// ../../node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// ../../node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// ../../node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// ../../node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// ../../node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// ../../node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// ../../node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// ../../node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// ../../node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// ../../node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// ../../node_modules/lodash-es/memoize.js
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// ../../node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped;

// ../../node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath_default = stringToPath;

// ../../node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var arrayMap_default = arrayMap;

// ../../node_modules/lodash-es/_baseToString.js
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var baseToString_default = baseToString;

// ../../node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// ../../node_modules/lodash-es/_castPath.js
function castPath(value, object) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
var castPath_default = castPath;

// ../../node_modules/lodash-es/_toKey.js
var INFINITY2 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
}
var toKey_default = toKey;

// ../../node_modules/lodash-es/_baseGet.js
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey_default(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var baseGet_default = baseGet;

// ../../node_modules/lodash-es/get.js
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet_default(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_default = get;

// ../../node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default = overArg;

// ../../node_modules/lodash-es/_getPrototype.js
var getPrototype = overArg_default(Object.getPrototypeOf, Object);
var getPrototype_default = getPrototype;

// ../../node_modules/lodash-es/isPlainObject.js
var objectTag = "[object Object]";
var funcProto3 = Function.prototype;
var objectProto6 = Object.prototype;
var funcToString3 = funcProto3.toString;
var hasOwnProperty5 = objectProto6.hasOwnProperty;
var objectCtorString = funcToString3.call(Object);
function isPlainObject(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag) {
    return false;
  }
  var proto = getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty5.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
}
var isPlainObject_default = isPlainObject;

// ../../node_modules/lodash-es/last.js
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_default = last;

// src/utils/Tappable.ts
var Tappable = class {
  constructor(props) {
    this._untapFromSourceTimeout = null;
    this._cb = (arg) => {
      for (const cb of this._tappers.values()) {
        cb(arg);
      }
    };
    this._lastTapperId = 0;
    this._untapFromSource = null;
    this._props = props;
    this._tappers = new Map();
  }
  _check() {
    if (this._untapFromSource) {
      if (this._tappers.size === 0) {
        this._scheduleToUntapFromSource();
      }
    } else {
      if (this._tappers.size !== 0) {
        this._untapFromSource = this._props.tapToSource(this._cb);
      }
    }
  }
  _scheduleToUntapFromSource() {
    if (this._untapFromSourceTimeout !== null)
      return;
    this._untapFromSourceTimeout = setTimeout(() => {
      this._untapFromSourceTimeout = null;
      if (this._tappers.size === 0) {
        this._untapFromSource();
        this._untapFromSource = null;
      }
    }, 0);
  }
  tap(cb) {
    const tapperId = this._lastTapperId++;
    this._tappers.set(tapperId, cb);
    this._check();
    return () => {
      this._removeTapperById(tapperId);
    };
  }
  _removeTapperById(id) {
    this._tappers.delete(id);
    this._check();
  }
};

// src/utils/Emitter.ts
var Emitter = class {
  constructor() {
    this._lastTapperId = 0;
    this._tappers = new Map();
    this.tappable = new Tappable({
      tapToSource: (cb) => this._tap(cb)
    });
  }
  _tap(cb) {
    var _a;
    const tapperId = this._lastTapperId++;
    this._tappers.set(tapperId, cb);
    (_a = this._onNumberOfTappersChangeListener) == null ? void 0 : _a.call(this, this._tappers.size);
    return () => {
      this._removeTapperById(tapperId);
    };
  }
  _removeTapperById(id) {
    var _a;
    const oldSize = this._tappers.size;
    this._tappers.delete(id);
    const newSize = this._tappers.size;
    if (oldSize !== newSize) {
      (_a = this._onNumberOfTappersChangeListener) == null ? void 0 : _a.call(this, newSize);
    }
  }
  emit(payload) {
    for (const cb of this._tappers.values()) {
      cb(payload);
    }
  }
  hasTappers() {
    return this._tappers.size !== 0;
  }
  onNumberOfTappersChange(cb) {
    this._onNumberOfTappersChangeListener = cb;
  }
};

// src/derivations/DerivationEmitter.ts
var DerivationEmitter = class {
  constructor(derivation, ticker) {
    this._possiblyMarkAsStale = () => {
      this._ticker.onThisOrNextTick(this._refresh);
    };
    this._refresh = () => {
      const newValue = this._derivation.getValue();
      if (newValue === this._lastValue && this._lastValueRecorded === true)
        return;
      this._lastValue = newValue;
      this._lastValueRecorded = true;
      this._emitter.emit(newValue);
    };
    this._derivation = derivation;
    this._ticker = ticker;
    this._emitter = new Emitter();
    this._emitter.onNumberOfTappersChange(() => {
      this._reactToNumberOfTappersChange();
    });
    this._hadTappers = false;
    this._lastValueRecorded = false;
    this._lastValue = void 0;
    return this;
  }
  _reactToNumberOfTappersChange() {
    const hasTappers = this._emitter.hasTappers();
    if (hasTappers !== this._hadTappers) {
      this._hadTappers = hasTappers;
      if (hasTappers) {
        this._derivation.addDependent(this._possiblyMarkAsStale);
      } else {
        this._derivation.removeDependent(this._possiblyMarkAsStale);
      }
    }
  }
  tappable() {
    return this._emitter.tappable;
  }
};

// src/derivations/DerivationValuelessEmitter.ts
var DerivationValuelessEmitter = class {
  constructor(derivation, dontEmitValues = false) {
    this.dontEmitValues = dontEmitValues;
    this._possiblyMarkAsStale = () => {
      this._emitter.emit(void 0);
    };
    this._derivation = derivation;
    this._emitter = new Emitter();
    this._emitter.onNumberOfTappersChange(() => {
      this._reactToNumberOfTappersChange();
    });
    this._hadTappers = false;
    return this;
  }
  _reactToNumberOfTappersChange() {
    const hasTappers = this._emitter.hasTappers();
    if (hasTappers !== this._hadTappers) {
      this._hadTappers = hasTappers;
      if (hasTappers) {
        this._derivation.addDependent(this._possiblyMarkAsStale);
      } else {
        this._derivation.removeDependent(this._possiblyMarkAsStale);
      }
    }
  }
  tappable() {
    return this._emitter.tappable;
  }
};

// src/derivations/IDerivation.ts
function isDerivation(d) {
  return d && d.isDerivation && d.isDerivation === true;
}

// src/derivations/flatMap.ts
var UPDATE_NEEDED_FROM;
(function(UPDATE_NEEDED_FROM2) {
  UPDATE_NEEDED_FROM2[UPDATE_NEEDED_FROM2["none"] = 0] = "none";
  UPDATE_NEEDED_FROM2[UPDATE_NEEDED_FROM2["dep"] = 1] = "dep";
  UPDATE_NEEDED_FROM2[UPDATE_NEEDED_FROM2["inner"] = 2] = "inner";
})(UPDATE_NEEDED_FROM || (UPDATE_NEEDED_FROM = {}));
var makeFlatMapDerivationClass = () => {
  class FlatMapDerivation extends AbstractDerivation {
    constructor(_depDerivation, _fn) {
      super();
      this._depDerivation = _depDerivation;
      this._fn = _fn;
      this._innerDerivation = void 0;
      this._staleDependency = 1;
      this._addDependency(_depDerivation);
      return this;
    }
    _recalculateHot() {
      const updateNeededFrom = this._staleDependency;
      this._staleDependency = 0;
      if (updateNeededFrom === 2) {
        return this._innerDerivation.getValue();
      }
      const possibleInnerDerivation = this._fn(this._depDerivation.getValue());
      if (isDerivation(possibleInnerDerivation)) {
        this._innerDerivation = possibleInnerDerivation;
        this._addDependency(possibleInnerDerivation);
        return possibleInnerDerivation.getValue();
      } else {
        return possibleInnerDerivation;
      }
    }
    _recalculateCold() {
      const possibleInnerDerivation = this._fn(this._depDerivation.getValue());
      if (isDerivation(possibleInnerDerivation)) {
        return possibleInnerDerivation.getValue();
      } else {
        return possibleInnerDerivation;
      }
    }
    _recalculate() {
      return this.isHot ? this._recalculateHot() : this._recalculateCold();
    }
    _reactToDependencyBecomingStale(msgComingFrom) {
      const updateNeededFrom = msgComingFrom === this._depDerivation ? 1 : 2;
      if (updateNeededFrom === 2 && msgComingFrom !== this._innerDerivation) {
        throw Error(`got a _reactToDependencyBecomingStale() from neither the dep nor the inner derivation`);
      }
      if (this._staleDependency === 0) {
        this._staleDependency = updateNeededFrom;
        if (updateNeededFrom === 1) {
          this._removeInnerDerivation();
        }
      } else if (this._staleDependency === 1) {
      } else {
        if (updateNeededFrom === 1) {
          this._staleDependency = 1;
          this._removeInnerDerivation();
        }
      }
    }
    _removeInnerDerivation() {
      if (this._innerDerivation) {
        this._removeDependency(this._innerDerivation);
        this._innerDerivation = void 0;
      }
    }
    _keepHot() {
      this._staleDependency = 1;
      this.getValue();
    }
    _becomeCold() {
      this._staleDependency = 1;
      this._removeInnerDerivation();
    }
  }
  FlatMapDerivation.displayName = "flatMap";
  return FlatMapDerivation;
};
var cls = void 0;
function flatMap(dep, fn) {
  if (!cls) {
    cls = makeFlatMapDerivationClass();
  }
  return new cls(dep, fn);
}

// src/derivations/map.ts
var makeMapDerivationClass = () => class MapDerivation extends AbstractDerivation {
  constructor(_dep, _fn) {
    super();
    this._dep = _dep;
    this._fn = _fn;
    this._addDependency(_dep);
  }
  _recalculate() {
    return this._fn(this._dep.getValue());
  }
  _reactToDependencyBecomingStale() {
  }
};
var cls2 = void 0;
function flatMap2(dep, fn) {
  if (!cls2) {
    cls2 = makeMapDerivationClass();
  }
  return new cls2(dep, fn);
}

// src/utils/Stack.ts
var Stack = class {
  constructor() {
    this._head = void 0;
  }
  peek() {
    return this._head && this._head.data;
  }
  pop() {
    const head = this._head;
    if (!head) {
      return void 0;
    }
    this._head = head.next;
    return head.data;
  }
  push(data) {
    const node = { next: this._head, data };
    this._head = node;
  }
};

// src/derivations/prism/discoveryMechanism.ts
function createMechanism() {
  const noop2 = () => {
  };
  const stack = new Stack();
  const noopCollector = noop2;
  const pushCollector2 = (collector) => {
    stack.push(collector);
  };
  const popCollector2 = (collector) => {
    const existing = stack.peek();
    if (existing !== collector) {
      throw new Error(`Popped collector is not on top of the stack`);
    }
    stack.pop();
  };
  const startIgnoringDependencies2 = () => {
    stack.push(noopCollector);
  };
  const stopIgnoringDependencies2 = () => {
    if (stack.peek() !== noopCollector) {
      if (process.env.NODE_ENV === "development") {
        console.warn("This should never happen");
      }
    } else {
      stack.pop();
    }
  };
  const reportResolutionStart2 = (d) => {
    const possibleCollector = stack.peek();
    if (possibleCollector) {
      possibleCollector(d);
    }
    stack.push(noopCollector);
  };
  const reportResolutionEnd2 = (_d) => {
    stack.pop();
  };
  return {
    type: "Dataverse_discoveryMechanism",
    startIgnoringDependencies: startIgnoringDependencies2,
    stopIgnoringDependencies: stopIgnoringDependencies2,
    reportResolutionStart: reportResolutionStart2,
    reportResolutionEnd: reportResolutionEnd2,
    pushCollector: pushCollector2,
    popCollector: popCollector2
  };
}
function getSharedMechanism() {
  const varName = "__dataverse_discoveryMechanism_sharedStack";
  const root2 = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  if (root2) {
    const existingMechanism = root2[varName];
    if (existingMechanism && typeof existingMechanism === "object" && existingMechanism.type === "Dataverse_discoveryMechanism") {
      return existingMechanism;
    } else {
      const mechanism = createMechanism();
      root2[varName] = mechanism;
      return mechanism;
    }
  } else {
    return createMechanism();
  }
}
var {
  startIgnoringDependencies,
  stopIgnoringDependencies,
  reportResolutionEnd,
  reportResolutionStart,
  pushCollector,
  popCollector
} = getSharedMechanism();

// src/derivations/AbstractDerivation.ts
var AbstractDerivation = class {
  constructor() {
    this.isDerivation = true;
    this._didMarkDependentsAsStale = false;
    this._isHot = false;
    this._isFresh = false;
    this._lastValue = void 0;
    this._dependents = new Set();
    this._dependencies = new Set();
    this._internal_markAsStale = (which) => {
      this._reactToDependencyBecomingStale(which);
      if (this._didMarkDependentsAsStale)
        return;
      this._didMarkDependentsAsStale = true;
      this._isFresh = false;
      for (const dependent of this._dependents) {
        dependent(this);
      }
    };
  }
  get isHot() {
    return this._isHot;
  }
  _addDependency(d) {
    if (this._dependencies.has(d))
      return;
    this._dependencies.add(d);
    if (this._isHot)
      d.addDependent(this._internal_markAsStale);
  }
  _removeDependency(d) {
    if (!this._dependencies.has(d))
      return;
    this._dependencies.delete(d);
    if (this._isHot)
      d.removeDependent(this._internal_markAsStale);
  }
  changes(ticker) {
    return new DerivationEmitter(this, ticker).tappable();
  }
  changesWithoutValues() {
    return new DerivationValuelessEmitter(this).tappable();
  }
  keepHot() {
    return this.changesWithoutValues().tap(() => {
    });
  }
  tapImmediate(ticker, fn) {
    const untap = this.changes(ticker).tap(fn);
    fn(this.getValue());
    return untap;
  }
  addDependent(d) {
    const hadDepsBefore = this._dependents.size > 0;
    this._dependents.add(d);
    const hasDepsNow = this._dependents.size > 0;
    if (hadDepsBefore !== hasDepsNow) {
      this._reactToNumberOfDependentsChange();
    }
  }
  removeDependent(d) {
    const hadDepsBefore = this._dependents.size > 0;
    this._dependents.delete(d);
    const hasDepsNow = this._dependents.size > 0;
    if (hadDepsBefore !== hasDepsNow) {
      this._reactToNumberOfDependentsChange();
    }
  }
  _markAsStale(which) {
    this._internal_markAsStale(which);
  }
  getValue() {
    reportResolutionStart(this);
    if (!this._isFresh) {
      const newValue = this._recalculate();
      this._lastValue = newValue;
      if (this._isHot) {
        this._isFresh = true;
        this._didMarkDependentsAsStale = false;
      }
    }
    reportResolutionEnd(this);
    return this._lastValue;
  }
  _reactToNumberOfDependentsChange() {
    const shouldBecomeHot = this._dependents.size > 0;
    if (shouldBecomeHot === this._isHot)
      return;
    this._isHot = shouldBecomeHot;
    this._didMarkDependentsAsStale = false;
    this._isFresh = false;
    if (shouldBecomeHot) {
      for (const d of this._dependencies) {
        d.addDependent(this._internal_markAsStale);
      }
      this._keepHot();
    } else {
      for (const d of this._dependencies) {
        d.removeDependent(this._internal_markAsStale);
      }
      this._becomeCold();
    }
  }
  _keepHot() {
  }
  _becomeCold() {
  }
  map(fn) {
    return flatMap2(this, fn);
  }
  flatMap(fn) {
    return flatMap(this, fn);
  }
};

// src/derivations/DerivationFromSource.ts
var noop = () => {
};
var DerivationFromSource = class extends AbstractDerivation {
  constructor(_tapToSource, _getValueFromSource) {
    super();
    this._tapToSource = _tapToSource;
    this._getValueFromSource = _getValueFromSource;
    this._untapFromChanges = noop;
    this._cachedValue = void 0;
    this._hasCachedValue = false;
  }
  _recalculate() {
    if (this.isHot) {
      if (!this._hasCachedValue) {
        this._cachedValue = this._getValueFromSource();
        this._hasCachedValue = true;
      }
      return this._cachedValue;
    } else {
      return this._getValueFromSource();
    }
  }
  _keepHot() {
    this._hasCachedValue = false;
    this._cachedValue = void 0;
    this._untapFromChanges = this._tapToSource((newValue) => {
      this._hasCachedValue = true;
      this._cachedValue = newValue;
      this._markAsStale(this);
    });
  }
  _becomeCold() {
    this._untapFromChanges();
    this._untapFromChanges = noop;
    this._hasCachedValue = false;
    this._cachedValue = void 0;
  }
  _reactToDependencyBecomingStale() {
  }
};

// src/pointer.ts
var pointerMetaWeakMap = new WeakMap();
var cachedSubPathPointersWeakMap = new WeakMap();
var pointerMetaSymbol = Symbol("pointerMeta");
var proxyHandler = {
  get(pointerKey, prop) {
    if (prop === pointerMetaSymbol)
      return pointerMetaWeakMap.get(pointerKey);
    let subPathPointers = cachedSubPathPointersWeakMap.get(pointerKey);
    if (!subPathPointers) {
      subPathPointers = new Map();
      cachedSubPathPointersWeakMap.set(pointerKey, subPathPointers);
    }
    const existing = subPathPointers.get(prop);
    if (existing !== void 0)
      return existing;
    const meta = pointerMetaWeakMap.get(pointerKey);
    const subPointer = pointer({ root: meta.root, path: [...meta.path, prop] });
    subPathPointers.set(prop, subPointer);
    return subPointer;
  }
};
var getPointerMeta = (p) => {
  const meta = p[pointerMetaSymbol];
  return meta;
};
var getPointerParts = (p) => {
  const { root: root2, path } = getPointerMeta(p);
  return { root: root2, path };
};
function pointer(args) {
  var _a;
  const meta = {
    root: args.root,
    path: (_a = args.path) != null ? _a : []
  };
  const pointerKey = {};
  pointerMetaWeakMap.set(pointerKey, meta);
  return new Proxy(pointerKey, proxyHandler);
}
var pointer_default = pointer;
var isPointer = (p) => {
  return p && !!getPointerMeta(p);
};

// src/utils/updateDeep.ts
function updateDeep(state2, path, reducer) {
  if (path.length === 0)
    return reducer(state2);
  return hoop(state2, path, reducer);
}
var hoop = (s, path, reducer) => {
  if (path.length === 0) {
    return reducer(s);
  }
  if (Array.isArray(s)) {
    let [index, ...restOfPath] = path;
    index = parseInt(String(index), 10);
    if (isNaN(index))
      index = 0;
    const oldVal = s[index];
    const newVal = hoop(oldVal, restOfPath, reducer);
    if (oldVal === newVal)
      return s;
    const newS = [...s];
    newS.splice(index, 1, newVal);
    return newS;
  } else if (typeof s === "object" && s !== null) {
    const [key, ...restOfPath] = path;
    const oldVal = s[key];
    const newVal = hoop(oldVal, restOfPath, reducer);
    if (oldVal === newVal)
      return s;
    const newS = __spreadProps(__spreadValues({}, s), { [key]: newVal });
    return newS;
  } else {
    const [key, ...restOfPath] = path;
    return { [key]: hoop(void 0, restOfPath, reducer) };
  }
};

// src/Atom.ts
var ValueTypes;
(function(ValueTypes2) {
  ValueTypes2[ValueTypes2["Dict"] = 0] = "Dict";
  ValueTypes2[ValueTypes2["Array"] = 1] = "Array";
  ValueTypes2[ValueTypes2["Other"] = 2] = "Other";
})(ValueTypes || (ValueTypes = {}));
var getTypeOfValue = (v) => {
  if (Array.isArray(v))
    return 1;
  if (isPlainObject_default(v))
    return 0;
  return 2;
};
var getKeyOfValue = (v, key, vType = getTypeOfValue(v)) => {
  if (vType === 0 && typeof key === "string") {
    return v[key];
  } else if (vType === 1 && isValidArrayIndex(key)) {
    return v[key];
  } else {
    return void 0;
  }
};
var isValidArrayIndex = (key) => {
  const inNumber = typeof key === "number" ? key : parseInt(key, 10);
  return !isNaN(inNumber) && inNumber >= 0 && inNumber < Infinity && (inNumber | 0) === inNumber;
};
var Scope = class {
  constructor(_parent, _path) {
    this._parent = _parent;
    this._path = _path;
    this.children = new Map();
    this.identityChangeListeners = new Set();
  }
  addIdentityChangeListener(cb) {
    this.identityChangeListeners.add(cb);
  }
  removeIdentityChangeListener(cb) {
    this.identityChangeListeners.delete(cb);
    this._checkForGC();
  }
  removeChild(key) {
    this.children.delete(key);
    this._checkForGC();
  }
  getChild(key) {
    return this.children.get(key);
  }
  getOrCreateChild(key) {
    let child = this.children.get(key);
    if (!child) {
      child = child = new Scope(this, this._path.concat([key]));
      this.children.set(key, child);
    }
    return child;
  }
  _checkForGC() {
    if (this.identityChangeListeners.size > 0)
      return;
    if (this.children.size > 0)
      return;
    if (this._parent) {
      this._parent.removeChild(last_default(this._path));
    }
  }
};
var Atom = class {
  constructor(initialState) {
    this.$$isIdentityDerivationProvider = true;
    this.reduceState = (path, reducer) => {
      const newState = updateDeep(this.getState(), path, reducer);
      this.setState(newState);
      return newState;
    };
    this._onPathValueChange = (path, cb) => {
      const scope2 = this._getOrCreateScopeForPath(path);
      scope2.identityChangeListeners.add(cb);
      const untap = () => {
        scope2.identityChangeListeners.delete(cb);
      };
      return untap;
    };
    this._currentState = initialState;
    this._rootScope = new Scope(void 0, []);
    this.pointer = pointer_default({ root: this, path: [] });
  }
  setState(newState) {
    const oldState = this._currentState;
    this._currentState = newState;
    this._checkUpdates(this._rootScope, oldState, newState);
  }
  getState() {
    return this._currentState;
  }
  getIn(path) {
    return path.length === 0 ? this.getState() : get_default(this.getState(), path);
  }
  setIn(path, val2) {
    return this.reduceState(path, () => val2);
  }
  _checkUpdates(scope2, oldState, newState) {
    if (oldState === newState)
      return;
    for (const cb of scope2.identityChangeListeners) {
      cb(newState);
    }
    if (scope2.children.size === 0)
      return;
    const oldValueType = getTypeOfValue(oldState);
    const newValueType = getTypeOfValue(newState);
    if (oldValueType === 2 && oldValueType === newValueType)
      return;
    for (const [childKey, childScope] of scope2.children) {
      const oldChildVal = getKeyOfValue(oldState, childKey, oldValueType);
      const newChildVal = getKeyOfValue(newState, childKey, newValueType);
      this._checkUpdates(childScope, oldChildVal, newChildVal);
    }
  }
  _getOrCreateScopeForPath(path) {
    let curScope = this._rootScope;
    for (const pathEl of path) {
      curScope = curScope.getOrCreateChild(pathEl);
    }
    return curScope;
  }
  getIdentityDerivation(path) {
    return new DerivationFromSource((listener) => this._onPathValueChange(path, listener), () => this.getIn(path));
  }
};
var identityDerivationWeakMap = new WeakMap();
var valueDerivation = (pointer2) => {
  const meta = getPointerMeta(pointer2);
  let derivation = identityDerivationWeakMap.get(meta);
  if (!derivation) {
    const root2 = meta.root;
    if (!isIdentityDerivationProvider(root2)) {
      throw new Error(`Cannot run valueDerivation() on a pointer whose root is not an IdentityChangeProvider`);
    }
    const { path } = meta;
    derivation = root2.getIdentityDerivation(path);
    identityDerivationWeakMap.set(meta, derivation);
  }
  return derivation;
};
function isIdentityDerivationProvider(val2) {
  return typeof val2 === "object" && val2 !== null && val2["$$isIdentityDerivationProvider"] === true;
}
var val = (input) => {
  if (isPointer(input)) {
    return valueDerivation(input).getValue();
  } else if (isDerivation(input)) {
    return input.getValue();
  } else {
    return input;
  }
};

// src/Box.ts
var Box = class {
  constructor(_value) {
    this._value = _value;
    this._emitter = new Emitter();
    this._publicDerivation = new DerivationFromSource((listener) => this._emitter.tappable.tap(listener), this.get.bind(this));
  }
  set(v) {
    if (v === this._value)
      return;
    this._value = v;
    this._emitter.emit(v);
  }
  get() {
    return this._value;
  }
  get derivation() {
    return this._publicDerivation;
  }
};

// src/derivations/ConstantDerivation.ts
var ConstantDerivation = class extends AbstractDerivation {
  constructor(v) {
    super();
    this._v = v;
    return this;
  }
  _recalculate() {
    return this._v;
  }
  _reactToDependencyBecomingStale() {
  }
};

// src/derivations/iterateAndCountTicks.ts
function* iterateAndCountTicks(pointerOrDerivation) {
  let d;
  if (isPointer(pointerOrDerivation)) {
    d = valueDerivation(pointerOrDerivation);
  } else if (isDerivation(pointerOrDerivation)) {
    d = pointerOrDerivation;
  } else {
    throw new Error(`Only pointers and derivations are supported`);
  }
  let ticksCountedSinceLastYield = 0;
  const untap = d.changesWithoutValues().tap(() => {
    ticksCountedSinceLastYield++;
  });
  try {
    while (true) {
      const ticks = ticksCountedSinceLastYield;
      ticksCountedSinceLastYield = 0;
      yield { value: d.getValue(), ticks };
    }
  } finally {
    untap();
  }
}

// src/Ticker.ts
function createRafTicker() {
  const ticker = new Ticker();
  if (typeof window !== "undefined") {
    const onAnimationFrame = (t) => {
      ticker.tick(t);
      window.requestAnimationFrame(onAnimationFrame);
    };
    window.requestAnimationFrame(onAnimationFrame);
  } else {
    ticker.tick(0);
    setTimeout(() => ticker.tick(1), 0);
  }
  return ticker;
}
var rafTicker;
var Ticker = class {
  constructor() {
    this._ticking = false;
    this.__ticks = 0;
    this._scheduledForThisOrNextTick = new Set();
    this._scheduledForNextTick = new Set();
    this._timeAtCurrentTick = 0;
  }
  static get raf() {
    if (!rafTicker) {
      rafTicker = createRafTicker();
    }
    return rafTicker;
  }
  onThisOrNextTick(fn) {
    this._scheduledForThisOrNextTick.add(fn);
  }
  onNextTick(fn) {
    this._scheduledForNextTick.add(fn);
  }
  offThisOrNextTick(fn) {
    this._scheduledForThisOrNextTick.delete(fn);
  }
  offNextTick(fn) {
    this._scheduledForNextTick.delete(fn);
  }
  get time() {
    if (this._ticking) {
      return this._timeAtCurrentTick;
    } else
      return performance.now();
  }
  tick(t = performance.now()) {
    if (process.env.NODE_ENV === "development") {
      if (!(this instanceof Ticker)) {
        throw new Error('ticker.tick must be called while bound to the ticker. As in, "ticker.tick(time)" or "requestAnimationFrame((t) => ticker.tick(t))" for performance.');
      }
    }
    this.__ticks++;
    this._ticking = true;
    this._timeAtCurrentTick = t;
    for (const v of this._scheduledForNextTick) {
      this._scheduledForThisOrNextTick.add(v);
    }
    this._scheduledForNextTick.clear();
    this._tick(0);
    this._ticking = false;
  }
  _tick(iterationNumber) {
    const time = this.time;
    if (iterationNumber > 10) {
      console.warn("_tick() recursing for 10 times");
    }
    if (iterationNumber > 100) {
      throw new Error(`Maximum recursion limit for _tick()`);
    }
    const oldSet = this._scheduledForThisOrNextTick;
    this._scheduledForThisOrNextTick = new Set();
    for (const fn of oldSet) {
      fn(time);
    }
    if (this._scheduledForThisOrNextTick.size > 0) {
      return this._tick(iterationNumber + 1);
    }
  }
};

// src/derivations/iterateOver.ts
function* iterateOver(pointerOrDerivation) {
  let d;
  if (isPointer(pointerOrDerivation)) {
    d = valueDerivation(pointerOrDerivation);
  } else if (isDerivation(pointerOrDerivation)) {
    d = pointerOrDerivation;
  } else {
    throw new Error(`Only pointers and derivations are supported`);
  }
  const ticker = new Ticker();
  const untap = d.changes(ticker).tap((v) => {
  });
  try {
    while (true) {
      ticker.tick();
      yield d.getValue();
    }
  } finally {
    untap();
  }
}

// src/derivations/prism/prism.ts
var voidFn = () => {
};
var PrismDerivation = class extends AbstractDerivation {
  constructor(_fn) {
    super();
    this._fn = _fn;
    this._cacheOfDendencyValues = new Map();
    this._possiblyStaleDeps = new Set();
    this._prismScope = new PrismScope();
  }
  _recalculate() {
    let value;
    if (this._possiblyStaleDeps.size > 0) {
      let anActuallyStaleDepWasFound = false;
      startIgnoringDependencies();
      for (const dep of this._possiblyStaleDeps) {
        if (this._cacheOfDendencyValues.get(dep) !== dep.getValue()) {
          anActuallyStaleDepWasFound = true;
          break;
        }
      }
      stopIgnoringDependencies();
      this._possiblyStaleDeps.clear();
      if (!anActuallyStaleDepWasFound) {
        return this._lastValue;
      }
    }
    const newDeps = new Set();
    this._cacheOfDendencyValues.clear();
    const collector = (observedDep) => {
      newDeps.add(observedDep);
      this._addDependency(observedDep);
    };
    pushCollector(collector);
    hookScopeStack.push(this._prismScope);
    try {
      value = this._fn();
    } catch (error) {
      console.error(error);
    } finally {
      const topOfTheStack = hookScopeStack.pop();
      if (topOfTheStack !== this._prismScope) {
        console.warn(`The Prism hook stack has slipped. This is a bug.`);
      }
    }
    popCollector(collector);
    for (const dep of this._dependencies) {
      if (!newDeps.has(dep)) {
        this._removeDependency(dep);
      }
    }
    this._dependencies = newDeps;
    startIgnoringDependencies();
    for (const dep of newDeps) {
      this._cacheOfDendencyValues.set(dep, dep.getValue());
    }
    stopIgnoringDependencies();
    return value;
  }
  _reactToDependencyBecomingStale(msgComingFrom) {
    this._possiblyStaleDeps.add(msgComingFrom);
  }
  _keepHot() {
    this._prismScope = new PrismScope();
    startIgnoringDependencies();
    this.getValue();
    stopIgnoringDependencies();
  }
  _becomeCold() {
    cleanupScopeStack(this._prismScope);
    this._prismScope = new PrismScope();
  }
};
var PrismScope = class {
  constructor() {
    this.isPrismScope = true;
    this._subs = {};
  }
  sub(key) {
    if (!this._subs[key]) {
      this._subs[key] = new PrismScope();
    }
    return this._subs[key];
  }
  get subs() {
    return this._subs;
  }
};
function cleanupScopeStack(scope2) {
  for (const sub2 of Object.values(scope2.subs)) {
    cleanupScopeStack(sub2);
  }
  cleanupEffects(scope2);
}
function cleanupEffects(scope2) {
  const effects = effectsWeakMap.get(scope2);
  if (effects) {
    for (const effect2 of effects.values()) {
      safelyRun(effect2.cleanup, void 0);
    }
  }
  effectsWeakMap.delete(scope2);
}
function safelyRun(fn, returnValueInCaseOfError) {
  try {
    return { value: fn(), ok: true };
  } catch (error) {
    setTimeout(function PrismReportThrow() {
      throw error;
    });
    return { value: returnValueInCaseOfError, ok: false };
  }
}
var hookScopeStack = new Stack();
var refsWeakMap = new WeakMap();
var effectsWeakMap = new WeakMap();
var memosWeakMap = new WeakMap();
function ref(key, initialValue) {
  const scope2 = hookScopeStack.peek();
  if (!scope2) {
    throw new Error(`prism.ref() is called outside of a prism() call.`);
  }
  let refs = refsWeakMap.get(scope2);
  if (refs === void 0) {
    refs = new Map();
    refsWeakMap.set(scope2, refs);
  }
  let ref2 = refs.get(key);
  if (ref2 !== void 0) {
    return ref2;
  } else {
    const ref3 = {
      current: initialValue
    };
    refs.set(key, ref3);
    return ref3;
  }
}
function effect(key, cb, deps) {
  const scope2 = hookScopeStack.peek();
  if (!scope2) {
    throw new Error(`prism.effect() is called outside of a prism() call.`);
  }
  let effects = effectsWeakMap.get(scope2);
  if (effects === void 0) {
    effects = new Map();
    effectsWeakMap.set(scope2, effects);
  }
  let effect2 = effects.get(key);
  if (effect2 === void 0) {
    effect2 = {
      cleanup: voidFn,
      deps: void 0
    };
    effects.set(key, effect2);
  }
  if (depsHaveChanged(effect2.deps, deps)) {
    effect2.cleanup();
    startIgnoringDependencies();
    effect2.cleanup = safelyRun(cb, voidFn).value;
    stopIgnoringDependencies();
    effect2.deps = deps;
  }
}
function depsHaveChanged(oldDeps, newDeps) {
  if (oldDeps === void 0 || newDeps === void 0) {
    return true;
  }
  const len = oldDeps.length;
  if (len !== newDeps.length)
    return true;
  for (let i = 0; i < len; i++) {
    if (oldDeps[i] !== newDeps[i])
      return true;
  }
  return false;
}
function memo(key, fn, deps) {
  const scope2 = hookScopeStack.peek();
  if (!scope2) {
    throw new Error(`prism.memo() is called outside of a prism() call.`);
  }
  let memos = memosWeakMap.get(scope2);
  if (!memos) {
    memos = new Map();
    memosWeakMap.set(scope2, memos);
  }
  let memo2 = memos.get(key);
  if (memo2 === void 0) {
    memo2 = {
      cachedValue: null,
      deps: void 0
    };
    memos.set(key, memo2);
  }
  if (depsHaveChanged(memo2.deps, deps)) {
    startIgnoringDependencies();
    memo2.cachedValue = safelyRun(fn, void 0).value;
    stopIgnoringDependencies();
    memo2.deps = deps;
  }
  return memo2.cachedValue;
}
function state(key, initialValue) {
  const { b, setValue } = prism.memo("state/" + key, () => {
    const b2 = new Box(initialValue);
    const setValue2 = (val2) => b2.set(val2);
    return { b: b2, setValue: setValue2 };
  }, []);
  return [b.derivation.getValue(), setValue];
}
function ensurePrism() {
  const scope2 = hookScopeStack.peek();
  if (!scope2) {
    throw new Error(`The parent function is called outside of a prism() call.`);
  }
}
function scope(key, fn) {
  const parentScope = hookScopeStack.peek();
  if (!parentScope) {
    throw new Error(`prism.scope() is called outside of a prism() call.`);
  }
  const subScope = parentScope.sub(key);
  hookScopeStack.push(subScope);
  const ret = safelyRun(fn, void 0).value;
  hookScopeStack.pop();
  return ret;
}
function sub(key, fn, deps) {
  return memo(key, () => prism(fn), deps).getValue();
}
function inPrism() {
  return !!hookScopeStack.peek();
}
var prism = (fn) => {
  return new PrismDerivation(fn);
};
prism.ref = ref;
prism.effect = effect;
prism.memo = memo;
prism.ensurePrism = ensurePrism;
prism.state = state;
prism.scope = scope;
prism.sub = sub;
prism.inPrism = inPrism;
var prism_default = prism;

// src/PointerProxy.ts
var PointerProxy = class {
  constructor(currentPointer) {
    this.$$isIdentityDerivationProvider = true;
    this._currentPointerBox = new Box(currentPointer);
    this.pointer = pointer_default({ root: this, path: [] });
  }
  setPointer(p) {
    this._currentPointerBox.set(p);
  }
  getIdentityDerivation(path) {
    return this._currentPointerBox.derivation.flatMap((p) => {
      const subPointer = path.reduce((pointerSoFar, pathItem) => pointerSoFar[pathItem], p);
      return valueDerivation(subPointer);
    });
  }
};
//# sourceMappingURL=index.js.map
