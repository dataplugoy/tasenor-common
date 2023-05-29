var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AccountType: () => AccountType,
  BalanceBookkeeping: () => BalanceBookkeeping,
  Bookkeeper: () => Bookkeeper,
  Crypto: () => Crypto,
  DAYS: () => DAYS,
  Directions: () => Directions,
  HOURS: () => HOURS,
  Knowledge: () => Knowledge,
  MAX_TARGET_ID_LEN: () => MAX_TARGET_ID_LEN,
  MAX_UPLOAD_SIZE: () => MAX_UPLOAD_SIZE,
  MINUTES: () => MINUTES,
  NO_SEGMENT: () => NO_SEGMENT,
  REFRESH_TOKEN_EXPIRY_TIME: () => REFRESH_TOKEN_EXPIRY_TIME,
  RuleParsingError: () => RuleParsingError,
  RulesEngine: () => RulesEngine,
  StockBookkeeping: () => StockBookkeeping,
  TOKEN_EXPIRY_TIME: () => TOKEN_EXPIRY_TIME,
  TOKEN_ISSUER: () => TOKEN_ISSUER,
  TransactionApplyResults: () => TransactionApplyResults,
  YEARS: () => YEARS,
  ZERO_CENTS: () => ZERO_CENTS,
  ZERO_STOCK: () => ZERO_STOCK,
  address2sql: () => address2sql,
  conditions: () => conditions,
  currencies: () => currencies,
  debug: () => debug,
  elementNames: () => elementNames,
  emptyLinkedTree: () => emptyLinkedTree,
  error: () => error,
  filter2function: () => filter2function,
  filterView2name: () => filterView2name,
  filterView2results: () => filterView2results,
  filterView2rule: () => filterView2rule,
  getServerRoot: () => getServerRoot,
  haveCatalog: () => haveCatalog,
  haveCursor: () => haveCursor,
  haveKnowledge: () => haveKnowledge,
  haveSettings: () => haveSettings,
  haveStore: () => haveStore,
  isAccountAddress: () => isAccountAddress,
  isAccountAddressConfig: () => isAccountAddressConfig,
  isAccountElement: () => isAccountElement,
  isAccountNumber: () => isAccountNumber,
  isActiveElement: () => isActiveElement,
  isAssetStockType: () => isAssetStockType,
  isAssetTransfer: () => isAssetTransfer,
  isAssetTransferReason: () => isAssetTransferReason,
  isAssetType: () => isAssetType,
  isBooleanElement: () => isBooleanElement,
  isBoxElement: () => isBoxElement,
  isButtonElement: () => isButtonElement,
  isCaseElement: () => isCaseElement,
  isContainerElement: () => isContainerElement,
  isCurrency: () => isCurrency,
  isCurrencyElement: () => isCurrencyElement,
  isDatabaseName: () => isDatabaseName,
  isFlatElement: () => isFlatElement,
  isHtmlElement: () => isHtmlElement,
  isHttpFailureResponse: () => isHttpFailureResponse,
  isHttpSuccessResponse: () => isHttpSuccessResponse,
  isID: () => isID,
  isImportAction: () => isImportAction,
  isImportAnswerAction: () => isImportAnswerAction,
  isImportConfigureAction: () => isImportConfigureAction,
  isImportOpAction: () => isImportOpAction,
  isImportRetryAction: () => isImportRetryAction,
  isImportRollbackAction: () => isImportRollbackAction,
  isImportState: () => isImportState,
  isLanguage: () => isLanguage,
  isLocalUrl: () => isLocalUrl,
  isMessageElement: () => isMessageElement,
  isNamedElement: () => isNamedElement,
  isNode: () => isNode,
  isNumberElement: () => isNumberElement,
  isPatchAction: () => isPatchAction,
  isPostAction: () => isPostAction,
  isRadioElement: () => isRadioElement,
  isRealID: () => isRealID,
  isReportID: () => isReportID,
  isRuleEditorElement: () => isRuleEditorElement,
  isRuleViewOp: () => isRuleViewOp,
  isShortDate: () => isShortDate,
  isStockChangeData: () => isStockChangeData,
  isStockChangeDelta: () => isStockChangeDelta,
  isStockChangeFixed: () => isStockChangeFixed,
  isTag: () => isTag,
  isTagConfig: () => isTagConfig,
  isTagString: () => isTagString,
  isTagType: () => isTagType,
  isTagsElement: () => isTagsElement,
  isTasenorElement: () => isTasenorElement,
  isTextElement: () => isTextElement,
  isTextFileLineElement: () => isTextFileLineElement,
  isUIQuery: () => isUIQuery,
  isUIQueryRef: () => isUIQueryRef,
  isUi: () => isUi,
  isUrl: () => isUrl,
  isValue: () => isValue,
  isValues: () => isValues,
  isVersion: () => isVersion,
  isYesNoElement: () => isYesNoElement,
  languages: () => languages,
  latestVersion: () => latestVersion,
  less: () => less,
  log: () => log,
  month: () => month,
  mute: () => mute,
  near: () => near,
  needHiding: () => needHiding,
  net: () => net,
  note: () => note,
  num: () => num,
  realNegative: () => realNegative,
  realPositive: () => realPositive,
  setGlobalComponents: () => setGlobalComponents,
  setServerRoot: () => setServerRoot,
  sortTransactions: () => sortTransactions,
  timestamp: () => timestamp,
  ucfirst: () => ucfirst,
  unmute: () => unmute,
  versionCompare: () => versionCompare,
  waitPromise: () => waitPromise,
  warning: () => warning
});
module.exports = __toCommonJS(src_exports);

// node_modules/node-stdlib-browser/helpers/esbuild/shim.js
var import_buffer = require("buffer");
var import_process = __toESM(require("process"));
var _globalThis = function(Object2) {
  function get() {
    var _global3 = this || self;
    delete Object2.prototype.__magic__;
    return _global3;
  }
  if (typeof globalThis === "object") {
    return globalThis;
  }
  if (this) {
    return get();
  } else {
    Object2.defineProperty(Object2.prototype, "__magic__", {
      configurable: true,
      get
    });
    var _global2 = __magic__;
    return _global2;
  }
}(Object);
var _global = _globalThis;

// src/bookkeeper/config.ts
var createConfig = () => {
  return {
    scheme: null,
    schemeVersion: null,
    companyName: null,
    companyCode: null,
    language: null,
    currency: null
  };
};
var Bookkeeper = {
  createConfig
};

// src/bookkeeper/globals.ts
function setGlobalComponents(store, catalog, cursor, settings, knowledge) {
  _store = store;
  _catalog = catalog;
  _cursor = cursor;
  _settings = settings;
  _knowledge = knowledge;
}
function haveCursor() {
  if (!_cursor) {
    throw new Error("Call to haveCursor() before global components set with setGlobalComponents().");
  }
  return _cursor;
}
function haveCatalog() {
  if (!_catalog) {
    throw new Error("Call to haveCatalog() before global components set with setGlobalComponents().");
  }
  return _catalog;
}
function haveStore() {
  if (!_store) {
    throw new Error("Call to haveStore() before global components set with setGlobalComponents().");
  }
  return _store;
}
function haveSettings() {
  if (!_settings) {
    throw new Error("Call to haveSettings() before global components set with setGlobalComponents().");
  }
  return _settings;
}
function haveKnowledge() {
  if (!_knowledge) {
    throw new Error("Call to haveKnowledge() before global components set with setGlobalComponents().");
  }
  return _knowledge;
}
function setServerRoot(path) {
  _serverRoot = path;
}
function getServerRoot() {
  if (!_serverRoot) {
    throw new Error("Server root is not set.");
  }
  return _serverRoot;
}

// src/bookkeeper/Knowledge.ts
var import_dayjs = __toESM(require("dayjs"));

// src/types/knowledge.ts
function emptyLinkedTree() {
  return {
    "root": null,
    "children": {},
    "parents": {}
  };
}

