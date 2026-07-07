<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Lebens-Dashboard</title>
<script src="config.js"></script>
<script>
// Storage-Adapter: localStorage (Standard) oder Supabase (wenn in config.js hinterlegt)
window.DashStore = {
  key: 'lebens-dashboard-v1',
  useSupabase() {
    const c = window.DASHBOARD_CONFIG || {};
    return !!(c.supabaseUrl && c.supabaseAnonKey);
  },
  async get() {
    if (this.useSupabase()) {
      const c = window.DASHBOARD_CONFIG;
      const r = await fetch(c.supabaseUrl + '/rest/v1/dashboard_state?id=eq.main&select=data', {
        headers: { apikey: c.supabaseAnonKey, Authorization: 'Bearer ' + c.supabaseAnonKey }
      });
      if (!r.ok) throw new Error('Supabase: HTTP ' + r.status);
      const rows = await r.json();
      return rows && rows[0] ? JSON.stringify(rows[0].data) : null;
    }
    return localStorage.getItem(this.key);
  },
  async set(value) {
    if (this.useSupabase()) {
      const c = window.DASHBOARD_CONFIG;
      const r = await fetch(c.supabaseUrl + '/rest/v1/dashboard_state', {
        method: 'POST',
        headers: {
          apikey: c.supabaseAnonKey, Authorization: 'Bearer ' + c.supabaseAnonKey,
          'Content-Type': 'application/json', Prefer: 'resolution=merge-duplicates'
        },
        body: JSON.stringify({ id: 'main', data: JSON.parse(value), updated_at: new Date().toISOString() })
      });
      if (!r.ok) throw new Error('Supabase: HTTP ' + r.status);
      return;
    }
    localStorage.setItem(this.key, value);
  }
};
</script>
<script>
// GENERATED from dc-runtime/src/*.ts — do not edit. Rebuild with `cd dc-runtime && bun run build`.
"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/react.ts
  function getReact() {
    const R = window.React;
    if (!R) throw new Error("dc-runtime: window.React is not available yet");
    return R;
  }
  function getReactDOM() {
    const RD = window.ReactDOM;
    if (!RD) throw new Error("dc-runtime: window.ReactDOM is not available yet");
    return RD;
  }
  var h = ((...args) => getReact().createElement(
    ...args
  ));

  // src/parse.ts
  function parseDcDocument(doc) {
    const dc = doc.querySelector("x-dc");
    if (!dc) return null;
    const scriptEl = doc.querySelector("script[data-dc-script]");
    const { props, preview } = parseDataProps(
      scriptEl?.getAttribute("data-props") ?? null
    );
    return {
      template: dc.innerHTML,
      js: scriptEl ? scriptEl.textContent || "" : "",
      props,
      preview
    };
  }
  function parseDcText(src) {
    const openMatch = /<x-dc(?:\s[^>]*)?>/.exec(src);
    if (!openMatch) return null;
    const close = src.lastIndexOf("</x-dc>");
    if (close === -1 || close < openMatch.index) return null;
    const template = src.slice(openMatch.index + openMatch[0].length, close);
    const doc = new DOMParser().parseFromString(src, "text/html");
    const scriptEl = doc.querySelector("script[data-dc-script]");
    const { props, preview } = parseDataProps(
      scriptEl?.getAttribute("data-props") ?? null
    );
    return {
      template,
      js: scriptEl ? scriptEl.textContent || "" : "",
      props,
      preview
    };
  }
  function parseDataProps(raw) {
    if (!raw) return { props: null, preview: null };
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return { props: null, preview: null };
    }
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return { props: null, preview: null };
    }
    const obj = parsed;
    const preview = obj.$preview && typeof obj.$preview === "object" ? obj.$preview : null;
    const rest = {};
    for (const k of Object.keys(obj)) {
      if (k[0] !== "$") rest[k] = obj[k];
    }
    return { props: Object.keys(rest).length ? rest : null, preview };
  }
  function dcNameFromPath(pathname) {
    let p = pathname || "";
    try {
      p = decodeURIComponent(p);
    } catch {
    }
    const base = p.split("/").pop() || "Root";
    return base.replace(/\.dc\.html$/, "").replace(/\.html?$/, "") || "Root";
  }

  // src/boot.ts
  var BASE_CSS = `
    .sc-placeholder{background:color-mix(in srgb,currentColor 8%,transparent);
      border:1px solid color-mix(in srgb,currentColor 50%,transparent);
      border-radius:2px;box-sizing:border-box;overflow:hidden}
    @keyframes sc-shine{0%{background-position:100% 50%}100%{background-position:0% 50%}}
    html.sc-dc-streaming .sc-placeholder,
    html.sc-dc-streaming .sc-interp.sc-missing{position:relative;
      background:color-mix(in srgb,currentColor 5%,transparent);
      border-color:transparent}
    html.sc-dc-streaming .sc-placeholder::before,
    html.sc-dc-streaming .sc-interp.sc-missing::before{content:'';
      position:absolute;inset:0;pointer-events:none;
      background:linear-gradient(90deg,rgba(217,119,87,0) 25%,rgba(247,225,211,.95) 37%,rgba(217,119,87,0) 63%);
      background-size:400% 100%;animation:sc-shine 1.4s ease infinite}
    html.sc-dc-streaming .sc-placeholder:nth-child(n+9 of .sc-placeholder)::before,
    html.sc-dc-streaming .sc-interp.sc-missing:nth-child(n+9 of .sc-interp.sc-missing)::before{animation:none;
      background:color-mix(in srgb,currentColor 8%,transparent)}
    .sc-placeholder-error{padding:4px 8px;font:11px/1.4 ui-monospace,monospace;
      color:color-mix(in srgb,currentColor 70%,transparent);word-break:break-word}
    .sc-interp.sc-missing{display:inline-block;width:2em;height:1em;overflow:hidden;
      vertical-align:text-bottom;background:rgba(255,255,255,.3);border:1px solid rgba(0,0,0,.5);
      border-radius:2px;box-sizing:border-box;color:transparent;
      user-select:none}
    .sc-interp.sc-unresolved{font-family:ui-monospace,monospace;font-size:.85em;
      color:color-mix(in srgb,currentColor 50%,transparent);
      background:color-mix(in srgb,currentColor 10%,transparent);border-radius:3px;
      padding:0 3px}
    .sc-host.sc-has-error{position:relative}
    .sc-logic-error{position:absolute;top:8px;left:8px;z-index:2147483647;max-width:60ch;
      padding:6px 10px;background:#b00020;color:#fff;font:12px/1.4 ui-monospace,monospace;
      border-radius:4px;white-space:pre-wrap;pointer-events:none}
    /* Mirrors PRINT_BASELINE_CSS in apps/web deck-stage-export.ts \u2014 keep both
       in sync until dc-runtime regains a build step. */
    @media print {
      @page { margin: 0.5cm; }
      figure, table { break-inside: avoid; }
      #dc-root, #dc-root > .sc-host { height: auto; }
      *, *::before, *::after {
        print-color-adjust: exact; -webkit-print-color-adjust: exact;
        backdrop-filter: none !important; -webkit-backdrop-filter: none !important;
        animation-delay: -99s !important; animation-duration: .001s !important;
        animation-iteration-count: 1 !important; animation-fill-mode: both !important;
        animation-play-state: running !important; transition-duration: 0s !important;
      }
    }
  `;
  var FULL_PAGE_CSS = "html,body{height:100%;margin:0}#dc-root,#dc-root>.sc-host{height:100%}";
  function rootNameForDocument(doc, loc) {
    let bootPath = loc.pathname || "";
    if (!/\.dc\.html?$/i.test(safeDecode(bootPath))) {
      try {
        bootPath = new URL(doc.baseURI || "/").pathname;
      } catch {
      }
    }
    return dcNameFromPath(bootPath);
  }
  function safeDecode(s) {
    try {
      return decodeURIComponent(s);
    } catch {
      return s;
    }
  }
  function boot(runtime, doc = document) {
    const parsed = parseDcDocument(doc);
    if (!parsed) return null;
    const React = getReact();
    const rootName = rootNameForDocument(doc, location);
    runtime.markFetched(rootName);
    runtime.setRootName(rootName);
    runtime.adoptParsed(rootName, parsed);
    fetch(location.href).then((res) => res.ok ? res.text() : "").then((t) => {
      const raw = t ? parseDcText(t) : null;
      if (raw?.template) runtime.updateHtml(rootName, raw.template);
    }).catch(() => {
    });
    const dc = doc.querySelector("x-dc");
    const hostEl = doc.createElement("div");
    hostEl.id = "dc-root";
    dc.replaceWith(hostEl);
    if (!parsed.preview) {
      const s = doc.createElement("style");
      s.textContent = FULL_PAGE_CSS;
      doc.head.appendChild(s);
    }
    const Root = runtime.getDC(rootName);
    const entry = runtime.registry.get(rootName);
    function StandaloneRoot() {
      const [, setTick] = React.useState(0);
      React.useEffect(() => {
        const sub = () => setTick((n) => n + 1);
        entry.subs.add(sub);
        return () => {
          entry.subs.delete(sub);
        };
      }, []);
      const defaults = React.useMemo(() => {
        const d = {};
        for (const k in entry.propsMeta || {}) {
          const v = entry.propsMeta?.[k]?.default;
          if (v !== void 0) d[k] = v;
        }
        return d;
      }, [entry.propsMeta]);
      return h(Root, { ...defaults, ...entry.propOverrides || {} });
    }
    const ReactDOM = getReactDOM();
    if (ReactDOM.createRoot)
      ReactDOM.createRoot(hostEl).render(h(StandaloneRoot));
    else ReactDOM.render(h(StandaloneRoot), hostEl);
    return rootName;
  }

  // src/expr.ts
  var IDENT_RE = /^[A-Za-z_$][A-Za-z0-9_$]*/;
  var NUMBER_RE = /^-?\d+(\.\d+)?$/;
  function resolve(vals, src) {
    const expr = String(src).trim();
    if (!expr) return void 0;
    if (expr[0] === "(" && expr[expr.length - 1] === ")" && parensWrapWhole(expr)) {
      return resolve(vals, expr.slice(1, -1));
    }
    const eq = findTopLevelEquality(expr);
    if (eq) {
      const lv = resolve(vals, expr.slice(0, eq.index));
      const rv = resolve(vals, expr.slice(eq.index + eq.op.length));
      switch (eq.op) {
        case "===":
          return lv === rv;
        case "!==":
          return lv !== rv;
        case "==":
          return lv == rv;
        default:
          return lv != rv;
      }
    }
    if (expr[0] === "!") return !resolve(vals, expr.slice(1));
    if (expr === "true") return true;
    if (expr === "false") return false;
    if (expr === "null") return null;
    if (expr === "undefined") return void 0;
    if (NUMBER_RE.test(expr)) return Number(expr);
    if (expr.length >= 2 && (expr[0] === '"' || expr[0] === "'") && expr[expr.length - 1] === expr[0]) {
      return expr.slice(1, -1);
    }
    return resolvePath(vals, expr);
  }
  function parensWrapWhole(expr) {
    let depth = 0;
    for (let i = 0; i < expr.length - 1; i++) {
      if (expr[i] === "(") depth++;
      else if (expr[i] === ")") {
        depth--;
        if (depth === 0) return false;
      }
    }
    return true;
  }
  function findTopLevelEquality(expr) {
    let depth = 0;
    for (let i = 0; i < expr.length; i++) {
      const c = expr[i];
      if (c === "[" || c === "(") depth++;
      else if (c === "]" || c === ")") depth--;
      else if (depth === 0 && (c === "=" || c === "!") && expr[i + 1] === "=") {
        if (i > 0 && (expr[i - 1] === "=" || expr[i - 1] === "!")) continue;
        if (!expr.slice(0, i).trim()) continue;
        const op = expr[i + 2] === "=" ? c + "==" : c + "=";
        return { index: i, op };
      }
    }
    return null;
  }
  function resolvePath(vals, expr) {
    const head = expr.match(IDENT_RE);
    if (!head) return void 0;
    let cur = vals == null ? void 0 : vals[head[0]];
    let i = head[0].length;
    while (i < expr.length) {
      if (expr[i] === ".") {
        const m = expr.slice(i + 1).match(IDENT_RE) || expr.slice(i + 1).match(/^\d+/);
        if (!m) return void 0;
        cur = cur == null ? void 0 : cur[m[0]];
        i += 1 + m[0].length;
      } else if (expr[i] === "[") {
        let depth = 1;
        let j = i + 1;
        while (j < expr.length && depth > 0) {
          if (expr[j] === "[") depth++;
          else if (expr[j] === "]") {
            depth--;
            if (depth === 0) break;
          }
          j++;
        }
        if (depth !== 0) return void 0;
        const key = resolve(vals, expr.slice(i + 1, j));
        cur = cur == null ? void 0 : cur[key];
        i = j + 1;
      } else {
        return void 0;
      }
    }
    return cur;
  }

  // src/encode.ts
  var CAMEL_ATTR = "sc-camel-";
  var INLINE_TEXT_TAGS = new Set(
    "a abbr b bdi bdo br cite code del dfn em i ins kbd mark q s samp small span strike strong sub sup u var wbr".split(
      " "
    )
  );
  var RAW_WRAP = {
    select: "sc-raw-select",
    table: "sc-raw-table",
    tbody: "sc-raw-tbody",
    thead: "sc-raw-thead",
    tfoot: "sc-raw-tfoot",
    tr: "sc-raw-tr",
    td: "sc-raw-td",
    th: "sc-raw-th",
    caption: "sc-raw-caption"
  };
  var RAW_UNWRAP = Object.fromEntries(
    Object.entries(RAW_WRAP).map(([k, v]) => [v, k])
  );
  var EVENT_MAP = {
    onclick: "onClick",
    onchange: "onChange",
    oninput: "onInput",
    onsubmit: "onSubmit",
    onkeydown: "onKeyDown",
    onkeyup: "onKeyUp",
    onkeypress: "onKeyPress",
    onmousedown: "onMouseDown",
    onmouseup: "onMouseUp",
    onmouseenter: "onMouseEnter",
    onmouseleave: "onMouseLeave",
    onfocus: "onFocus",
    onblur: "onBlur",
    ondoubleclick: "onDoubleClick",
    oncontextmenu: "onContextMenu"
  };
  var ATTRS = `(?:[^>"']|"[^"]*"|'[^']*')*`;
  var IMPORT_SELF_CLOSE_RE = new RegExp(
    "<(x-import|dc-import)(" + ATTRS + ")/>",
    "gi"
  );
  var CAMEL_ATTR_RE = /(\s)([a-z]+[A-Z][A-Za-z0-9]*)(\s*=)/g;
  function encodeCase(html) {
    html = html.replace(
      IMPORT_SELF_CLOSE_RE,
      (_, t, a) => "<" + t + a + "></" + t + ">"
    );
    html = html.replace(/<helmet(\s|>)/gi, "<sc-helmet$1");
    html = html.replace(/<\/helmet\s*>/gi, "</sc-helmet>");
    html = html.replace(
      CAMEL_ATTR_RE,
      (_, sp, name, eq) => sp + CAMEL_ATTR + name.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase()) + eq
    );
    for (const [real, alias] of Object.entries(RAW_WRAP)) {
      html = html.replace(
        new RegExp("(</?)" + real + "(?=[\\s>])", "gi"),
        "$1" + alias
      );
    }
    return html;
  }
  function kebabToCamel(s) {
    return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  }
  function cssToObj(css) {
    const o = {};
    for (const decl of css.split(";")) {
      const i = decl.indexOf(":");
      if (i < 0) continue;
      const prop = decl.slice(0, i).trim();
      o[prop.startsWith("--") ? prop : kebabToCamel(prop)] = decl.slice(i + 1).trim();
    }
    return o;
  }
  function compileAttr(raw) {
    const whole = raw.match(/^\s*\{\{([\s\S]+?)\}\}\s*$/);
    if (whole) {
      const path = whole[1];
      return (vals) => resolve(vals, path);
    }
    if (raw.includes("{{")) {
      const parts = raw.split(/\{\{([\s\S]+?)\}\}/g);
      return (vals) => parts.map((s, i) => i & 1 ? resolve(vals, s) ?? "" : s).join("");
    }
    return () => raw;
  }

  // src/compile.ts
  function collectProps(node, kind, host) {
    const propGetters = [];
    const pseudoClasses = [];
    let hintSize = null;
    for (const { name, value } of [...node.attributes]) {
      if (name === "sc-name" || name === "data-dc-tpl") continue;
      let key = name;
      if (key.startsWith(CAMEL_ATTR))
        key = kebabToCamel(key.slice(CAMEL_ATTR.length));
      if (key === "hint-size") {
        hintSize = value;
        continue;
      }
      if (key.startsWith("style-")) {
        pseudoClasses.push(host.pseudoClass(key.slice(6), value));
        continue;
      }
      if (kind !== "dom") {
        if (key.includes("-") && !(kind === "x-import" && (key.startsWith("aria-") || key.startsWith("data-"))))
          key = kebabToCamel(key);
      } else {
        if (key === "class") key = "className";
        else if (key === "for") key = "htmlFor";
        else if (key.startsWith("on"))
          key = EVENT_MAP[key] || "on" + key[2].toUpperCase() + key.slice(3);
      }
      propGetters.push([key, compileAttr(value)]);
    }
    return { propGetters, pseudoClasses, hintSize };
  }
  var HOST_STYLE_PROPS = /* @__PURE__ */ new Set([
    "position",
    "left",
    "right",
    "top",
    "bottom",
    "inset",
    "width",
    "height",
    "z-index",
    "transform"
  ]);
  function hostPositionStyle(style) {
    const all = typeof style === "string" ? cssToObj(style) : style != null && typeof style === "object" ? style : null;
    if (!all) return void 0;
    const out = {};
    for (const [k, v] of Object.entries(all)) {
      const kebab = k.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase());
      if (HOST_STYLE_PROPS.has(kebab)) out[k] = v;
    }
    return Object.keys(out).length ? out : void 0;
  }
  function compileTemplate(html, host) {
    const tpl = document.createElement("template");
    //! nosemgrep: direct-inner-html-assignment
    tpl.innerHTML = encodeCase(html);
    let tplN = 0;
    (function stamp(node) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        node.setAttribute("data-dc-tpl", String(tplN++));
      }
      for (const c of node.childNodes) stamp(c);
    })(tpl.content);
    const builders = walkChildren(tpl.content, host);
    const render = ((vals, ctx) => builders.map((b, i) => b(vals || {}, ctx, i)));
    render.__annotated = tpl.innerHTML;
    return render;
  }
  function walkChildren(node, host) {
    return [...node.childNodes].map((c) => walk(c, host)).filter((b) => b != null);
  }
  function walk(node, host) {
    if (node.nodeType === Node.TEXT_NODE) return walkText(node);
    if (node.nodeType !== Node.ELEMENT_NODE) return null;
    const el = node;
    const tag = el.tagName.toLowerCase();
    if (tag === "sc-for") return walkFor(el, host);
    if (tag === "sc-if") return walkIf(el, host);
    if (tag === "x-import") return walkXImport(el, host);
    if (tag === "sc-helmet") return host.helmet(el);
    if (tag === "dc-import") return walkComponent(el, host);
    return walkElement(el, host);
  }
  var warnedHoles = /* @__PURE__ */ new Set();
  function warnUnresolved(ctx, what) {
    const key = (ctx?.__name || "?") + "\0" + what;
    if (warnedHoles.has(key)) return;
    warnedHoles.add(key);
    console.warn("[dc-runtime] " + (ctx?.__name || "template") + ": " + what);
  }
  function walkText(node) {
    const txt = node.nodeValue ?? "";
    if (!txt.includes("{{")) {
      if (!txt.trim() && !txt.includes(" ")) return null;
      return () => txt;
    }
    const parts = txt.split(/\{\{([\s\S]+?)\}\}/g);
    return (vals, ctx, key) => h(
      getReact().Fragment,
      { key },
      ...parts.map((p, i) => {
        if (!(i & 1)) return p;
        const v = resolve(vals, p);
        if (v === void 0) {
          if (!ctx?.__streamingNow) {
            if (document.body?.hasAttribute("data-dc-editor-on")) {
              return h(
                "span",
                { key: i, className: "sc-interp sc-unresolved" },
                "{{ " + p.trim() + " }}"
              );
            }
            warnUnresolved(
              ctx,
              "{{ " + p.trim() + " }} never resolved \u2014 rendered as empty"
            );
            return null;
          }
          return h(
            "span",
            { key: i, className: "sc-interp sc-missing" },
            p.trim()
          );
        }
        if (getReact().isValidElement(v) || Array.isArray(v)) {
          return h(getReact().Fragment, { key: i }, v);
        }
        if (v === null || typeof v === "boolean") return null;
        return h("span", { key: i, className: "sc-interp" }, String(v));
      })
    );
  }
  function walkFor(el, host) {
    const listGet = compileAttr(el.getAttribute("list") || "");
    const asName = el.getAttribute("as") || "item";
    const hintN = parseInt(el.getAttribute("hint-placeholder-count") || "0", 10);
    const kids = walkChildren(el, host);
    const listSrc = el.getAttribute("list") || "";
    return (vals, ctx, key) => {
      let list = listGet(vals);
      if (!Array.isArray(list)) {
        if (!ctx?.__streamingNow) {
          if (list !== void 0 && list !== null) {
            warnUnresolved(
              ctx,
              'sc-for list="' + listSrc + '" is not an array (' + typeof list + ")"
            );
          }
          list = [];
        } else {
          list = hintN > 0 ? Array(hintN).fill(void 0) : [];
        }
      }
      return h(
        getReact().Fragment,
        { key },
        list.map((item, i) => {
          const sub = { ...vals, [asName]: item, $index: i };
          return h(
            getReact().Fragment,
            { key: i },
            kids.map((b, j) => b(sub, ctx, j))
          );
        })
      );
    };
  }
  function walkIf(el, host) {
    const valGet = compileAttr(el.getAttribute("value") || "");
    const hintRaw = el.getAttribute("hint-placeholder-val");
    const hintGet = hintRaw != null ? compileAttr(hintRaw) : null;
    const kids = walkChildren(el, host);
    return (vals, ctx, key) => {
      let v = valGet(vals);
      if (v === void 0 && hintGet && ctx?.__streamingNow) v = hintGet(vals);
      return v ? h(
        getReact().Fragment,
        { key },
        kids.map((b, j) => b(vals, ctx, j))
      ) : null;
    };
  }
  function walkComponent(el, host) {
    const name = el.getAttribute("name") || el.getAttribute("component") || "";
    el.removeAttribute("name");
    el.removeAttribute("component");
    const tplId = el.getAttribute("data-dc-tpl");
    const styleRaw = el.getAttribute("style");
    el.removeAttribute("style");
    const styleGet = styleRaw != null ? compileAttr(styleRaw) : null;
    const { propGetters, hintSize } = collectProps(el, "dc-import", host);
    const kids = walkChildren(el, host);
    return (vals, ctx, key) => {
      const props = {
        key,
        __hintSize: hintSize,
        __tplId: tplId,
        __hostStyle: styleGet ? hostPositionStyle(styleGet(vals)) : void 0
      };
      for (const [k, g] of propGetters) {
        const v = g(vals);
        if (k === "dcProps") {
          if (v && typeof v === "object") Object.assign(props, v);
          continue;
        }
        props[k] = v;
      }
      if (kids.length) props.children = kids.map((b, j) => b(vals, ctx, j));
      return h(host.component(name), props);
    };
  }
  function walkXImport(el, host) {
    const globalNameGet = compileAttr(
      el.getAttribute("component-from-global-scope") || ""
    );
    const exportNameGet = compileAttr(
      el.getAttribute("component") || el.getAttribute("name") || ""
    );
    const fromRaw = el.getAttribute("from") || el.getAttribute("src") || el.getAttribute("import") || "";
    const urls = fromRaw.trim() ? fromRaw.trim().split(/\s+/) : [];
    const url = urls.length ? urls[urls.length - 1] : "";
    const kindOf = (u) => /\.(jsx|tsx)(\?|#|$)/i.test(u) ? "jsx" : "js";
    const tplId = el.getAttribute("data-dc-tpl");
    const styleRaw = el.getAttribute("style");
    el.removeAttribute("style");
    const styleGet = styleRaw != null ? compileAttr(styleRaw) : null;
    const wrap = tplId != null || styleGet != null;
    const { propGetters, hintSize } = collectProps(el, "x-import", host);
    const hasContent = el.children.length > 0 || !!(el.textContent || "").trim();
    const kids = hasContent ? walkChildren(el, host) : [];
    const urlBindable = fromRaw.includes("{{");
    if (urls.length && !urlBindable) {
      let prev;
      for (const u of urls) prev = host.loadExternal(kindOf(u), u, prev);
    }
    const evalName = (g, vals) => {
      const v = g(vals);
      const s = v == null ? "" : String(v);
      return s.includes("{{") ? "" : s;
    };
    return (vals, ctx, key) => {
      const globalName = evalName(globalNameGet, vals);
      const name = globalName || evalName(exportNameGet, vals);
      const C = !name || urlBindable ? null : globalName ? host.resolveExternalGlobal(url, globalName) : host.resolveExternal(url, name);
      const hostStyle = styleGet ? hostPositionStyle(styleGet(vals)) : void 0;
      const wrapper = wrap ? {
        key,
        className: "sc-host-x",
        "data-dc-tpl": tplId,
        style: hostStyle || { display: "contents" }
      } : null;
      if (!C) {
        const error = urlBindable ? "x-import `from` cannot contain {{ \u2026 }} \u2014 module URLs are resolved at parse time; use a literal URL" : host.resolveExternalError(url, name);
        const ph = host.placeholder({
          key: wrapper ? void 0 : key,
          name,
          hintSize,
          error
        });
        return wrapper ? h("div", wrapper, ph) : ph;
      }
      const props = wrapper ? {} : { key };
      let unresolvedHole = false;
      for (const [k, g] of propGetters) {
        if (k === "component" || k === "componentFromGlobalScope" || k === "from") {
          continue;
        }
        const v = g(vals);
        if (v === void 0) unresolvedHole = true;
        if (k === "dcProps") {
          if (v && typeof v === "object") Object.assign(props, v);
          continue;
        }
        props[k] = v;
      }
      if (unresolvedHole && ctx?.__htmlStreamingNow) {
        const ph = host.placeholder({
          key: wrapper ? void 0 : key,
          name,
          hintSize,
          error: null
        });
        return wrapper ? h("div", wrapper, ph) : ph;
      }
      if (kids.length) props.children = kids.map((b, j) => b(vals, ctx, j));
      return wrapper ? h("div", wrapper, h(C, props)) : h(C, props);
    };
  }
  function contentKey(el) {
    const clone = el.cloneNode(true);
    for (const d of clone.querySelectorAll("*")) {
      while (d.attributes.length) d.removeAttribute(d.attributes[0].name);
    }
    const s = clone.innerHTML;
    let h2 = 5381;
    for (let i = 0; i < s.length; i++) h2 = (h2 << 5) + h2 + s.charCodeAt(i) | 0;
    return s.length + "." + (h2 >>> 0).toString(36);
  }
  var NEVER_CONTENT_KEYED = new Set(
    "script style textarea option title select canvas iframe video audio".split(
      " "
    )
  );
  var NOT_INLINE_SELECTOR = ":not(" + [...INLINE_TEXT_TAGS].join(",") + ")";
  function walkElement(el, host) {
    const realTag = RAW_UNWRAP[el.localName] || el.localName;
    const tplId = el.getAttribute("data-dc-tpl");
    const inlineOnly = el.childNodes.length > 0 && !NEVER_CONTENT_KEYED.has(realTag) && el.querySelector(NOT_INLINE_SELECTOR) === null;
    const keySuffix = inlineOnly ? "|" + contentKey(el) : "";
    const { propGetters, pseudoClasses } = collectProps(el, "dom", host);
    const kids = walkChildren(el, host);
    return (vals, ctx, key) => {
      const props = {
        key: key + keySuffix,
        "data-dc-tpl": tplId
      };
      for (const [k, g] of propGetters) {
        let v = g(vals);
        if (k === "style" && typeof v === "string") v = cssToObj(v);
        if ((k === "value" || k === "checked") && v === void 0) {
          v = k === "checked" ? false : "";
        }
        props[k] = v;
      }
      if (pseudoClasses.length) {
        props.className = [props.className, ...pseudoClasses].filter(Boolean).join(" ");
      }
      return h(realTag, props, ...kids.map((b, j) => b(vals, ctx, j)));
    };
  }

  // src/logic.ts
  var StreamableLogic = class {
    constructor(props) {
      __publicField(this, "props");
      __publicField(this, "state", {});
      /** Back-pointer to the wrapper component, installed after construction. */
      __publicField(this, "__host");
      this.props = props || {};
    }
    setState(update, cb) {
      this.__host && this.__host.__setLogicState(update, cb);
    }
    forceUpdate() {
      this.__host && this.__host.forceUpdate();
    }
    componentDidMount() {
    }
    componentDidUpdate(_prevProps) {
    }
    componentWillUnmount() {
    }
    /** The flat object the template renders against (merged over props). */
    renderVals() {
      return {};
    }
  };
  function evalDcLogic(src) {
    //! nosemgrep: eval-and-function-constructor
    const fn = new Function(
      "DCLogic",
      "StreamableLogic",
      "React",
      src + '\n;return (typeof Component!=="undefined"&&Component)||undefined;'
    );
    return fn(StreamableLogic, StreamableLogic, getReact());
  }

  // src/component.ts
  function shallowEqual(a, b) {
    if (!b) return false;
    const ak = Object.keys(a).filter((k) => k !== "children");
    const bk = Object.keys(b).filter((k) => k !== "children");
    if (ak.length !== bk.length) return false;
    for (const k of ak) if (a[k] !== b[k]) return false;
    return true;
  }
  function Placeholder({
    name,
    hintSize,
    streaming,
    error
  }) {
    const [w, hgt] = (hintSize || "100%,60px").split(",");
    return h(
      "div",
      {
        className: "sc-placeholder" + (streaming ? " sc-streaming" : ""),
        style: { width: w.trim(), height: hgt && hgt.trim() },
        title: name
      },
      error ? h(
        "div",
        { className: "sc-placeholder-error" },
        (name ? name + ": " : "") + error
      ) : null
    );
  }
  function hintToMin(hint) {
    if (!hint) return void 0;
    const [w, hgt] = hint.split(",");
    return { minWidth: w.trim(), minHeight: hgt && hgt.trim() };
  }
  function createComponentFactory(registry, ensureFetched) {
    const React = getReact();
    const AncestorContext = React.createContext([]);
    class StreamableComponent extends React.Component {
      constructor(props) {
        super(props);
        __publicField(this, "__name");
        __publicField(this, "__sub");
        __publicField(this, "__needsDidMount", false);
        /** Snapshot of the registry's streaming flags taken at render time —
         *  builders read it off the RenderCtx (this) to pick placeholder vs
         *  render-nothing for unresolved values. */
        __publicField(this, "__streamingNow", false);
        __publicField(this, "__htmlStreamingNow", false);
        /** When a construct throws, remember the (class, registry.ver, props)
         *  triple so render-time reconcile doesn't re-attempt it on every parent
         *  re-render. A registry bump (new class, template, external module
         *  resolving via bumpAll) changes `ver` and breaks the memo so an
         *  env-dependent constructor can self-heal. */
        __publicField(this, "__failedLogic", null);
        __publicField(this, "__failedUserProps", null);
        __publicField(this, "__failedVer", -1);
        /** Per-instance constructor error — kept here (not on the registry entry)
         *  so one instance's successful construct can't hide a sibling's failure,
         *  and a construct can never wipe an eval error `updateJs` recorded on
         *  `r.logicError`. */
        __publicField(this, "__ctorError", null);
        __publicField(this, "logic");
        this.__name = props.__name;
        this.state = { __v: 0, __err: null };
        this.__sub = () => {
          if (this.state.__err) this.setState({ __err: null });
          this.forceUpdate();
        };
        this.__makeLogic(registry.get(this.__name).Logic, null);
        ensureFetched(this.__name);
      }
      /** Error-boundary hook: a render crash anywhere in this DC's subtree
       *  (its own template, an x-import'd component, a child DC without its
       *  own deeper boundary) lands here instead of unmounting the page. */
      static getDerivedStateFromError(e) {
        return { __err: e instanceof Error && e.message ? e.message : String(e) };
      }
      componentDidCatch(e, info) {
        console.error(
          "[dc-runtime] render error in <" + this.__name + ">:",
          e,
          info?.componentStack || ""
        );
      }
      /** Instantiate the logic class (or the no-op base) and adopt `prevState`
       *  over its initial state — used both at mount and on hot-swap. */
      __makeLogic(Logic, prevState) {
        const L = Logic || StreamableLogic;
        try {
          this.logic = new L(this.__userProps());
          this.__failedLogic = null;
          this.__failedUserProps = null;
          this.__ctorError = null;
        } catch (e) {
          console.error(e);
          this.__failedLogic = Logic;
          this.__failedUserProps = this.__userProps();
          this.__failedVer = registry.get(this.__name).ver;
          this.__ctorError = this.__name + ": " + (e instanceof Error && e.message ? e.message : String(e));
          this.logic = new StreamableLogic(
            this.__userProps()
          );
        }
        this.logic.__host = this;
        if (prevState)
          this.logic.state = { ...this.logic.state || {}, ...prevState };
      }
      /** The props the author's logic + template see — internal __-prefixed
       *  wiring stripped. */
      __userProps() {
        const { __name, __hintSize, __tplId, __hostStyle, ...rest } = this.props;
        return rest;
      }
      __setLogicState(update, cb) {
        const prev = this.logic.state;
        const patch = typeof update === "function" ? update(prev) : update;
        this.logic.state = { ...prev, ...patch };
        this.setState((s) => ({ __v: s.__v + 1 }), cb);
      }
      /** Swap the logic instance when the registry's Logic class changed
       *  (streaming completion, hot reload). State carries over; didMount
       *  re-fires after the swap commits so refs exist. */
      __reconcileLogic() {
        const r = registry.get(this.__name);
        const Next = r.Logic;
        const Cur = this.logic.constructor;
        if (Next === Cur || !Next && Cur === StreamableLogic || Next === this.__failedLogic && r.ver === this.__failedVer && shallowEqual(this.__userProps(), this.__failedUserProps)) {
          return;
        }
        if (!this.__needsDidMount) {
          try {
            this.logic.componentWillUnmount();
          } catch (e) {
            console.error(e);
          }
        }
        this.__makeLogic(Next, this.logic.state);
        this.__needsDidMount = true;
      }
      componentDidMount() {
        registry.get(this.__name).subs.add(this.__sub);
        try {
          this.logic.componentDidMount();
        } catch (e) {
          console.error(e);
        }
      }
      componentDidUpdate(prevProps) {
        this.logic.props = this.__userProps();
        if (this.__needsDidMount) {
          if (this.state.__err || !registry.get(this.__name).tpl) return;
          this.__needsDidMount = false;
          try {
            this.logic.componentDidMount();
          } catch (e) {
            console.error(e);
          }
        } else {
          try {
            this.logic.componentDidUpdate(prevProps);
          } catch (e) {
            console.error(e);
          }
        }
      }
      componentWillUnmount() {
        registry.get(this.__name).subs.delete(this.__sub);
        if (!this.__needsDidMount) {
          try {
            this.logic.componentWillUnmount();
          } catch (e) {
            console.error(e);
          }
        }
      }
      render() {
        const r = registry.get(this.__name);
        const cls = "sc-host" + (r.htmlStreaming ? " sc-streaming-html" : "") + (r.jsStreaming ? " sc-streaming-js" : "");
        const hintStyle = r.htmlStreaming ? hintToMin(this.props.__hintSize) : void 0;
        const hostStyle = this.props.__hostStyle || hintStyle ? { ...hintStyle || {}, ...this.props.__hostStyle || {} } : void 0;
        const hostBase = {
          className: cls,
          style: hostStyle,
          "data-sc-name": this.__name,
          "data-dc-tpl": this.props.__tplId
        };
        const chain = Array.isArray(this.context) ? this.context : [];
        if (chain.includes(this.__name)) {
          const cycle = [
            ...chain.slice(chain.indexOf(this.__name)),
            this.__name
          ].join(" \u2192 ");
          return h(
            "div",
            { ...hostBase, className: cls + " sc-has-error" },
            h(Placeholder, {
              name: this.__name,
              hintSize: this.props.__hintSize,
              error: "circular import: " + cycle
            })
          );
        }
        if (this.state.__err) {
          return h(
            "div",
            { ...hostBase, className: cls + " sc-has-error" },
            h(
              "div",
              { className: "sc-logic-error", "data-omelette-chrome": "" },
              this.__name + ": " + this.state.__err
            ),
            h(Placeholder, {
              name: this.__name,
              hintSize: this.props.__hintSize,
              error: this.state.__err
            })
          );
        }
        this.__reconcileLogic();
        if (!r.tpl) {
          return h(
            "div",
            hostBase,
            h(Placeholder, { name: this.__name, hintSize: this.props.__hintSize })
          );
        }
        const userProps = this.__userProps();
        this.logic.props = userProps;
        let vals = userProps;
        let renderErr = r.logicError || this.__ctorError;
        try {
          vals = { ...userProps, ...this.logic.renderVals() || {} };
        } catch (e) {
          console.error(e);
          renderErr = this.__name + ".renderVals(): " + (e instanceof Error && e.message ? e.message : String(e));
        }
        this.__streamingNow = !!(r.htmlStreaming || r.jsStreaming);
        this.__htmlStreamingNow = !!r.htmlStreaming;
        return h(
          "div",
          { ...hostBase, className: cls + (renderErr ? " sc-has-error" : "") },
          renderErr && h(
            "div",
            { className: "sc-logic-error", "data-omelette-chrome": "" },
            renderErr
          ),
          h(
            AncestorContext.Provider,
            { value: [...chain, this.__name] },
            r.tpl(vals, this)
          )
        );
      }
    }
    __publicField(StreamableComponent, "contextType", AncestorContext);
    const named = /* @__PURE__ */ new Map();
    function getDC(name) {
      const hit = named.get(name);
      if (hit) return hit;
      function Dispatcher(p) {
        const [, setTick] = React.useState(0);
        React.useEffect(() => {
          const sub = () => setTick((n) => n + 1);
          registry.get(name).subs.add(sub);
          return () => {
            registry.get(name).subs.delete(sub);
          };
        }, []);
        ensureFetched(name);
        return h(StreamableComponent, { ...p, __name: name });
      }
      Dispatcher.displayName = name;
      named.set(name, Dispatcher);
      return Dispatcher;
    }
    return {
      getDC,
      StreamableComponent
    };
  }

  // src/external.ts
  var isCustomElementName = (n) => !n.includes(".") && n.includes("-");
  function isRenderableType(g) {
    if (typeof g === "function") return !isElementClass(g);
    return typeof g === "object" && g !== null && typeof g.$$typeof === "symbol";
  }
  function resolveDottedPath(root, name) {
    let cur = root;
    for (const seg of name.split(".")) {
      if (cur == null) return void 0;
      cur = cur[seg];
    }
    return cur;
  }
  var BABEL_URL = "https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.4/babel.min.js";
  var BABEL_SRI = "";
  var GLOBAL_POLL_INTERVAL_MS = 50;
  var GLOBAL_POLL_TIMEOUT_MS = 3e4;
  function createExternalModules(onResolved) {
    const cache = /* @__PURE__ */ new Map();
    let babelLoading = null;
    const reportedMissing = /* @__PURE__ */ new Map();
    const polling = /* @__PURE__ */ new Set();
    function ensureBabel() {
      if (window.Babel) return Promise.resolve();
      if (babelLoading) return babelLoading;
      babelLoading = new Promise((res, rej) => {
        const s = document.createElement("script");
        s.src = BABEL_URL;
        if (BABEL_SRI) s.integrity = BABEL_SRI;
        s.crossOrigin = "anonymous";
        s.onload = () => res();
        s.onerror = rej;
        document.head.appendChild(s);
      });
      return babelLoading;
    }
    const pending = /* @__PURE__ */ new Map();
    function load(kind, url, after) {
      const existing = pending.get(url);
      if (existing) return existing;
      cache.set(url, null);
      console.info("[dc-runtime] x-import: loading", url, "(" + kind + ")");
      const ready = Promise.all([
        kind === "jsx" ? ensureBabel() : Promise.resolve(),
        after ?? Promise.resolve()
      ]);
      const p = ready.then(() => fetch(url)).then((r) => {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.text();
      }).then((src) => {
        const code = kind === "jsx" ? window.Babel.transform(src, {
          filename: url,
          presets: ["react", "typescript"]
        }).code : src;
        const module = { exports: {} };
        const before = new Set(Object.keys(window));
        //! nosemgrep: eval-and-function-constructor
        new Function("React", "module", "exports", "require", code)(
          getReact(),
          module,
          module.exports,
          () => ({})
        );
        const globals = {};
        for (const k of Object.keys(window)) {
          if (!before.has(k) && typeof window[k] === "function") {
            globals[k] = window[k];
          }
        }
        cache.set(url, { mod: module.exports, globals });
        console.info(
          "[dc-runtime] x-import: loaded",
          url,
          "\u2014 exports:",
          Object.keys(module.exports),
          "window globals:",
          Object.keys(globals)
        );
        onResolved();
      }).catch((e) => {
        cache.set(url, {
          mod: {},
          globals: {},
          error: "failed to load: " + (e instanceof Error && e.message ? e.message : String(e))
        });
        console.error(
          "[dc-runtime] x-import: FAILED to load",
          url,
          "(" + kind + ")",
          e
        );
        onResolved();
      });
      pending.set(url, p);
      return p;
    }
    function resolve2(url, name) {
      const entry = cache.get(url);
      if (!entry) return null;
      const { mod, globals } = entry;
      const C = mod && mod[name] || globals && globals[name] || typeof window !== "undefined" && window[name] || mod && mod.default;
      if (typeof C === "function") return C;
      const key = url + "\0" + name;
      if (!reportedMissing.has(key)) {
        reportedMissing.set(
          key,
          entry.error || 'no export named "' + name + '" (has: ' + Object.keys(mod).join(", ") + ")"
        );
        console.error(
          "[dc-runtime] x-import: module",
          url,
          "loaded but has no component named",
          JSON.stringify(name),
          "\u2014 available exports:",
          Object.keys(mod),
          "window globals:",
          Object.keys(globals),
          ". The module must `module.exports = {" + name + "}` or set `window." + name + "`."
        );
      }
      return null;
    }
    function waitForGlobal(name) {
      if (polling.has(name)) return;
      polling.add(name);
      const started = Date.now();
      const isCE = isCustomElementName(name);
      const tick = () => {
        const found = isCE ? customElements.get(name) : isRenderableType(resolveDottedPath(window, name));
        if (found) {
          polling.delete(name);
          onResolved();
          return;
        }
        if (Date.now() - started >= GLOBAL_POLL_TIMEOUT_MS) {
          console.warn(
            "[dc-runtime] x-import: global",
            JSON.stringify(name),
            "never appeared on window after " + GLOBAL_POLL_TIMEOUT_MS + "ms"
          );
          return;
        }
        setTimeout(tick, GLOBAL_POLL_INTERVAL_MS);
      };
      setTimeout(tick, GLOBAL_POLL_INTERVAL_MS);
    }
    function resolveGlobal(url, name) {
      const isCE = isCustomElementName(name);
      if (!url) {
        if (isCE) {
          if (customElements.get(name)) return name;
          waitForGlobal(name);
          return null;
        }
        const g2 = resolveDottedPath(window, name);
        if (isRenderableType(g2)) return g2;
        waitForGlobal(name);
        return null;
      }
      const entry = cache.get(url);
      if (!entry) return null;
      if (isCE && customElements.get(name)) return name;
      const g = entry.globals[name] ?? resolveDottedPath(window, name);
      if (isRenderableType(g)) return g;
      if (name.includes(".")) return null;
      const key = url + "\0global\0" + name;
      if (!reportedMissing.has(key)) {
        reportedMissing.set(key, null);
        if (isCE && !customElements.get(name)) {
          console.warn(
            "[dc-runtime] x-import:",
            url,
            "loaded but no custom element",
            JSON.stringify(name),
            "is registered and window." + name + " is not a function \u2014 rendering <" + name + "> as an unknown element."
          );
        }
      }
      return name;
    }
    function getError(url, name) {
      const entry = cache.get(url);
      if (entry?.error) return entry.error;
      return reportedMissing.get(url + "\0" + name) || null;
    }
    return { load, resolve: resolve2, resolveGlobal, getError };
  }
  function isElementClass(g) {
    try {
      return typeof g === "function" && typeof HTMLElement !== "undefined" && g.prototype instanceof HTMLElement;
    } catch {
      return false;
    }
  }

  // src/atomics.ts
  var ATOMIC_CSS = (
    // layout
    ".fx{display:flex}.col{display:flex;flex-direction:column}.grid{display:grid}.ac{align-items:center}.jc{justify-content:center}.jb{justify-content:space-between}.f1{flex:1}.noshrink{flex-shrink:0}.wrap{flex-wrap:wrap}.fw5{font-weight:500}.fw6{font-weight:600}.fw7{font-weight:700}.fw8{font-weight:800}.fs11{font-size:11px}.fs12{font-size:12px}.fs13{font-size:13px}.fs14{font-size:14px}.fs15{font-size:15px}.fs16{font-size:16px}.fs20{font-size:20px}.fs22{font-size:22px}.upper{text-transform:uppercase}.tc{text-align:center}.nowrap{white-space:nowrap}.gap8{gap:8px}.gap10{gap:10px}.gap12{gap:12px}.gap16{gap:16px}.gap24{gap:24px}.m0{margin:0}.mt8{margin-top:8px}.mt12{margin-top:12px}.mt16{margin-top:16px}.mb8{margin-bottom:8px}.mb12{margin-bottom:12px}.mb16{margin-bottom:16px}.posrel{position:relative}.posabs{position:absolute}.round{border-radius:50%}.ohide{overflow:hidden}.bbox{box-sizing:border-box}.pointer{cursor:pointer}.w100{width:100%}.b0{border:none}"
  );

  // src/helmet.ts
  var DESIGN_DOC_MODE_RE = /<meta\b[^>]*\bname\s*=\s*["']design_doc_mode["'][^>]*\b(?:content|value)\s*=\s*["'](\w+)["']/i;
  var CANVAS_BG_LIGHT = "#f0eee6";
  var CANVAS_BG_DARK = "#2e2c26";
  function createHelmetManager(doc, isStreaming) {
    const mounted = /* @__PURE__ */ new Set();
    const live = /* @__PURE__ */ new Map();
    let designDocMode = null;
    let canvasStyleEl = null;
    let appTheme = "light";
    try {
      const ds = doc.documentElement.dataset.theme;
      appTheme = ds === "dark" || ds === "light" ? ds : new URLSearchParams(doc.defaultView?.location.search ?? "").get(
        "theme"
      ) === "dark" ? "dark" : "light";
    } catch {
    }
    function applyCanvasBg() {
      if (!canvasStyleEl) return;
      const bg = appTheme === "dark" ? CANVAS_BG_DARK : CANVAS_BG_LIGHT;
      canvasStyleEl.textContent = `html,body{background:${bg}}#dc-root>.sc-host{position:relative}`;
    }
    function postDesignMode(mode) {
      if (window.parent === window) return;
      try {
        window.parent.postMessage({ type: "__dc_design_mode", mode }, "*");
      } catch {
      }
    }
    function setDesignDocMode(mode) {
      if (mode === designDocMode) return;
      designDocMode = mode;
      postDesignMode(mode);
      if (mode === "canvas") {
        doc.documentElement.setAttribute("data-dc-canvas", "");
        canvasStyleEl = doc.createElement("style");
        canvasStyleEl.setAttribute("data-dc-canvas", "");
        applyCanvasBg();
        doc.head.appendChild(canvasStyleEl);
      } else {
        doc.documentElement.removeAttribute("data-dc-canvas");
        canvasStyleEl?.remove();
        canvasStyleEl = null;
      }
    }
    window.addEventListener("message", (e) => {
      const type = e.data && e.data.type;
      if (type === "__dc_theme") {
        const t = e.data.theme;
        if (t === "light" || t === "dark") {
          appTheme = t;
          doc.documentElement.dataset.theme = t;
          applyCanvasBg();
        }
        return;
      }
      if (!designDocMode || type !== "__dc_probe") return;
      postDesignMode(designDocMode);
    });
    function compile(node) {
      const raw = [...node.children];
      const helmetClosed = node.nextSibling != null || node.parentNode?.nextSibling != null;
      if (node.hasAttribute("data-dc-atomics") && !mounted.has("__dc-atomics")) {
        mounted.add("__dc-atomics");
        const el = doc.createElement("style");
        el.id = "__dc-atomics";
        el.textContent = ATOMIC_CSS;
        doc.head.appendChild(el);
      }
      return (_vals, ctx) => {
        const name = ctx && ctx.__name || "";
        const streaming = !!(name && isStreaming(name));
        for (let i = 0; i < raw.length; i++) {
          const child = raw[i];
          const tag = child.tagName;
          const mayBePartial = streaming && !helmetClosed && i === raw.length - 1;
          if (tag === "SCRIPT") {
            if (mayBePartial) continue;
            const key = "SCRIPT|" + (child.getAttribute("src") || child.textContent || "");
            if (mounted.has(key)) continue;
            mounted.add(key);
            const el = doc.createElement("script");
            for (const { name: an, value } of [...child.attributes])
              el.setAttribute(an, value);
            if (child.textContent) el.textContent = child.textContent;
            doc.head.appendChild(el);
          } else if (tag === "LINK" || tag === "META") {
            if (mayBePartial) continue;
            const key = tag + "|" + (child.getAttribute("href") || child.getAttribute("src") || child.outerHTML);
            if (mounted.has(key)) continue;
            mounted.add(key);
            doc.head.appendChild(child.cloneNode(true));
          } else {
            const key = name + "|" + i;
            let el = live.get(key);
            if (!el || el.tagName !== tag) {
              if (el) el.remove();
              el = doc.createElement(tag.toLowerCase());
              live.set(key, el);
              doc.head.appendChild(el);
            }
            for (const { name: an, value } of [...child.attributes]) {
              if (el.getAttribute(an) !== value) el.setAttribute(an, value);
            }
            if (el.textContent !== child.textContent)
              el.textContent = child.textContent;
          }
        }
        return null;
      };
    }
    return { compile, setDesignDocMode };
  }

  // src/pseudo.ts
  function createPseudoSheet(doc) {
    let el = null;
    const cache = /* @__PURE__ */ new Map();
    let n = 0;
    return (pseudo, css) => {
      const k = pseudo + "|" + css;
      const hit = cache.get(k);
      if (hit) return hit;
      if (!el) {
        el = doc.createElement("style");
        doc.head.appendChild(el);
      }
      const cls = "scp" + (n++).toString(36);
      const sel = pseudo === "before" || pseudo === "after" ? "." + cls + "::" + pseudo : "." + cls + ":" + pseudo;
      el.sheet.insertRule(sel + "{" + css + "}", el.sheet.cssRules.length);
      cache.set(k, cls);
      return cls;
    };
  }

  // src/registry.ts
  function createRegistry() {
    const entries = /* @__PURE__ */ Object.create(null);
    function get(name) {
      return entries[name] || (entries[name] = {
        html: "",
        tpl: null,
        Logic: null,
        jsStreaming: false,
        htmlStreaming: false,
        ver: 0,
        subs: /* @__PURE__ */ new Set(),
        fetched: false
      });
    }
    function bump(name) {
      const r = get(name);
      r.ver++;
      for (const fn of r.subs) fn();
    }
    return {
      entries,
      get,
      bump,
      bumpAll() {
        for (const n in entries) bump(n);
      }
    };
  }

  // src/runtime.ts
  var COMPONENT_DIR = ".";
  function createRuntime(doc = document) {
    const registry = createRegistry();
    const pseudoClass = createPseudoSheet(doc);
    const helmet = createHelmetManager(
      doc,
      (name) => registry.get(name).htmlStreaming
    );
    const external = createExternalModules(() => registry.bumpAll());
    const factory = createComponentFactory(registry, ensureFetched);
    const host = {
      component: (name) => factory.getDC(name),
      placeholder: (props) => h(Placeholder, props),
      helmet: (node) => helmet.compile(node),
      loadExternal: (kind, url, after) => external.load(kind, url, after),
      resolveExternal: (url, name) => external.resolve(url, name),
      resolveExternalGlobal: (url, name) => external.resolveGlobal(url, name),
      resolveExternalError: (url, name) => external.getError(url, name),
      pseudoClass
    };
    function ensureFetched(name) {
      const r = registry.get(name);
      if (r.fetched) return;
      r.fetched = true;
      const url = COMPONENT_DIR + "/" + encodeURIComponent(name) + ".dc.html";
      fetch(url).then((res) => {
        if (!res.ok) {
          console.error(
            "[dc-runtime] sibling fetch for <" + name + "/> failed:",
            url,
            "returned",
            res.status,
            "\u2014 the reference renders as an empty placeholder."
          );
          return "";
        }
        return res.text();
      }).then((t) => {
        if (!t) return;
        const parsed = parseDcText(t);
        if (!parsed) {
          console.error(
            "[dc-runtime] sibling fetch for <" + name + "/>:",
            url,
            "has no <x-dc> block \u2014 not a Design Component."
          );
          return;
        }
        if (parsed.props) r.propsMeta = parsed.props;
        if (parsed.preview) r.preview = parsed.preview;
        if (parsed.template && !r.html) updateHtml(name, parsed.template);
        if (parsed.js && !r.Logic) updateJs(name, parsed.js);
      }).catch(
        (e) => console.error(
          "[dc-runtime] sibling fetch for <" + name + "/> threw:",
          url,
          e
        )
      );
    }
    let rootName = null;
    function updateHtml(name, html) {
      const r = registry.get(name);
      r.html = html;
      if (name === rootName) {
        const mode = DESIGN_DOC_MODE_RE.exec(html)?.[1] ?? null;
        if (mode || !r.htmlStreaming) helmet.setDesignDocMode(mode);
      }
      try {
        r.tpl = compileTemplate(html, host);
      } catch (e) {
        console.error("[dc-runtime] template compile FAILED for", name, e);
      }
      registry.bump(name);
    }
    function updateJs(name, src) {
      const r = registry.get(name);
      const seq = r.jsSeq = (r.jsSeq || 0) + 1;
      try {
        const Cls = evalDcLogic(src);
        if (r.jsSeq !== seq) return;
        if (typeof Cls !== "function") {
          r.logicError = name + ".dc.html: <script data-dc-script> must define `class Component extends DCLogic`";
        } else {
          r.logicError = null;
          r.Logic = Cls;
        }
      } catch (e) {
        if (r.jsSeq !== seq) return;
        console.error(
          "[dc-runtime] logic class eval FAILED for",
          name,
          "\u2014 the template renders with props only.",
          e
        );
        r.logicError = name + ": " + (e instanceof Error && e.message ? e.message : String(e));
      }
      registry.bump(name);
    }
    function setStreaming(name, kind, on) {
      const r = registry.get(name);
      if (kind === "html") r.htmlStreaming = !!on;
      else r.jsStreaming = !!on;
      let any = false;
      for (const n in registry.entries) {
        const e = registry.entries[n];
        if (e && (e.htmlStreaming || e.jsStreaming)) {
          any = true;
          break;
        }
      }
      doc.documentElement.classList.toggle("sc-dc-streaming", any);
      registry.bump(name);
    }
    function dcUpdate(name, kind, content, streaming) {
      if (streaming) registry.get(name).fetched = true;
      if (kind === "html") {
        setStreaming(name, "html", !!streaming);
        updateHtml(name, content);
      } else if (kind === "js") {
        setStreaming(name, "js", !!streaming);
        if (!streaming) updateJs(name, content);
      } else if (kind === "props") {
        const { props, preview } = parseDataProps(content);
        const r = registry.get(name);
        r.propsMeta = props ?? void 0;
        r.preview = preview;
        registry.bump(name);
      }
    }
    function setProps(name, overrides) {
      registry.get(name).propOverrides = overrides && typeof overrides === "object" ? { ...overrides } : null;
      registry.bump(name);
    }
    function adoptParsed(name, parsed) {
      if (!parsed) return;
      const r = registry.get(name);
      if (parsed.props) r.propsMeta = parsed.props;
      if (parsed.preview) r.preview = parsed.preview;
      if (parsed.template) updateHtml(name, parsed.template);
      if (parsed.js) updateJs(name, parsed.js);
    }
    return {
      registry,
      getDC: factory.getDC,
      updateHtml,
      updateJs,
      dcUpdate,
      setProps,
      adoptParsed,
      setRootName: (name) => {
        rootName = name;
      },
      markFetched: (name) => {
        registry.get(name).fetched = true;
      },
      annotatedTemplate: (name) => {
        const r = registry.get(name);
        return r.tpl && r.tpl.__annotated || null;
      },
      templateSource: (name) => registry.get(name).html || null,
      StreamableLogic
    };
  }

  // src/stream-state.ts
  function createStreamTracker(staleMs = 6e4, now = Date.now) {
    const since = /* @__PURE__ */ new Map();
    const liveOne = (n) => {
      const t = since.get(n);
      if (t === void 0) return false;
      if (now() - t > staleMs) {
        since.delete(n);
        return false;
      }
      return true;
    };
    return {
      push(name, streaming, viewportKey) {
        if (viewportKey === "dc-model") return;
        if (streaming) since.set(name, now());
        else since.delete(name);
      },
      live(name) {
        if (name !== void 0) return liveOne(name);
        for (const n of [...since.keys()]) if (liveOne(n)) return true;
        return false;
      }
    };
  }

  // src/index.ts
  var REACT_URL = "https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js";
  var REACT_SRI = "";
  var REACT_DOM_URL = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js";
  var REACT_DOM_SRI = "";
  function hideRawTemplate() {
    const s = document.createElement("style");
    s.textContent = "x-dc{display:none!important}";
    document.head.appendChild(s);
  }
  function loadScript(src, integrity) {
    return new Promise((resolve2, reject) => {
      //! nosemgrep: create-script-element
      const s = document.createElement("script");
      s.src = src;
      if (integrity) s.integrity = integrity;
      s.crossOrigin = "anonymous";
      s.async = false;
      s.onload = () => resolve2();
      s.onerror = () => reject(new Error(`failed to load ${src}`));
      document.head.appendChild(s);
    });
  }
  function loadReactUmd() {
    const w = window;
    if (w.React && w.ReactDOM) return Promise.resolve();
    return Promise.all([
      loadScript(REACT_URL, REACT_SRI),
      loadScript(REACT_DOM_URL, REACT_DOM_SRI)
    ]).then(() => void 0);
  }
  function init() {
    const runtime = createRuntime(document);
    let rootName = "Root";
    const baseCss = document.createElement("style");
    baseCss.textContent = BASE_CSS;
    document.head.prepend(baseCss);
    const notifyHost = () => {
      if (window.parent === window) return;
      const r = runtime.registry.entries[rootName];
      try {
        window.parent.postMessage(
          {
            type: "__dc_booted",
            rootName,
            propsMeta: r && r.propsMeta || null,
            preview: r && r.preview || null
          },
          "*"
        );
      } catch {
      }
    };
    const streams = createStreamTracker();
    const api = {
      __dcUpdate: (name, kind, content, streaming, viewportKey) => {
        streams.push(name, streaming, viewportKey);
        runtime.dcUpdate(name, kind, content, streaming);
        if (name === rootName && !streaming && kind === "props") notifyHost();
      },
      __dcStreaming: (name) => streams.live(name),
      __dcSetProps: (name, overrides) => runtime.setProps(name, overrides),
      /** Name of the component currently mounted as the page root — DC tools
       *  push their template-stream here when targeting "the open page". */
      __dcRootName: () => rootName,
      /** Editor bridge — the encoded, `data-dc-tpl`-annotated template source.
       *  The host editor parses this into its own template DOM so it can map a
       *  rendered node (carrying the same `data-dc-tpl`) back to the source
       *  node that emitted it. Returns the encoded form (`<sc-comp>`,
       *  `sc-camel-*` attrs); the editor decodes on serialize. */
      __dcAnnotatedTemplate: (name) => runtime.annotatedTemplate(name),
      /** Editor bridge — the *original* (decoded) template source. */
      __dcTemplateSource: (name) => runtime.templateSource(name),
      __dcBoot: () => {
        rootName = boot(runtime, document) ?? rootName;
        notifyHost();
      },
      __dcRegistry: runtime.registry.entries,
      getDC: (name) => runtime.getDC(name),
      // `DCLogic` is the documented base class name; `StreamableLogic` is the
      // implementation alias kept for any project that already references it.
      DCLogic: runtime.StreamableLogic,
      StreamableLogic: runtime.StreamableLogic
    };
    Object.assign(window, api);
    window.__dcContentKeyed = true;
    if (document.readyState !== "loading") api.__dcBoot();
    else document.addEventListener("DOMContentLoaded", () => api.__dcBoot());
  }
  hideRawTemplate();
  loadReactUmd().then(init).catch((err) => {
    console.error("[dc] failed to load React or boot:", err);
    throw err;
  });
})();

