(function () {
  "use strict";

  /* ---------- podaci ---------- */
  var CATS = [
    { id: "sve", name: "Sve" },
    { id: "trpezarija", name: "Nogare za trpezarijski sto", desc: "Par nogara visine 67 do 73 cm, za trpezarijske i radne stolove." },
    { id: "klub", name: "Nogare za klub sto", desc: "Niske nogare visine 39 do 43 cm, za klub stolove, stočiće i klupe." },
    { id: "matrix", name: "Centralne nogare", desc: "Matrix: jedna konstrukcija u sredini stola, bez nogara na krajevima." },
    { id: "namestaj", name: "Stolovi i nameštaj", desc: "Gotovi stolovi sa pločom od hrasta, klupe i regali od čelika i drveta." }
  ];
  var COLORS = {
    crna: "Crna, fina struktura",
    bela: "Bela, fina struktura",
    providna: "Providni lak (sirovi čelik)"
  };
  // mere u mm: h visina, w širina, l dužina (Matrix), p profil (vidljiva strana), pd dubina profila
  var PRODUCTS = [
    { id: "x", name: "X nogare", cat: "trpezarija", model: "x",
      desc: "Najstabilniji oblik, za veće i teže ploče. Montažna ploča sa rupama za vijke.",
      sizes: [ {h:730,w:800,p:80,pd:80}, {h:730,w:800,p:100,pd:100}, {h:730,w:800,p:120,pd:120} ],
      colors: ["crna","bela","providna"] },
    { id: "u", name: "U nogare", cat: "trpezarija", model: "u",
      desc: "Čist i jednostavan oblik koji se uklapa u svaki prostor.",
      sizes: [ {h:730,w:620,p:80,pd:80}, {h:730,w:640,p:80,pd:80}, {h:730,w:800,p:80,pd:80}, {h:730,w:800,p:100,pd:100}, {h:730,w:800,p:120,pd:80}, {h:670,w:750,p:120,pd:80} ],
      colors: ["crna","bela","providna"] },
    { id: "trapez", name: "Trapez nogare", cat: "trpezarija", model: "trapez",
      desc: "Moderniji izgled i više mesta za noge. Zatvoren okvir sa donjom prečkom.",
      sizes: [ {h:730,w:800,p:80,pd:80}, {h:670,w:850,p:80,pd:80} ],
      colors: ["crna","bela"] },
    { id: "okvir", name: "Okvir nogare", cat: "trpezarija", model: "okvir",
      desc: "Pravougaoni okvir od ravnog profila. Lagan izgled, čvrst spoj.",
      sizes: [ {h:730,w:750,p:80,pd:20}, {h:730,w:750,p:80,pd:40} ],
      colors: ["crna"] },
    { id: "x-klub", name: "X nogare za klub sto", cat: "klub", model: "x",
      desc: "X oblik u niskoj izvedbi, za klub stolove i stočiće.",
      sizes: [ {h:390,w:530,p:80,pd:80}, {h:430,w:300,p:80,pd:80} ],
      colors: ["crna","providna"] },
    { id: "u-klub", name: "U nogare za klub sto", cat: "klub", model: "u",
      desc: "Niske U nogare za klub sto, stočić ili klupu.",
      sizes: [ {h:390,w:550,p:80,pd:80}, {h:430,w:300,p:80,pd:80} ],
      colors: ["crna","bela","providna"] },
    { id: "trapez-klub", name: "Trapez nogare za klub sto", cat: "klub", model: "trapez",
      desc: "Trapez oblik u niskoj izvedbi.",
      sizes: [ {h:390,w:550,p:80,pd:80} ],
      colors: ["crna","bela","providna"] },
    { id: "matrix-140", name: "Matrix centralne nogare", cat: "matrix", model: "matrix",
      desc: "Jedna centralna konstrukcija umesto dve nogare. Za duže stolove i mesta na krajevima stola.",
      sizes: [ {h:730,w:800,l:1400,p:80,pd:80}, {h:730,w:800,l:1400,p:100,pd:100} ],
      variants: ["X","Bočne noge"],
      colors: ["crna","bela"] },
    { id: "matrix-kv", name: "Matrix za kvadratni sto", cat: "matrix", model: "matrix",
      desc: "Matrix za kvadratne i okrugle ploče.",
      sizes: [ {h:730,w:780,l:780,p:80,pd:80}, {h:730,w:900,l:900,p:100,pd:100} ],
      variants: ["X","Bočne noge"],
      colors: ["crna","bela"] },
    { id: "matrix-klub", name: "Matrix za klub sto", cat: "matrix", model: "matrix",
      desc: "Niski Matrix za klub stolove.",
      sizes: [ {h:330,w:500,l:500,p:80,pd:80}, {h:390,w:500,l:500,p:80,pd:80}, {h:390,w:550,l:825,p:80,pd:80} ],
      variants: ["X"],
      colors: ["crna"] },
    { id: "sto", name: "Sto od hrasta i čelika", cat: "namestaj", model: "sto",
      desc: "Ceo sto: ploča od hrasta i čelične nogare po izboru. Mere ploče po vašoj meri.",
      sizes: [ {h:750,w:900,p:80,pd:80,top:40,label:"200 × 90"}, {h:750,w:1000,p:80,pd:80,top:40,label:"240 × 100"}, {h:750,w:800,p:80,pd:80,top:40,label:"160 × 80"} ],
      colors: ["crna","bela","providna"] },
    { id: "klupa", name: "Klupa", cat: "namestaj", model: "klupa",
      desc: "Klupa uz trpezarijski sto ili za hodnik. X nogare i ploča od hrasta.",
      sizes: [ {h:450,w:400,p:80,pd:80,top:40} ],
      colors: ["crna","bela"] },
    { id: "regal", name: "Niski regal", cat: "namestaj", model: "regal",
      desc: "Ram od kvadratnog profila sa policama od drveta. Za dnevnu sobu, lokal ili apartman.",
      sizes: [ {h:500,w:1500,d:400,p:30,pd:30} ],
      colors: ["crna"] }
  ];

  var GALLERY = [
    { model: "sto", size: {h:750,w:900,p:80,pd:80,top:40}, color: "crna", bg: "lan", ratio: 1.25, t: "Hrast i crni čelik", s: "X nogare 8 × 8 cm, ploča 200 × 90 cm" },
    { model: "matrix", size: {h:730,w:800,l:1400,p:80,pd:80,top:40}, variant: "X", color: "bela", bg: "ugalj", ratio: 0.8, t: "Matrix pod dugačkim stolom", s: "Matrix 140 cm, bela fina struktura" },
    { model: "u", size: {h:730,w:800,p:80,pd:80,top:40}, color: "bela", bg: "hrast", ratio: 1.1, t: "Bele U nogare", s: "U 73 × 80 cm, ploča od hrasta" },
    { model: "trapez", size: {h:730,w:800,p:80,pd:80,top:40}, color: "crna", bg: "lan", ratio: 0.85, t: "Trapez za trpezariju", s: "Trapez 73 × 80 cm, crna" },
    { model: "x", size: {h:390,w:530,p:80,pd:80,top:30}, color: "providna", bg: "ugalj", ratio: 1.3, t: "Klub sto, sirovi čelik", s: "X 39 × 53 cm, providni lak" },
    { model: "klupa", size: {h:450,w:400,p:80,pd:80,top:40}, color: "crna", bg: "lan", ratio: 1, t: "Klupa uz sto", s: "X nogare, visina 45 cm" },
    { model: "matrix", size: {h:730,w:900,l:900,p:100,pd:100,top:40}, variant: "Bočne noge", color: "bela", bg: "lan", ratio: 1.15, t: "Kvadratni sto na Matrix nogama", s: "Matrix 90 × 90 cm, bela" },
    { model: "regal", size: {h:500,w:1500,d:400,p:30,pd:30}, color: "crna", bg: "hrast", ratio: 0.7, t: "Niski regal", s: "Ram 3 × 3 cm, police od hrasta" },
    { model: "okvir", size: {h:730,w:750,p:80,pd:20,top:40}, color: "crna", bg: "lan", ratio: 1.2, t: "Okvir nogare", s: "Ravni profil 8 × 2 cm" },
    { model: "x", size: {h:730,w:800,p:120,pd:120,top:40}, color: "bela", bg: "hrast", ratio: 0.9, t: "Masivne X nogare", s: "X 73 × 80 cm, profil 12 × 12 cm" }
  ];

  /* ---------- crtanje ---------- */
  var uid = 0;
  function cm(mm) { var v = mm / 10; return (Math.round(v * 10) / 10).toString().replace(".", ","); }

  function metalFill(color, gid) {
    if (color === "bela") return "var(--m-white)";
    if (color === "providna") return "url(#" + gid + ")";
    return "var(--m-black)";
  }

  // segment od gornje tačke (xt,0) do donje (xb,H), produžen da ga clip ravno preseče
  function seg(xt, xb, H, width, stroke, extra) {
    var dx = xb - xt, k = 0.25;
    var x1 = xt - dx * k, y1 = -H * k, x2 = xb + dx * k, y2 = H + H * k;
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + stroke + '" stroke-width="' + width + '"' + (extra || "") + '/>';
  }

  // vraća {parts: [{type, ...}], W, H} u mm, y=0 vrh nogare
  function geometry(model, s, variant) {
    var W = s.w, H = s.h, p = s.p, L = s.l || s.w;
    var g = { lines: [], rects: [], back: [], W: W, H: H, plate: null, holes: [] };
    if (model === "x" || model === "klupa" || model === "sto") {
      var w2 = model === "klupa" ? s.w : W;
      g.plate = [0, 0, w2, 10];
      g.lines.push([p * 0.55, w2 - p * 0.55], [w2 - p * 0.55, p * 0.55]);
      g.W = w2;
    } else if (model === "u") {
      g.rects.push([0, 0, W, p], [0, 0, p, H], [W - p, 0, p, H]);
    } else if (model === "okvir") {
      var f = Math.max(p * 0.6, 40);
      g.rects.push([0, 0, W, f], [0, H - f, W, f], [0, 0, f, H], [W - f, 0, f, H]);
    } else if (model === "trapez") {
      var Wt = W * 0.62, o = (W - Wt) / 2;
      g.rects.push([o, 0, Wt, p], [0, H - p * 0.7, W, p * 0.7]);
      g.lines.push([o + p / 2, p / 2], [W - o - p / 2, W - p / 2]);
    } else if (model === "matrix") {
      g.W = L;
      g.plate = [L * 0.18, 0, L * 0.64, 12];
      if (variant === "Bočne noge") {
        g.back.push([L * 0.36, L * 0.1], [L * 0.64, L * 0.9]);
        g.lines.push([L * 0.3, p * 0.55], [L * 0.7, L - p * 0.55]);
      } else {
        g.back.push([L * 0.45, L * 0.14], [L * 0.55, L * 0.86]);
        g.lines.push([L * 0.62, p * 0.55], [L * 0.38, L - p * 0.55]);
      }
    } else if (model === "regal") {
      g.W = s.w;
      g.rects.push([0, 0, p, H], [s.w - p, 0, p, H], [s.w * 0.33, 0, p, H - 100], [s.w * 0.66, 0, p, H - 100],
                   [0, H - 100, s.w, p], [0, 0, s.w, p]);
      g.shelves = [[0, H - 100 - 22, s.w], [0, H * 0.42, s.w]];
    }
    // rupe na montažnoj ploči
    if (g.plate) {
      var px = g.plate[0], pw = g.plate[2];
      [0.08, 0.5, 0.92].forEach(function (t) { g.holes.push(px + pw * t); });
    }
    return g;
  }

  function drawSVG(model, s, color, opts) {
    opts = opts || {};
    var id = "d" + (++uid);
    var gid = id + "g";
    var g = geometry(model, s, opts.variant);
    var W = g.W, H = s.h, p = s.p;
    var withTop = model === "sto" || model === "klupa" || opts.top;
    var topT = s.top || 40;
    var over = withTop ? Math.max(60, W * 0.08) : 0;
    var topY = withTop ? -topT : 0;
    var showDims = opts.dims !== false;
    var M = Math.max(W, H);
    var fs = Math.max(26, M * 0.042);
    var padL = 40 + over, padR = showDims ? fs * 5.4 : 40 + over, padT = 40 + (withTop ? topT : 0), padB = showDims ? fs * 3.2 : 40;
    var vbX = -padL, vbY = -padT, vbW = W + padL + padR, vbH = H + padT + padB;
    if (opts.ratio) {
      var want = vbW / opts.ratio;
      if (want > vbH) { vbY -= (want - vbH) / 2; vbH = want; }
      else { var wantW = vbH * opts.ratio; vbX -= (wantW - vbW) / 2; vbW = wantW; }
    }
    var fill = metalFill(color, gid);
    var ol = "var(--outline)";
    var ow = Math.max(3, M * 0.004);
    var out = [];
    out.push('<svg viewBox="' + [vbX, vbY, vbW, vbH].map(function (n) { return n.toFixed(1); }).join(" ") + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + (opts.label || "") + '">');
    out.push('<defs><linearGradient id="' + gid + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--raw-a)"/><stop offset=".55" stop-color="var(--raw-b)"/><stop offset="1" stop-color="var(--raw-a)"/></linearGradient>');
    out.push('<clipPath id="' + id + 'c"><rect x="0" y="0" width="' + W + '" height="' + H + '"/></clipPath></defs>');
    if (opts.bg) out.push('<rect x="' + vbX + '" y="' + vbY + '" width="' + vbW + '" height="' + vbH + '" fill="' + opts.bg + '"/>');
    // senka na podu
    out.push('<ellipse cx="' + (W / 2) + '" cy="' + (H + 4) + '" rx="' + (W * 0.56 + over) + '" ry="' + Math.max(8, H * 0.018) + '" fill="#000" opacity=".12"/>');

    // zadnje noge (Matrix)
    if (g.back.length) {
      out.push('<g clip-path="url(#' + id + 'c)" opacity=".5">');
      g.back.forEach(function (b) { out.push(seg(b[0], b[1], H, p + ow * 2, ol)); out.push(seg(b[0], b[1], H, p, fill)); });
      out.push('</g>');
    }
    // obrisi
    out.push('<g clip-path="url(#' + id + 'c)">');
    g.lines.forEach(function (l) { out.push(seg(l[0], l[1], H, p + ow * 2, ol)); });
    g.rects.forEach(function (r) { out.push('<rect x="' + (r[0] - ow) + '" y="' + (r[1] - ow) + '" width="' + (r[2] + ow * 2) + '" height="' + (r[3] + ow * 2) + '" fill="' + ol + '"/>'); });
    g.lines.forEach(function (l) { out.push(seg(l[0], l[1], H, p, fill)); });
    g.rects.forEach(function (r) { out.push('<rect x="' + r[0] + '" y="' + r[1] + '" width="' + r[2] + '" height="' + r[3] + '" fill="' + fill + '"/>'); });
    out.push('</g>');
    // police (regal)
    if (g.shelves) {
      g.shelves.forEach(function (sh) {
        out.push('<rect x="' + (sh[0] - 10) + '" y="' + sh[1] + '" width="' + (sh[2] + 20) + '" height="22" fill="var(--oak)" stroke="var(--oak-grain)" stroke-width="' + ow + '"/>');
      });
      // gornja ploča
      out.push('<rect x="-20" y="-28" width="' + (W + 40) + '" height="28" fill="var(--oak)" stroke="var(--oak-grain)" stroke-width="' + ow + '"/>');
    }
    // montažna ploča
    if (g.plate) {
      var pl = g.plate;
      out.push('<rect x="' + pl[0] + '" y="' + pl[1] + '" width="' + pl[2] + '" height="' + pl[3] + '" fill="' + fill + '" stroke="' + ol + '" stroke-width="' + ow + '"/>');
    }
    // ploča stola od hrasta
    if (withTop) {
      var tx = -over, tw = W + over * 2;
      out.push('<rect x="' + tx + '" y="' + topY + '" width="' + tw + '" height="' + topT + '" fill="var(--oak)" stroke="var(--oak-grain)" stroke-width="' + ow + '"/>');
      for (var i = 1; i <= 3; i++) {
        var yy = topY + topT * i / 4, x0 = tx + tw * (0.08 * i), x1 = tx + tw * (0.55 + 0.1 * i);
        out.push('<path d="M' + x0 + ' ' + yy + ' C ' + (x0 + tw * 0.2) + ' ' + (yy - 4) + ', ' + (x1 - tw * 0.2) + ' ' + (yy + 4) + ', ' + x1 + ' ' + yy + '" stroke="var(--oak-grain)" stroke-width="' + (ow * 0.7) + '" fill="none" opacity=".7"/>');
      }
    }
    // kote
    if (showDims) {
      var dc = "var(--dim)", dw = Math.max(1.5, M * 0.0022), tick = fs * 0.35;
      var yD = H + fs * 1.5;
      out.push('<g stroke="' + dc + '" stroke-width="' + dw + '" fill="none">');
      out.push('<path d="M0 ' + (H + fs * 0.4) + ' V' + (yD + tick) + ' M' + W + ' ' + (H + fs * 0.4) + ' V' + (yD + tick) + '"/>');
      out.push('<path d="M0 ' + yD + ' H' + W + ' M' + (-tick) + ' ' + (yD + tick) + ' L' + tick + ' ' + (yD - tick) + ' M' + (W - tick) + ' ' + (yD + tick) + ' L' + (W + tick) + ' ' + (yD - tick) + '"/>');
      var xD = W + fs * 1.6, hTop = withTop ? topY : 0;
      out.push('<path d="M' + (W + fs * 0.4) + ' ' + hTop + ' H' + (xD + tick) + ' M' + (W + fs * 0.4) + ' ' + H + ' H' + (xD + tick) + '"/>');
      out.push('<path d="M' + xD + ' ' + hTop + ' V' + H + ' M' + (xD - tick) + ' ' + (hTop + tick) + ' L' + (xD + tick) + ' ' + (hTop - tick) + ' M' + (xD - tick) + ' ' + (H + tick) + ' L' + (xD + tick) + ' ' + (H - tick) + '"/>');
      out.push('</g>');
      var wl = model === "matrix" ? cm(g.W) : cm(W);
      var hl = cm(H - hTop);
      out.push('<g fill="' + dc + '" font-family="Inter, system-ui, sans-serif" font-size="' + fs + '" font-weight="500" style="font-variant-numeric:tabular-nums">');
      out.push('<text x="' + (W / 2) + '" y="' + (yD + fs * 1.25) + '" text-anchor="middle">' + wl + ' cm</text>');
      out.push('<text x="' + (xD + fs * 0.45) + '" y="' + ((hTop + H) / 2) + '" dominant-baseline="middle">' + hl + ' cm</text>');
      out.push('</g>');
    }
    out.push('</svg>');
    return out.join("");
  }

  /* ---------- pomoćno ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (html != null) e.innerHTML = html;
    return e;
  }
  function sizeLabel(p, s) {
    if (s.label) return s.label + " cm";
    if (p.model === "matrix") return cm(s.h) + " × " + cm(s.w) + " × " + cm(s.l);
    if (p.model === "regal") return cm(s.h) + " × " + cm(s.w) + " × " + cm(s.d);
    return cm(s.h) + " × " + cm(s.w);
  }
  function profileLabel(s) { return cm(s.p) + " × " + cm(s.pd) + " cm"; }
  function catName(id) { for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i].name; return ""; }

  var toastT;
  function toast(msg) {
    var t = $(".toast") || document.body.appendChild(el("div", { "class": "toast", role: "status" }));
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(function () { t.hidden = true; }, 2200);
  }
  function copyText(text, fallbackEl) {
    function fallback() {
      if (fallbackEl) {
        if (fallbackEl.select) { fallbackEl.focus(); fallbackEl.select(); }
        else { var r = document.createRange(); r.selectNodeContents(fallbackEl); var sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); }
      }
      toast("Tekst je označen. Kopirajte ga sa Ctrl+C ili dugim pritiskom.");
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { toast("Kopirano"); }, fallback);
      } else fallback();
    } catch (e) { fallback(); }
  }

  /* ---------- katalog (proizvodi.html) ---------- */
  var current = "sve";
  function isCat(id) { return CATS.some(function (c) { return c.id === id; }); }
  function productById(id) { for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i]; return null; }

  function renderChips() {
    var box = $("#chips"); if (!box) return; box.innerHTML = "";
    CATS.forEach(function (c) {
      var n = c.id === "sve" ? PRODUCTS.length : PRODUCTS.filter(function (p) { return p.cat === c.id; }).length;
      var b = el("button", { type: "button", "class": "chip", "aria-pressed": String(c.id === current) }, c.name + '<span class="n">' + n + "</span>");
      b.addEventListener("click", function () { setCat(c.id, true); });
      box.appendChild(b);
    });
  }
  function setCat(id, push) {
    current = isCat(id) ? id : "sve";
    if (push) { try { history.replaceState(null, "", current === "sve" ? location.pathname : "#" + current); } catch (e) { location.hash = current; } }
    renderChips(); renderCatalog();
  }

  function productCard(p) {
    var s = p.sizes[0];
    var idx = PRODUCTS.indexOf(p) + 1;
    var card = el("button", { type: "button", "class": "card", "aria-label": p.name + ", detalji" });
    card.innerHTML =
      '<div class="draw"><span class="sheet-tag">TM-' + String(idx).padStart(2, "0") + '</span>' +
      drawSVG(p.model, s, p.colors[0], { variant: p.variants && p.variants[0], label: p.name }) + "</div>" +
      '<div class="card-body"><h3>' + p.name + '</h3><p class="meta">' + catName(p.cat) + '</p>' +
      '<div class="card-foot"><span class="swatches">' + p.colors.map(function (c) { return '<span class="sw sw-' + c + '" title="' + COLORS[c] + '"></span>'; }).join("") + "</span>" +
      '<span class="sizes">' + (p.sizes.length > 1 ? p.sizes.length + " dimenzije" : sizeLabel(p, s) + " cm") + "</span></div></div>";
    card.addEventListener("click", function () { openProduct(p); });
    return card;
  }

  function renderCatalog() {
    var box = $("#catalog"); if (!box) return; box.innerHTML = "";
    var cats = current === "sve" ? CATS.slice(1) : CATS.filter(function (c) { return c.id === current; });
    cats.forEach(function (c) {
      var list = PRODUCTS.filter(function (p) { return p.cat === c.id; });
      var group = el("section", { "class": "cat-group", "aria-labelledby": "h-" + c.id });
      group.innerHTML = '<div class="cat-head"><h2 id="h-' + c.id + '">' + c.name + '</h2><p>' + c.desc + '</p><span class="cat-count num">' + list.length + (list.length === 1 ? " model" : " modela") + "</span></div>";
      var grid = el("div", { "class": "grid" });
      list.forEach(function (p) { grid.appendChild(productCard(p)); });
      group.appendChild(grid);
      box.appendChild(group);
    });
  }

  /* ---------- kategorije (index.html) ---------- */
  function renderCatTiles() {
    var box = $("#catTiles"); if (!box) return;
    CATS.slice(1).forEach(function (c) {
      var list = PRODUCTS.filter(function (p) { return p.cat === c.id; });
      var p = list[0];
      var a = el("a", { "class": "tile", href: "proizvodi.html#" + c.id });
      a.innerHTML = '<div class="draw">' + drawSVG(p.model, p.sizes[0], p.colors[0], { variant: p.variants && p.variants[0], dims: false, top: c.id === "namestaj", label: c.name }) + "</div>" +
        '<div class="tile-body"><h3>' + c.name + '</h3><p>' + c.desc + '</p><span class="tile-more">' + list.length + (list.length === 1 ? " model" : " modela") + ' <span aria-hidden="true">→</span></span></div>';
      box.appendChild(a);
    });
  }

  /* ---------- detalj proizvoda ---------- */
  var pd = $("#pd"), state = {};
  function openProduct(p) {
    if (!pd) return;
    state = { p: p, size: 0, color: 0, variant: 0 };
    $("#pdCat").textContent = catName(p.cat);
    $("#pdTitle").textContent = p.name;
    $("#pdDesc").textContent = p.desc;
    renderProduct();
    if (pd.showModal) pd.showModal(); else pd.setAttribute("open", "");
  }
  function optButtons(box, items, active, onPick, render) {
    box.innerHTML = "";
    items.forEach(function (it, i) {
      var b = el("button", { type: "button", "class": "opt", "aria-pressed": String(i === active) }, render(it));
      b.addEventListener("click", function () { onPick(i); });
      box.appendChild(b);
    });
  }
  function renderProduct() {
    var p = state.p, s = p.sizes[state.size], c = p.colors[state.color], v = p.variants ? p.variants[state.variant] : null;
    $("#pdDraw").innerHTML = drawSVG(p.model, s, c, { variant: v, label: p.name + " " + sizeLabel(p, s) });
    optButtons($("#pdSizes"), p.sizes, state.size, function (i) { state.size = i; renderProduct(); },
      function (sz) { return '<span class="num">' + sizeLabel(p, sz) + (sz.label ? "" : " cm") + "</span>" + (p.sizes.some(function (o) { return o.p !== p.sizes[0].p; }) ? ' <span style="opacity:.6">· ' + cm(sz.p) + "×" + cm(sz.pd) + "</span>" : ""); });
    $("#pdVarWrap").hidden = !(p.variants && p.variants.length > 1);
    if (p.variants) optButtons($("#pdVars"), p.variants, state.variant, function (i) { state.variant = i; renderProduct(); }, function (x) { return x; });
    optButtons($("#pdColors"), p.colors, state.color, function (i) { state.color = i; renderProduct(); },
      function (col) { return '<span class="sw sw-' + col + '"></span>' + COLORS[col].split(",")[0].replace(" (sirovi čelik)", ""); });
    var rows = [
      ["Model", p.name + (v && p.variants.length > 1 ? ", " + v : "")],
      [p.model === "sto" ? "Ploča" : (p.model === "matrix" ? "Visina × širina × dužina" : (p.model === "regal" ? "Visina × dužina × dubina" : "Visina × širina")), sizeLabel(p, s) + (s.label ? "" : " cm")],
      ["Profil (kutija)", profileLabel(s)],
      ["Boja", COLORS[c]],
      ["Zaštita", c === "providna" ? "Providni lak preko brušenog čelika" : "Plastifikacija, fina struktura"],
      ["Mere po meri", "Da, sve dimenzije"]
    ];
    if (p.model === "sto") rows.splice(2, 0, ["Visina stola", cm(s.h) + " cm"]);
    $("#pdSpec").innerHTML = rows.map(function (r) { return "<tr><th>" + r[0] + "</th><td>" + r[1] + "</td></tr>"; }).join("");
  }
  if ($("#pdAsk")) $("#pdAsk").addEventListener("click", function () {
    var p = state.p, s = p.sizes[state.size], c = p.colors[state.color], v = p.variants ? p.variants[state.variant] : null;
    if ($("#msg")) $("#msg").value = "Dobar dan, zanima me " + p.name + (v && p.variants.length > 1 ? " (" + v + ")" : "") +
      ", " + sizeLabel(p, s) + (s.label ? "" : " cm") + ", profil " + profileLabel(s) + ", boja: " + COLORS[c].toLowerCase() + ".\n" +
      "Dimenzije ploče: ___ × ___ cm\nKoličina: \nMesto isporuke: ";
    pd.close();
  });

  /* ---------- galerija ---------- */
  var BG = { lan: "var(--g-lan)", ugalj: "var(--g-ugalj)", hrast: "var(--g-hrast)" };
  var gi = 0, lb = $("#lb");
  function galSVG(item, big) {
    return drawSVG(item.model, item.size, item.color, {
      variant: item.variant, top: true, dims: false, bg: BG[item.bg], ratio: big ? 1.6 : item.ratio, label: item.t
    });
  }
  function renderGallery() {
    var box = $("#gal"); if (!box) return;
    GALLERY.forEach(function (item, i) {
      var b = el("button", { type: "button", "aria-label": item.t + ", uvećaj" });
      b.innerHTML = '<figure style="margin:0"><div class="frame">' + galSVG(item) + '</div><figcaption><b>' + item.t + "</b><span>" + item.s + "</span></figcaption></figure>";
      b.addEventListener("click", function () { openLB(i); });
      box.appendChild(b);
    });
  }
  function showLB() {
    var item = GALLERY[gi];
    $("#lbImg").innerHTML = galSVG(item, true);
    $("#lbTitle").textContent = item.t;
    $("#lbSub").textContent = item.s + " · " + (gi + 1) + " / " + GALLERY.length;
  }
  function openLB(i) { gi = i; showLB(); if (lb.showModal) lb.showModal(); else lb.setAttribute("open", ""); }
  if (lb) {
    $("#lbPrev").addEventListener("click", function () { gi = (gi - 1 + GALLERY.length) % GALLERY.length; showLB(); });
    $("#lbNext").addEventListener("click", function () { gi = (gi + 1) % GALLERY.length; showLB(); });
    lb.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") $("#lbPrev").click();
      if (e.key === "ArrowRight") $("#lbNext").click();
    });
  }
  document.querySelectorAll("dialog").forEach(function (d) {
    d.addEventListener("click", function (e) { if (e.target === d || e.target.hasAttribute("data-close")) d.close(); });
  });

  /* ---------- oblici (saveti) ---------- */
  var SHAPES = [
    ["x", "X", "Najstabilniji, za veće i teže ploče."],
    ["u", "U", "Čist i jednostavan, za svaki prostor."],
    ["trapez", "Trapez", "Moderniji izgled, više mesta za noge."],
    ["matrix", "Matrix", "Jedna konstrukcija u sredini, slobodni krajevi stola."]
  ];
  if ($("#shapes")) SHAPES.forEach(function (sh) {
    var s = sh[0] === "matrix" ? { h: 730, w: 800, l: 1100, p: 80, pd: 80 } : { h: 730, w: 800, p: 80, pd: 80 };
    var row = el("div", { "class": "shape" });
    row.innerHTML = drawSVG(sh[0], s, "crna", { dims: false, variant: "X", label: sh[1] }) + "<div><b>" + sh[1] + "</b><span>" + sh[2] + "</span></div>";
    $("#shapes").appendChild(row);
  });

  /* ---------- kontakt ---------- */
  document.querySelectorAll("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () { copyText(b.getAttribute("data-copy"), b.previousElementSibling); });
  });
  if ($("#msgForm")) $("#msgForm").addEventListener("submit", function (e) { e.preventDefault(); copyText($("#msg").value, $("#msg")); });

  /* ---------- pokretanje ---------- */
  function fromHash() {
    var h = (location.hash || "").slice(1);
    if (!$("#catalog")) return;
    var p = productById(h);
    if (p) { setCat(p.cat, false); openProduct(p); }
    else if (!h || isCat(h)) setCat(h, false);
    else if (!$("#chips").children.length) setCat("sve", false);
  }
  renderCatTiles(); renderGallery();
  if ($("#catalog")) { fromHash(); window.addEventListener("hashchange", fromHash); }
})();