// src/bookkeeper/Knowledge.ts
var Knowledge = class {
  constructor(init) {
    if (init == void 0) {
      init = {
        income: {
          root: null,
          children: {},
          parents: {}
        },
        expense: {
          root: null,
          children: {},
          parents: {}
        },
        assetCodes: {
          root: null,
          children: {},
          parents: {}
        },
        taxTypes: [],
        vat: []
      };
    }
    this.data = init;
  }
  update(data) {
    Object.assign(this.data, data);
  }
  isIncome(target) {
    if (!this.data.income) {
      throw new Error(`Cannot look for income ${target} since no income classification loaded.`);
    }
    return typeof target === "string" && target in this.data.income.parents;
  }
  isExpense(target) {
    if (!this.data.expense) {
      throw new Error(`Cannot look for expense ${target} since no expense classification loaded.`);
    }
    return typeof target === "string" && target in this.data.expense.parents;
  }
  treeLookup(id, table, tree) {
    if (id in table) {
      return table[id];
    }
    if (id in tree.parents) {
      const parent = tree.parents[id];
      if (parent !== void 0 && parent !== null) {
        return this.treeLookup(parent, table, tree);
      }
    }
    return null;
  }
  findVatRange(date) {
    if (!this.data.vat) {
      throw new Error(`Cannot look for VAT since no VAT data loaded.`);
    }
    if (!date) {
      date = new Date();
    }
    if (date instanceof Date) {
      date = (0, import_dayjs.default)(date).format("YYYY-MM-DD");
    }
    for (let i = 0; i < this.data.vat.length; i++) {
      const { from, to } = this.data.vat[i];
      if (from <= date && (to === null || date <= to)) {
        return this.data.vat[i];
      }
    }
    return null;
  }
  vat(target, date) {
    if (!target) {
      return null;
    }
    target = target.replace(/[0-9]+$/, "");
    const vat = this.findVatRange(date);
    if (!vat) {
      return null;
    }
    if (this.isIncome(target)) {
      return this.treeLookup(target, vat.percentage, this.data.income);
    }
    if (this.isExpense(target)) {
      return this.treeLookup(target, vat.percentage, this.data.expense);
    }
    return null;
  }
  vatTable(date) {
    if (!date) {
      date = new Date();
    }
    const vat = this.findVatRange(date);
    if (!vat) {
      return [];
    }
    const tree = {};
    Object.entries(this.data.income.parents).forEach(([item, parent]) => {
      const value = item in vat.percentage ? vat.percentage[item] : void 0;
      tree[item] = {
        name: item,
        type: "income",
        parent,
        children: [],
        handled: false,
        collected: false,
        value
      };
    });
    Object.entries(this.data.expense.parents).forEach(([item, parent]) => {
      const value = item in vat.percentage ? vat.percentage[item] : void 0;
      tree[item] = {
        name: item,
        type: "expense",
        parent,
        children: [],
        handled: false,
        collected: false,
        value
      };
    });
    const handle = (id) => {
      if (!tree[id]) {
        throw new Error(`Reference to undefined VAT ID: '${id}''.`);
      }
      if (tree[id].handled) {
        return tree[id].value;
      }
      const parent = tree[id].parent;
      if (parent) {
        const parentValue = handle(parent);
        if (tree[id].value === void 0) {
          tree[id].value = parentValue;
        }
        tree[parent].children.push(id);
      }
      tree[id].handled = true;
      return tree[id].value;
    };
    Object.keys(vat.percentage).forEach((id) => {
      handle(id);
    });
    const result = [];
    const collect = (id, level = 0) => {
      if (tree[id].collected) {
        return;
      }
      result.push({
        id,
        name: `${tree[id].type}-${id}`,
        level,
        value: tree[id].value
      });
      tree[id].collected = true;
      tree[id].children.forEach((child) => collect(child, level + 1));
    };
    Object.keys(tree).forEach((key) => {
      if (tree[key].handled && !tree[key].collected) {
        collect(key);
      }
    });
    return result;
  }
  count() {
    return {
      assets: Object.keys(this.data.assetCodes.parents).length,
      income: Object.keys(this.data.income.parents).length,
      expense: Object.keys(this.data.expense.parents).length,
      vat: this.data.vat.length
    };
  }
  findTree(code) {
    if (code in this.data.assetCodes.parents) {
      return this.data.assetCodes;
    }
    if (code in this.data.income.parents) {
      return this.data.income;
    }
    if (code in this.data.expense.parents) {
      return this.data.expense;
    }
    return emptyLinkedTree();
  }
  children(code, tree = void 0) {
    const t = tree || this.findTree(code);
    if (code in t.children) {
      let ret = t.children[code];
      for (const child of ret) {
        ret = ret.concat(this.children(child, t));
      }
      return ret;
    }
    return [];
  }
};

// src/logging.ts
var import_dayjs2 = __toESM(require("dayjs"));
var import_utc = __toESM(require("dayjs/plugin/utc"));

// src/constants.ts
var MAX_TARGET_ID_LEN = 64;
var MAX_UPLOAD_SIZE = 1 * 1024 * 1024 * 1024;
var ZERO_CENTS = 1e-4;
var ZERO_STOCK = 1e-6;

// src/risp/actions.ts
function isPatchAction(obj) {
  return typeof obj === "object" && obj !== null && "url" in obj && obj["type"] === "patch";
}
function isPostAction(obj) {
  return typeof obj === "object" && obj !== null && "url" in obj && obj["type"] === "post";
}

// src/risp/directions.ts
var Directions = class {
  constructor(obj) {
    this.type = obj.type;
    this.element = obj.element;
    this.action = obj.action;
  }
  toJSON() {
    const ret = {
      type: this.type
    };
    if (this.element) {
      ret.element = this.element;
    }
    if (this.action) {
      ret.action = this.action;
    }
    return ret;
  }
  isImmediate() {
    return this.type === "action";
  }
  isComplete() {
    return this.type === "complete";
  }
};

// src/risp/elements.ts
function isActiveElement(object) {
  return typeof object === "object" && object !== null && !!object["actions"];
}
function isNamedElement(object) {
  return typeof object === "object" && object !== null && "name" in object;
}
function isBooleanElement(object) {
  return isActiveElement(object) && object["type"] === "boolean";
}
function isYesNoElement(object) {
  return isActiveElement(object) && object["type"] === "yesno";
}
function isNumberElement(object) {
  return isActiveElement(object) && object["type"] === "number";
}
function isTextElement(object) {
  return isActiveElement(object) && object["type"] === "text";
}
function isButtonElement(object) {
  return isActiveElement(object) && object["type"] === "button";
}
function isContainerElement(object) {
  return typeof object === "object" && object !== null && !!object["elements"];
}
function isCaseElement(object) {
  return typeof object === "object" && object !== null && object["condition"] && object["cases"] && typeof object["cases"] === "object" && object["cases"] !== null;
}
function isFlatElement(object) {
  return isContainerElement(object) && object["type"] === "flat";
}
function isBoxElement(object) {
  return isContainerElement(object) && object["type"] === "box";
}
function isHtmlElement(object) {
  return typeof object === "object" && object !== null && object["type"] === "html" && "html" in object && typeof object["html"] === "string";
}
function isMessageElement(object) {
  return typeof object === "object" && object !== null && object["type"] === "message" && "severity" in object && typeof object["severity"] === "string" && ["info", "warning", "error", "success"].includes(object["severity"]) && "text" in object && typeof object["text"] === "string";
}
function isTextFileLineElement(object) {
  return typeof object === "object" && object !== null && object["type"] === "textFileLine" && "line" in object && typeof object["line"] === "object" && object["line"] !== null;
}
function isRadioElement(object) {
  return isActiveElement(object) && object["type"] === "radio" && "options" in object && typeof object["options"] === "object";
}
function isAccountElement(object) {
  return isActiveElement(object) && isNamedElement(object) && object["type"] === "account";
}
function isTagsElement(object) {
  return isActiveElement(object) && isNamedElement(object) && object["type"] === "tags";
}
function isCurrencyElement(object) {
  return isActiveElement(object) && isNamedElement(object) && object["type"] === "currency";
}
function isRuleEditorElement(object) {
  return isActiveElement(object) && isNamedElement(object) && object["type"] === "ruleEditor" && "config" in object && typeof object["config"] === "object" && "options" in object && typeof object["options"] === "object" && "lines" in object && typeof object["lines"] === "object" && "cashAccount" in object;
}
function isTasenorElement(object) {
  return typeof object === "object" && (isAccountElement(object) || isTagsElement(object) || isCurrencyElement(object) || isBooleanElement(object) || isBoxElement(object) || isButtonElement(object) || isCaseElement(object) || isFlatElement(object) || isHtmlElement(object) || isMessageElement(object) || isRadioElement(object) || isTextElement(object) || isNumberElement(object) || isTextFileLineElement(object) || isYesNoElement(object) || isRuleEditorElement(object));
}

// src/utils.ts
function isUi() {
  return typeof window !== "undefined";
}
function isNode() {
  return !isUi();
}
async function waitPromise(msec) {
  return new Promise((resolve) => {
    setTimeout(resolve, msec);
  });
}
function ucfirst(text) {
  return text[0].toUpperCase() + text.substr(1);
}
function near(value1, value2) {
  return Math.abs(value1 - value2) < ZERO_CENTS;
}
function less(value1, value2) {
  return value1 < value2 && !near(value2 - value1, 0);
}
function realNegative(value) {
  return less(value, 0);
}
function realPositive(value) {
  return less(0, value);
}
function elementNames(element) {
  if (isContainerElement(element)) {
    const vars = /* @__PURE__ */ new Set();
    for (const sub of element.elements) {
      for (const name of elementNames(sub)) {
        vars.add(name);
      }
    }
    return vars;
  } else if (isNamedElement(element)) {
    return /* @__PURE__ */ new Set([element.name]);
  }
  return /* @__PURE__ */ new Set();
}
function num(str) {
  str = str.replace(/\s/g, "");
  try {
    if (/,\d+\./.test(str)) {
      str = str.replace(/,/g, "");
    } else if (/\.\d+,/.test(str)) {
      str = str.replace(/\./g, "").replace(/,/, ".");
    } else {
      str = str.replace(",", ".");
    }
    return parseFloat(str);
  } catch (err) {
    return NaN;
  }
}
function needHiding(s) {
  return /(password|api[-_]*key|secret)/i.test(s);
}