</script>

</head>
<body>
<x-dc>
<helmet data-dc-atomics="">
<link rel="preconnect" href="https://fonts.googleapis.com">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
/* fallback */
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
</style>
<style>
  body{margin:0;background:oklch(0.14 0.025 290);font-family:'Inter',system-ui,sans-serif}
  ::-webkit-scrollbar{width:0;height:0}
  input::placeholder{color:oklch(0.6 0.03 280)}
  @keyframes chatPulse{0%,100%{opacity:0.5}50%{opacity:1}}
  @keyframes livePulse{0%{box-shadow:0 0 0 0 oklch(0.72 0.15 150 / 55%)}70%{box-shadow:0 0 0 6px oklch(0.72 0.15 150 / 0%)}100%{box-shadow:0 0 0 0 oklch(0.72 0.15 150 / 0%)}}
</style>
</helmet>

<!-- NAV -->
<div style="position:fixed;inset:0;z-index:0;pointer-events:none;background:radial-gradient(1000px 700px at 10% -10%, oklch(0.5 0.19 320 / 45%), transparent 62%), radial-gradient(900px 700px at 92% 4%, oklch(0.45 0.16 260 / 38%), transparent 60%), radial-gradient(1000px 800px at 45% 115%, oklch(0.45 0.13 190 / 32%), transparent 65%)"></div>
<div style="position:fixed;top:14px;left:0;right:0;z-index:100;display:flex;justify-content:center;padding:0 24px;pointer-events:none">
  <div style="pointer-events:auto;max-width:100%;box-sizing:border-box;display:flex;align-items:center;gap:4px;overflow-x:auto;padding:6px;border-radius:999px;background:{{ navBg }};backdrop-filter:blur(26px) saturate(180%);-webkit-backdrop-filter:blur(26px) saturate(180%);border:1px solid oklch(1 0 0 / 22%);box-shadow:0 14px 40px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 8%);transition:background 0.35s ease">
    <sc-for list="{{ tabs }}" as="tb" hint-placeholder-count="8">
      <div style="flex:none;display:flex;align-items:center;gap:6px;padding:9px 16px;border-radius:999px;cursor:pointer;font:600 12px 'Inter',sans-serif;white-space:nowrap;background:{{ tb.bg }};color:{{ tb.color }};box-shadow:{{ tb.shadow }};transition:background 0.2s ease" onclick="{{ tb.onClick }}">
        <span style="font-family:'Material Symbols Outlined';font-size:16px;font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 20;line-height:1">{{ tb.icon }}</span>
        {{ tb.label }}
      </div>
    </sc-for>
  </div>
