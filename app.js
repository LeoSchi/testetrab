/* Aplicação React (sem build). Os textos e as respostas do chatbot ficam em dados.js. */
(function () {
"use strict";
const { useState, useEffect, useRef } = React, h = React.createElement;

const LANGS = [["pt", "Português"], ["es", "Español"], ["fr", "Français"], ["en", "English"]];
const HTMLLANG = { pt: "pt-BR", es: "es", fr: "fr", en: "en" };
const ICONE_CARTAO = { documentacao: "doc", habitacao: "home", adaptacao: "compass", escola: "school" };
const ICONE_FATO = ["nuvem", "onibus", "users", "pin", "phone"];
const ACAO = { documentacao: "documentos", adaptacao: "cidade" }; // botão extra nas respostas desses assuntos

/* Ícones de linha */
const ICONS = {
  doc: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>',
  home: '<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10M10 20v-6h4v6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  school: '<path d="M3 9l9-5 9 5-9 5z"/><path d="M7 11.5V16c0 1.5 2.5 3 5 3s5-1.5 5-3v-4.5"/>',
  chat: '<path d="M5 5h14a1 1 0 011 1v9a1 1 0 01-1 1h-7l-4 4v-4H5a1 1 0 01-1-1V6a1 1 0 011-1z"/>',
  send: '<path d="M4 12l16-8-6 16-3-7z"/>',
  minus: '<path d="M6 12h12"/>',
  refresh: '<path d="M4 12a8 8 0 0114-5l2 2M20 4v5h-5M20 12a8 8 0 01-14 5l-2-2M4 20v-5h5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  tree: '<path d="M12 21V6M7 9h10M8.5 13h7M10 5h4"/>',
  nuvem: '<path d="M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18z"/>',
  onibus: '<rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 12h16M7 20v-3M17 20v-3"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0112 0M16 5a3 3 0 010 6M18 20a6 6 0 00-3-5"/>',
  pin: '<path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"/>',
  estufa: '<path d="M4 20V11a8 8 0 0116 0v9z"/><path d="M12 3v17M4 13h16M8 20v-9M16 20v-9"/>',
  opera: '<path d="M3 20L8 8h8l5 12z"/><path d="M6 14h12M10 8l-1.5 12M14 8l1.5 12"/>',
  museu: '<path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  parque: '<circle cx="12" cy="9" r="5"/><path d="M12 14v7M8 21h8"/>',
  rua: '<path d="M4 21V9h6v12M10 21V4h10v17M3 21h18M13 8h4M13 12h4M13 16h4"/>',
  largo: '<path d="M3 21h18M5 21V11l7-6 7 6v10M10 21v-5h4v5"/>',
  mercado: '<path d="M3 10h18l-2 10H5z"/><path d="M8 10l4-6 4 6"/>'
};
function Icon(p) {
  return h("svg", { className: "ic", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, dangerouslySetInnerHTML: { __html: ICONS[p.n] || "" } });
}

const SKYLINE = '<svg viewBox="0 0 1200 300" preserveAspectRatio="xMidYMax slice" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M0 280H1200"/><path d="M60 280V236h44v44M120 280V204h52v76M188 280V248h30v32M1010 280V230h46v50M1072 280V196h56v84M1144 280V246h40v34"/><path d="M300 280V228Q300 176 362 176T424 228V280M300 228H424M331 280V182M362 280V176M393 280V182"/><path d="M556 280V96M564 280V96M546 96h28l-4-12h-20zM552 84V62h16v22M560 62V44"/><ellipse cx="560" cy="98" rx="24" ry="6"/><path d="M690 280l30-84h110l30 84M720 238h110M742 196l-12 84M775 196v84M808 196l12 84"/><path d="M930 280V210M902 208q28-16 56 0M910 224q20-12 40 0M250 280V218M226 216q24-14 48 0M232 230q18-10 36 0"/></svg>';

/* Dados já traduzidos: dados.js (dadosBase, EXTRA e NOVO) */
function dados(lg) {
  const b = dadosBase(lg);
  return { ui: Object.assign({}, b.ui, EXTRA[lg], NOVO[lg]), abas: b.abas, cartoes: b.cartoes, lugares: b.lugares, fatos: b.fatos, passos: b.passos, topicos: b.topicos };
}
function lgInicial() {
  let v = null;
  try { v = localStorage.getItem("idioma"); } catch (e) {}
  if (!v) { v = (navigator.language || "pt").slice(0, 2).toLowerCase(); }
  return LANGS.some(l => l[0] === v) ? v : "pt";
}

/* Busca do chatbot: compara as palavras (sem acento, só o começo delas) com as perguntas e respostas */
const PARAR = {};
("como onde para qual quais minha meus meu uma que com por dos das nao sim posso tenho quero preciso " +
 "cual puedo mis una con los las tengo quiero necesito donde " +
 "comment pour quel quels mon mes une les des est puis dois faut " +
 "how where what which can the and with are you your need want does get have from").split(" ").forEach(w => { PARAR[w] = 1; });
const norm = t => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const stem = w => (w.length > 4 ? w.slice(0, 4) : w);
const palavras = t => norm(t).split(/[^a-z0-9]+/).filter(w => w.length > 2 && !PARAR[w]).map(stem);
function buscar(texto, TP, atual) {
  const q = palavras(texto), r = [];
  if (!q.length) { return r; }
  Object.keys(TP).forEach(k => TP[k].perguntas.forEach(it => {
    const pq = palavras(it.p), pr = palavras(it.r);
    let s = 0;
    q.forEach(w => { if (pq.indexOf(w) > -1) { s += 3; } else if (pr.indexOf(w) > -1) { s += 1; } });
    if (s > 0 && k === atual) { s += 1; }
    if (s > 0) { r.push({ chave: k, item: it, s }); }
  }));
  return r.sort((a, b) => b.s - a.s);
}

/* Lembrete para o calendário (arquivo .ics): 90 dias depois da entrada, com aviso 7 dias antes */
function baixarIcs(data, u) {
  const d = new Date(data + "T12:00:00"); d.setDate(d.getDate() + 90);
  const fim = new Date(d); fim.setDate(fim.getDate() + 1);
  const f = x => x.toISOString().slice(0, 10).replace(/-/g, "");
  const t = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Curitiba Guia//PT", "BEGIN:VEVENT", "UID:" + Date.now() + "@curitiba-guia",
    "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z", "DTSTART;VALUE=DATE:" + f(d), "DTEND;VALUE=DATE:" + f(fim),
    "SUMMARY:" + u.icsT, "DESCRIPTION:" + u.icsD, "BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:" + u.icsT, "TRIGGER:-P7D", "END:VALARM", "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([t], { type: "text/calendar" })); a.download = "lembrete-pf.ics"; a.click();
}

/* ---------- Páginas ---------- */
function Cab(p) { return h("div", { className: "cab" }, h("div", { className: "w" }, h("h1", null, p.t), h("p", null, p.d))); }

function Inicio(p) {
  const d = p.d, u = d.ui;
  return h("div", null,
    h("section", { className: "hero" },
      h("div", { className: "hero-sky", dangerouslySetInnerHTML: { __html: SKYLINE } }),
      h("div", { className: "w hero-in" },
        h("h1", null, u.h1), h("p", { className: "hero-p" }, u.lead),
        h("div", { className: "hero-btns" },
          h("button", { className: "btn btn-a", onClick: () => p.ir("documentos") }, u.btn, h(Icon, { n: "arrow" })),
          h("button", { className: "btn btn-g", onClick: () => p.abrir(true) }, h(Icon, { n: "chat" }), u.btn2)))),
    h("div", { className: "w" },
      h("section", { className: "ajuda" }, h("h2", null, u.ajuda), h("p", { className: "sub" }, u.ajudaD),
        h("div", { className: "tiles" }, d.cartoes.map(c => h("button", { key: c[0], className: "tile", onClick: () => p.escolher(c[0]) },
          h("span", { className: "tile-i" }, h(Icon, { n: ICONE_CARTAO[c[0]] })), h("strong", null, c[1]), h("span", { className: "tile-s" }, c[2]),
          h("span", { className: "tile-go" }, h(Icon, { n: "arrow" })))))),
      h("section", { className: "bloco" },
        h("div", { className: "bloco-h" }, h("h2", null, u.primeiros),
          h("button", { className: "link", onClick: () => p.ir("documentos") }, u.btn, h(Icon, { n: "arrow" }))),
        h("div", { className: "passos3" }, d.passos.slice(0, 3).map((x, i) => {
          const m = /^.*?[.!?](?=\s|$)/.exec(x[1]);
          return h("button", { key: x[0], className: "p3", onClick: () => p.ir("documentos") },
            h("span", { className: "p3-n" }, i + 1), h("strong", null, x[0]), h("span", { className: "p3-t" }, m ? m[0] : x[1]));
        })))));
}

function Cidade(p) {
  const d = p.d, u = d.ui;
  return h("div", null, h(Cab, { t: u.cidT, d: u.cidD }),
    h("div", { className: "w sec" }, h("div", { className: "fatos" }, d.fatos.map((f, i) =>
      h("article", { key: f[0], className: "fato" }, h("span", { className: "fato-i" }, h(Icon, { n: ICONE_FATO[i] })), h("h3", null, f[0]), h("p", null, f[1]))))));
}

function Lugar(p) {
  const l = p.l, [ok, setOk] = useState(true);
  return h("article", { className: "lugar" },
    h("div", { className: "foto" },
      ok ? h("img", { src: "imagens/" + l[6], alt: l[0], loading: "lazy", onError: () => setOk(false) }) : h("div", { className: "foto-v" }, h(Icon, { n: l[3] })),
      h("span", { className: "tag" }, l[1])),
    h("div", { className: "corpo" }, h("h3", null, l[0]), h("p", null, l[2])));
}

function Turismo(p) {
  const d = p.d, u = d.ui, [cat, setCat] = useState("");
  const cats = [""].concat(d.lugares.map(l => l[1]));
  return h("div", null, h(Cab, { t: u.turT, d: u.turD }),
    h("div", { className: "w sec" },
      h("div", { className: "filtros", role: "group", "aria-label": u.filtrar }, cats.map(c => h("button", { key: c, className: c === cat ? "on" : "", "aria-pressed": c === cat, onClick: () => setCat(c) }, c === "" ? u.todos : c))),
      h("div", { className: "grade" }, d.lugares.map(l => (cat === "" || l[1] === cat) ? h(Lugar, { key: l[0], l }) : null))));
}

function Documentos(p) {
  const d = p.d, u = d.ui;
  const [ck, setCk] = useState(() => { try { return JSON.parse(localStorage.getItem("checklist") || "{}"); } catch (e) { return {}; } });
  const [data, setData] = useState("");
  const feitos = d.passos.filter((x, i) => ck[i]).length;
  const marcar = i => { const n = Object.assign({}, ck); n[i] = !n[i]; setCk(n); try { localStorage.setItem("checklist", JSON.stringify(n)); } catch (e) {} };
  return h("div", null, h(Cab, { t: u.docT, d: u.docD }),
    h("div", { className: "w sec" },
      h("div", { className: "resumo" },
        h("div", { className: "prog", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": d.passos.length, "aria-valuenow": feitos }, h("div", { className: "prog-b", style: { width: (feitos / d.passos.length * 100) + "%" } })),
        h("p", null, u.prog.replace("{n}", feitos).replace("{m}", d.passos.length))),
      h("ol", { className: "etapas" }, d.passos.map((x, i) => h("li", { key: x[0], className: ck[i] ? "ok" : "" }, h("h3", null, x[0]), h("p", null, x[1]),
        h("label", { className: "feito" }, h("input", { type: "checkbox", checked: !!ck[i], onChange: () => marcar(i) }), u.feito)))),
      h("div", { className: "lembrete" }, h("h3", null, u.lembT), h("p", null, u.lembD),
        h("form", { onSubmit: e => { e.preventDefault(); if (data) { baixarIcs(data, u); } } },
          h("label", null, u.dataL, h("input", { type: "date", required: true, value: data, onChange: e => setData(e.target.value) })),
          h("button", { className: "btn btn-p", type: "submit" }, u.lembB))),
      h("p", { className: "aviso" }, u.aviso)));
}

function Idioma(p) {
  const [ab, setAb] = useState(false);
  useEffect(() => {
    if (!ab) { return; }
    const f = e => { if (e.type === "keydown") { if (e.key === "Escape") { setAb(false); } } else if (!e.target.closest(".idioma")) { setAb(false); } };
    document.addEventListener("click", f); document.addEventListener("keydown", f);
    return () => { document.removeEventListener("click", f); document.removeEventListener("keydown", f); };
  }, [ab]);
  const atual = LANGS.filter(l => l[0] === p.lg)[0];
  return h("div", { className: "idioma" },
    h("button", { className: "idioma-b", "aria-haspopup": "listbox", "aria-expanded": ab, "aria-label": p.rotulo + ": " + atual[1], onClick: () => setAb(!ab) }, h(Icon, { n: "globe" }), atual[1]),
    ab ? h("ul", { className: "idioma-l", role: "listbox" }, LANGS.map(l => h("li", { key: l[0] },
      h("button", { role: "option", "aria-selected": l[0] === p.lg, lang: l[0], className: l[0] === p.lg ? "on" : "", onClick: () => { p.trocar(l[0]); setAb(false); } }, l[1])))) : null);
}

/* ---------- Chatbot ---------- */
function Chat(p) {
  const d = p.d, u = d.ui, log = useRef(null), inp = useRef(null), [txt, setTxt] = useState("");
  useEffect(() => { if (log.current) { log.current.scrollTop = log.current.scrollHeight; } }, [p.msgs, p.dig, p.aberto]);
  useEffect(() => {
    if (!p.aberto) { return; }
    if (inp.current && window.matchMedia && matchMedia("(pointer: fine)").matches) { inp.current.focus({ preventScroll: true }); }
    const f = e => { if (e.key === "Escape") { p.abrir(false); } };
    document.addEventListener("keydown", f);
    return () => document.removeEventListener("keydown", f);
  }, [p.aberto]);

  if (!p.aberto) {
    return h("aside", { className: "chat", "aria-label": u.assist },
      h("button", { className: "fab", "aria-expanded": false, onClick: () => p.abrir(true) }, h(Icon, { n: "chat" }), u.fab));
  }
  const vistas = {};
  p.msgs.forEach(m => { if (m.a === "user") { vistas[m.t] = 1; } });
  const opcoes = !p.topico
    ? h("div", { className: "ch-temas" }, Object.keys(d.topicos).map(k => h("button", { key: k, onClick: () => p.escolher(k) }, h(Icon, { n: ICONE_CARTAO[k] }), d.topicos[k].nome)))
    : h("div", { className: "ch-perg" }, h("p", { className: "ch-lab" }, u.outras),
        d.topicos[p.topico].perguntas.map(q => h("button", { key: q.p, className: vistas[q.p] ? "vista" : "", onClick: () => p.perguntar(q, p.topico) }, q.p)),
        h("button", { className: "menu", onClick: p.voltar }, h(Icon, { n: "back" }), u.menu));

  return h("aside", { className: "chat", "aria-label": u.assist }, h("div", { className: "ch" },
    h("header", { className: "ch-top" },
      h("span", { className: "ch-av", "aria-hidden": true }, h(Icon, { n: "chat" })),
      h("div", { className: "ch-t" }, h("strong", null, u.assist), h("span", null, u.chatSub)),
      h("button", { className: "ic-btn", "aria-label": u.novo, title: u.novo, onClick: () => p.reiniciar() }, h(Icon, { n: "refresh" })),
      h("button", { className: "ic-btn", "aria-label": u.minA, title: u.minA, onClick: () => p.abrir(false) }, h(Icon, { n: "minus" }))),
    h("div", { className: "ch-log", ref: log, role: "log", "aria-live": "polite" },
      p.msgs.map((m, i) => h("div", { key: i, className: "msg " + m.a },
        m.t,
        m.acao ? h("div", null, h("button", { className: "msg-acao", onClick: () => p.ir(m.acao) }, m.acao === "documentos" ? u.irDoc : u.irCid, h(Icon, { n: "arrow" }))) : null,
        m.sug ? h("div", { className: "sug" }, m.sug.map(s => h("button", { key: s.item.p, onClick: () => p.perguntar(s.item, s.chave) }, s.item.p))) : null)),
      p.dig ? h("div", { className: "msg bot dig", role: "status", "aria-label": u.dig }, h("i"), h("i"), h("i")) : null),
    h("div", { className: "ch-opc" }, opcoes),
    h("form", { className: "ch-form", onSubmit: e => { e.preventDefault(); if (txt.trim()) { p.enviar(txt.trim()); setTxt(""); } } },
      h("input", { ref: inp, value: txt, onChange: e => setTxt(e.target.value), placeholder: u.ph, "aria-label": u.ph, maxLength: 200 }),
      h("button", { type: "submit", "aria-label": u.enviar }, h(Icon, { n: "send" }))),
    h("p", { className: "ch-emerg" }, u.emerg)));
}

/* ---------- App ---------- */
function App() {
  const [aba, setAba] = useState(() => { const x = location.hash.slice(1); return ABAS.some(b => b[0] === x) ? x : "inicio"; });
  const [aberto, setAberto] = useState(() => { try { return localStorage.getItem("chatAberto") === "1"; } catch (e) { return false; } });
  const [lg, setLg] = useState(lgInicial);
  const D = dados(lg), u = D.ui;
  const [msgs, setMsgs] = useState(() => [{ a: "bot", t: dados(lgInicial()).ui.intro }]);
  const [topico, setTopico] = useState(null), [dig, setDig] = useState(false);
  const pend = useRef(0), ger = useRef(0);
  useEffect(() => { document.documentElement.lang = HTMLLANG[lg]; document.title = u.marca; }, [lg]);

  const ir = id => { setAba(id); try { history.replaceState(null, "", "#" + id); } catch (e) {} window.scrollTo(0, 0); };
  const abrir = v => { setAberto(v); try { localStorage.setItem("chatAberto", v ? "1" : "0"); } catch (e) {} };
  const reduz = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const user = t => setMsgs(l => l.concat([{ a: "user", t }]));
  const bot = m => { /* mostra "digitando" por um instante antes da resposta */
    const g = ger.current; pend.current++; setDig(true);
    setTimeout(() => { if (g !== ger.current) { return; } pend.current--; setDig(pend.current > 0); setMsgs(l => l.concat([Object.assign({ a: "bot" }, m)])); }, reduz ? 0 : 550);
  };
  const reiniciar = l => { ger.current++; pend.current = 0; setDig(false); setTopico(null); setMsgs([{ a: "bot", t: dados(l || lg).ui.intro }]); };
  const trocar = l => { setLg(l); try { localStorage.setItem("idioma", l); } catch (e) {} reiniciar(l); };
  const escolher = k => { abrir(true); user(D.topicos[k].nome); bot({ t: u.sobre.replace("{t}", D.topicos[k].nome.toLowerCase()) }); setTopico(k); };
  const perguntar = (q, k) => { user(q.p); bot({ t: q.r, acao: ACAO[k] }); setTopico(k); };
  const voltar = () => { user(u.menu); bot({ t: u.claro }); setTopico(null); };
  const enviar = tx => {
    user(tx);
    const r = buscar(tx, D.topicos, topico);
    if (r.length && r[0].s >= 3 && (!r[1] || r[0].s > r[1].s)) { bot({ t: r[0].item.r, acao: ACAO[r[0].chave] }); setTopico(r[0].chave); }
    else { bot({ t: u.parecido, sug: r.length ? r.slice(0, 3) : Object.keys(D.topicos).map(k => ({ chave: k, item: D.topicos[k].perguntas[0] })) }); }
  };

  const pp = { key: lg, d: D, ir, abrir, escolher };
  const pagina = aba === "cidade" ? h(Cidade, pp) : aba === "turismo" ? h(Turismo, pp) : aba === "documentos" ? h(Documentos, pp) : h(Inicio, pp);
  return h(React.Fragment, null,
    h("header", { className: "topo" }, h("div", { className: "w topo-in" },
      h("button", { className: "marca", onClick: () => ir("inicio") }, h("span", { className: "marca-i" }, h(Icon, { n: "tree" })), u.marca),
      h("nav", { className: "abas", "aria-label": u.nav }, D.abas.map(b => h("button", { key: b[0], className: aba === b[0] ? "on" : "", "aria-current": aba === b[0] ? "page" : undefined, onClick: () => ir(b[0]) }, b[1]))),
      h(Idioma, { lg, trocar, rotulo: u.idioma }))),
    h("main", null, pagina),
    h("footer", { className: "rodape" }, h("div", { className: "w" }, h("strong", null, u.marca), h("p", null, u.rodape), h("p", null, u.emerg))),
    h(Chat, { d: D, aberto, abrir, msgs, topico, dig, escolher, perguntar, voltar, enviar, reiniciar, ir }));
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