// src/logging.ts
import_dayjs2.default.extend(import_utc.default);
var muted = false;
var colors = !isUi();
var debugChannels = () => {
  return isUi() ? {
    STOCK: "DEBUG_STOCK" in window && window["DEBUG_STOCK"] === "yes",
    BALANCE: "DEBUG_BALANCE" in window && window["DEBUG_BALANCE"] === "yes",
    RULES: "DEBUG_RULES" in window && window["DEBUG_RULES"] === "yes",
    SEGMENTATION: "DEBUG_SEGMENTATION" in window && window["DEBUG_SEGMENTATION"] === "yes",
    CLASSIFICATION: "DEBUG_CLASSIFICATION" in window && window["DEBUG_CLASSIFICATION"] === "yes",
    ANALYSIS: "DEBUG_ANALYSIS" in window && window["DEBUG_ANALYSIS"] === "yes",
    EXECUTION: "DEBUG_EXECUTION" in window && window["DEBUG_EXECUTION"] === "yes"
  } : {
    STOCK: import_process.default.env.DEBUG_STOCK === "yes" || false,
    BALANCE: import_process.default.env.DEBUG_BALANCE === "yes" || false,
    RULES: import_process.default.env.DEBUG_RULES === "yes" || false,
    SEGMENTATION: import_process.default.env.DEBUG_SEGMENTATION === "yes" || false,
    CLASSIFICATION: import_process.default.env.DEBUG_CLASSIFICATION === "yes" || false,
    ANALYSIS: import_process.default.env.DEBUG_ANALYSIS === "yes" || false,
    EXECUTION: import_process.default.env.DEBUG_EXECUTION === "yes" || false
  };
};
var channelsDisplayed = false;
function displayChannels() {
  if (channelsDisplayed)
    return;
  channelsDisplayed = true;
  const channels = debugChannels();
  if (Object.values(channels).filter((flag) => flag).length === 0) {
    return;
  }
  for (const channel of ["STOCK", "RULES", "SEGMENTATION", "CLASSIFICATION", "ANALYSIS", "EXECUTION"]) {
    console.log(`\x1B[93mDEBUG_${channel} = ${channels[channel] ? "yes" : "no"}\x1B[0m`);
  }
}
function isMuted() {
  if (isUi()) {
    return !("DEBUG" in window);
  }
  return muted;
}
function timestamp(stamp = new Date()) {
  if (isUi())
    return import_dayjs2.default.utc(stamp).format("HH:mm:ss");
  return import_dayjs2.default.utc(stamp).format("YYYY-MM-DDTHH:mm:ssZ");
}
function ansi(color) {
  if (!colors) {
    return "";
  }
  switch (color) {
    case "info":
      return "\x1B[32m";
    case "note":
      return "\x1B[33m";
    case "warning":
      return "\x1B[34m";
    case "error":
      return "\x1B[31m";
    case "reset":
      return "\x1B[0m";
  }
}
function log(...args) {
  if (isMuted())
    return;
  console.log(ansi("info") + timestamp(), ...args, ansi("reset"));
}
function note(...args) {
  if (isMuted())
    return;
  console.log(ansi("note") + timestamp(), ...args, ansi("reset"));
}
function warning(...args) {
  if (isMuted())
    return;
  console.warn(ansi("warning") + timestamp(), ...args, ansi("reset"));
}
function error(...args) {
  if (isMuted())
    return;
  console.error(ansi("error") + timestamp(), ...args, ansi("reset"));
}
function mute() {
  muted = true;
}
function unmute() {
  muted = false;
}
function debug(channel, ...args) {
  displayChannels();
  const channels = debugChannels();
  if (!channels[channel]) {
    return;
  }
  const allString = args.every((arg) => typeof arg === "string" || typeof arg === "number" || typeof arg === "boolean" || arg === null);
  if (allString) {
    console.log("\x1B[35m" + args.join(" ") + "\x1B[0m");
  } else {
    for (const arg of args) {
      console.dir(arg, { depth: null, maxArrayLength: null });
    }
  }
}

// src/bookkeeper/BalanceBookkeeping.ts
var import_sprintf_js = require("sprintf-js");
var BalanceBookkeeping = class {
  constructor() {
    this.balance = {};
    this.number = {};
    debug("BALANCE", `Created new balance bookkeeper.`);
  }
  set(account, value) {
    this.balance[account] = value;
    debug("BALANCE", `Set ${account} ${this.name(account)} initial balance ${(0, import_sprintf_js.sprintf)("%.2f", this.balance[account] / 100)}`);
  }
  configureNames(config2) {
    Object.keys(config2).forEach((key) => {
      if (key.startsWith("account.")) {
        this.number[key.substring(8)] = config2[key];
      }
    });
  }
  name(account) {
    if (!this.number[account]) {
    }
    return this.number[account] || `unknown.account.${account}`;
  }
  change(account, change) {
    this.balance[account] = (this.balance[account] || 0) + change;
    debug("BALANCE", `Change ${account} ${this.name(account)} \u0394 ${change >= 0 ? "+" : ""}${(0, import_sprintf_js.sprintf)("%.2f", change / 100)} \u27F9 ${(0, import_sprintf_js.sprintf)("%.2f", this.balance[account] / 100)}`);
    return this.balance[account];
  }
  apply(txEntry) {
    return this.change(txEntry.account, txEntry.amount);
  }
  revert(txEntry) {
    return this.change(txEntry.account, -txEntry.amount);
  }
  get(account) {
    return this.balance[this.number[account]] || 0;
  }
  summary() {
    const summary = [];
    Object.keys(this.number).forEach((addr) => {
      const [reason, type, asset] = addr.split(".");
      summary.push({
        account: this.number[addr],
        address: addr,
        debtAddress: this.debtAddress(addr),
        balance: this.balance[this.number[addr]],
        mayTakeLoan: this.mayTakeLoan(reason, type, asset)
      });
    });
    return summary;
  }
  mayTakeLoan(reason, type, asset) {
    return reason !== "fee" && type === "currency";
  }
  debtAddress(addr) {
    const [, type, asset] = addr.split(".");
    return `debt.${type}.${asset}`;
  }
};

// src/types/assets/TransactionApplyResults.ts
var TransactionApplyResults = class {
  constructor() {
    this.created = 0;
    this.duplicates = 0;
    this.ignored = 0;
    this.skipped = 0;
    this.accounts = {};
  }
  create(tx) {
    this.created++;
    this.record(tx);
  }
  ignore(tx) {
    this.ignored++;
  }
  duplicate(tx) {
    this.duplicates++;
  }
  skip(tx) {
    this.skipped++;
  }
  record(tx) {
    for (const entry of tx.entries) {
      const { account, amount } = entry;
      this.accounts[account] = (this.accounts[account] || 0) + amount;
    }
  }
  add(result) {
    if ("created" in result) {
      this.created += parseInt(result.created || "0");
    }
    if ("duplicates" in result) {
      this.duplicates += parseInt(result.duplicates || "0");
    }
    if ("ignored" in result) {
      this.ignored += parseInt(result.ignored || "0");
    }
    if ("skipped" in result) {
      this.skipped += parseInt(result.skipped || "0");
    }
    if ("accounts" in result) {
      const accounts = result.accounts;
      Object.keys(accounts).forEach((account) => {
        this.accounts[account] = (this.accounts[account] || 0) + accounts[account];
      });
    }
  }
  toJSON() {
    return {
      created: this.created,
      ignored: this.ignored,
      duplicates: this.duplicates,
      skipped: this.skipped,
      accounts: this.accounts
    };
  }
};

// src/types/assets/index.ts
function isAssetTransferReason(s) {
  return typeof s === "string" && [
    "correction",
    "deposit",
    "distribution",
    "dividend",
    "expense",
    "fee",
    "forex",
    "income",
    "investment",
    "tax",
    "trade",
    "transfer",
    "withdrawal"
  ].includes(s);
}
function isAssetType(s) {
  return typeof s === "string" && ["account", "stock", "short", "currency", "debt", "crypto", "external", "statement", "other"].includes(s);
}
function isStockChangeDelta(o) {
  return typeof o === "object" && o !== null && "stock" in o && typeof o["stock"] === "object" && o["stock"] !== null && "change" in o["stock"];
}
function isStockChangeFixed(o) {
  return typeof o === "object" && o !== null && "stock" in o && typeof o["stock"] === "object" && o["stock"] !== null && "set" in o["stock"];
}
function isStockChangeData(o) {
  return isStockChangeDelta(o) || isStockChangeFixed(o);
}
function isAssetTransfer(s) {
  return typeof s === "object" && s !== null && "reason" in s && "type" in s && "asset" in s && !!s["reason"] && !!s["type"] && !!s["asset"];
}
function isAccountAddress(obj) {
  if (typeof obj !== "string" || !/^[a-z]+\.[a-z]+\.[*a-z]+$/.test(obj))
    return false;
  const [reason, type] = obj.split(".");
  return isAssetTransferReason(reason) && isAssetType(type);
}