</div>

<div style="position:relative;z-index:1;min-height:100vh;box-sizing:border-box;padding:104px 44px 56px;max-width:1560px;margin:0 auto">

  <!-- ============ HOME ============ -->
  <sc-if value="{{ isHome }}" hint-placeholder-val="{{ true }}">
    <div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:22px;padding:0 4px">
        <div style="font:700 22px 'Inter',sans-serif;color:oklch(0.96 0.01 260)">{{ greetingText }}</div>
        <div style="font:500 13px 'JetBrains Mono',monospace;color:oklch(0.7 0.02 260)">{{ todayLabel }}</div>
      </div>

      <div style="display:flex;flex-direction:column;gap:22px">

      <!-- CLAUDE CHAT -->
      <div style="background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:18px 22px;box-sizing:border-box;display:flex;flex-direction:column;gap:12px">
        <div style="display:flex;align-items:center;gap:8px;font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260)"><span style="font-family:'Material Symbols Outlined';font-size:16px;font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20;line-height:1">forum</span>Claude · Assistent</div>
        <sc-if value="{{ chatHasMessages }}" hint-placeholder-val="{{ false }}">
          <div ref="{{ chatListRef }}" style="display:flex;flex-direction:column;gap:10px;max-height:300px;overflow-y:auto;padding:2px">
            <sc-for list="{{ chatMessages }}" as="cm" hint-placeholder-count="2">
              <div style="display:flex;justify-content:{{ cm.justify }}">
                <div style="max-width:72%;padding:10px 15px;border-radius:18px;background:{{ cm.bg }};border:1px solid {{ cm.border }};font:500 13.5px/1.55 'Inter',sans-serif;color:oklch(0.95 0.01 260);white-space:pre-wrap">{{ cm.text }}</div>
              </div>
            </sc-for>
            <sc-if value="{{ chatLoading }}" hint-placeholder-val="{{ false }}">
              <div style="display:flex;justify-content:flex-start">
                <div style="padding:10px 15px;border-radius:18px;background:oklch(1 0 0 / 10%);border:1px solid oklch(1 0 0 / 14%);font:500 13px 'Inter',sans-serif;color:oklch(0.7 0.03 280);animation:chatPulse 1.4s ease-in-out infinite">Claude denkt nach …</div>
              </div>
            </sc-if>
          </div>
        </sc-if>
        <sc-if value="{{ chatEmpty }}" hint-placeholder-val="{{ true }}">
          <div style="display:flex;flex-wrap:wrap;gap:8px">
            <sc-for list="{{ chatSuggestions }}" as="cs" hint-placeholder-count="3">
              <div style="padding:8px 14px;border-radius:999px;background:oklch(1 0 0 / 8%);border:1px solid oklch(1 0 0 / 16%);font:500 12px 'Inter',sans-serif;color:oklch(0.85 0.02 280);cursor:pointer" style-hover="background:oklch(1 0 0 / 15%)" onclick="{{ cs.onClick }}">{{ cs.label }}</div>
            </sc-for>
          </div>
        </sc-if>
        <div style="display:flex;gap:10px;align-items:center">
          <input value="{{ chatInput }}" onchange="{{ onChatInput }}" onkeydown="{{ onChatKeyDown }}" placeholder="Frag Claude – z. B. „Worauf sollte ich heute achten?“" style="flex:1;height:42px;padding:0 16px;border-radius:999px;background:oklch(1 0 0 / 8%);border:1px solid oklch(1 0 0 / 16%);color:oklch(0.95 0.01 260);font:500 13.5px 'Inter',sans-serif;outline:none;box-shadow:inset 0 1px 2px oklch(0 0 0 / 20%);box-sizing:border-box">
          <div onclick="{{ sendChat }}" style="flex:none;width:42px;height:42px;border-radius:50%;background:{{ chatSendBg }};border:1px solid oklch(1 0 0 / 20%);display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:inset 0 1px 0 oklch(1 0 0 / 25%);transition:background 0.2s ease">
            <span style="font-family:'Material Symbols Outlined';font-size:20px;color:{{ chatSendColor }};font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 20;line-height:1">arrow_upward</span>
          </div>
        </div>
      </div>

      <!-- GRUPPE 1: ÜBERSICHT -->
      <div style="display:flex;flex-wrap:wrap;gap:16px">

        <div style="flex:2 1 480px;background:linear-gradient(160deg, oklch(0.7 0.18 320 / 22%), oklch(0.55 0.16 300 / 8%) 50%, oklch(0.6 0.17 320 / 13%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(0.85 0.12 320 / 30%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%);padding:22px 26px;box-sizing:border-box">
          <div style="display:flex;align-items:center;gap:8px;font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.75 0.15 320);margin-bottom:14px"><span style="font-family:'Material Symbols Outlined';font-size:16px;font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20;line-height:1">bolt</span>Übersicht — heute wichtig</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            <sc-for list="{{ highlights }}" as="h" hint-placeholder-count="5">
              <div style="display:flex;align-items:flex-start;gap:12px">
                <div style="flex:none;margin-top:6px;width:7px;height:7px;border-radius:50%;background:{{ h.color }}"></div>
                <div style="flex:1;font:500 15px/1.4 'Inter',sans-serif;color:oklch(0.94 0.01 260)">{{ h.text }}</div>
                <div style="flex:none;font:600 10px 'JetBrains Mono',monospace;letter-spacing:0.06em;color:{{ h.color }};padding:3px 8px;border:1px solid {{ h.color }};border-radius:999px">{{ h.level }}</div>
              </div>
            </sc-for>
          </div>
        </div>

        <div style="flex:1 1 260px;background:linear-gradient(160deg, oklch(0.7 0.18 320 / 22%), oklch(0.55 0.16 300 / 8%) 50%, oklch(0.6 0.17 320 / 13%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(0.85 0.12 320 / 30%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%);padding:22px 24px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;gap:12px">
          <div style="display:flex;align-items:center;gap:8px;font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.75 0.15 320)"><span style="font-family:'Material Symbols Outlined';font-size:16px;font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20;line-height:1">auto_awesome</span>Motivation</div>
          <div style="font:600 19px/1.4 'Inter',sans-serif;color:oklch(0.96 0.01 260)">{{ quote }}</div>
        </div>

      </div>

      <!-- GRUPPE 2: KALENDER, TO DOS -->
      <div style="display:flex;flex-wrap:wrap;align-items:flex-start;gap:16px">

        <div style="flex:1.5 1 440px;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:20px 22px;box-sizing:border-box">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
            <div style="display:flex;align-items:center;gap:8px;font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260)"><span style="font-family:'Material Symbols Outlined';font-size:16px;font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20;line-height:1">calendar_today</span>Kalender</div>
            <div style="display:flex;gap:4px;background:oklch(1 0 0 / 10%);border:1px solid oklch(1 0 0 / 14%);border-radius:999px;padding:3px;box-shadow:inset 0 1px 2px oklch(0 0 0 / 20%)">
              <div style="padding:5px 12px;border-radius:999px;font:600 11px 'Inter',sans-serif;cursor:pointer;background:{{ dayTabBg }};color:{{ dayTabColor }}" onclick="{{ setViewDay }}">Heute</div>
              <div style="padding:5px 12px;border-radius:999px;font:600 11px 'Inter',sans-serif;cursor:pointer;background:{{ weekTabBg }};color:{{ weekTabColor }}" onclick="{{ setViewWeek }}">Woche</div>
            </div>
          </div>

          <sc-if value="{{ isDayView }}" hint-placeholder-val="{{ true }}">
            <div>
              <div style="font:500 11px 'Inter',sans-serif;color:oklch(0.65 0.02 260);margin-bottom:10px">{{ calDayLabel }}</div>
              <div style="display:flex">
                <div style="flex:none;width:38px">
                  <sc-for list="{{ hourRows }}" as="hl" hint-placeholder-count="14">
                    <div style="height:{{ rowHeightPx }}px;font:500 9.5px 'JetBrains Mono',monospace;color:oklch(0.5 0.02 260)">{{ hl.label }}</div>
                  </sc-for>
                </div>
                <div style="position:relative;flex:1;border-left:1px solid oklch(1 0 0 / 8%);height:{{ gridHeightPx }}px">
                  <sc-for list="{{ hourRows }}" as="hr" hint-placeholder-count="14">
                    <div style="position:absolute;left:0;right:0;top:{{ hr.top }}px;height:1px;background:oklch(1 0 0 / 6%)"></div>
                  </sc-for>
                  <sc-for list="{{ dayEvents }}" as="e" hint-placeholder-count="5">
                    <div style="position:absolute;left:6px;right:6px;top:{{ e.top }}px;height:{{ e.height }}px;background:{{ e.bg }};border-left:2.5px solid {{ e.color }};border-radius:10px;padding:2px 8px;box-sizing:border-box;overflow:hidden">
                      <div style="font:600 11px 'Inter',sans-serif;color:oklch(0.95 0.01 260);line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">{{ e.title }}</div>
                      <sc-if value="{{ e.showTime }}" hint-placeholder-val="{{ true }}">
                        <div style="font:500 9.5px 'JetBrains Mono',monospace;color:oklch(0.7 0.02 260)">{{ e.time }}</div>
                      </sc-if>
                    </div>
                  </sc-for>
                </div>
              </div>
            </div>
          </sc-if>

          <sc-if value="{{ isWeekView }}" hint-placeholder-val="{{ false }}">
            <div>
              <div style="font:500 11px 'Inter',sans-serif;color:oklch(0.65 0.02 260);margin-bottom:10px">{{ calWeekLabel }}</div>
              <div style="display:grid;grid-template-columns:repeat(7, 1fr);gap:6px">
                <sc-for list="{{ weekDays }}" as="d" hint-placeholder-count="7">
                  <div style="background:{{ d.bg }};border:1px solid {{ d.border }};border-radius:16px;padding:8px 5px;min-height:150px;display:flex;flex-direction:column;gap:5px;box-sizing:border-box">
                    <div style="text-align:center;margin-bottom:2px">
                      <div style="font:600 9px 'JetBrains Mono',monospace;letter-spacing:0.03em;color:{{ d.labelColor }}">{{ d.label }}</div>
                      <div style="font:700 13px 'JetBrains Mono',monospace;color:{{ d.dateColor }}">{{ d.date }}</div>
                    </div>
                    <sc-for list="{{ d.events }}" as="ev" hint-placeholder-count="2">
                      <div style="background:oklch(1 0 0 / 6%);border-radius:8px;padding:3px 5px">
                        <div style="font:600 8.5px 'JetBrains Mono',monospace;color:{{ ev.timeColor }}">{{ ev.time }}</div>
                        <div style="font:500 9.5px 'Inter',sans-serif;color:oklch(0.88 0.01 260);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">{{ ev.title }}</div>
                      </div>
                    </sc-for>
                  </div>
                </sc-for>
              </div>
            </div>
          </sc-if>
        </div>

        <div style="flex:1 1 300px;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:20px 22px;box-sizing:border-box">
          <div style="display:flex;align-items:center;gap:8px;font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260);margin-bottom:14px"><span style="font-family:'Material Symbols Outlined';font-size:16px;font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20;line-height:1">checklist</span>To Dos</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            <sc-for list="{{ todos }}" as="t" hint-placeholder-count="5">
              <div style="display:flex;align-items:center;gap:10px;cursor:pointer" onclick="{{ t.toggle }}">
                <div style="flex:none;width:16px;height:16px;border-radius:4px;border:1.5px solid {{ t.checkBorder }};background:{{ t.checkBg }};display:flex;align-items:center;justify-content:center;font:700 10px sans-serif;color:#1a0b14">{{ t.checkmark }}</div>
                <div style="flex:1;font:500 13px 'Inter',sans-serif;color:{{ t.textColor }};text-decoration:{{ t.textDecoration }}">{{ t.text }}</div>
                <div style="flex:none;width:6px;height:6px;border-radius:50%;background:{{ t.color }}"></div>
              </div>
            </sc-for>
          </div>
        </div>

      </div>

      <!-- GRUPPE 3: GESUNDHEIT, SPORT, HABITS (inkl. Kalorienbilanz) -->
      <div style="display:flex;flex-wrap:wrap;gap:16px">

        <div style="flex:2 1 460px;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:20px 22px;box-sizing:border-box">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:16px">
            <div style="display:flex;align-items:center;gap:8px;font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260)"><span style="font-family:'Material Symbols Outlined';font-size:16px;font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20;line-height:1">local_fire_department</span>Kalorienbilanz heute</div>
            <div style="font:700 15px 'JetBrains Mono',monospace;color:{{ diffTodayColor }}">{{ diffTodayLabel }}</div>
          </div>
          <div style="display:flex;gap:24px;flex-wrap:wrap">
            <div style="flex:1 1 220px">
              <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px">
                <span style="font:500 12px 'Inter',sans-serif;color:oklch(0.78 0.02 260)">Intake</span>
                <span style="font:700 20px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ kcalIntake }} <span style="font:500 11px 'JetBrains Mono',monospace;color:oklch(0.65 0.02 260)">/ {{ kcalGoal }} kcal</span></span>
              </div>
              <div style="display:flex;flex-direction:column;gap:8px">
                <sc-for list="{{ macros }}" as="m" hint-placeholder-count="3">
                  <div>
                    <div style="display:flex;justify-content:space-between;font:500 11px 'JetBrains Mono',monospace;color:oklch(0.75 0.02 260);margin-bottom:3px">
                      <span>{{ m.name }}</span><span>{{ m.g }}g / {{ m.goal }}g</span>
                    </div>
                    <div style="height:5px;border-radius:3px;background:oklch(1 0 0 / 8%);overflow:hidden">
                      <div style="height:100%;border-radius:3px;background:{{ m.color }};width:{{ m.pct }}%"></div>
                    </div>
                  </div>
                </sc-for>
              </div>
            </div>
            <div style="flex:1 1 220px;border-left:1px solid oklch(1 0 0 / 8%);padding-left:24px">
              <div style="font:500 12px 'Inter',sans-serif;color:oklch(0.78 0.02 260);margin-bottom:10px">Output</div>
              <div style="display:flex;flex-direction:column;gap:7px">
                <div style="display:flex;justify-content:space-between;font:500 13px 'Inter',sans-serif;color:oklch(0.85 0.01 260)"><span>Ruheenergie</span><span style="font:600 13px 'JetBrains Mono',monospace">{{ resting }} kcal</span></div>
                <div style="display:flex;justify-content:space-between;font:500 13px 'Inter',sans-serif;color:oklch(0.85 0.01 260)"><span>Aktivität</span><span style="font:600 13px 'JetBrains Mono',monospace">{{ activity }} kcal</span></div>
                <div style="display:flex;justify-content:space-between;font:500 13px 'Inter',sans-serif;color:oklch(0.85 0.01 260)"><span>Schritte</span><span style="font:600 13px 'JetBrains Mono',monospace">{{ steps }} / {{ stepsGoal }}</span></div>
              </div>
              <div style="margin-top:14px;padding-top:12px;border-top:1px solid oklch(1 0 0 / 8%)">
                <div style="font:500 11px 'Inter',sans-serif;color:oklch(0.7 0.02 260);margin-bottom:6px">Ø Differenz, letzte 7 Tage</div>
                <div style="display:flex;align-items:center;gap:10px">
                  <svg width="120" height="34" viewBox="0 0 120 34"><polyline points="{{ diff7dPoints }}" fill="none" stroke="{{ diff7dAvgColor }}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline></svg>
                  <span style="font:700 14px 'JetBrains Mono',monospace;color:{{ diff7dAvgColor }}">{{ diff7dAvgLabel }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="flex:1 1 280px;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:20px 22px;box-sizing:border-box">
          <div style="display:flex;align-items:center;gap:8px;font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260);margin-bottom:18px"><span style="font-family:'Material Symbols Outlined';font-size:16px;font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20;line-height:1">monitor_heart</span>Gesundheit &amp; Erholung</div>

          <div style="display:flex;gap:14px;margin-bottom:18px">
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;gap:7px">
              <div style="position:relative;width:60px;height:60px">
                <div style="width:60px;height:60px;border-radius:50%;background:conic-gradient({{ sleepColor }} 0% {{ sleepScore }}%, oklch(1 0 0 / 10%) {{ sleepScore }}% 100%)"></div>
                <div style="position:absolute;top:6px;left:6px;width:48px;height:48px;border-radius:50%;background:oklch(0.26 0.03 300);display:flex;align-items:center;justify-content:center">
                  <span style="font:800 16px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ sleepScore }}</span>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:5px">
                <span style="font-family:'Material Symbols Outlined';font-size:14px;color:oklch(0.75 0.15 320);font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 20;line-height:1">bedtime</span>
                <span style="font:600 12px 'Inter',sans-serif;color:oklch(0.9 0.01 260)">Sleep Score</span>
              </div>
              <div style="font:500 10.5px 'Inter',sans-serif;color:{{ sleepColor }}">{{ sleepStatus }}</div>
            </div>
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;gap:7px;border-left:1px solid oklch(1 0 0 / 8%)">
              <div style="position:relative;width:60px;height:60px">
                <div style="width:60px;height:60px;border-radius:50%;background:conic-gradient({{ recoveryColor }} 0% {{ recoveryScore }}%, oklch(1 0 0 / 10%) {{ recoveryScore }}% 100%)"></div>
                <div style="position:absolute;top:6px;left:6px;width:48px;height:48px;border-radius:50%;background:oklch(0.26 0.03 300);display:flex;align-items:center;justify-content:center">
                  <span style="font:800 16px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ recoveryScore }}</span>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:5px">
                <span style="font-family:'Material Symbols Outlined';font-size:14px;color:oklch(0.75 0.15 320);font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 20;line-height:1">battery_charging_full</span>
                <span style="font:600 12px 'Inter',sans-serif;color:oklch(0.9 0.01 260)">Recovery</span>
              </div>
              <div style="font:500 10.5px 'Inter',sans-serif;color:{{ recoveryColor }}">{{ recoveryStatus }}</div>
            </div>
          </div>

          <div style="font:500 10px 'JetBrains Mono',monospace;letter-spacing:0.05em;text-transform:uppercase;color:oklch(0.5 0.02 260);margin-bottom:9px">Basis: HRV &amp; Ruhepuls im Schlaf</div>

          <div style="display:flex;flex-direction:column;gap:11px">
            <div style="display:flex;align-items:center;gap:10px">
              <div style="flex:none;width:28px;height:28px;border-radius:50%;background:{{ hrvChipBg }};display:flex;align-items:center;justify-content:center">
                <span style="font-family:'Material Symbols Outlined';font-size:16px;color:{{ hrvDeltaColor }};font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 20;line-height:1">show_chart</span>
              </div>
              <div style="flex:1">
                <div style="font:500 11.5px 'Inter',sans-serif;color:oklch(0.7 0.02 260)">HRV</div>
                <div style="font:700 14px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ hrv }} ms</div>
              </div>
              <svg width="60" height="24" viewBox="0 0 60 24"><polyline points="{{ hrvPoints }}" fill="none" stroke="{{ hrvDeltaColor }}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline></svg>
            </div>
            <div style="display:flex;align-items:center;gap:10px">
              <div style="flex:none;width:28px;height:28px;border-radius:50%;background:{{ rhrChipBg }};display:flex;align-items:center;justify-content:center">
                <span style="font-family:'Material Symbols Outlined';font-size:16px;color:{{ rhrDeltaColor }};font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 20;line-height:1">favorite</span>
              </div>
              <div style="flex:1">
                <div style="font:500 11.5px 'Inter',sans-serif;color:oklch(0.7 0.02 260)">Ruhepuls (Schlaf)</div>
                <div style="font:700 14px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ rhr }} bpm</div>
              </div>
              <svg width="60" height="24" viewBox="0 0 60 24"><polyline points="{{ rhrPoints }}" fill="none" stroke="{{ rhrDeltaColor }}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline></svg>
            </div>
            <div style="display:flex;align-items:center;gap:10px">
              <div style="flex:none;width:28px;height:28px;border-radius:50%;background:oklch(0.72 0.15 150 / 15%);display:flex;align-items:center;justify-content:center">
                <span style="font-family:'Material Symbols Outlined';font-size:16px;color:oklch(0.72 0.15 150);font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 20;line-height:1">air</span>
              </div>
              <div style="flex:1">
                <div style="font:500 11.5px 'Inter',sans-serif;color:oklch(0.7 0.02 260)">SpO₂</div>
                <div style="height:5px;border-radius:3px;background:oklch(1 0 0 / 8%);overflow:hidden;margin-top:5px">
                  <div style="height:100%;border-radius:3px;background:oklch(0.72 0.15 150);width:{{ spo2 }}%"></div>
                </div>
              </div>
              <span style="font:700 14px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ spo2 }}%</span>
            </div>
          </div>
        </div>

        <div style="flex:1 1 280px;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:20px 22px;box-sizing:border-box">
          <div style="display:flex;align-items:center;gap:8px;font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260);margin-bottom:14px"><span style="font-family:'Material Symbols Outlined';font-size:16px;font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20;line-height:1">directions_run</span>Heutige Sporteinheit</div>
          <sc-for list="{{ workouts }}" as="w" hint-placeholder-count="1">
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="display:flex;justify-content:space-between;align-items:baseline">
                <div style="font:600 15px 'Inter',sans-serif;color:oklch(0.94 0.01 260)">{{ w.name }}</div>
                <div style="font:600 12px 'JetBrains Mono',monospace;color:oklch(0.75 0.15 320)">{{ w.time }}</div>
              </div>
              <div style="font:500 12px 'Inter',sans-serif;color:oklch(0.78 0.02 260)">{{ w.detail }} · {{ w.duration }}</div>
              <div style="align-self:flex-start;margin-top:4px;font:600 10px 'JetBrains Mono',monospace;letter-spacing:0.06em;color:oklch(0.75 0.15 320);border:1px solid oklch(0.75 0.15 320);padding:3px 9px;border-radius:999px">{{ w.status }}</div>
            </div>
          </sc-for>
        </div>

        <div style="flex:1 1 280px;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:20px 22px;box-sizing:border-box">
          <div style="display:flex;align-items:center;gap:8px;font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260);margin-bottom:14px"><span style="font-family:'Material Symbols Outlined';font-size:16px;font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20;line-height:1">repeat</span>Habits</div>
          <div style="display:flex;flex-direction:column;gap:12px">
            <sc-for list="{{ habits }}" as="hb" hint-placeholder-count="4">
              <div style="display:flex;align-items:center;gap:10px;cursor:pointer" onclick="{{ hb.toggle }}">
                <div style="flex:none;width:16px;height:16px;border-radius:50%;border:1.5px solid {{ hb.checkBorder }};background:{{ hb.checkBg }};display:flex;align-items:center;justify-content:center;font:700 10px sans-serif;color:#0a1a0f">{{ hb.checkmark }}</div>
                <div style="flex:1;font:500 13px 'Inter',sans-serif;color:oklch(0.88 0.01 260)">{{ hb.name }}</div>
                <div style="flex:none;font:600 11px 'JetBrains Mono',monospace;color:oklch(0.7 0.02 260)">{{ hb.streak }}d</div>
              </div>
            </sc-for>
          </div>
        </div>

      </div>

      <!-- GRUPPE 4: FINANZEN -->
      <div style="display:flex;flex-wrap:wrap;gap:16px">

        <div style="flex:1 1 100%;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;padding:20px 22px;box-sizing:border-box;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%)">
          <div style="display:flex;align-items:center;gap:8px;font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260);margin-bottom:16px"><span style="font-family:'Material Symbols Outlined';font-size:16px;font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20;line-height:1">account_balance_wallet</span>Finanzen</div>

          <div style="display:flex;gap:24px;margin-bottom:18px;flex-wrap:wrap">
            <div style="flex:1 1 300px;display:flex;align-items:center;gap:18px">
              <div style="position:relative;width:112px;height:112px;flex:none">
                <div style="width:112px;height:112px;border-radius:50%;background:conic-gradient({{ fixColor }} 0% {{ fixPct }}%, {{ sparColor }} {{ fixPct }}% {{ fixSparPct }}%, {{ restColor }} {{ fixSparPct }}% 100%)"></div>
                <div style="position:absolute;top:14px;left:14px;width:84px;height:84px;border-radius:50%;background:oklch(0.26 0.03 300);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
                  <div style="font:700 14px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ nettoEinnahmen }} €</div>
                  <div style="font:500 8.5px 'Inter',sans-serif;color:oklch(0.65 0.02 260);letter-spacing:0.03em;text-transform:uppercase;margin-top:2px">Netto = 100%</div>
                </div>
              </div>
              <div style="display:flex;flex-direction:column;gap:9px">
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="width:8px;height:8px;border-radius:2px;background:{{ fixColor }};flex:none"></span>
                  <span style="font:500 12px 'Inter',sans-serif;color:oklch(0.85 0.01 260);width:66px">Fixkosten</span>
                  <span style="font:600 12px 'JetBrains Mono',monospace;color:oklch(0.85 0.01 260)">{{ fixPct }}%</span>
                </div>
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="width:8px;height:8px;border-radius:2px;background:{{ sparColor }};flex:none"></span>
                  <span style="font:500 12px 'Inter',sans-serif;color:oklch(0.85 0.01 260);width:66px">Sparrate</span>
                  <span style="font:600 12px 'JetBrains Mono',monospace;color:oklch(0.85 0.01 260)">{{ sparratePct }}%</span>
                </div>
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="width:8px;height:8px;border-radius:2px;background:{{ restColor }};flex:none"></span>
                  <span style="font:500 12px 'Inter',sans-serif;color:oklch(0.85 0.01 260);width:66px">Sonstiges</span>
                  <span style="font:600 12px 'JetBrains Mono',monospace;color:oklch(0.85 0.01 260)">{{ restPct }}%</span>
                </div>
              </div>
            </div>
            <div style="flex:1 1 200px;border-left:1px solid oklch(1 0 0 / 8%);padding-left:20px">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
                <span style="width:6px;height:6px;border-radius:50%;background:oklch(0.72 0.15 150);animation:livePulse 2s infinite"></span>
                <span style="font:500 11px 'Inter',sans-serif;color:oklch(0.7 0.02 260)">MSCI World</span>
              </div>
              <div style="display:flex;align-items:baseline;gap:8px">
                <div style="font:700 20px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ msciPrice }}</div>
                <div style="font:600 12px 'JetBrains Mono',monospace;color:{{ msciChangeColor }}">{{ msciChangeLabel }}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;margin-top:4px">
                <svg width="88" height="24" viewBox="0 0 88 24"><polyline points="{{ msciPoints }}" fill="none" stroke="{{ msciChangeColor }}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline></svg>
                <span style="font:500 10px 'JetBrains Mono',monospace;color:oklch(0.55 0.02 260)">{{ msciTimestamp }}</span>
              </div>
            </div>
          </div>

          <div style="border-top:1px solid oklch(1 0 0 / 8%);padding-top:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="{{ toggleFinance }}">
              <div style="font:500 13px 'Inter',sans-serif;color:oklch(0.88 0.01 260)">Fixkosten</div>
              <div style="display:flex;align-items:center;gap:6px">
                <span style="font:600 13px 'JetBrains Mono',monospace;color:oklch(0.85 0.01 260)">{{ fixkostenTotal }} €</span>
                <span style="font-family:'Material Symbols Outlined';font-size:18px;color:oklch(0.65 0.02 260)">{{ chevronIcon }}</span>
              </div>
            </div>
            <sc-if value="{{ financeExpanded }}" hint-placeholder-val="{{ false }}">
              <div style="display:flex;flex-direction:column;gap:8px;margin-top:12px">
                <sc-for list="{{ fixkostenItems }}" as="f" hint-placeholder-count="5">
                  <div style="display:flex;justify-content:space-between;font:500 12.5px 'Inter',sans-serif;color:oklch(0.75 0.02 260)">
                    <span>{{ f.name }}</span><span style="font:500 12.5px 'JetBrains Mono',monospace;color:oklch(0.82 0.01 260)">{{ f.amount }} €</span>
                  </div>
                </sc-for>
              </div>
            </sc-if>
          </div>
        </div>

      </div>

      </div>
    </div>
  </sc-if>

  <!-- ============ KALENDER TAB ============ -->
  <sc-if value="{{ isKalenderTab }}" hint-placeholder-val="{{ false }}">
    <div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:22px;padding:0 4px">
        <span style="font-family:'Material Symbols Outlined';font-size:22px;color:oklch(0.75 0.15 320);font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20">calendar_today</span>
        <div style="font:700 22px 'Inter',sans-serif;color:oklch(0.96 0.01 260)">Kalender</div>
      </div>
      <div style="display:flex;flex-wrap:wrap;align-items:flex-start;gap:16px">
        <div style="flex:2 1 500px;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:24px 26px;box-sizing:border-box">
          <div style="display:flex;justify-content:flex-end;margin-bottom:16px">
            <div style="display:flex;gap:4px;background:oklch(1 0 0 / 10%);border:1px solid oklch(1 0 0 / 14%);border-radius:999px;padding:3px;box-shadow:inset 0 1px 2px oklch(0 0 0 / 20%)">
              <div style="padding:6px 14px;border-radius:999px;font:600 12px 'Inter',sans-serif;cursor:pointer;background:{{ dayTabBg }};color:{{ dayTabColor }}" onclick="{{ setViewDay }}">Heute</div>
              <div style="padding:6px 14px;border-radius:999px;font:600 12px 'Inter',sans-serif;cursor:pointer;background:{{ weekTabBg }};color:{{ weekTabColor }}" onclick="{{ setViewWeek }}">Woche</div>
            </div>
          </div>
          <sc-if value="{{ isDayView }}" hint-placeholder-val="{{ true }}">
            <div>
              <div style="font:500 12px 'Inter',sans-serif;color:oklch(0.65 0.02 260);margin-bottom:12px">{{ calDayLabel }}</div>
              <div style="display:flex">
                <div style="flex:none;width:42px">
                  <sc-for list="{{ hourRows }}" as="hl" hint-placeholder-count="14">
                    <div style="height:{{ rowHeightPx }}px;font:500 10.5px 'JetBrains Mono',monospace;color:oklch(0.5 0.02 260)">{{ hl.label }}</div>
                  </sc-for>
                </div>
                <div style="position:relative;flex:1;border-left:1px solid oklch(1 0 0 / 8%);height:{{ gridHeightPx }}px">
                  <sc-for list="{{ hourRows }}" as="hr" hint-placeholder-count="14">
                    <div style="position:absolute;left:0;right:0;top:{{ hr.top }}px;height:1px;background:oklch(1 0 0 / 6%)"></div>
                  </sc-for>
                  <sc-for list="{{ dayEvents }}" as="e" hint-placeholder-count="5">
                    <div style="position:absolute;left:8px;right:8px;top:{{ e.top }}px;height:{{ e.height }}px;background:{{ e.bg }};border-left:3px solid {{ e.color }};border-radius:12px;padding:3px 10px;box-sizing:border-box;overflow:hidden">
                      <div style="font:600 12px 'Inter',sans-serif;color:oklch(0.95 0.01 260);line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">{{ e.title }}</div>
                      <sc-if value="{{ e.showTime }}" hint-placeholder-val="{{ true }}">
                        <div style="font:500 10px 'JetBrains Mono',monospace;color:oklch(0.7 0.02 260)">{{ e.time }}</div>
                      </sc-if>
                    </div>
                  </sc-for>
                </div>
              </div>
            </div>
          </sc-if>
          <sc-if value="{{ isWeekView }}" hint-placeholder-val="{{ false }}">
            <div>
              <div style="font:500 12px 'Inter',sans-serif;color:oklch(0.65 0.02 260);margin-bottom:12px">{{ calWeekLabel }}</div>
              <div style="display:grid;grid-template-columns:repeat(7, 1fr);gap:8px">
                <sc-for list="{{ weekDays }}" as="d" hint-placeholder-count="7">
                  <div style="background:{{ d.bg }};border:1px solid {{ d.border }};border-radius:16px;padding:10px 6px;min-height:220px;display:flex;flex-direction:column;gap:6px;box-sizing:border-box">
                    <div style="text-align:center;margin-bottom:2px">
                      <div style="font:600 10px 'JetBrains Mono',monospace;letter-spacing:0.03em;color:{{ d.labelColor }}">{{ d.label }}</div>
                      <div style="font:700 14px 'JetBrains Mono',monospace;color:{{ d.dateColor }}">{{ d.date }}</div>
                    </div>
                    <sc-for list="{{ d.events }}" as="ev" hint-placeholder-count="2">
                      <div style="background:oklch(1 0 0 / 6%);border-radius:8px;padding:4px 6px">
                        <div style="font:600 9px 'JetBrains Mono',monospace;color:{{ ev.timeColor }}">{{ ev.time }}</div>
                        <div style="font:500 10.5px 'Inter',sans-serif;color:oklch(0.88 0.01 260);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">{{ ev.title }}</div>
                      </div>
                    </sc-for>
                  </div>
                </sc-for>
              </div>
            </div>
          </sc-if>
        </div>
        <div style="flex:1 1 280px;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:22px;box-sizing:border-box">
          <div style="font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260);margin-bottom:16px">Diese Woche im Überblick</div>
          <div style="display:flex;flex-direction:column;gap:14px">
            <sc-for list="{{ weekDays }}" as="wd" hint-placeholder-count="7">
              <div>
                <div style="font:600 11px 'JetBrains Mono',monospace;color:{{ wd.labelColor }};margin-bottom:6px">{{ wd.label }}, {{ wd.date }}.07.</div>
                <div style="display:flex;flex-direction:column;gap:5px">
                  <sc-for list="{{ wd.events }}" as="ev" hint-placeholder-count="2">
                    <div style="display:flex;gap:8px;align-items:baseline">
                      <span style="font:600 10.5px 'JetBrains Mono',monospace;color:{{ ev.timeColor }};flex:none;width:38px">{{ ev.time }}</span>
                      <span style="font:500 12px 'Inter',sans-serif;color:oklch(0.85 0.01 260)">{{ ev.title }}</span>
                    </div>
                  </sc-for>
                </div>
              </div>
            </sc-for>
          </div>
        </div>
      </div>
    </div>
  </sc-if>

  <!-- ============ TO DOS TAB ============ -->
  <sc-if value="{{ isTodosTab }}" hint-placeholder-val="{{ false }}">
    <div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:22px;padding:0 4px">
        <span style="font-family:'Material Symbols Outlined';font-size:22px;color:oklch(0.75 0.15 320);font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20">checklist</span>
        <div style="font:700 22px 'Inter',sans-serif;color:oklch(0.96 0.01 260)">To Dos</div>
      </div>
      <div style="background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:24px 26px;box-sizing:border-box">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <div style="font:500 13px 'Inter',sans-serif;color:oklch(0.85 0.01 260)">{{ todosDoneCount }} von {{ todosTotalCount }} erledigt</div>
          <div style="font:700 15px 'JetBrains Mono',monospace;color:oklch(0.72 0.15 150)">{{ todosCompletionPct }}%</div>
        </div>
        <div style="height:6px;border-radius:3px;background:oklch(1 0 0 / 8%);overflow:hidden;margin-bottom:26px">
          <div style="height:100%;border-radius:3px;background:oklch(0.72 0.15 150);width:{{ todosCompletionPct }}%"></div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(230px, 1fr));gap:24px">
          <div>
            <div style="font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.06em;text-transform:uppercase;color:oklch(0.7 0.16 30);margin-bottom:12px">Hoch</div>
            <div style="display:flex;flex-direction:column;gap:10px">
              <sc-for list="{{ todosHoch }}" as="t" hint-placeholder-count="2">
                <div style="display:flex;align-items:center;gap:10px;cursor:pointer" onclick="{{ t.toggle }}">
                  <div style="flex:none;width:16px;height:16px;border-radius:4px;border:1.5px solid {{ t.checkBorder }};background:{{ t.checkBg }};display:flex;align-items:center;justify-content:center;font:700 10px sans-serif;color:#1a0b14">{{ t.checkmark }}</div>
                  <div style="flex:1;font:500 13px 'Inter',sans-serif;color:{{ t.textColor }};text-decoration:{{ t.textDecoration }}">{{ t.text }}</div>
                </div>
              </sc-for>
            </div>
          </div>
          <div>
            <div style="font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.06em;text-transform:uppercase;color:oklch(0.78 0.13 90);margin-bottom:12px">Mittel</div>
            <div style="display:flex;flex-direction:column;gap:10px">
              <sc-for list="{{ todosMittel }}" as="t" hint-placeholder-count="2">
                <div style="display:flex;align-items:center;gap:10px;cursor:pointer" onclick="{{ t.toggle }}">
                  <div style="flex:none;width:16px;height:16px;border-radius:4px;border:1.5px solid {{ t.checkBorder }};background:{{ t.checkBg }};display:flex;align-items:center;justify-content:center;font:700 10px sans-serif;color:#1a0b14">{{ t.checkmark }}</div>
                  <div style="flex:1;font:500 13px 'Inter',sans-serif;color:{{ t.textColor }};text-decoration:{{ t.textDecoration }}">{{ t.text }}</div>
                </div>
              </sc-for>
            </div>
          </div>
          <div>
            <div style="font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.06em;text-transform:uppercase;color:oklch(0.7 0.02 260);margin-bottom:12px">Niedrig</div>
            <div style="display:flex;flex-direction:column;gap:10px">
              <sc-for list="{{ todosNiedrig }}" as="t" hint-placeholder-count="1">
                <div style="display:flex;align-items:center;gap:10px;cursor:pointer" onclick="{{ t.toggle }}">
                  <div style="flex:none;width:16px;height:16px;border-radius:4px;border:1.5px solid {{ t.checkBorder }};background:{{ t.checkBg }};display:flex;align-items:center;justify-content:center;font:700 10px sans-serif;color:#1a0b14">{{ t.checkmark }}</div>
                  <div style="flex:1;font:500 13px 'Inter',sans-serif;color:{{ t.textColor }};text-decoration:{{ t.textDecoration }}">{{ t.text }}</div>
                </div>
              </sc-for>
            </div>
          </div>
        </div>
      </div>
    </div>
  </sc-if>

  <!-- ============ KALORIENBILANZ TAB ============ -->
  <sc-if value="{{ isKalorienTab }}" hint-placeholder-val="{{ false }}">
    <div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:22px;padding:0 4px">
        <span style="font-family:'Material Symbols Outlined';font-size:22px;color:oklch(0.75 0.15 320);font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20">local_fire_department</span>
        <div style="font:700 22px 'Inter',sans-serif;color:oklch(0.96 0.01 260)">Kalorienbilanz</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:16px">
        <div style="background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:24px 26px;box-sizing:border-box">
          <div style="display:flex;justify-content:flex-end;margin-bottom:12px">
            <div style="font:700 16px 'JetBrains Mono',monospace;color:{{ diffTodayColor }}">{{ diffTodayLabel }}</div>
          </div>
          <div style="display:flex;gap:28px;flex-wrap:wrap">
            <div style="flex:1 1 260px">
              <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px">
                <span style="font:500 13px 'Inter',sans-serif;color:oklch(0.78 0.02 260)">Intake</span>
                <span style="font:700 24px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ kcalIntake }} <span style="font:500 12px 'JetBrains Mono',monospace;color:oklch(0.65 0.02 260)">/ {{ kcalGoal }} kcal</span></span>
              </div>
              <div style="display:flex;flex-direction:column;gap:10px">
                <sc-for list="{{ macrosDetailed }}" as="m" hint-placeholder-count="3">
                  <div>
                    <div style="display:flex;justify-content:space-between;font:500 12px 'JetBrains Mono',monospace;color:oklch(0.75 0.02 260);margin-bottom:4px">
                      <span>{{ m.name }}</span><span>{{ m.g }}g · {{ m.kcal }} kcal ({{ m.kcalPct }}%)</span>
                    </div>
                    <div style="height:6px;border-radius:3px;background:oklch(1 0 0 / 8%);overflow:hidden">
                      <div style="height:100%;border-radius:3px;background:{{ m.color }};width:{{ m.pct }}%"></div>
                    </div>
                  </div>
                </sc-for>
              </div>
            </div>
            <div style="flex:1 1 260px;border-left:1px solid oklch(1 0 0 / 8%);padding-left:28px">
              <div style="font:500 13px 'Inter',sans-serif;color:oklch(0.78 0.02 260);margin-bottom:12px">Output</div>
              <div style="display:flex;flex-direction:column;gap:9px">
                <div style="display:flex;justify-content:space-between;font:500 14px 'Inter',sans-serif;color:oklch(0.85 0.01 260)"><span>Ruheenergie</span><span style="font:600 14px 'JetBrains Mono',monospace">{{ resting }} kcal</span></div>
                <div style="display:flex;justify-content:space-between;font:500 14px 'Inter',sans-serif;color:oklch(0.85 0.01 260)"><span>Aktivität</span><span style="font:600 14px 'JetBrains Mono',monospace">{{ activity }} kcal</span></div>
                <div style="display:flex;justify-content:space-between;font:500 14px 'Inter',sans-serif;color:oklch(0.85 0.01 260)"><span>Schritte</span><span style="font:600 14px 'JetBrains Mono',monospace">{{ steps }} / {{ stepsGoal }}</span></div>
              </div>
            </div>
          </div>
        </div>
        <div style="background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:24px 26px;box-sizing:border-box">
          <div style="font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260);margin-bottom:18px">Verlauf letzte 7 Tage</div>
          <div style="display:flex;align-items:flex-end;gap:14px;height:80px;padding:0 4px">
            <sc-for list="{{ diff7dBars }}" as="b" hint-placeholder-count="7">
              <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;justify-content:flex-end;height:100%">
                <span style="font:600 10px 'JetBrains Mono',monospace;color:{{ b.color }}">{{ b.label }}</span>
                <div style="width:100%;max-width:28px;border-radius:4px 4px 0 0;background:{{ b.color }};height:{{ b.heightPx }}px"></div>
                <span style="font:500 10px 'JetBrains Mono',monospace;color:oklch(0.6 0.02 260)">{{ b.day }}</span>
              </div>
            </sc-for>
          </div>
        </div>
      </div>
    </div>
  </sc-if>

  <!-- ============ GESUNDHEIT TAB ============ -->
  <sc-if value="{{ isGesundheitTab }}" hint-placeholder-val="{{ false }}">
    <div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:22px;padding:0 4px">
        <span style="font-family:'Material Symbols Outlined';font-size:22px;color:oklch(0.75 0.15 320);font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20">monitor_heart</span>
        <div style="font:700 22px 'Inter',sans-serif;color:oklch(0.96 0.01 260)">Gesundheit &amp; Erholung</div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:16px">
        <div style="flex:1 1 320px;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:24px 26px;box-sizing:border-box">
          <div style="display:flex;gap:20px;margin-bottom:24px">
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px">
              <div style="position:relative;width:88px;height:88px">
                <div style="width:88px;height:88px;border-radius:50%;background:conic-gradient({{ sleepColor }} 0% {{ sleepScore }}%, oklch(1 0 0 / 10%) {{ sleepScore }}% 100%)"></div>
                <div style="position:absolute;top:9px;left:9px;width:70px;height:70px;border-radius:50%;background:oklch(0.26 0.03 300);display:flex;align-items:center;justify-content:center">
                  <span style="font:800 22px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ sleepScore }}</span>
                </div>
              </div>
              <div style="font:600 13px 'Inter',sans-serif;color:oklch(0.9 0.01 260)">Sleep Score</div>
              <div style="font:500 11.5px 'Inter',sans-serif;color:{{ sleepColor }}">{{ sleepStatus }}</div>
            </div>
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;border-left:1px solid oklch(1 0 0 / 8%)">
              <div style="position:relative;width:88px;height:88px">
                <div style="width:88px;height:88px;border-radius:50%;background:conic-gradient({{ recoveryColor }} 0% {{ recoveryScore }}%, oklch(1 0 0 / 10%) {{ recoveryScore }}% 100%)"></div>
                <div style="position:absolute;top:9px;left:9px;width:70px;height:70px;border-radius:50%;background:oklch(0.26 0.03 300);display:flex;align-items:center;justify-content:center">
                  <span style="font:800 22px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ recoveryScore }}</span>
                </div>
              </div>
              <div style="font:600 13px 'Inter',sans-serif;color:oklch(0.9 0.01 260)">Recovery</div>
              <div style="font:500 11.5px 'Inter',sans-serif;color:{{ recoveryColor }}">{{ recoveryStatus }}</div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div style="display:flex;align-items:center;gap:10px">
              <div style="flex:none;width:30px;height:30px;border-radius:50%;background:{{ hrvChipBg }};display:flex;align-items:center;justify-content:center">
                <span style="font-family:'Material Symbols Outlined';font-size:17px;color:{{ hrvDeltaColor }};font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 20;line-height:1">show_chart</span>
              </div>
              <div style="flex:1"><div style="font:500 12px 'Inter',sans-serif;color:oklch(0.7 0.02 260)">HRV</div><div style="font:700 15px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ hrv }} ms</div></div>
              <span style="font:500 11px 'JetBrains Mono',monospace;color:{{ hrvDeltaColor }}">{{ hrvDeltaLabel }}</span>
            </div>
            <div style="display:flex;align-items:center;gap:10px">
              <div style="flex:none;width:30px;height:30px;border-radius:50%;background:{{ rhrChipBg }};display:flex;align-items:center;justify-content:center">
                <span style="font-family:'Material Symbols Outlined';font-size:17px;color:{{ rhrDeltaColor }};font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 20;line-height:1">favorite</span>
              </div>
              <div style="flex:1"><div style="font:500 12px 'Inter',sans-serif;color:oklch(0.7 0.02 260)">Ruhepuls (Schlaf)</div><div style="font:700 15px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ rhr }} bpm</div></div>
              <span style="font:500 11px 'JetBrains Mono',monospace;color:{{ rhrDeltaColor }}">{{ rhrDeltaLabel }}</span>
            </div>
            <div style="display:flex;align-items:center;gap:10px">
              <div style="flex:none;width:30px;height:30px;border-radius:50%;background:oklch(0.72 0.15 150 / 15%);display:flex;align-items:center;justify-content:center">
                <span style="font-family:'Material Symbols Outlined';font-size:17px;color:oklch(0.72 0.15 150);font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 20;line-height:1">air</span>
              </div>
              <div style="flex:1"><div style="font:500 12px 'Inter',sans-serif;color:oklch(0.7 0.02 260)">SpO₂</div></div>
              <span style="font:700 15px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ spo2 }}%</span>
            </div>
          </div>
        </div>

        <div style="flex:1 1 320px;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:24px 26px;box-sizing:border-box">
          <div style="font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260);margin-bottom:16px">7-Tage-Trend</div>
          <div style="margin-bottom:20px">
            <div style="display:flex;justify-content:space-between;font:500 12px 'Inter',sans-serif;color:oklch(0.85 0.01 260);margin-bottom:6px"><span>HRV</span><span style="font:600 12px 'JetBrains Mono',monospace;color:{{ hrvDeltaColor }}">{{ hrv }} ms</span></div>
            <svg width="100%" height="50" viewBox="0 0 220 50" preserveAspectRatio="none"><polyline points="{{ hrvPointsBig }}" fill="none" stroke="{{ hrvDeltaColor }}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></polyline></svg>
          </div>
          <div style="margin-bottom:22px">
            <div style="display:flex;justify-content:space-between;font:500 12px 'Inter',sans-serif;color:oklch(0.85 0.01 260);margin-bottom:6px"><span>Ruhepuls</span><span style="font:600 12px 'JetBrains Mono',monospace;color:{{ rhrDeltaColor }}">{{ rhr }} bpm</span></div>
            <svg width="100%" height="50" viewBox="0 0 220 50" preserveAspectRatio="none"><polyline points="{{ rhrPointsBig }}" fill="none" stroke="{{ rhrDeltaColor }}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></polyline></svg>
          </div>
          <div style="font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260);margin-bottom:12px">Schlafphasen heute · {{ sleepTotalLabel }}</div>
          <div style="display:flex;height:14px;border-radius:7px;overflow:hidden;margin-bottom:10px">
            <sc-for list="{{ sleepStages }}" as="s" hint-placeholder-count="3">
              <div style="width:{{ s.pct }}%;height:100%;background:{{ s.color }}"></div>
            </sc-for>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <sc-for list="{{ sleepStages }}" as="s" hint-placeholder-count="3">
              <div style="display:flex;align-items:center;gap:8px;font:500 12px 'Inter',sans-serif;color:oklch(0.85 0.01 260)">
                <span style="width:8px;height:8px;border-radius:2px;background:{{ s.color }};flex:none"></span>
                <span style="flex:1">{{ s.name }}</span>
                <span style="font:600 12px 'JetBrains Mono',monospace;color:oklch(0.75 0.02 260)">{{ s.hours }}h {{ s.mins }}min</span>
              </div>
            </sc-for>
          </div>
        </div>
      </div>
    </div>
  </sc-if>

  <!-- ============ SPORT TAB ============ -->
  <sc-if value="{{ isSportTab }}" hint-placeholder-val="{{ false }}">
    <div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:22px;padding:0 4px">
        <span style="font-family:'Material Symbols Outlined';font-size:22px;color:oklch(0.75 0.15 320);font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20">directions_run</span>
        <div style="font:700 22px 'Inter',sans-serif;color:oklch(0.96 0.01 260)">Sport</div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:16px">
        <div style="flex:1 1 280px;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:24px 26px;box-sizing:border-box">
          <div style="font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260);margin-bottom:16px">Heute</div>
          <sc-for list="{{ workouts }}" as="w" hint-placeholder-count="1">
            <div style="display:flex;flex-direction:column;gap:8px">
              <div style="display:flex;justify-content:space-between;align-items:baseline">
                <div style="font:700 18px 'Inter',sans-serif;color:oklch(0.94 0.01 260)">{{ w.name }}</div>
                <div style="font:600 13px 'JetBrains Mono',monospace;color:oklch(0.75 0.15 320)">{{ w.time }}</div>
              </div>
              <div style="font:500 13px 'Inter',sans-serif;color:oklch(0.78 0.02 260)">{{ w.detail }} · {{ w.duration }}</div>
              <div style="align-self:flex-start;margin-top:6px;font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.06em;color:oklch(0.74 0.11 200);border:1px solid oklch(0.74 0.11 200);padding:4px 10px;border-radius:999px">{{ w.status }} · Ausdauer</div>
            </div>
          </sc-for>
        </div>
        <div style="flex:1 1 280px;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:24px 26px;box-sizing:border-box">
          <div style="display:flex;align-items:center;gap:8px;font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.75 0.13 55);margin-bottom:16px"><span style="font-family:'Material Symbols Outlined';font-size:16px;font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20;line-height:1">fitness_center</span>Krafttraining</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            <sc-for list="{{ kraftSessions }}" as="k" hint-placeholder-count="2">
              <div style="display:flex;align-items:center;gap:12px;padding:9px 12px;border-radius:14px;background:oklch(0.75 0.13 55 / 10%);border:1px solid oklch(0.75 0.13 55 / 28%)">
                <div style="flex:none;width:28px;font:700 12px 'JetBrains Mono',monospace;color:oklch(0.78 0.12 55)">{{ k.day }}</div>
                <div style="flex:1;font:500 13px 'Inter',sans-serif;color:oklch(0.92 0.01 260)">{{ k.label }}</div>
                <div style="flex:none;font:600 11px 'JetBrains Mono',monospace;color:oklch(0.78 0.12 55)">{{ k.time }}</div>
              </div>
            </sc-for>
          </div>
        </div>
        <div style="flex:1 1 280px;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:24px 26px;box-sizing:border-box">
          <div style="display:flex;align-items:center;gap:8px;font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.74 0.11 200);margin-bottom:16px"><span style="font-family:'Material Symbols Outlined';font-size:16px;font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20;line-height:1">directions_run</span>Ausdauertraining</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            <sc-for list="{{ ausdauerSessions }}" as="a" hint-placeholder-count="3">
              <div style="display:flex;align-items:center;gap:12px;padding:9px 12px;border-radius:14px;background:oklch(0.74 0.11 200 / 10%);border:1px solid oklch(0.74 0.11 200 / 28%)">
                <div style="flex:none;width:28px;font:700 12px 'JetBrains Mono',monospace;color:oklch(0.78 0.1 200)">{{ a.day }}</div>
                <div style="flex:1;font:500 13px 'Inter',sans-serif;color:oklch(0.92 0.01 260)">{{ a.label }}</div>
                <div style="flex:none;font:600 11px 'JetBrains Mono',monospace;color:oklch(0.78 0.1 200)">{{ a.time }}</div>
              </div>
            </sc-for>
          </div>
        </div>
        <div style="flex:1 1 100%;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:24px 26px;box-sizing:border-box">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px">
            <div style="font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260)">Diese Woche</div>
            <div style="display:flex;gap:16px">
              <div style="display:flex;align-items:center;gap:6px;font:500 11px 'Inter',sans-serif;color:oklch(0.85 0.02 280)"><span style="width:8px;height:8px;border-radius:50%;background:oklch(0.75 0.13 55)"></span>Krafttraining</div>
              <div style="display:flex;align-items:center;gap:6px;font:500 11px 'Inter',sans-serif;color:oklch(0.85 0.02 280)"><span style="width:8px;height:8px;border-radius:50%;background:oklch(0.74 0.11 200)"></span>Ausdauertraining</div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px">
            <sc-for list="{{ weekWorkouts }}" as="w" hint-placeholder-count="7">
              <div style="display:flex;align-items:center;gap:12px;padding:9px 12px;border-radius:14px;background:{{ w.bg }};border:1px solid {{ w.border }}">
                <div style="flex:none;width:28px;font:700 12px 'JetBrains Mono',monospace;color:{{ w.dayColor }}">{{ w.day }}</div>
                <span style="flex:none;width:8px;height:8px;border-radius:50%;background:{{ w.typeColor }}"></span>
                <div style="flex:1;font:500 13px 'Inter',sans-serif;color:{{ w.textColor }}">{{ w.label }}</div>
                <div style="flex:none;font:600 10px 'JetBrains Mono',monospace;letter-spacing:0.05em;text-transform:uppercase;color:{{ w.typeColor }}">{{ w.typeLabel }}</div>
              </div>
            </sc-for>
          </div>
        </div>
      </div>
    </div>
  </sc-if>

  <!-- ============ HABITS TAB ============ -->
  <sc-if value="{{ isHabitsTab }}" hint-placeholder-val="{{ false }}">
    <div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:22px;padding:0 4px">
        <span style="font-family:'Material Symbols Outlined';font-size:22px;color:oklch(0.75 0.15 320);font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20">repeat</span>
        <div style="font:700 22px 'Inter',sans-serif;color:oklch(0.96 0.01 260)">Habits</div>
      </div>
      <div style="background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:24px 26px;box-sizing:border-box">
        <div style="display:flex;flex-direction:column;gap:20px">
          <sc-for list="{{ habits }}" as="hb" hint-placeholder-count="4">
            <div>
              <div style="display:flex;align-items:center;gap:10px;cursor:pointer;margin-bottom:10px" onclick="{{ hb.toggle }}">
                <div style="flex:none;width:18px;height:18px;border-radius:50%;border:1.5px solid {{ hb.checkBorder }};background:{{ hb.checkBg }};display:flex;align-items:center;justify-content:center;font:700 11px sans-serif;color:#0a1a0f">{{ hb.checkmark }}</div>
                <div style="flex:1;font:600 14px 'Inter',sans-serif;color:oklch(0.9 0.01 260)">{{ hb.name }}</div>
                <div style="flex:none;font:600 12px 'JetBrains Mono',monospace;color:oklch(0.7 0.02 260)">{{ hb.streak }} Tage Streak</div>
              </div>
              <div style="display:grid;grid-template-columns:repeat(14, 1fr);gap:4px;max-width:340px">
                <sc-for list="{{ hb.history }}" as="d" hint-placeholder-count="14">
                  <div style="aspect-ratio:1;border-radius:3px;background:{{ d.color }}"></div>
                </sc-for>
              </div>
            </div>
          </sc-for>
        </div>
      </div>
    </div>
  </sc-if>

  <!-- ============ FINANZEN TAB ============ -->
  <sc-if value="{{ isFinanzenTab }}" hint-placeholder-val="{{ false }}">
    <div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:22px;padding:0 4px">
        <span style="font-family:'Material Symbols Outlined';font-size:22px;color:oklch(0.75 0.15 320);font-variation-settings:'FILL' 0,'wght' 350,'GRAD' 0,'opsz' 20">account_balance_wallet</span>
        <div style="font:700 22px 'Inter',sans-serif;color:oklch(0.96 0.01 260)">Finanzen</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:16px">
        <div style="background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:24px 26px;box-sizing:border-box">
          <div style="display:flex;gap:28px;flex-wrap:wrap">
            <div style="flex:1 1 300px;display:flex;align-items:center;gap:20px">
              <div style="position:relative;width:130px;height:130px;flex:none">
                <div style="width:130px;height:130px;border-radius:50%;background:conic-gradient({{ fixColor }} 0% {{ fixPct }}%, {{ sparColor }} {{ fixPct }}% {{ fixSparPct }}%, {{ restColor }} {{ fixSparPct }}% 100%)"></div>
                <div style="position:absolute;top:16px;left:16px;width:98px;height:98px;border-radius:50%;background:oklch(0.26 0.03 300);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
                  <div style="font:700 16px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ nettoEinnahmen }} €</div>
                  <div style="font:500 9px 'Inter',sans-serif;color:oklch(0.65 0.02 260);letter-spacing:0.03em;text-transform:uppercase;margin-top:2px">Netto = 100%</div>
                </div>
              </div>
              <div style="display:flex;flex-direction:column;gap:10px">
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="width:9px;height:9px;border-radius:2px;background:{{ fixColor }};flex:none"></span>
                  <span style="font:500 13px 'Inter',sans-serif;color:oklch(0.85 0.01 260);width:76px">Fixkosten</span>
                  <span style="font:600 13px 'JetBrains Mono',monospace;color:oklch(0.85 0.01 260)">{{ fixkostenTotal }} € · {{ fixPct }}%</span>
                </div>
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="width:9px;height:9px;border-radius:2px;background:{{ sparColor }};flex:none"></span>
                  <span style="font:500 13px 'Inter',sans-serif;color:oklch(0.85 0.01 260);width:76px">Sparrate</span>
                  <span style="font:600 13px 'JetBrains Mono',monospace;color:oklch(0.85 0.01 260)">{{ sparratePct }}%</span>
                </div>
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="width:9px;height:9px;border-radius:2px;background:{{ restColor }};flex:none"></span>
                  <span style="font:500 13px 'Inter',sans-serif;color:oklch(0.85 0.01 260);width:76px">Sonstiges</span>
                  <span style="font:600 13px 'JetBrains Mono',monospace;color:oklch(0.85 0.01 260)">{{ restPct }}%</span>
                </div>
              </div>
            </div>
            <div style="flex:1 1 220px;border-left:1px solid oklch(1 0 0 / 8%);padding-left:24px">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
                <span style="width:6px;height:6px;border-radius:50%;background:oklch(0.72 0.15 150);animation:livePulse 2s infinite"></span>
                <span style="font:500 12px 'Inter',sans-serif;color:oklch(0.7 0.02 260)">MSCI World</span>
              </div>
              <div style="display:flex;align-items:baseline;gap:8px">
                <div style="font:700 22px 'JetBrains Mono',monospace;color:oklch(0.94 0.01 260)">{{ msciPrice }}</div>
                <div style="font:600 13px 'JetBrains Mono',monospace;color:{{ msciChangeColor }}">{{ msciChangeLabel }}</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;margin-top:6px">
                <svg width="100" height="26" viewBox="0 0 88 24"><polyline points="{{ msciPoints }}" fill="none" stroke="{{ msciChangeColor }}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline></svg>
                <span style="font:500 10.5px 'JetBrains Mono',monospace;color:oklch(0.55 0.02 260)">{{ msciTimestamp }}</span>
              </div>
            </div>
          </div>
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:16px">
          <div style="flex:1 1 280px;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:22px 24px;box-sizing:border-box">
            <div style="font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260);margin-bottom:14px">Fixkosten · {{ fixkostenTotal }} €</div>
            <div style="display:flex;flex-direction:column;gap:9px">
              <sc-for list="{{ fixkostenItems }}" as="f" hint-placeholder-count="5">
                <div style="display:flex;justify-content:space-between;font:500 13px 'Inter',sans-serif;color:oklch(0.85 0.01 260)">
                  <span>{{ f.name }}</span><span style="font:500 13px 'JetBrains Mono',monospace;color:oklch(0.85 0.01 260)">{{ f.amount }} €</span>
                </div>
              </sc-for>
            </div>
          </div>
          <div style="flex:1 1 280px;background:linear-gradient(160deg, oklch(1 0 0 / 13%), oklch(1 0 0 / 5%) 45%, oklch(1 0 0 / 9%));backdrop-filter:blur(28px) saturate(170%);-webkit-backdrop-filter:blur(28px) saturate(170%);border:1px solid oklch(1 0 0 / 20%);border-radius:26px;box-shadow:0 16px 44px oklch(0 0 0 / 35%), inset 0 1px 0 oklch(1 0 0 / 30%), inset 0 -1px 1px oklch(1 0 0 / 6%);padding:22px 24px;box-sizing:border-box">
            <div style="font:600 11px 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;color:oklch(0.78 0.02 260);margin-bottom:14px">Einnahmenquellen · {{ nettoEinnahmen }} €</div>
            <div style="display:flex;flex-direction:column;gap:9px">
              <sc-for list="{{ incomeSources }}" as="inc" hint-placeholder-count="2">
                <div>
                  <div style="display:flex;justify-content:space-between;font:500 13px 'Inter',sans-serif;color:oklch(0.85 0.01 260);margin-bottom:4px">
                    <span>{{ inc.name }}</span><span style="font:600 13px 'JetBrains Mono',monospace">{{ inc.amount }} €</span>
                  </div>
                  <div style="height:5px;border-radius:3px;background:oklch(1 0 0 / 8%);overflow:hidden">
                    <div style="height:100%;border-radius:3px;background:oklch(0.72 0.17 320);width:{{ inc.pct }}%"></div>
                  </div>
                </div>
              </sc-for>
            </div>
          </div>
        </div>
      </div>
    </div>
  </sc-if>

</div>

</x-dc>
<script type="text/x-dc" data-dc-script="">
class Component extends DCLogic {
  state = {
    todos: [
      { text: 'Projektbericht abschließen', priority: 'Hoch', done: false },
      { text: 'Rückruf Steuerberater', priority: 'Hoch', done: false },
      { text: 'Zahnarzttermin bestätigen', priority: 'Mittel', done: false },
      { text: 'Supplements nachbestellen', priority: 'Mittel', done: false },
      { text: 'Wäsche waschen', priority: 'Niedrig', done: true },
    ],
    habits: [
      { name: 'Supplements', done: true, streak: 12 },
      { name: 'Mobility', done: false, streak: 0 },
      { name: 'Sport', done: true, streak: 5 },
      { name: 'Nosestrip', done: true, streak: 20 },
    ],
    financeExpanded: false,
    calendarView: 'day',
    quoteTick: 0,
    activeTab: 'home',
    navScrolled: false,
    chatMessages: [],
    chatInput: '',
    chatLoading: false,
  };

  chatListRef = React.createRef();

  componentDidUpdate() {
    const el = this.chatListRef.current;
    const count = this.state.chatMessages.length + (this.state.chatLoading ? 1 : 0);
    if (el && count !== this._lastChatCount) el.scrollTop = el.scrollHeight;
    this._lastChatCount = count;
  }