// src/types/common.ts
function isValue(obj) {
  return typeof obj !== "function";
}
function isValues(obj) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  for (const k of Object.keys(obj)) {
    if (!isValue(obj[k])) {
      return false;
    }
  }
  return true;
}
var languages = /* @__PURE__ */ new Set([
  "aa",
  "ab",
  "af",
  "ak",
  "am",
  "an",
  "ar",
  "as",
  "av",
  "ay",
  "az",
  "ba",
  "be",
  "bg",
  "bh",
  "bi",
  "bm",
  "bn",
  "bo",
  "br",
  "bs",
  "ca",
  "ce",
  "ch",
  "co",
  "cr",
  "cs",
  "cu",
  "cv",
  "cy",
  "da",
  "de",
  "dv",
  "dz",
  "ee",
  "el",
  "en",
  "eo",
  "es",
  "et",
  "eu",
  "fa",
  "ff",
  "fi",
  "fj",
  "fo",
  "fr",
  "fy",
  "ga",
  "gd",
  "gl",
  "gn",
  "gu",
  "gv",
  "ha",
  "he",
  "hi",
  "ho",
  "hr",
  "ht",
  "hu",
  "hy",
  "hz",
  "ia",
  "id",
  "ie",
  "ig",
  "ii",
  "ik",
  "io",
  "is",
  "it",
  "iu",
  "ja",
  "jv",
  "kg",
  "ki",
  "kj",
  "kk",
  "kl",
  "km",
  "kn",
  "ko",
  "kr",
  "ks",
  "ku",
  "kv",
  "kw",
  "ky",
  "la",
  "lb",
  "lg",
  "li",
  "ln",
  "lo",
  "lt",
  "lv",
  "mg",
  "mh",
  "mi",
  "mk",
  "ml",
  "mn",
  "mo",
  "mr",
  "ms",
  "mt",
  "my",
  "na",
  "nd",
  "ne",
  "ng",
  "nl",
  "nn",
  "no",
  "nr",
  "nv",
  "ny",
  "oc",
  "oj",
  "om",
  "or",
  "os",
  "pa",
  "pi",
  "pl",
  "ps",
  "pt",
  "qu",
  "rm",
  "rn",
  "ro",
  "ru",
  "rw",
  "sa",
  "sc",
  "sd",
  "sg",
  "sh",
  "si",
  "sk",
  "sl",
  "sm",
  "sn",
  "so",
  "sq",
  "sr",
  "ss",
  "st",
  "su",
  "sv",
  "sw",
  "ta",
  "te",
  "tg",
  "th",
  "ti",
  "tk",
  "tl",
  "tn",
  "to",
  "tr",
  "ts",
  "tt",
  "tw",
  "ty",
  "ug",
  "ur",
  "ve",
  "vi",
  "vo",
  "wa",
  "wo",
  "xh",
  "yi",
  "yo",
  "za",
  "zh",
  "zu"
]);
function isLanguage(s) {
  return typeof s === "string" && languages.has(s);
}
var currencies = /* @__PURE__ */ new Set([
  "AFN",
  "ALL",
  "DZD",
  "ARS",
  "AMD",
  "AUD",
  "AZN",
  "BHD",
  "BDT",
  "BYN",
  "BZD",
  "BOB",
  "BAM",
  "BWP",
  "BRL",
  "GBP",
  "BND",
  "BGN",
  "BIF",
  "KHR",
  "CAD",
  "CVE",
  "XAF",
  "CLP",
  "CNY",
  "COP",
  "KMF",
  "CDF",
  "CRC",
  "HRK",
  "CZK",
  "DKK",
  "DJF",
  "DOP",
  "EGP",
  "ERN",
  "EEK",
  "ETB",
  "EUR",
  "GEL",
  "GHS",
  "GTQ",
  "GNF",
  "HNL",
  "HKD",
  "HUF",
  "ISK",
  "INR",
  "IDR",
  "IRR",
  "IQD",
  "ILS",
  "JMD",
  "JPY",
  "JOD",
  "KZT",
  "KES",
  "KWD",
  "LVL",
  "LBP",
  "LYD",
  "LTL",
  "MOP",
  "MKD",
  "MGA",
  "MYR",
  "MUR",
  "MXN",
  "MDL",
  "MAD",
  "MZN",
  "MMK",
  "NAD",
  "NPR",
  "TWD",
  "NZD",
  "NIO",
  "NGN",
  "NOK",
  "OMR",
  "PKR",
  "PAB",
  "PYG",
  "PEN",
  "PHP",
  "PLN",
  "QAR",
  "RON",
  "RUB",
  "RWF",
  "SAR",
  "RSD",
  "SGD",
  "SOS",
  "ZAR",
  "KRW",
  "LKR",
  "SDG",
  "SEK",
  "CHF",
  "SYP",
  "TZS",
  "THB",
  "TOP",
  "TTD",
  "TND",
  "TRY",
  "USD",
  "UGX",
  "UAH",
  "AED",
  "UYU",
  "UZS",
  "VEF",
  "VND",
  "XOF",
  "YER",
  "ZMK",
  "ZWL"
]);
function isCurrency(s) {
  return typeof s === "string" && currencies.has(s);
}
function isVersion(s) {
  return typeof s === "string" && /^\d+(\.\d+)+$/.test(s);
}
function versionCompare(a, b) {
  const verA = a.split(".");
  const verB = b.split(".");
  const N = Math.max(verA.length, verB.length);
  for (let i = 0; i < N; i++) {
    const diff = parseInt(verA[i]) - parseInt(verB[i]);
    if (diff < 0)
      return -1;
    if (diff > 0)
      return 1;
  }
  if (verA.length < verB.length)
    return -1;
  if (verA.length > verB.length)
    return 1;
  return 0;
}
function latestVersion(versions) {
  if (versions.length === 0) {
    return null;
  }
  let best;
  for (const version of versions) {
    if (!best || versionCompare(version, best) > 0) {
      best = version;
    }
  }
  return best;
}
var isDatabaseName = (name) => {
  return typeof name === "string" && /^[_a-z0-9]+$/.test(name);
};

// src/bookkeeper/StockBookkeeping.ts
function isAssetStockType(obj) {
  return typeof obj === "string" && ["crypto", "stock", "currency", "other"].includes(obj);
}
var StockBookkeeping = class {
  constructor(name = "No name") {
    this.name = name;
    this.reset();
    debug("STOCK", `[${this.name}]: Created new stock bookkeeper.`);
  }
  reset() {
    this.stock = {
      crypto: {},
      stock: {},
      currency: {},
      other: {}
    };
  }
  set(time, type, asset, amount, value) {
    if (typeof time === "string") {
      time = new Date(time);
    }
    if (!(asset in this.stock[type])) {
      this.stock[type][asset] = [];
    }
    const stock = this.stock[type][asset] || [];
    stock.push({
      time,
      amount,
      value
    });
    this.stock[type][asset] = stock.sort((a, b) => a.time.getTime() - b.time.getTime());
    debug("STOCK", `[${this.name}] ${time.toISOString()}: Set ${type} ${asset} = ${amount} (${value}).`);
  }
  has(type, asset) {
    return isAssetStockType(type) ? asset in this.stock[type] : false;
  }
  last(type, asset) {
    const stock = this.stock[type][asset] || [];
    if (!stock || !stock.length) {
      throw new Error(`There is no asset ${asset} of ${type} in stock bookkeeping.`);
    }
    return stock[stock.length - 1];
  }
  change(time, type, asset, amount, value) {
    const originalAmount = amount;
    const originalValue = value;
    if (typeof time === "string") {
      time = new Date(time);
    }
    if (!this.has(type, asset)) {
      this.set(time, type, asset, amount, value);
    } else {
      const last = this.last(type, asset);
      if (time < last.time) {
        debug("STOCK", this.stock);
        throw new Error(`Cannot insert ${type} ${asset} at ${time.toISOString()}, since last timestamp is ${last.time.toISOString()}`);
      }
      amount += last.amount;
      value += last.value;
      const stock = this.stock[type][asset] || [];
      stock.push({
        time,
        amount,
        value
      });
      debug("STOCK", `[${this.name}] ${time.toISOString()}: Change ${type} ${asset} \u0394 ${originalAmount >= 0 ? "+" : ""}${originalAmount} (${originalValue >= 0 ? "+" : ""}${originalValue}) \u21D2 ${amount} ${asset} (${value})`);
    }
  }
  get(time, type, asset) {
    let i;
    const stock = this.stock[type][asset] || [];
    if (this.has(type, asset)) {
      i = stock.length - 1;
    } else {
      i = -1;
    }
    while (i >= 0 && stock[i].time > time) {
      i--;
    }
    return i < 0 ? {
      time,
      amount: 0,
      value: 0
    } : stock[i];
  }
  getType(asset) {
    if (isCurrency(asset)) {
      return "currency";
    }
    if (this.stock.crypto[asset]) {
      return "crypto";
    }
    if (this.stock.stock[asset]) {
      return "stock";
    }
    return "other";
  }
  apply(time, data) {
    if (typeof time === "string") {
      time = new Date(time);
    }
    if (isStockChangeFixed(data)) {
      Object.keys(data.stock.set).forEach((asset) => {
        const { amount, value } = data.stock.set[asset];
        this.set(time, this.getType(asset), asset, amount, value);
      });
    }
    if (isStockChangeDelta(data)) {
      Object.keys(data.stock.change).forEach((asset) => {
        const { amount, value } = data.stock.change[asset];
        this.change(time, this.getType(asset), asset, amount, value);
      });
    }
  }
  applyAll(data) {
    data.forEach((entry) => this.apply(entry.time, entry.data));
  }
  changedAssets(data) {
    const assets = /* @__PURE__ */ new Set();
    if (isStockChangeDelta(data)) {
      Object.keys(data.stock.change).forEach((asset) => assets.add(asset));
    }
    if (isStockChangeFixed(data)) {
      Object.keys(data.stock.set).forEach((asset) => assets.add(asset));
    }
    return [...assets];
  }
  assets() {
    const ret = [];
    Object.keys(this.stock).map(
      (type) => Object.keys(this.stock[type]).forEach(
        (asset) => ret.push([type, asset])
      )
    );
    return ret;
  }
  totals() {
    return this.assets().map(([type, asset]) => [type, asset, this.last(type, asset).amount]);
  }
  total(type, asset = void 0) {
    if (!asset) {
      asset = type;
      type = this.getType(asset);
    }
    return this.has(type, asset) ? this.last(type, asset).amount : 0;
  }
  value(type, asset = void 0) {
    if (!asset) {
      asset = type;
      type = this.getType(asset);
    }
    return this.has(type, asset) ? this.last(type, asset).value : 0;
  }
  summary(roundToZero = null, addType = true, addTime = true) {
    const result = {};
    if (addType) {
      for (const [type, asset] of this.assets()) {
        result[`${type}.${asset}`] = this.last(type, asset);
        if (!addTime) {
          delete result[`${type}.${asset}`].time;
        }
        if (roundToZero) {
          if (Math.abs(result[`${type}.${asset}`].amount) < roundToZero) {
            delete result[`${type}.${asset}`];
          }
        }
      }
    } else {
      for (const [type, asset] of this.assets()) {
        result[asset] = this.last(type, asset);
        if (!addTime) {
          delete result[asset].time;
        }
        if (roundToZero) {
          if (Math.abs(result[asset].amount) < roundToZero) {
            delete result[asset];
          }
        }
      }
    }
    return result;
  }
  toJSON() {
    const sum = {};
    for (const [, asset, amount] of this.totals()) {
      sum[asset] = (sum[asset] || 0) + amount;
    }
    return sum;
  }
};