  onScroll = () => {
    const scrolled = window.scrollY > 8;
    if (scrolled !== this.state.navScrolled) this.setState({ navScrolled: scrolled });
  };

  componentDidMount() {
    const scheduleNext = () => {
      const msToNext = 60000 - (Date.now() % 60000);
      this._quoteTimeout = setTimeout(() => {
        this.setState(s => ({ quoteTick: s.quoteTick + 1 }));
        this._quoteInterval = setInterval(() => {
          this.setState(s => ({ quoteTick: s.quoteTick + 1 }));
        }, 60000);
      }, msToNext);
    };
    scheduleNext();
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.loadPersisted();
  }

  componentWillUnmount() {
    clearTimeout(this._quoteTimeout);
    clearInterval(this._quoteInterval);
    window.removeEventListener('scroll', this.onScroll);
  }

  colorForLevel(level) {
    if (level === 'Hoch') return 'oklch(0.7 0.16 30)';
    if (level === 'Mittel') return 'oklch(0.78 0.13 90)';
    return 'oklch(0.7 0.02 260)';
  }

  toggleTodo(i) {
    this.setState(s => {
      const todos = s.todos.slice();
      todos[i] = { ...todos[i], done: !todos[i].done };
      return { todos };
    }, () => this.persist());
  }

  toggleHabit(i) {
    this.setState(s => {
      const habits = s.habits.slice();
      const wasDone = habits[i].done;
      habits[i] = {
        ...habits[i],
        done: !wasDone,
        streak: !wasDone ? habits[i].streak + 1 : Math.max(0, habits[i].streak - 1),
      };
      return { habits };
    }, () => this.persist());
  }

  toggleFinance() {
    this.setState(s => ({ financeExpanded: !s.financeExpanded }));
  }

  persist() {
    const payload = {
      todos: this.state.todos,
      habits: this.state.habits,
      chatMessages: this.state.chatMessages.slice(-20),
      day: new Date().toISOString().slice(0, 10),
    };
    window.DashStore.set(JSON.stringify(payload)).catch(e => console.warn('Speichern fehlgeschlagen:', e));
  }

  async loadPersisted() {
    try {
      const v = await window.DashStore.get();
      if (!v) return;
      const d = JSON.parse(v);
      const today = new Date().toISOString().slice(0, 10);
      let habits = Array.isArray(d.habits) && d.habits.length ? d.habits : this.state.habits;
      if (d.day && d.day !== today) {
        habits = habits.map(h => ({ ...h, streak: h.done ? h.streak : 0, done: false }));
      }
      this.setState({
        todos: Array.isArray(d.todos) ? d.todos : this.state.todos,
        habits,
        chatMessages: Array.isArray(d.chatMessages) ? d.chatMessages : [],
      });
    } catch (e) { /* erster Start */ }
  }