// src/import/ImportAction.ts
function isImportOpAction(obj) {
  if (typeof obj === "object" && obj !== null) {
    if ("op" in obj) {
      return ["segmentation", "classification", "analysis", "execution"].includes(obj.op);
    }
  }
  return false;
}
function isImportConfigureAction(obj) {
  if (typeof obj === "object" && obj !== null) {
    if ("configure" in obj) {
      return typeof obj["configure"] === "object" && obj["configure"] !== null;
    }
  }
  return false;
}
function isImportAnswerAction(obj) {
  if (typeof obj === "object" && obj !== null) {
    if ("answer" in obj) {
      return typeof obj["answer"] === "object" && obj["answer"] !== null;
    }
  }
  return false;
}
function isImportRetryAction(obj) {
  return typeof obj === "object" && obj !== null && obj["retry"] === true;
}
function isImportRollbackAction(obj) {
  return typeof obj === "object" && obj !== null && obj["rollback"] === true;
}
function isImportAction(obj) {
  return isImportOpAction(obj) || isImportConfigureAction(obj) || isImportAnswerAction(obj) || isImportRetryAction(obj);
}

// src/import/ImportState.ts
function isImportState(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  if (obj === null) {
    return false;
  }
  if (!("stage" in obj) || !("files" in obj)) {
    return false;
  }
  if (typeof obj["stage"] !== "string") {
    return false;
  }
  if (!["initial", "segmented", "classified", "analyzed", "executed"].includes(obj["stage"])) {
    return false;
  }
  return true;
}

// src/import/TextFileLine.ts
var NO_SEGMENT = Symbol("NO_SEGMENT");

// src/language/editor.ts
function isRuleViewOp(obj) {
  return obj === "caseInsensitiveMatch" || obj === "caseSensitiveMatch" || obj === "caseInsensitiveFullMatch" || obj === "caseSensitiveFullMatch" || obj === "isLessThan" || obj === "isGreaterThan" || obj === "setLiteral" || obj === "copyInverseField" || obj === "copyField";
}
function filterView2rule(view) {
  if (view instanceof Array) {
    return view.map((v) => filterView2rule(v)).join(" && ");
  }
  const { op, field, text, value } = view;
  const variable = field === void 0 ? "" : /^[a-zA-Z]\w*$/.test(field) ? field : "$(" + JSON.stringify(field) + ")";
  switch (op) {
    case "setLiteral":
      return JSON.stringify(value);
    case "copyInverseField":
      const val = value === void 0 ? "" : /^[a-zA-Z]\w*$/.test(`${value}`) ? `${value}` : "$(" + JSON.stringify(value) + ")";
      return `(-${val})`;
    case "copyField":
      const val2 = value === void 0 ? "" : /^[a-zA-Z]\w*$/.test(`${value}`) ? `${value}` : "$(" + JSON.stringify(value) + ")";
      return `${val2}`;
    case "caseInsensitiveFullMatch":
      return `(lower(${variable}) === ${JSON.stringify(text?.toLowerCase())})`;
    case "caseSensitiveFullMatch":
      return `(${variable} === ${JSON.stringify(text)})`;
    case "caseInsensitiveMatch":
      return `contains(lower(${variable}), ${JSON.stringify(text?.toLowerCase())})`;
    case "caseSensitiveMatch":
      return `contains(${variable}, ${JSON.stringify(text)})`;
    case "isLessThan":
      return `(${variable} < ${JSON.stringify(value)})`;
    case "isGreaterThan":
      return `(${variable} > ${JSON.stringify(value)})`;
    default:
      throw new Error(`A filterView2rule with operation '${op}' is not implemented.`);
  }
}
function filterView2name(view) {
  if (view instanceof Array) {
    return view.map((v) => filterView2name(v)).join(" and ");
  }
  const { op, field, text, value } = view;
  switch (op) {
    case "setLiteral":
      return `set ${JSON.stringify(value)}`;
    case "copyInverseField":
      return `copy '${field}' negated`;
    case "copyField":
      return `copy '${field}'`;
    case "caseInsensitiveFullMatch":
      return `${field} in lower case is '${text?.toLowerCase()}'`;
    case "caseSensitiveFullMatch":
      return `${field} is '${text}'`;
    case "caseSensitiveMatch":
      return `${field} contains '${text}'`;
    case "caseInsensitiveMatch":
      return `${field} in lower case contains '${text?.toLowerCase()}'`;
    case "isLessThan":
      return `${field} is less than ${value}`;
    case "isGreaterThan":
      return `${field} is greater than ${value}`;
    default:
      throw new Error(`A filterView2name with operation '${op}' is not implemented.`);
  }
}
function filterView2results(view) {
  if (view instanceof Array) {
    return view.map((v) => filterView2results(v));
  }
  const ret = {};
  Object.entries(view).map(([k, v]) => {
    if (typeof v === "object" && v !== null) {
      if ("op" in v && isRuleViewOp(v["op"])) {
        ret[k] = filterView2rule(v);
      } else {
        ret[k] = filterView2results(v);
      }
    }
  });
  return ret;
}

// src/language/filtering.ts
function filter2function(rule) {
  if (rule === null || rule === void 0) {
    return () => true;
  }
  const isValid = (arg) => typeof arg === "object" || arg !== null;
  const makeRule = (k, v) => {
    const t = typeof v;
    if (t === "number" || t === "string") {
      return (arg) => arg[k] === v;
    }
    if (t === "object" && v instanceof Array) {
      const s = new Set(v);
      return (arg) => s.has(arg[k]);
    }
    throw new Error(`No interpretation of value ${JSON.stringify(v)} in filtering rule ${JSON.stringify(rule)}.`);
  };
  if (typeof rule === "object") {
    const testers = [];
    Object.entries(rule).map(([k, v]) => {
      testers.push(makeRule(k, v));
    });
    return (arg) => {
      if (!isValid(arg))
        return false;
      for (let i = 0; i < testers.length; i++) {
        if (!testers[i](arg)) {
          return false;
        }
      }
      return true;
    };
  }
  throw new Error(`Syntax error in filtering rule ${JSON.stringify(rule)}`);
}

// src/types/bookkeeper/accounts.ts
var AccountType = /* @__PURE__ */ ((AccountType2) => {
  AccountType2["ASSET"] = "ASSET";
  AccountType2["LIABILITY"] = "LIABILITY";
  AccountType2["EQUITY"] = "EQUITY";
  AccountType2["REVENUE"] = "REVENUE";
  AccountType2["EXPENSE"] = "EXPENSE";
  AccountType2["PROFIT_PREV"] = "PROFIT_PREV";
  AccountType2["PROFIT"] = "PROFIT";
  return AccountType2;
})(AccountType || {});
function isAccountNumber(s) {
  return typeof s === "string" && /^\d+$/.test(s);
}

// src/types/bookkeeper/importer.ts
function isAccountAddressConfig(s) {
  return typeof s === "string" && /^account\./.test(s);
}
function isTagConfig(s) {
  return typeof s === "string" && /^tags\./.test(s);
}

// src/types/bookkeeper/reports.ts
function isReportID(s) {
  return typeof s === "string" && /^[-a-z]+$/.test(s);
}

// src/types/bookkeeper/tags.ts
function isTag(s) {
  return typeof s === "string" && /^[A-Za-z0-9]+$/.test(s);
}
function isTagString(s) {
  if (typeof s !== "string" || !/^\[\]$/.test(s)) {
    return false;
  }
  const tags = s.substr(1, s.length - 2).split("][");
  return tags.filter((tag) => !isTag(tag)).length > 0;
}
function isTagType(s) {
  return typeof s === "string";
}