  applyChatCommands(reply) {
    const re = /\[CMD\](\{[^\n]*\})/g;
    let m; const cmds = [];
    while ((m = re.exec(reply))) { try { cmds.push(JSON.parse(m[1])); } catch (e) {} }
    if (cmds.length) {
      this.setState(s => {
        let todos = s.todos.slice();
        let habits = s.habits.slice();
        for (const c of cmds) {
          const q = t => String(t || '').toLowerCase();
          if (c.action === 'add_todo' && c.text) {
            const prio = ['Hoch', 'Mittel', 'Niedrig'].includes(c.priority) ? c.priority : 'Mittel';
            todos.push({ text: c.text, priority: prio, done: false });
          } else if (c.action === 'complete_todo' && c.text) {
            todos = todos.map(t => q(t.text).includes(q(c.text)) ? { ...t, done: true } : t);
          } else if (c.action === 'delete_todo' && c.text) {
            todos = todos.filter(t => !q(t.text).includes(q(c.text)));
          } else if (c.action === 'toggle_habit' && c.name) {
            const done = c.done !== false;
            habits = habits.map(h => q(h.name).includes(q(c.name))
              ? { ...h, done, streak: done && !h.done ? h.streak + 1 : (!done && h.done ? Math.max(0, h.streak - 1) : h.streak) }
              : h);
          }
        }
        return { todos, habits };
      }, () => this.persist());
    }
    return reply.replace(/\s*\[CMD\]\{[^\n]*\}\s*/g, ' ').replace(/\s{2,}/g, ' ').trim();
  }