// src/types/bookkeeper/transactions.ts
function sortTransactions(txs) {
  for (const tx of txs) {
    tx.entries = tx.entries.sort((a, b) => a.account === b.account ? 0 : a.account < b.account ? -1 : 1);
  }
  return txs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

// src/types/time.ts
function isShortDate(s) {
  return typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s);
}
var MINUTES = 60;
var HOURS = MINUTES * 60;
var DAYS = HOURS * 24;
var YEARS = DAYS * 365;
function month(abbrev) {
  const months = {
    jan: "January",
    feb: "February",
    mar: "March",
    apr: "April",
    may: "May",
    jun: "June",
    jul: "July",
    aug: "August",
    sep: "September",
    oct: "October",
    nov: "November",
    dec: "December"
  };
  return months[abbrev.toLowerCase()] || null;
}

// src/types/net.ts
function isUrl(s) {
  return typeof s === "string" && /^\w+:/.test(s);
}
function isLocalUrl(s) {
  return typeof s === "string" && !/^\w+:/.test(s);
}
var TOKEN_EXPIRY_TIME = 30 * MINUTES;
var REFRESH_TOKEN_EXPIRY_TIME = TOKEN_EXPIRY_TIME + 10 * MINUTES;
var TOKEN_ISSUER = "Tasenor";

// src/language/lookup.ts
function conditions(addr, options) {
  const [reason, type, asset] = addr.split(".");
  if (reason === "debt") {
    if (type === "currency") {
      return { code: "CREDITORS", addChildren: true, currency: asset, plugin: options.plugin };
    }
  }
  if (reason === "deposit") {
    if (type === "currency") {
      return { code: "CASH", addChildren: true, currency: asset, plugin: options.plugin, type: "ASSET" /* ASSET */ };
    }
    if (type === "external") {
      return { code: "CASH", addChildren: true, currency: asset, "!plugin": options.plugin, type: "ASSET" /* ASSET */ };
    }
  }
  if (reason === "distribution") {
    return null;
  }
  if (reason === "dividend") {
    if (type === "currency") {
      return { code: "DIVIDEND", addChildren: true, currency: asset, plugin: options.plugin };
    }
  }
  if (reason === "expense") {
    if (type === "currency") {
      return options.plugin ? { code: "CASH", addChildren: true, currency: asset, plugin: options.plugin, type: "ASSET" /* ASSET */ } : null;
    }
    if (type === "statement") {
      return { type: "EXPENSE" /* EXPENSE */, code: asset };
    }
  }
  if (reason === "fee") {
    if (type === "currency") {
      return options.plugin ? { code: "CASH", addChildren: true, currency: asset, plugin: options.plugin, type: "ASSET" /* ASSET */ } : null;
    }
  }
  if (reason === "forex") {
    if (type === "currency") {
      return { code: "CASH", currency: asset, plugin: options.plugin };
    }
  }
  if (reason === "income") {
    if (type === "currency") {
      return options.plugin ? { code: "CASH", addChildren: true, currency: asset, plugin: options.plugin, type: "ASSET" /* ASSET */ } : null;
    }
    if (type === "statement") {
      return { type: "REVENUE" /* REVENUE */, code: asset };
    }
  }
  if (reason === "investment") {
    if (type === "currency") {
      return null;
    }
    if (type === "statement") {
      return { type: "EQUITY" /* EQUITY */, code: asset, plugin: options.plugin };
    }
  }
  if (reason === "tax") {
    if (type === "currency") {
      return null;
    }
    if (type === "statement") {
      return { type: ["LIABILITY" /* LIABILITY */, "ASSET" /* ASSET */], code: asset };
    }
  }
  if (reason === "trade") {
    if (type === "currency") {
      return { type: "ASSET" /* ASSET */, code: "CASH", addChildren: true, currency: asset, plugin: options.plugin };
    }
    if (type === "stock") {
      return { type: "ASSET" /* ASSET */, code: "CURRENT_PUBLIC_STOCK_SHARES", plugin: options.plugin };
    }
    if (type === "crypto") {
      return { type: "ASSET" /* ASSET */, code: "CURRENT_CRYPTOCURRENCIES", plugin: options.plugin };
    }
  }
  if (reason === "transfer") {
    if (type === "currency") {
      return { type: "ASSET" /* ASSET */, code: "CASH", addChildren: true, currency: asset, plugin: options.plugin };
    }
    if (type === "external") {
      if (asset === "NEEDS_MANUAL_INSPECTION") {
        return { code: asset };
      }
      return null;
    }
  }
  if (reason === "withdrawal") {
    if (type === "currency") {
      return { code: "CASH", addChildren: true, currency: asset, plugin: options.plugin, type: "ASSET" /* ASSET */ };
    }
    if (type === "external") {
      return { code: "CASH", addChildren: true, currency: asset, "!plugin": options.plugin, type: "ASSET" /* ASSET */ };
    }
  }
  const message = `No SQL conversion known for account address '${addr}'.`;
  if (options.strict) {
    throw new Error(message);
  }
  warning(message);
  return null;
}
function address2sql(addr, options, knowledge = null) {
  if (knowledge === null) {
    knowledge = new Knowledge();
  }
  const cond = conditions(addr, options);
  if (cond === null) {
    return null;
  }
  const addSql = [];
  if (cond.currency === options.defaultCurrency) {
    addSql.push(`(data->>'currency' = '${cond.currency}' OR data->>'currency' IS NULL)`);
    delete cond.currency;
  }
  if (cond.type) {
    if (typeof cond.type === "string") {
      addSql.push(`(type = '${cond.type}')`);
    } else {
      addSql.push("(" + cond.type.map((t) => `type = '${t}'`).join(" OR ") + ")");
    }
    delete cond.type;
  }
  if (cond.addChildren) {
    cond.code = [cond.code, ...knowledge.children(cond.code)];
    delete cond.addChildren;
  }
  const key2sql = (key) => {
    if (key[0] === "!") {
      return `(data->>'${key.substring(1)}' != '${cond[key]}')`;
    }
    let values = cond[key];
    if (values instanceof Array) {
      if (values.length > 1) {
        return `(data->>'${key}' IN (${values.map((k) => "'" + k + "'").join(", ")}))`;
      }
      values = values[0];
    }
    return `(data->>'${key}' = '${values}')`;
  };
  const sql = Object.keys(cond).map((key) => key2sql(key));
  return [...sql, ...addSql].join(" AND ");
}

// src/language/query.ts
function isUIQueryRef(obj) {
  return typeof obj === "object" && obj !== null && (Object.keys(obj).length === 1 && Object.keys(obj)[0] === "name");
}
function isUIQuery(obj) {
  return typeof obj === "object" && obj !== null && (typeof obj["ask"] === "object" || typeof obj["chooseTag"] === "object" && obj["chooseTag"] instanceof Array);
}

// src/language/rules.ts
var import_mathjs = require("mathjs");
var RuleParsingError = class extends Error {
  constructor(msg, expression, variables) {
    super(msg);
    this.expression = expression;
    this.variables = (0, import_mathjs.clone)(variables);
  }
};
var RulesEngine = class {
  constructor(variables, quiet = false) {
    this.quiet = quiet;
    this.engine = (0, import_mathjs.create)({
      ...import_mathjs.all,
      createEqual: (0, import_mathjs.factory)(
        "equal",
        [],
        () => (0, import_mathjs.typed)("equal", {
          "string, string": function equal(a, b) {
            return a === b;
          }
        })
      ),
      createUnequal: (0, import_mathjs.factory)(
        "unequal",
        [],
        () => (0, import_mathjs.typed)("unequal", {
          "string, string": function equal(a, b) {
            return a !== b;
          }
        })
      ),
      createSmaller: (0, import_mathjs.factory)(
        "smaller",
        [],
        () => (0, import_mathjs.typed)("smaller", {
          "string, string": function equal(a, b) {
            return a < b;
          }
        })
      ),
      createSmallerEq: (0, import_mathjs.factory)(
        "smallerEq",
        [],
        () => (0, import_mathjs.typed)("smallerEq", {
          "string, string": function equal(a, b) {
            return a <= b;
          }
        })
      ),
      createLarger: (0, import_mathjs.factory)(
        "larger",
        [],
        () => (0, import_mathjs.typed)("larger", {
          "string, string": function equal(a, b) {
            return a > b;
          }
        })
      ),
      createLargerEq: (0, import_mathjs.factory)(
        "largerEq",
        [],
        () => (0, import_mathjs.typed)("largerEq", {
          "string, string": function equal(a, b) {
            return a >= b;
          }
        })
      ),
      createCompare: (0, import_mathjs.factory)(
        "compare",
        [],
        () => (0, import_mathjs.typed)("compare", {
          "string, string": function equal(a, b) {
            return a > b ? 1 : a < b ? -1 : 0;
          }
        })
      ),
      createAdd: (0, import_mathjs.factory)(
        "add",
        [],
        () => (0, import_mathjs.typed)("add", {
          "number, number": function equal(a, b) {
            return a + b;
          },
          "string, string": function equal(a, b) {
            return `${a}${b}`;
          }
        })
      )
    }, {});
    this.scope = {
      $: (column, defaultValue = void 0) => this.$(column, defaultValue),
      capitalize: (s) => this.capitalize(s),
      cents: (n) => this.cents(n),
      chosen: (question) => this.chosen(question),
      clean: (s) => this.clean(s),
      concat: (vector, field, sep) => this.concat(vector, field, sep),
      contains: (s, r) => this.contains(s, r),
      d: (...args) => this.d(...args),
      isCurrency: (str) => this.isCurrency(str),
      join: (...args) => this.join(...args),
      lower: (s) => this.lower(s),
      num: (column) => this.num(column),
      par: (...exprs) => this.par(...exprs),
      rates: (...args) => this.rates(args),
      regex: (re, compare, flags) => this.regex(re, compare, flags),
      str: (column) => this.str(column),
      sum: (vector, field) => this.sum(vector, field),
      times: (count, target) => this.times(count, target),
      ucfirst: (s) => this.ucfirst(s),
      import: function() {
        throw new Error("Function import is disabled.");
      },
      createUnit: function() {
        throw new Error("Function createUnit is disabled.");
      },
      evaluate: function() {
        throw new Error("Function evaluate is disabled.");
      },
      parse: function() {
        throw new Error("Function parse is disabled.");
      },
      simplify: function() {
        throw new Error("Function simplify is disabled.");
      },
      derivative: function() {
        throw new Error("Function derivative is disabled.");
      }
    };
    this.variables = variables || {};
  }
  eval(expr, variables) {
    if (variables) {
      this.variables = (0, import_mathjs.clone)(variables);
    }
    if (expr instanceof Object) {
      if (expr === null) {
        return null;
      }
      if (expr instanceof Array) {
        return expr.map((e) => this.eval(e));
      }
      const result2 = {};
      Object.keys(expr).forEach((k) => result2[k] = this.eval(expr[k]));
      return result2;
    }
    let result;
    try {
      result = this.engine.evaluate(expr, { ...this.scope, ...this.variables });
      if (result && typeof result === "object" && result._data && result._size) {
        return result._data;
      }
    } catch (err) {
      throw new RuleParsingError(err.message, expr, variables || {});
    }
    return result;
  }
  $(column, defaultValue = void 0) {
    return column in this.variables ? this.variables[column] : defaultValue;
  }
  num(str) {
    if (typeof str === "number") {
      return str;
    }
    const ret = num(`${str}`);
    if (!this.quiet && isNaN(ret)) {
      warning(`Unable to parse number from ${JSON.stringify(str)}.`);
    }
    return ret;
  }
  isCurrency(str) {
    return isCurrency(str);
  }
  rates(args) {
    const ret = {};
    for (let i = 0; i < args.length; i += 2) {
      ret[`${args[i]}`] = this.num(args[i + 1]);
    }
    return ret;
  }
  regex(re, compare, flags = void 0) {
    const regex = flags ? new RegExp(re, flags) : new RegExp(re);
    const match = regex.exec(compare);
    if (!match)
      return false;
    const groups = [];
    for (let i = 1; match[i] !== void 0; i++) {
      groups.push(match[i]);
    }
    return groups.length ? groups : true;
  }
  par(...exprs) {
    const nonEmpty = exprs.filter((e) => e !== null && e !== false).map((e) => `${e}`.trim()).filter((e) => e !== "");
    return nonEmpty.length ? ` (${nonEmpty.join(", ")})` : "";
  }
  var(variable) {
    if (!(variable in this.variables)) {
      throw new Error(`A variable '${variable}' is not defined.`);
    }
    return this.variables[variable];
  }
  chosen(questionVar) {
    const ans = this.var(questionVar);
    const rule = this.var("rule");
    const questions = rule.questions;
    if (!(questionVar in questions)) {
      throw new Error(`Cannot find variable '${questionVar}' from questions of the rule ${JSON.stringify(rule.questions)}'.`);
    }
    const question = questions[questionVar];
    if ("ask" in question) {
      const matches = Object.entries(question.ask).filter(([, v]) => v === ans).map(([k]) => k);
      if (matches.length) {
        return matches.join(", ");
      }
      throw new Error(`Unable to find any matches for answer ${JSON.stringify(ans)} from question ${JSON.stringify(question)}.`);
    }
    throw new Error(`Cannot reverse map question ${JSON.stringify(question)}, when looking for chosen '${questionVar}'.`);
  }
  contains(s, r) {
    return s.indexOf(r) >= 0;
  }
  ucfirst(s) {
    return s.substring(0, 1).toUpperCase() + s.substring(1);
  }
  lower(s) {
    return s.toLowerCase();
  }
  capitalize(s) {
    return s.toLowerCase().split(" ").map((s2) => this.ucfirst(s2)).join(" ");
  }
  cents(n) {
    if (typeof n !== "number") {
      throw new Error(`Invalid argument ${JSON.stringify(n)} for cents().`);
    }
    return Math.round(n * 100);
  }
  str(x) {
    return `${x}`;
  }
  join(...args) {
    return args.filter((a) => a !== void 0 && a !== null).map((a) => `${a}`.trim()).filter((a) => a !== "").join(" ");
  }
  d(...args) {
    note(`[DEBUG]`, ...args);
    return args.length ? args[args.length - 1] : void 0;
  }
  times(count, target) {
    if (count === void 0 || count === null || count === 0) {
      return "";
    }
    const num2 = parseInt(`${count}`);
    return `${num2} x ${target}`;
  }
  sum(vector, field) {
    if (typeof vector !== "object") {
      throw new Error(`Invalid argument ${JSON.stringify(vector)} for sum().`);
    }
    let total = 0;
    if (!field) {
      vector.forEach(function(value) {
        if (value) {
          try {
            const add = parseInt(value);
            if (!isNaN(add)) {
              total += add;
            }
          } catch (err) {
          }
        }
      });
    } else {
      vector.forEach(function(value) {
        if (value[field]) {
          try {
            const add = parseInt(value[field]);
            if (!isNaN(add)) {
              total += add;
            }
          } catch (err) {
          }
        }
      });
    }
    return total;
  }
  concat(vector, field, sep) {
    if (typeof vector !== "object") {
      throw new Error(`Invalid argument ${JSON.stringify(vector)} for concat().`);
    }
    const parts = [];
    if (!field) {
      vector.forEach(function(value) {
        if (value) {
          parts.push(`${value}`);
        }
      });
    } else {
      vector.forEach(function(value) {
        if (value[field]) {
          parts.push(`${value[field]}`);
        }
      });
    }
    return parts.join(sep || "\n");
  }
  clean(s) {
    return s.split("\n").map((s2) => s2.replace(/\s+/g, " ").replace(/^\s+/, "").replace(/\s+$/, "")).filter((s2) => s2 !== "").join("\n");
  }
};

// src/net/crypto.ts
var import_crypto = __toESM(require("crypto"));
var import_buffer2 = __toESM(require("buffer"));
_global.Buffer = _global.Buffer || import_buffer2.default.Buffer;
var Crypto = class {
  constructor(encryptionKey) {
    if (!encryptionKey || encryptionKey.length < 32) {
      throw new Error("Encryption key is too short or does not exist.");
    }
    this.algorithm = "aes-128-cbc";
    const salt = encryptionKey;
    const hash = import_crypto.default.createHash("sha1");
    hash.update(salt);
    this.key = hash.digest().slice(0, 16);
  }
  encrypt(clearText) {
    const iv = import_crypto.default.randomBytes(16);
    const cipher = import_crypto.default.createCipheriv(this.algorithm, this.key, iv);
    const encrypted = cipher.update(clearText, "utf8", "hex");
    return [
      encrypted + cipher.final("hex"),
      import_buffer.Buffer.from(iv).toString("hex")
    ].join("|");
  }
  decrypt(encryptedText) {
    const [encrypted, iv] = encryptedText.split("|");
    if (!iv)
      throw new Error("IV not found when decrypting.");
    let decipher;
    try {
      decipher = import_crypto.default.createDecipheriv(
        this.algorithm,
        this.key,
        import_buffer.Buffer.from(iv, "hex")
      );
      return decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");
    } catch (err) {
      error(`Decrypting ${encryptedText} failed.`);
      return null;
    }
  }
  static hash(len) {
    return import_crypto.default.randomBytes(len).toString("hex");
  }
};