  buildChatContext() {
    const todos = this.state.todos.map(t => '- [' + (t.done ? 'x' : ' ') + '] ' + t.text + ' (' + t.priority + ')').join('\n');
    const habits = this.state.habits.map(h => '- ' + h.name + ': ' + (h.done ? 'erledigt' : 'offen') + ', Streak ' + h.streak + ' Tage').join('\n');
    return 'Du bist Claude, der Assistent in einem persönlichen Lebens-Dashboard. Antworte knapp (max. ca. 80 Wörter), direkt, konkret, auf Deutsch und ohne Markdown-Formatierung. Beziehe dich auf die Dashboard-Daten, wenn es passt.\n'
      + 'Du kannst das Dashboard direkt verändern. Wenn der Nutzer etwas eintragen, abhaken, löschen oder eine Gewohnheit als erledigt markieren will, hänge ans ENDE deiner Antwort pro Aktion eine eigene Zeile in exakt diesem Format an: [CMD]{json-in-einer-zeile}. Verfügbare Aktionen: {"action":"add_todo","text":"...","priority":"Hoch|Mittel|Niedrig"} · {"action":"complete_todo","text":"eindeutiger Teiltext"} · {"action":"delete_todo","text":"eindeutiger Teiltext"} · {"action":"toggle_habit","name":"Teilname","done":true}. Bestätige die Aktion im Antworttext kurz.\n'
      + 'Hinweis: Kalorien-, Gesundheits-, Kalender-, Sport- und Finanzwerte sind aktuell statische Demo-Daten; To Dos und Habits sind echt und persistent.\n\n'
      + 'Heute: ' + new Date().toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }) + '.\n'
      + 'Termine heute: 08:30 Standup · 09:00–11:30 Deep Work · 14:00 Kickoff Projekt X · 17:30 Laufeinheit Zone 2 (45 min) · 19:30 Abendessen mit Freunden.\n'
      + 'To Dos:\n' + todos + '\n'
      + 'Habits:\n' + habits + '\n'
      + 'Kalorien: Intake 1840 / 2200 kcal, Output 2170 kcal, Bilanz heute −330 kcal, Ø letzte 7 Tage +67 kcal.\n'
      + 'Gesundheit: Sleep Score 61 (unter Schnitt), Recovery 54, HRV 42 ms (Basis 55), Ruhepuls 54 bpm (Basis 50), SpO₂ 96 %.\n'
      + 'Sport heute: Lauftraining Zone 2 um 17:30, 45 min, Ziel 8 km.\n'
      + 'Finanzen: Netto 3240 €, Fixkosten 1504 €, Sparrate 24 %.';
  }

  async sendChat(forcedText) {
    const text = (typeof forcedText === 'string' ? forcedText : this.state.chatInput).trim();
    if (!text || this.state.chatLoading) return;
    const history = [...this.state.chatMessages, { role: 'user', text }];
    this.setState({ chatMessages: history, chatInput: '', chatLoading: true });
    try {
      const messages = history.map(m => ({ role: m.role, content: m.text }));
      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ system: this.buildChatContext(), messages })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error.message || 'API-Fehler');
      let reply = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
      reply = this.applyChatCommands(reply);
      this.setState(s => ({ chatMessages: [...s.chatMessages, { role: 'assistant', text: reply }], chatLoading: false }), () => this.persist());
    } catch (err) {
      const msg = err && err.message ? err.message : String(err);
      this.setState(s => ({ chatMessages: [...s.chatMessages, { role: 'assistant', text: 'Entschuldigung, das hat nicht geklappt: ' + msg }], chatLoading: false }));
    }
  }

  setCalendarView(v) {
    this.setState({ calendarView: v });
  }

  setTab(tab) {
    this.setState({ activeTab: tab });
    window.scrollTo(0, 0);
  }

  buildPoints(series, w, h) {
    const min = Math.min(...series), max = Math.max(...series);
    return series.map((v, i) => {
      const x = (i / (series.length - 1)) * (w - 4) + 2;
      const y = (h - 2) - ((v - min) / (max - min || 1)) * (h - 4);
      return x.toFixed(1) + ',' + y.toFixed(1);
    }).join(' ');
  }

  tagColor(tag) {
    const map = {
      Team: 'oklch(0.55 0.02 260)',
      Fokus: 'oklch(0.55 0.16 320)',
      Meeting: 'oklch(0.78 0.13 90)',
      Sport: 'oklch(0.72 0.15 150)',
      Kraft: 'oklch(0.75 0.13 55)',
      Ausdauer: 'oklch(0.74 0.11 200)',
      Privat: 'oklch(0.72 0.17 320)',
    };
    return map[tag] || 'oklch(0.6 0.02 260)';
  }

  renderVals() {
    const _now = new Date();
    const _wd = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'][_now.getDay()];
    const _mL = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
    const _mS = ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'];
    const _pad = n => String(n).padStart(2,'0');
    const _h = _now.getHours();
    const greetingText = _h < 11 ? 'Guten Morgen' : (_h < 18 ? 'Guten Tag' : 'Guten Abend');
    const todayLabel = _wd + ', ' + _pad(_now.getDate()) + '. ' + _mL[_now.getMonth()] + ' ' + _now.getFullYear();
    const calDayLabel = _wd + ', ' + _pad(_now.getDate()) + '. ' + _mL[_now.getMonth()];
    const _dU = new Date(Date.UTC(_now.getFullYear(), _now.getMonth(), _now.getDate()));
    _dU.setUTCDate(_dU.getUTCDate() - ((_dU.getUTCDay() + 6) % 7) + 3);
    const _fT = new Date(Date.UTC(_dU.getUTCFullYear(), 0, 4));
    const _kw = 1 + Math.round((((_dU - _fT) / 86400000) - 3 + ((_fT.getUTCDay() + 6) % 7)) / 7);
    const _mon = new Date(_now); _mon.setDate(_now.getDate() - ((_now.getDay() + 6) % 7));
    const _sun = new Date(_mon); _sun.setDate(_mon.getDate() + 6);
    const calWeekLabel = 'KW ' + _kw + ' · ' + _pad(_mon.getDate()) + '. ' + _mS[_mon.getMonth()] + ' – ' + _pad(_sun.getDate()) + '. ' + _mS[_sun.getMonth()];
    const activeTab = this.state.activeTab;
    const isHome = activeTab === 'home';
    const isKalenderTab = activeTab === 'kalender';
    const isTodosTab = activeTab === 'todos';
    const isKalorienTab = activeTab === 'kalorien';
    const isGesundheitTab = activeTab === 'gesundheit';
    const isSportTab = activeTab === 'sport';
    const isHabitsTab = activeTab === 'habits';
    const isFinanzenTab = activeTab === 'finanzen';

    const tabDefs = [
      { key: 'home', label: 'Home', icon: 'home' },
      { key: 'kalender', label: 'Kalender', icon: 'calendar_today' },
      { key: 'todos', label: 'To Dos', icon: 'checklist' },
      { key: 'kalorien', label: 'Kalorien', icon: 'local_fire_department' },
      { key: 'gesundheit', label: 'Gesundheit', icon: 'monitor_heart' },
      { key: 'sport', label: 'Sport', icon: 'directions_run' },
      { key: 'habits', label: 'Habits', icon: 'repeat' },
      { key: 'finanzen', label: 'Finanzen', icon: 'account_balance_wallet' },
    ];
    const tabs = tabDefs.map(t => {
      const active = activeTab === t.key;
      return {
        ...t,
        bg: active ? 'oklch(0.62 0.19 320 / 60%)' : 'transparent',
        color: active ? 'oklch(0.99 0.005 320)' : 'oklch(0.85 0.02 280)',
        shadow: active ? 'inset 0 1px 0 oklch(1 0 0 / 35%), 0 6px 18px oklch(0.62 0.19 320 / 35%)' : 'none',
        onClick: () => this.setTab(t.key),
      };
    });

    const navScrolled = this.state.navScrolled;
    const navBg = navScrolled ? 'oklch(0.3 0.04 300 / 50%)' : 'oklch(1 0 0 / 10%)';

    const quotes = [
      '1% better every day.',
      'Kleine Schritte, große Wirkung.',
      'Disziplin schlägt Motivation.',
      'Progress, not perfection.',
      'Der Ruhepuls von morgen beginnt heute.',
      'Zeig auf. Der Rest folgt.',
      'Consistency compounds.',
      'Erhole dich, um zu wachsen.',
    ];
    const quote = quotes[Math.floor(Date.now() / 60000) % quotes.length];

    const highlightsRaw = [
      { text: 'Kalorienüberschuss 3 Tage in Folge – heute gegensteuern', level: 'Hoch' },
      { text: 'Schlafqualität unter Schnitt (Score 61) – früh ins Bett', level: 'Hoch' },
      { text: 'Kickoff-Meeting um 14:00 braucht Vorbereitung', level: 'Mittel' },
      { text: 'Noch keine Mobility-Einheit diese Woche', level: 'Mittel' },
      { text: 'Ideales Laufwetter am Nachmittag', level: 'Niedrig' },
    ];
    const highlights = highlightsRaw.map(h => ({ ...h, color: this.colorForLevel(h.level) }));

    const todos = this.state.todos.map((t, i) => ({
      ...t,
      color: this.colorForLevel(t.priority),
      toggle: () => this.toggleTodo(i),
      checkBorder: t.done ? 'oklch(0.55 0.16 320)' : 'oklch(0.4 0.02 260)',
      checkBg: t.done ? 'oklch(0.55 0.16 320)' : 'transparent',
      checkmark: t.done ? '✓' : '',
      textColor: t.done ? 'oklch(0.58 0.02 260)' : 'oklch(0.88 0.01 260)',
      textDecoration: t.done ? 'line-through' : 'none',
    }));
    const todosHoch = todos.filter(t => t.priority === 'Hoch');
    const todosMittel = todos.filter(t => t.priority === 'Mittel');
    const todosNiedrig = todos.filter(t => t.priority === 'Niedrig');
    const todosDoneCount = todos.filter(t => t.done).length;
    const todosTotalCount = todos.length;
    const todosCompletionPct = Math.round((todosDoneCount / todosTotalCount) * 100);

    const gridStartHour = 8;
    const gridEndHour = 22;
    const rowHeightPx = 42;
    const hourRows = [];
    for (let h = gridStartHour; h < gridEndHour; h++) {
      hourRows.push({ label: String(h).padStart(2, '0') + ':00', top: (h - gridStartHour) * rowHeightPx });
    }
    const gridHeightPx = hourRows.length * rowHeightPx;

    const dayEventsRaw = [
      { time: '08:30', title: 'Standup', tag: 'Team', startMin: 8 * 60 + 30, durMin: 15 },
      { time: '09:00', title: 'Deep Work Block', tag: 'Fokus', startMin: 9 * 60, durMin: 150 },
      { time: '14:00', title: 'Kickoff Projekt X', tag: 'Meeting', startMin: 14 * 60, durMin: 60 },
      { time: '17:30', title: 'Laufeinheit Zone 2', tag: 'Ausdauer', startMin: 17 * 60 + 30, durMin: 45 },
      { time: '19:30', title: 'Abendessen mit Freunden', tag: 'Privat', startMin: 19 * 60 + 30, durMin: 90 },
    ];
    const dayEvents = dayEventsRaw.map(e => {
      const compact = e.durMin < 30;
      return {
        ...e,
        color: this.tagColor(e.tag),
        bg: this.tagColor(e.tag).replace(')', ' / 16%)'),
        top: ((e.startMin - gridStartHour * 60) / 60) * rowHeightPx,
        height: Math.max(compact ? 18 : 26, (e.durMin / 60) * rowHeightPx),
        showTime: !compact,
      };
    });

    const weekDaysRaw = [
      { label: 'Mo', date: '30', events: [{ time: '09:00', title: 'Team Sync' }, { time: '15:00', title: 'Reporting' }] },
      { label: 'Di', date: '01', events: [{ time: '10:00', title: '1:1 mit Lena' }, { time: '18:30', title: 'Krafttraining', type: 'Kraft' }] },
      { label: 'Mi', date: '02', events: [{ time: '09:00', title: 'Deep Work' }, { time: '18:00', title: 'Lauf 5 km', type: 'Ausdauer' }] },
      { label: 'Do', date: '03', events: [{ time: '11:00', title: 'Projekt Review' }, { time: '18:00', title: 'Mobility' }] },
      { label: 'Fr', date: '04', events: [{ time: '09:30', title: 'Sprint Planning' }, { time: '18:00', title: 'Krafttraining', type: 'Kraft' }] },
      { label: 'Sa', date: '05', events: [{ time: '10:00', title: 'Wochenendeinkauf' }, { time: '11:30', title: 'Lauf 10 km', type: 'Ausdauer' }] },
      { label: 'So', date: '06', events: [{ time: '08:30', title: 'Standup' }, { time: '09:00', title: 'Deep Work' }, { time: '14:00', title: 'Kickoff X' }, { time: '17:30', title: 'Laufen', type: 'Ausdauer' }], isToday: true },
    ];
    const weekDays = weekDaysRaw.map(d => ({
      ...d,
      events: d.events.map(ev => ({ ...ev, timeColor: ev.type ? this.tagColor(ev.type) : 'oklch(0.75 0.15 320)' })),
      bg: d.isToday ? 'oklch(0.55 0.16 320 / 12%)' : 'oklch(1 0 0 / 4%)',
      border: d.isToday ? 'oklch(0.72 0.17 320 / 40%)' : 'oklch(1 0 0 / 8%)',
      labelColor: d.isToday ? 'oklch(0.75 0.15 320)' : 'oklch(0.55 0.02 260)',
      dateColor: d.isToday ? 'oklch(0.94 0.01 260)' : 'oklch(0.8 0.01 260)',
    }));

    const calendarView = this.state.calendarView;
    const isDayView = calendarView === 'day';
    const isWeekView = calendarView === 'week';
    const dayTabBg = isDayView ? 'oklch(0.62 0.19 320 / 65%)' : 'transparent';
    const dayTabColor = isDayView ? 'oklch(0.99 0.005 320)' : 'oklch(0.82 0.02 280)';
    const weekTabBg = isWeekView ? 'oklch(0.62 0.19 320 / 65%)' : 'transparent';
    const weekTabColor = isWeekView ? 'oklch(0.99 0.005 320)' : 'oklch(0.82 0.02 280)';
    const setViewDay = () => this.setCalendarView('day');
    const setViewWeek = () => this.setCalendarView('week');

    const macroKcalFactor = { Protein: 4, Carbs: 4, Fett: 9 };
    const macrosRaw = [
      { name: 'Protein', g: 132, goal: 160 },
      { name: 'Carbs', g: 165, goal: 220 },
      { name: 'Fett', g: 58, goal: 70 },
    ];
    const macros = macrosRaw.map(m => ({ ...m, pct: Math.round((m.g / m.goal) * 100), color: 'oklch(0.72 0.17 320)' }));
    const macrosDetailedRaw = macros.map(m => ({ ...m, kcal: m.g * (macroKcalFactor[m.name] || 4) }));
    const macroKcalTotal = macrosDetailedRaw.reduce((a, b) => a + b.kcal, 0);
    const macrosDetailed = macrosDetailedRaw.map(m => ({ ...m, kcalPct: Math.round((m.kcal / macroKcalTotal) * 100) }));

    const habitHistoryMap = {
      Supplements: [false, false, true, true, true, true, true, true, true, true, true, true, true, true],
      Mobility: [true, true, false, true, true, false, true, true, false, true, true, false, true, false],
      Sport: [true, false, true, false, true, false, true, false, false, true, true, true, true, true],
      Nosestrip: Array(14).fill(true),
    };
    const habits = this.state.habits.map((h, i) => ({
      ...h,
      toggle: () => this.toggleHabit(i),
      checkBorder: h.done ? 'oklch(0.72 0.15 150)' : 'oklch(0.4 0.02 260)',
      checkBg: h.done ? 'oklch(0.72 0.15 150)' : 'transparent',
      checkmark: h.done ? '✓' : '',
      history: (habitHistoryMap[h.name] || []).map(v => ({ done: v, color: v ? 'oklch(0.72 0.15 150)' : 'oklch(1 0 0 / 8%)' })),
    }));

    const workouts = [
      { name: 'Lauftraining', time: '17:30', duration: '45 min', detail: 'Zone 2 · Ziel 8 km', status: 'Geplant' },
    ];
    const weekWorkoutsRaw = [
      { day: 'Mo', label: 'Ruhetag', isToday: false },
      { day: 'Di', label: 'Krafttraining Oberkörper', time: '18:30', type: 'Kraft', isToday: false },
      { day: 'Mi', label: 'Lauftraining 5 km', time: '18:00', type: 'Ausdauer', isToday: false },
      { day: 'Do', label: 'Mobility & Dehnen', isToday: false },
      { day: 'Fr', label: 'Krafttraining Unterkörper', time: '18:00', type: 'Kraft', isToday: false },
      { day: 'Sa', label: 'Lauftraining 10 km', time: '11:30', type: 'Ausdauer', isToday: false },
      { day: 'So', label: 'Lauftraining Zone 2 · 45 min', time: '17:30', type: 'Ausdauer', isToday: true },
    ];
    const weekWorkouts = weekWorkoutsRaw.map(w => ({
      ...w,
      typeColor: w.type ? this.tagColor(w.type) : 'oklch(0.5 0.02 280)',
      typeLabel: w.type === 'Kraft' ? 'Kraft' : (w.type === 'Ausdauer' ? 'Ausdauer' : ''),
      bg: w.isToday ? 'oklch(0.55 0.16 320 / 12%)' : 'oklch(1 0 0 / 4%)',
      border: w.isToday ? 'oklch(0.72 0.17 320 / 40%)' : 'oklch(1 0 0 / 8%)',
      dayColor: w.isToday ? 'oklch(0.75 0.15 320)' : 'oklch(0.6 0.02 260)',
      textColor: w.isToday ? 'oklch(0.95 0.01 260)' : 'oklch(0.8 0.01 260)',
    }));
    const kraftSessions = weekWorkouts.filter(w => w.type === 'Kraft');
    const ausdauerSessions = weekWorkouts.filter(w => w.type === 'Ausdauer');

    const fixkostenItems = [
      { name: 'Miete', amount: 1150 },
      { name: 'Versicherungen', amount: 210 },
      { name: 'Abos (Streaming, Software)', amount: 64 },
      { name: 'Fitnessstudio', amount: 45 },
      { name: 'Handyvertrag', amount: 35 },
    ];
    const fixkostenTotal = fixkostenItems.reduce((a, b) => a + b.amount, 0);
    const nettoEinnahmen = 3240;
    const sparrateGoal = 20;
    const savedAmount = 780;
    const sparratePct = Math.round((savedAmount / nettoEinnahmen) * 100);
    const sparrateColor = sparratePct >= sparrateGoal ? 'oklch(0.72 0.15 150)' : 'oklch(0.78 0.13 90)';
    const sparrateStatus = sparratePct >= sparrateGoal ? 'Über Sparziel' : 'Unter Sparziel';

    const fixPct = Math.round((fixkostenTotal / nettoEinnahmen) * 100);
    const restPct = Math.max(0, 100 - fixPct - sparratePct);
    const fixSparPct = fixPct + sparratePct;
    const fixColor = 'oklch(0.78 0.13 90)';
    const sparColor = 'oklch(0.72 0.15 150)';
    const restColor = 'oklch(0.5 0.02 260)';
    const financeExpanded = this.state.financeExpanded;
    const chevronIcon = financeExpanded ? 'expand_less' : 'expand_more';
    const toggleFinance = () => this.toggleFinance();

    const incomeSourcesRaw = [
      { name: 'Gehalt', amount: 2850 },
      { name: 'Nebeneinkünfte', amount: 390 },
    ];
    const incomeSources = incomeSourcesRaw.map(s => ({ ...s, pct: Math.round((s.amount / nettoEinnahmen) * 100) }));

    const msciSeries = [3890.12, 3901.55, 3874.83, 3910.27, 3919.64, 3905.08, 3928.47];
    const msciPrice = msciSeries[msciSeries.length - 1].toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const msciChangePct = ((msciSeries[msciSeries.length - 1] - msciSeries[msciSeries.length - 2]) / msciSeries[msciSeries.length - 2]) * 100;
    const msciChangeLabel = (msciChangePct >= 0 ? '+' : '') + msciChangePct.toFixed(2) + '%';
    const msciChangeColor = msciChangePct >= 0 ? 'oklch(0.72 0.15 150)' : 'oklch(0.7 0.16 30)';
    const mMin = Math.min(...msciSeries), mMax = Math.max(...msciSeries);
    const msciPoints = msciSeries.map((v, i) => {
      const x = (i / (msciSeries.length - 1)) * 84 + 2;
      const y = 20 - ((v - mMin) / (mMax - mMin || 1)) * 16;
      return x.toFixed(1) + ',' + y.toFixed(1);
    }).join(' ');
    const msciTimestamp = 'Stand 16:42 Uhr';

    const kcalIntake = 1840, kcalGoal = 2200;
    const resting = 1750, activity = 420;
    const outputTotal = resting + activity;
    const steps = 8400, stepsGoal = 10000;

    const diffToday = kcalIntake - outputTotal;
    const diffTodayLabel = (diffToday > 0 ? '+' : '') + diffToday + ' kcal';
    const diffTodayColor = diffToday > 150 ? 'oklch(0.7 0.16 30)' : (diffToday < -150 ? 'oklch(0.72 0.15 150)' : 'oklch(0.78 0.13 90)');

    const diff7d = [-200, 100, 300, -150, 400, 250, -330];
    const diff7dAvg = Math.round(diff7d.reduce((a, b) => a + b, 0) / diff7d.length);
    const diff7dAvgLabel = (diff7dAvg > 0 ? '+' : '') + diff7dAvg + ' kcal';
    const diff7dAvgColor = diff7dAvg > 150 ? 'oklch(0.7 0.16 30)' : (diff7dAvg < -150 ? 'oklch(0.72 0.15 150)' : 'oklch(0.78 0.13 90)');
    const dMin = Math.min(...diff7d), dMax = Math.max(...diff7d);
    const diff7dPoints = diff7d.map((v, i) => {
      const x = (i / (diff7d.length - 1)) * 116 + 2;
      const y = 30 - ((v - dMin) / (dMax - dMin || 1)) * 26;
      return x.toFixed(1) + ',' + y.toFixed(1);
    }).join(' ');
    const diff7dLabels = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
    const diff7dMaxAbs = Math.max(...diff7d.map(v => Math.abs(v)));
    const diff7dBars = diff7d.map((v, i) => ({
      day: diff7dLabels[i],
      label: (v > 0 ? '+' : '') + v,
      heightPx: Math.max(4, Math.round((Math.abs(v) / diff7dMaxAbs) * 56)),
      color: v > 150 ? 'oklch(0.7 0.16 30)' : (v < -150 ? 'oklch(0.72 0.15 150)' : 'oklch(0.78 0.13 90)'),
    }));

    const sleepScore = 61;
    const hrv = 42, hrvBaseline = 55;
    const rhr = 54, rhrBaseline = 50;
    const spo2 = 96;
    const hrvDeltaLabel = (hrv < hrvBaseline ? '−' : '+') + Math.abs(hrv - hrvBaseline) + ' vs. Basis';
    const hrvDeltaColor = hrv < hrvBaseline * 0.9 ? 'oklch(0.7 0.16 30)' : 'oklch(0.72 0.15 150)';
    const rhrDeltaLabel = (rhr > rhrBaseline ? '+' : '−') + Math.abs(rhr - rhrBaseline) + ' vs. Basis';
    const rhrDeltaColor = rhr > rhrBaseline * 1.05 ? 'oklch(0.7 0.16 30)' : 'oklch(0.72 0.15 150)';
    const sleepColor = sleepScore < 50 ? 'oklch(0.7 0.16 30)' : (sleepScore < 75 ? 'oklch(0.78 0.13 90)' : 'oklch(0.72 0.15 150)');
    const sleepStatus = sleepScore < 50 ? 'Wenig erholsam' : (sleepScore < 75 ? 'Durchschnittlicher Schlaf' : 'Erholsamer Schlaf');

    const recoveryScore = 54;
    const recoveryColor = recoveryScore < 50 ? 'oklch(0.7 0.16 30)' : (recoveryScore < 70 ? 'oklch(0.78 0.13 90)' : 'oklch(0.72 0.15 150)');
    const recoveryStatus = recoveryScore < 50 ? 'Niedrige Erholung' : (recoveryScore < 70 ? 'Eingeschränkte Erholung' : 'Gute Erholung');

    const hrvSeries = [50, 48, 45, 44, 47, 43, 42];
    const rhrSeries = [50, 51, 49, 52, 53, 55, 54];
    const hrvPoints = this.buildPoints(hrvSeries, 60, 24);
    const rhrPoints = this.buildPoints(rhrSeries, 60, 24);
    const hrvPointsBig = this.buildPoints(hrvSeries, 220, 50);
    const rhrPointsBig = this.buildPoints(rhrSeries, 220, 50);
    const hrvChipBg = hrvDeltaColor.replace(')', ' / 15%)');
    const rhrChipBg = rhrDeltaColor.replace(')', ' / 15%)');

    const sleepStagesRaw = [
      { name: 'Tiefschlaf', min: 70, color: 'oklch(0.55 0.16 320)' },
      { name: 'REM', min: 90, color: 'oklch(0.72 0.17 320)' },
      { name: 'Leichtschlaf', min: 240, color: 'oklch(0.5 0.02 260)' },
    ];
    const sleepTotalMin = sleepStagesRaw.reduce((a, b) => a + b.min, 0);
    const sleepStages = sleepStagesRaw.map(s => ({ ...s, pct: Math.round((s.min / sleepTotalMin) * 100), hours: Math.floor(s.min / 60), mins: s.min % 60 }));
    const sleepTotalLabel = Math.floor(sleepTotalMin / 60) + 'h ' + (sleepTotalMin % 60) + 'min';

    const chatMessages = this.state.chatMessages.map(m => ({
      text: m.text,
      justify: m.role === 'user' ? 'flex-end' : 'flex-start',
      bg: m.role === 'user' ? 'oklch(0.62 0.19 320 / 45%)' : 'oklch(1 0 0 / 10%)',
      border: m.role === 'user' ? 'oklch(0.8 0.15 320 / 35%)' : 'oklch(1 0 0 / 14%)',
    }));
    const chatLoading = this.state.chatLoading;
    const chatHasMessages = chatMessages.length > 0 || chatLoading;
    const chatEmpty = !chatHasMessages;
    const chatInput = this.state.chatInput;
    const onChatInput = (e) => this.setState({ chatInput: e.target.value });
    const onChatKeyDown = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.sendChat(); } };
    const sendChat = () => this.sendChat();
    const canSend = chatInput.trim().length > 0 && !chatLoading;
    const chatSendBg = canSend ? 'oklch(0.62 0.19 320 / 70%)' : 'oklch(1 0 0 / 10%)';
    const chatSendColor = canSend ? 'oklch(0.99 0.005 320)' : 'oklch(0.6 0.03 280)';
    const chatSuggestions = [
      'Wie sieht mein Tag heute aus?',
      'Worauf sollte ich heute achten?',
      'Was koche ich heute Abend bei −330 kcal Bilanz?',
    ].map(l => ({ label: l, onClick: () => this.sendChat(l) }));

    return {
      greetingText, todayLabel, calDayLabel, calWeekLabel,
      chatMessages, chatHasMessages, chatEmpty, chatLoading, chatInput,
      onChatInput, onChatKeyDown, sendChat, chatSendBg, chatSendColor,
      chatSuggestions, chatListRef: this.chatListRef,
      isHome, isKalenderTab, isTodosTab, isKalorienTab, isGesundheitTab, isSportTab, isHabitsTab, isFinanzenTab,
      tabs, navBg,
      quote,
      highlights, todos, todosHoch, todosMittel, todosNiedrig, todosDoneCount, todosTotalCount, todosCompletionPct,
      macros, macrosDetailed, habits, workouts, weekWorkouts, kraftSessions, ausdauerSessions,
      hourRows, rowHeightPx, gridHeightPx, dayEvents, weekDays,
      isDayView, isWeekView, dayTabBg, dayTabColor, weekTabBg, weekTabColor, setViewDay, setViewWeek,
      kcalIntake, kcalGoal, resting, activity, steps, stepsGoal,
      diffTodayLabel, diffTodayColor,
      diff7dAvgLabel, diff7dAvgColor, diff7dPoints, diff7dBars,
      sleepScore, hrv, hrvBaseline, hrvDeltaLabel, hrvDeltaColor,
      rhr, rhrBaseline, rhrDeltaLabel, rhrDeltaColor,
      spo2, recoveryStatus, recoveryColor, recoveryScore, sleepColor, sleepStatus,
      hrvPoints, rhrPoints, hrvPointsBig, rhrPointsBig, hrvChipBg, rhrChipBg,
      sleepStages, sleepTotalLabel,
      fixkostenItems, fixkostenTotal, nettoEinnahmen, sparratePct, sparrateColor, sparrateStatus, incomeSources,
      fixPct, restPct, fixSparPct, fixColor, sparColor, restColor,
      financeExpanded, chevronIcon, toggleFinance,
      msciPrice, msciChangeLabel, msciChangeColor, msciPoints, msciTimestamp,
    };
  }
}
</script>


</body></html>