// src/net/net.ts
var import_jwt_decode = __toESM(require("jwt-decode"));
var import_axios = __toESM(require("axios"));
function isHttpSuccessResponse(obj) {
  if (typeof obj === "object" && obj !== null && obj.hasOwnProperty("success")) {
    return obj.success;
  }
  return false;
}
function isHttpFailureResponse(obj) {
  return !isHttpSuccessResponse(obj);
}
var config = {
  sites: {}
};
function configure(conf) {
  if (conf.baseUrl) {
    config.baseUrl = conf.baseUrl;
  }
  if (conf.sites) {
    for (const site of Object.keys(conf.sites)) {
      if (!config.sites) {
        config.sites = {};
      }
      if (!config.sites[site]) {
        config.sites[site] = {};
      }
      Object.assign(config.sites[site], conf.sites[site]);
    }
  }
}
var getConf = (url, name) => {
  const origin = new URL(url).origin;
  if (config.sites && config.sites[origin] && name in config.sites[origin]) {
    return config.sites[origin][name];
  }
  return null;
};
var setConf = (url, name, value) => {
  const origin = new URL(url).origin;
  if (!config.sites) {
    config.sites = {};
  }
  if (!config.sites[origin]) {
    config.sites[origin] = {};
  }
  config.sites[origin][name] = value;
};
var constructUrl = (url) => {
  if (isLocalUrl(url)) {
    if (!config.baseUrl) {
      throw new Error(`Cannot use local URL '${url}' when there is no base URL configured.`);
    }
    return config.baseUrl.replace(/\/$/, "") + "/" + url.replace(/^\//, "");
  }
  return url;
};
async function refreshToken(url) {
  setConf(url, "token", null);
  if (getConf(url, "refreshToken") && getConf(url, "refreshUrl")) {
    const refreshUrl = `${new URL(url).origin}${getConf(url, "refreshUrl")}`;
    log(`Refreshing token from ${refreshUrl}.`);
    const headers = {
      Authorization: `Bearer ${getConf(url, "refreshToken")}`
    };
    if (getConf(url, "uuid")) {
      headers["X-UUID"] = getConf(url, "uuid");
    }
    const refreshed = await (0, import_axios.default)({
      method: "GET",
      url: refreshUrl,
      headers
    }).catch((err) => {
      const logout2 = getConf(url, "logout");
      if (logout2) {
        logout2();
        return false;
      }
      error(`Fetching token for ${url} failed: ${err}`);
      return err;
    });
    if (refreshed.status === 200 && refreshed.data && refreshed.data.token) {
      setConf(url, "token", refreshed.data.token);
      if (refreshed.data.refresh) {
        setConf(url, "refreshToken", refreshed.data.refresh);
      }
      log(`Received new token from ${url}.`);
      return true;
    }
    const logout = getConf(url, "logout");
    if (logout) {
      logout();
      return false;
    }
    error("Invalid response:", refreshed);
    return new Error("Unable to understand token response.");
  }
  return new Error(`Site ${url} not configured for token refreshing.`);
}
function createRequestHandler(method) {
  return async (url0, data, extraHeaders) => {
    const url = constructUrl(url0);
    const origin = new URL(url).origin;
    if (!config.sites || !config.sites[origin]) {
      warning(`We don't have any net configuration for site ${origin}.`);
    }
    async function doRequest({ method: method2, url: url2, data: data2 }) {
      const headers = {};
      Object.assign(headers, extraHeaders);
      if (config.sites && config.sites[origin] && !headers.Authorization) {
        if (getConf(url2, "token")) {
          headers.Authorization = `Bearer ${getConf(url2, "token")}`;
        }
        if (getConf(url2, "uuid")) {
          headers["X-UUID"] = getConf(url2, "uuid");
        }
      }
      const axiosCall = { method: method2, url: url2, data: data2, headers };
      if (method2 === "GET") {
        if (data2) {
          axiosCall.params = data2;
        }
      }
      if (data2 === null || data2 === void 0) {
        delete axiosCall.data;
      }
      const isFormData = data2 && data2 instanceof Object && data2.constructor && data2.constructor.name === "FormData";
      if (isFormData && data2.getHeaders) {
        Object.assign(headers, data2.getHeaders());
      }
      const resp = await (0, import_axios.default)(axiosCall).catch((err) => {
        if (err.response) {
          return err.response;
        }
        const message = `Network call failed: ${err}.`;
        error(message);
        return {
          status: -1,
          success: false,
          data: {
            message
          }
        };
      });
      note("Net:", method2, url2, "HTTP", resp.status);
      let defaultMessage;
      switch (resp.status) {
        case -1:
          return resp;
        case 200:
          return {
            status: 200,
            success: true,
            data: resp.data
          };
        case 204:
          return {
            status: 204,
            success: true,
            data: true
          };
        case 400:
          defaultMessage = "Bad Request";
        case 401:
          defaultMessage = defaultMessage || "Unauthorized";
        case 403:
          defaultMessage = defaultMessage || "Forbidden";
        case 404:
          defaultMessage = defaultMessage || "Not Found";
        case 500:
          defaultMessage = defaultMessage || "Internal Server Error";
          error(`A call ${method2} ${url2} failed with ${resp.status}. Data:`);
          error(resp.data);
          return {
            status: resp.status,
            success: false,
            message: resp.data && resp.data.message ? resp.data.message : defaultMessage
          };
        default:
          warning(`Net: No handler for HTTP ${resp.status}.`);
          throw new Error(`Net library has no handler yet for status ${resp.status}.`);
      }
    }
    async function handleError(err) {
      let status = 500;
      if (err.response)
        switch (err.response.status) {
          case 401:
          case 403:
            status = err.response.status;
            if (getConf(url, "refreshToken") && getConf(url, "refreshUrl")) {
              warning(`Request ${method} ${url} gave ${err.response.status} but trying to refresh the token.`);
              err = await refreshToken(url);
              if (err === true) {
                let success = true;
                const retried = await doRequest({ method, url, data }).catch((newErr) => {
                  warning(`We got token but retrying ${method} ${url} failed as well. Error was:`);
                  error(newErr);
                  err = newErr;
                  status = 500;
                  success = false;
                });
                if (success) {
                  log(`Retrying ${method} ${url} successful.`);
                  return retried;
                }
              }
            }
            break;
        }
      let reason = "";
      if (err.response && err.response.data) {
        reason = ` (${err.response.data.message})`;
      }
      error(`Request ${method} ${url} failed: ${JSON.stringify(err)}${JSON.stringify(reason)}`);
      return {
        status,
        success: false,
        message: `Request ${method} ${url} failed.`
      };
    }
    const token = getConf(url, "token");
    const hasRefreshToken = !!getConf(url, "refreshToken");
    let needRefresh = hasRefreshToken && !token;
    if (token) {
      try {
        const decoded = (0, import_jwt_decode.default)(token);
        const expires = decoded.exp * 1e3;
        const now = new Date().getTime();
        if (expires - now < 1e3) {
          log("Token has been expired.");
          needRefresh = true;
        }
      } catch (err) {
      }
    }
    if (needRefresh) {
      log("Token needs refreshing.");
      const err = await refreshToken(url);
      if (err !== true) {
        error(`Trying to refresh token gave an error: ${err}`);
      }
    }
    const finalResult = await doRequest({ method, url, data }).catch((err) => {
      return handleError(err);
    });
    if (!finalResult.success) {
      if (finalResult.status === 403 || finalResult.status === 401) {
        return handleError({ response: finalResult });
      }
    }
    return finalResult;
  };
}
async function refresh(url) {
  const result = await refreshToken(url);
  if (result === true) {
    return {
      token: getConf(url, "token"),
      refresh: getConf(url, "refreshToken")
    };
  }
  error(`Token refresh for ${url} failed:`, result);
  return null;
}
var net = {
  configure,
  getConf,
  setConf,
  refresh,
  DELETE: createRequestHandler("DELETE"),
  GET: createRequestHandler("GET"),
  HEAD: createRequestHandler("HEAD"),
  PATCH: createRequestHandler("PATCH"),
  POST: createRequestHandler("POST"),
  PUT: createRequestHandler("PUT")
};

// src/process_types.ts
var isRealID = (id) => typeof id === "number";
var isID = (id) => isRealID(id) || id === null;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AccountType,
  BalanceBookkeeping,
  Bookkeeper,
  Crypto,
  DAYS,
  Directions,
  HOURS,
  Knowledge,
  MAX_TARGET_ID_LEN,
  MAX_UPLOAD_SIZE,
  MINUTES,
  NO_SEGMENT,
  REFRESH_TOKEN_EXPIRY_TIME,
  RuleParsingError,
  RulesEngine,
  StockBookkeeping,
  TOKEN_EXPIRY_TIME,
  TOKEN_ISSUER,
  TransactionApplyResults,
  YEARS,
  ZERO_CENTS,
  ZERO_STOCK,
  address2sql,
  conditions,
  currencies,
  debug,
  elementNames,
  emptyLinkedTree,
  error,
  filter2function,
  filterView2name,
  filterView2results,
  filterView2rule,
  getServerRoot,
  haveCatalog,
  haveCursor,
  haveKnowledge,
  haveSettings,
  haveStore,
  isAccountAddress,
  isAccountAddressConfig,
  isAccountElement,
  isAccountNumber,
  isActiveElement,
  isAssetStockType,
  isAssetTransfer,
  isAssetTransferReason,
  isAssetType,
  isBooleanElement,
  isBoxElement,
  isButtonElement,
  isCaseElement,
  isContainerElement,
  isCurrency,
  isCurrencyElement,
  isDatabaseName,
  isFlatElement,
  isHtmlElement,
  isHttpFailureResponse,
  isHttpSuccessResponse,
  isID,
  isImportAction,
  isImportAnswerAction,
  isImportConfigureAction,
  isImportOpAction,
  isImportRetryAction,
  isImportRollbackAction,
  isImportState,
  isLanguage,
  isLocalUrl,
  isMessageElement,
  isNamedElement,
  isNode,
  isNumberElement,
  isPatchAction,
  isPostAction,
  isRadioElement,
  isRealID,
  isReportID,
  isRuleEditorElement,
  isRuleViewOp,
  isShortDate,
  isStockChangeData,
  isStockChangeDelta,
  isStockChangeFixed,
  isTag,
  isTagConfig,
  isTagString,
  isTagType,
  isTagsElement,
  isTasenorElement,
  isTextElement,
  isTextFileLineElement,
  isUIQuery,
  isUIQueryRef,
  isUi,
  isUrl,
  isValue,
  isValues,
  isVersion,
  isYesNoElement,
  languages,
  latestVersion,
  less,
  log,
  month,
  mute,
  near,
  needHiding,
  net,
  note,
  num,
  realNegative,
  realPositive,
  setGlobalComponents,
  setServerRoot,
  sortTransactions,
  timestamp,
  ucfirst,
  unmute,
  versionCompare,
  waitPromise,
  warning
});
