/* =========================================================
   SETLINE website logic: language switch, rendering, filters,
   lightbox and contact form (WhatsApp / email).
   ========================================================= */
(function () {
  let lang = localStorage.getItem("setline-lang") || "ar";
  let filter = "all";
  const $ = (s) => document.querySelector(s);
  const t = (k) => I18N[lang][k] || k;
  const photo = (n, i) => `assets/projects/p${String(n).padStart(2, "0")}_${i}.jpg`;
  const pad = (n) => String(n).padStart(2, "0");

  /* ---------- Static texts ---------- */
  function applyTexts() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.innerHTML = t(el.dataset.i18n)));
    $("#langBtn").textContent = lang === "ar" ? "EN" : "ع";
    // Company profile PDF follows the site language
    document.querySelectorAll("[data-profile]").forEach((a) => {
      a.href = `assets/docs/SETLINE-Company-Profile-${lang === "ar" ? "AR" : "EN"}.pdf`;
      a.setAttribute("download", `SETLINE-Company-Profile-${lang === "ar" ? "AR" : "EN"}.pdf`);
    });
    document.title = t("seo.title");
  }

  /* ---------- Dynamic blocks ---------- */
  function renderServices() {
    $("#servicesGrid").innerHTML = SERVICES.map((s) => `
      <article class="card reveal">
        <span class="card__code">${s.code}</span>
        <h3>${s[lang][0]}</h3><p>${s[lang][1]}</p>
      </article>`).join("");
  }
  function renderSectors() {
    $("#sectorsGrid").innerHTML = SECTORS.map((s) => `
      <div class="sector reveal"><h3>${s[lang][0]}</h3><p>${s[lang][1]}</p></div>`).join("");
  }
  function renderSteps() {
    $("#stepsList").innerHTML = STEPS.map((s, i) => `
      <li class="step reveal"><span class="step__n">${pad(i + 1)}</span>
        <h3>${s[lang][0]}</h3><p>${s[lang][1]}</p></li>`).join("");
    $("#qualityList").innerHTML = QUALITY.map((q) => `<li>${q[lang]}</li>`).join("");
  }
  function renderFilters() {
    const keys = ["all", ...Object.keys(CATEGORIES)];
    // when a city was chosen on the map, show it as a removable chip first
    const c = cityFilter && CITIES.find((x) => x.id === cityFilter);
    const chip = c ? `<button type="button" class="chip-city is-active" data-clear-city>
        <span class="stake"></span>${c[lang]}<span class="chip-x" aria-label="${t("map.close")}">×</span></button>` : "";
    $("#filters").innerHTML = chip + keys.map((k) => `
      <button type="button" data-f="${k}" class="${k === filter && !(c && k === "all") ? "is-active" : ""}">
        ${k === "all" ? t("f.all") : CATEGORIES[k][lang]}</button>`).join("");
  }
  function renderProjects(animate) {
    const city = cityFilter && CITIES.find((x) => x.id === cityFilter);
    const list = PROJECTS.filter((p) => (filter === "all" || p.cat === filter) && (!city || [].concat(city.match).includes(p.ar.c)));
    // animate = true when a filter is clicked: cards fade/slide in one after another
    $("#projectsGrid").innerHTML = list.map((p, i) => {
      const L = p[lang];
      const cls = animate ? "project pop" : "project reveal";
      const style = animate ? ` style="animation-delay:${Math.min(i, 12) * 45}ms"` : "";
      return `
      <article class="${cls}"${style} data-n="${p.n}" tabindex="0">
        <div class="project__img">
          <img src="${photo(p.n, p.cover || 1)}" alt="${L.t}" loading="lazy">
          <span class="project__no">PROJECT · ${pad(p.n)}</span>
          <span class="project__count">3 ${t("lbl.photos")}</span>
          ${p.client ? `<span class="project__client"><img src="assets/clients/${p.client}.png" alt="${clientLogo(p.client)[lang]}" loading="lazy"></span>` : ""}
        </div>
        <div class="project__body">
          <span class="project__meta">${CATEGORIES[p.cat][lang]} · ${L.c}</span>
          <h3>${L.t}</h3>
          <p>${L.d}</p>
          <div class="project__facts">
            <span dir="ltr">${p.area} m²</span><span>${p.dur[lang]}</span><span>${p.year}</span>
          </div>
        </div>
      </article>`;
    }).join("");
  }
  const clientLogo = (id) => CLIENTS.find((c) => c.logo === id);
  function renderClients() {
    // logo wall (names kept as alt text + tooltip for Google and screen readers)
    $("#clientsList").innerHTML = CLIENTS.map((c) => `
      <li class="client reveal" title="${c[lang]}">
        <img src="assets/clients/${c.logo}.png" alt="${c[lang]}" loading="lazy">
      </li>`).join("");
    // Optical balance: give every logo about the same visual area (wide logos shrink, tall ones grow)
    document.querySelectorAll("#clientsList img").forEach((img) => {
      const fit = () => {
        const r = img.naturalWidth / img.naturalHeight || 1;
        const area = matchMedia("(max-width: 600px)").matches ? 1900 : 5000;   // px²
        const w = Math.min(Math.sqrt(area * r), r * (matchMedia("(max-width: 600px)").matches ? 44 : 64));
        img.style.width = Math.round(w) + "px";
      };
      img.complete && img.naturalWidth ? fit() : img.addEventListener("load", fit, { once: true });
    });
  }
  function renderTeam() {
    // disciplines (no personal names)
    $("#teamGrid").innerHTML = DISCIPLINES.map((d) => `
      <article class="discipline reveal">
        <div class="discipline__top"><span class="discipline__code">${d.code}</span><span class="discipline__tag">${d.tag}</span></div>
        <h3>${d[lang][0]}</h3><p>${d[lang][1]}</p>
      </article>`).join("");
    $("#teamOrg").innerHTML = `
      <span class="org__label">${t("team.org")}</span>
      <span class="org__top">${t("team.orgTop")}</span>
      <span class="org__line" aria-hidden="true"></span>
      ${DEPARTMENTS.map((d) => `<span class="org__dept">${d[lang]}</span>`).join("")}`;
    $("#teamJoin").href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t("team.joinMsg") + " ")}`;
  }
  function renderFormTypes() {
    $("#formType").innerHTML = Object.values(CATEGORIES).map((c) => `<option>${c[lang]}</option>`).join("")
      + `<option>${lang === "ar" ? "أخرى" : "Other"}</option>`;
  }

  /* ---------- Map of the Kingdom ---------- */
  let selCity = "riyadh";
  const SVGNS = "http://www.w3.org/2000/svg";
  const cityProjects = (c) => PROJECTS.filter((p) => [].concat(c.match).includes(p.ar.c));
  // photographed projects + projects delivered there that aren't in the photo portfolio yet
  const cityTotal = (c) => cityProjects(c).length + (c.extra || 0);
  function mapXY(lon, lat) {
    const m = KSA_MAP;
    return [ (lon - m.lonMin) / (m.lonMax - m.lonMin) * m.w, (m.latMax - lat) / (m.latMax - m.latMin) * m.h ];
  }
  function svgEl(tag, attrs, parent) {
    const el = document.createElementNS(SVGNS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(el);
    return el;
  }
  function renderMap() {
    if (typeof KSA_MAP === "undefined") return;
    const svg = $("#ksaMap");
    const m = KSA_MAP;
    svg.setAttribute("viewBox", fullVB().join(" "));
    [...svg.querySelectorAll("g")].forEach((g) => g.remove());
    $("#mapTitle").textContent = t("map.title");

    const counts = Object.fromEntries(CITIES.map((c) => [c.id, cityTotal(c)]));
    const activeRegions = new Set(CITIES.filter((c) => counts[c.id] > 0).map((c) => c.region));
    const cityRegions = new Set(CITIES.map((c) => c.region)); // regions that already show a city label

    // Graticule (latitude / longitude lines) — engineering-drawing feel
    const grid = svgEl("g", {}, svg);
    for (let lat = 18; lat <= 32; lat += 4) {
      const [, y] = mapXY(0, lat);
      svgEl("line", { x1: 0, x2: m.w, y1: y, y2: y, class: "grid-line" }, grid);
      svgEl("text", { x: 4, y: y - 4, class: "grid-text" }, grid).textContent = `${lat}°N`;
    }
    for (let lon = 36; lon <= 56; lon += 4) {
      const [x] = mapXY(lon, 0);
      svgEl("line", { x1: x, x2: x, y1: 0, y2: m.h, class: "grid-line" }, grid);
      svgEl("text", { x: x + 4, y: m.h - 4, class: "grid-text" }, grid).textContent = `${lon}°E`;
    }

    // Provinces
    const provG = svgEl("g", {}, svg);
    const labelG = svgEl("g", {}, svg);
    m.provinces.forEach((p) => {
      const path = svgEl("path", { d: p.d, class: "prov" + (activeRegions.has(p.name) ? " is-active" : "") }, provG);
      const names = REGION_NAMES[p.name];
      const bb = path.getBBox();
      if (names && bb.width > 110 && !cityRegions.has(p.name)) {
        svgEl("text", { x: bb.x + bb.width / 2, y: bb.y + bb.height / 2, class: "prov-label" }, labelG)
          .textContent = names[lang === "ar" ? 0 : 1];
      }
    });

    // Cities (coverage first so project markers sit on top).
    // Each marker is drawn around (0,0) inside .mk and moved into place with translate(),
    // so it can keep the same on-screen size while the map zooms (see zoomMap).
    const cityG = svgEl("g", { class: "cities" }, svg);
    [...CITIES].sort((a, b) => (a.type === "projects") - (b.type === "projects")).forEach((c) => {
      const [cx, cy] = mapXY(c.lon, c.lat);
      const g = svgEl("g", { class: `city city--${c.type === "projects" ? "proj" : "cover"}`,
        transform: `translate(${cx} ${cy})`, tabindex: 0, role: "button", "data-city": c.id,
        "data-x": cx, "data-y": cy, "aria-label": c[lang] }, cityG);
      const mk = svgEl("g", { class: "mk" }, g);
      const x = 0, y = 0;
      const east = c.label === "end";
      // label position: beside the marker, or pulled away with a leader line (dx/dy)
      const ox = c.dx || 0, oy = c.dy || 0;
      if (ox || oy) svgEl("line", { x1: x, y1: y, x2: x + ox, y2: y + oy, class: "leader" }, mk);
      svgEl("circle", { cx: x, cy: y, r: 20, class: "ring" }, mk);
      svgEl("circle", { cx: x, cy: y, r: 30, class: "hit" }, mk);   // bigger invisible tap target
      svgEl("circle", { cx: x, cy: y, r: 11, class: "dot" }, mk);
      if (c.type === "projects") svgEl("circle", { cx: x, cy: y, r: 3.5, class: "core" }, mk);
      const lx = x + ox + (east ? 20 : -20), ly = y + oy;
      // In RTL text, "start" is the right edge — so pick the anchor that puts the text on the correct side
      const rtl = lang === "ar";
      const anchor = east ? (rtl ? "end" : "start") : (rtl ? "start" : "end");
      const T = (cls, yy) => svgEl("text", { x: lx, y: yy, class: cls, direction: rtl ? "rtl" : "ltr", "text-anchor": anchor }, mk);
      T("city-label", ly + 1).textContent = c[lang];
      const sub = counts[c.id] > 0
        ? (lang === "ar" ? `${counts[c.id]} ${counts[c.id] > 10 ? "مشروعاً" : counts[c.id] > 2 ? "مشاريع" : counts[c.id] === 2 ? "مشروعان" : "مشروع"}` : `${counts[c.id]} project${counts[c.id] > 1 ? "s" : ""}`)
        : (lang === "ar" ? "منطقة خدمة" : "service area");
      T("city-count", ly + 29).textContent = sub;
    });

    // Hide any region name that collides with a city label (keeps the map clean)
    const cityBoxes = [...cityG.querySelectorAll("text")].map((e) => {
      const b = e.getBBox(), g = e.closest(".city");   // label box is local to its marker: shift to map coordinates
      return { x: b.x + +g.dataset.x, y: b.y + +g.dataset.y, width: b.width, height: b.height };
    });
    [...labelG.querySelectorAll("text")].forEach((lbl) => {
      const a = lbl.getBBox();
      if (cityBoxes.some((b) => a.x < b.x + b.width + 6 && b.x < a.x + a.width + 6 && a.y < b.y + b.height + 4 && b.y < a.y + a.height + 4)) lbl.remove();
    });

    // Side panel: KPIs + city list
    const mapped = Object.values(counts).reduce((a, b) => a + b, 0);
    const projCities = CITIES.filter((c) => counts[c.id] > 0).length;
    $("#mapKpis").innerHTML = `
      <div><b data-count="${projCities}">${projCities}</b><span>${t("map.kCities")}</span></div>
      <div><b data-count="${activeRegions.size}">${activeRegions.size}</b><span>${t("map.kRegions")}</span></div>
      <div><b data-count="${mapped}">${mapped}</b><span>${t("map.kProjects")}</span></div>`;
    const max = Math.max(...Object.values(counts), 1);
    $("#cityList").innerHTML = [...CITIES].sort((a, b) => counts[b.id] - counts[a.id]).map((c) => `
      <button type="button" data-city="${c.id}" class="${c.id === selCity ? "is-selected" : ""}">
        <span class="stake ${c.type === "projects" ? "" : "stake--bronze"}"></span>
        <span>${c[lang]}${c.hq ? ` <small class="mono" style="color:var(--muted)">· HQ</small>` : ""}</span>
        <span class="count">${counts[c.id] || "—"}</span>
        <span class="bar"><i style="width:${(counts[c.id] / max) * 100}%"></i></span>
      </button>`).join("");
    renderCityProjects();
    const lgCover = document.querySelector(".lg-cover");
    if (lgCover) lgCover.parentElement.hidden = !CITIES.some((c) => c.type !== "projects");
    const others = PROJECTS.length - CITIES.reduce((s, c) => s + cityProjects(c).length, 0);
    $("#mapNote").textContent = "";   // mountain-site note removed on request
    // fresh map = full view, no card open
    curVB = fullVB(); svg.style.setProperty("--inv", 1); svg.classList.remove("is-zoomed");
    $("#cityCard").hidden = true; openCityId = null;
  }

  /* ---------- Map: zoom to a city + city card ---------- */
  let curVB = null, zoomAnim = 0, openCityId = null;
  // whole Kingdom, with a little room at the bottom so southern labels (Jazan) aren't cut
  const fullVB = () => [0, 0, KSA_MAP.w, KSA_MAP.h + 40];
  const isPhone = () => matchMedia("(max-width: 600px)").matches;
  const fmt = (n) => n.toLocaleString(lang === "ar" ? "ar-SA-u-nu-latn" : "en-US");
  function zoomMap(id) {
    const svg = $("#ksaMap"), m = KSA_MAP;
    let target = fullVB();
    if (id) {
      const c = CITIES.find((x) => x.id === id);
      let [x, y] = mapXY(c.lon, c.lat);
      if (c.region === "Jazan Region") {          // Jazan + Abu Arish: frame both
        const pts = CITIES.filter((k) => k.region === "Jazan Region").map((k) => mapXY(k.lon, k.lat));
        x = pts.reduce((s, p) => s + p[0], 0) / pts.length; y = pts.reduce((s, p) => s + p[1], 0) / pts.length;
      }
      const z = c.region === "Jazan Region" ? 2.8 : 1.9;
      const vw = m.w / z, vh = m.h / z;
      // desktop: city sits on the map's reading side, the card covers the other side; phone: centered
      const fx = isPhone() ? 0.5 : (lang === "ar" ? 0.68 : 0.32), fy = 0.5;
      const vx = x - vw * fx;   // may go past the map edge (blank area) so edge cities like Jeddah sit in the clear spot
      const vy = Math.max(0, Math.min(m.h - vh, y - vh * fy));
      target = [vx, vy, vw, vh];
      // edge cities (e.g. Jeddah) can't be centred: if the card would cover the city, put the card on the other side
      const fxReal = (x - vx) / vw, card = $("#cityCard");
      const cardOnLeft = lang === "ar";                       // default side of the card (inline-end)
      card.classList.toggle("city-card--flip", !isPhone() && (cardOnLeft ? fxReal < 0.55 : fxReal > 0.45));
    }
    const from = curVB || fullVB();
    svg.classList.toggle("is-zoomed", !!id);
    cancelAnimationFrame(zoomAnim);
    const dur = reduceMotion ? 0 : 650, t0 = performance.now();
    const step = (now) => {
      const k = dur ? Math.min((now - t0) / dur, 1) : 1;
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;   // ease in-out
      const vb = from.map((v, i) => v + (target[i] - v) * e);
      svg.setAttribute("viewBox", vb.join(" "));
      svg.style.setProperty("--inv", (vb[2] / m.w).toFixed(4));  // keep markers & labels the same size on screen
      curVB = vb;
      if (k < 1) zoomAnim = requestAnimationFrame(step);
    };
    zoomAnim = requestAnimationFrame(step);
  }
  function openCity(id) {
    const c = CITIES.find((x) => x.id === id);
    const list = cityProjects(c);
    const card = $("#cityCard");
    openCityId = id;
    selectCity(id);
    // cities in the same region stay labelled while zoomed (e.g. Jazan + Abu Arish)
    document.querySelectorAll("#ksaMap .city").forEach((g) => {
      const k = CITIES.find((x) => x.id === g.dataset.city);
      g.classList.toggle("in-focus", k.region === c.region);
    });
    zoomMap(id);
    const total = cityTotal(c), extra = c.extra || 0;
    const nWord = (n) => lang === "ar" ? `${n} ${n > 10 ? "مشروعاً" : n > 2 ? "مشاريع" : n === 2 ? "مشروعان" : "مشروع"}` : `${n} project${n > 1 ? "s" : ""}`;
    const area = list.reduce((s, p) => s + p.area, 0);
    const years = list.map((p) => parseInt(p.year, 10)).filter(Boolean);
    const span = years.length ? (Math.min(...years) === Math.max(...years) ? `${Math.min(...years)}` : `${Math.min(...years)}–${Math.max(...years)}`) : "—";
    const region = REGION_NAMES[c.region] ? REGION_NAMES[c.region][lang === "ar" ? 0 : 1] : "";
    card.innerHTML = `
      <button type="button" class="city-card__close" data-close aria-label="${t("map.close")}">×</button>
      <p class="city-card__eyebrow"><span class="stake ${c.type === "projects" ? "" : "stake--bronze"}"></span>
        ${lang === "ar" ? (region === "الشرقية" ? "المنطقة الشرقية" : `منطقة ${region}`) : `${region} Region`}${c.hq ? ` · <b class="mono">HQ</b>` : ""}</p>
      <h3 class="city-card__title">${c[lang]}</h3>
      ${list.length ? `
      <div class="city-card__kpis">
        <div><b>${total}</b><span>${t("map.kProjects")}</span></div>
        <div><b dir="ltr">${fmt(area)}</b><span>${t("map.cArea")}</span></div>
        <div><b dir="ltr">${span}</b><span>${t("map.cYears")}</span></div>
      </div>
      <div class="city-card__strip">
        ${list.map((p) => `
          <button type="button" class="city-card__thumb" data-n="${p.n}">
            <img src="${photo(p.n, p.cover || 1)}" alt="" loading="lazy">
            <span>${p[lang].t}</span>
          </button>`).join("")}
      </div>
      ${extra ? `<p class="city-card__more">${t("map.morePhotos").replace("{n}", extra)}</p>` : ""}
      <button type="button" class="btn btn--primary city-card__cta" data-show-city="${c.id}">
        ${t("map.viewAll").replace("{c}", c[lang])} <span class="mono">(${list.length})</span>
      </button>` : `
      ${total ? `<div class="city-card__kpis city-card__kpis--one"><div><b>${total}</b><span>${t("map.kProjects")}</span></div></div>` : ""}
      <p class="city-card__text">${total ? t("map.noPhotos").replace("{n}", nWord(total)).replace("{c}", c[lang]) : t("map.coverOnly")}</p>
      <button type="button" class="btn btn--primary city-card__cta" data-quote-city="${c.id}">
        ${t("map.quote").replace("{c}", c[lang])}
      </button>`}`;
    card.hidden = false;
    card.classList.remove("is-in"); void card.offsetWidth; card.classList.add("is-in");
    if (isPhone()) setTimeout(() => card.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" }), 350);
  }
  function closeCity() {
    if (!openCityId) return;
    openCityId = null;
    $("#cityCard").hidden = true;
    zoomMap(null);
  }

  /* Projects can also be filtered by city (from the map card) */
  let cityFilter = null;
  function showCityProjects(id) {
    cityFilter = id; filter = "all";
    renderFilters(); renderProjects(true);
    $("#projects").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }
  function renderCityProjects() {
    const c = CITIES.find((x) => x.id === selCity);
    const list = cityProjects(c);
    $("#cityProjectsTitle").textContent = `${t("map.projectsIn")} ${c[lang]}`;
    $("#cityProjects").innerHTML = list.length
      ? list.map((p) => `
        <button type="button" data-n="${p.n}">
          <img src="${photo(p.n, p.cover || 1)}" alt="" loading="lazy">
          <span>${p[lang].t}<small><bdi dir="ltr">${p.area} m²</bdi> · ${p.year}</small></span>
        </button>`).join("")
      : `<p class="map-note">${(c.extra ? t("map.noPhotos").replace("{n}", lang === "ar" ? `${c.extra} ${c.extra > 2 ? "مشاريع" : c.extra === 2 ? "مشروعان" : "مشروع"}` : `${c.extra} project${c.extra > 1 ? "s" : ""}`).replace("{c}", c[lang]) : t("map.coverOnly"))}</p>`;
  }
  function selectCity(id) {
    selCity = id;
    document.querySelectorAll("#ksaMap .city").forEach((g) => g.classList.toggle("is-selected", g.dataset.city === id));
    document.querySelectorAll("#cityList button").forEach((b) => b.classList.toggle("is-selected", b.dataset.city === id));
    renderCityProjects();
  }

  function renderAll() {
    applyTexts();
    renderServices(); renderSectors(); renderSteps();
    renderFilters(); renderProjects(); renderClients(); renderTeam(); renderFormTypes();
    renderMap();
    observeReveal();
  }

  /* ---------- Counting numbers (count up when they scroll into view) ---------- */
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function runCounter(el) {
    const to = +el.dataset.count, from = +(el.dataset.from || 0), suffix = el.dataset.suffix || "";
    if (reduceMotion || !isFinite(to)) { el.textContent = to + suffix; return; }
    const dur = 1400, start = performance.now();
    const step = (now) => {
      const k = Math.min((now - start) / dur, 1), eased = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(from + (to - from) * eased) + suffix;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  let countIO;
  function observeCounters() {
    const els = document.querySelectorAll("[data-count]:not([data-counted])");
    if (!("IntersectionObserver" in window)) return;
    countIO = countIO || new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.setAttribute("data-counted", ""); runCounter(e.target); countIO.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    els.forEach((el) => {
      if (!reduceMotion) el.textContent = (el.dataset.from || 0) + (el.dataset.suffix || "");
      countIO.observe(el);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  let io;
  function observeReveal() {
    observeCounters();
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((e) => e.classList.add("is-in"));
      return;
    }
    io = io || new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal:not(.is-in)").forEach((e) => io.observe(e));
  }

  /* ---------- Lightbox ---------- */
  let lb = { n: 1, i: 1 };
  function openLightbox(n) { lb = { n, i: 1 }; showLb(); $("#lightbox").hidden = false; document.body.style.overflow = "hidden"; }
  function closeLightbox() { $("#lightbox").hidden = true; document.body.style.overflow = ""; }
  function showLb() {
    const p = PROJECTS.find((x) => x.n === lb.n), L = p[lang];
    $("#lbImg").src = photo(lb.n, lb.i);
    $("#lbImg").alt = L.t;
    $("#lbCap").innerHTML = (p.client ? `<img class="lb-client" src="assets/clients/${p.client}.png" alt="${clientLogo(p.client)[lang]}">` : "") +
      `<span class="mono">PROJECT · ${pad(p.n)} · ${lb.i}/3</span>
      <b>${L.t}</b> — ${t("lbl.client")}: ${L.cl} · ${t("lbl.area")}: <bdi dir="ltr">${p.area} m²</bdi> · ${t("lbl.duration")}: ${p.dur[lang]} · ${t("lbl.year")}: ${p.year}`;
  }
  function stepLb(d) { lb.i = ((lb.i - 1 + d + 3) % 3) + 1; showLb(); }

  /* ---------- Events ---------- */
  $("#langBtn").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    localStorage.setItem("setline-lang", lang);
    renderAll();
  });
  $("#burger").addEventListener("click", () => $("#nav").classList.toggle("is-open"));
  $("#nav").addEventListener("click", (e) => { if (e.target.tagName === "A") $("#nav").classList.remove("is-open"); });

  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.clearCity !== undefined) cityFilter = null;          // remove the city chip
    else if (b.dataset.f === "all" && cityFilter) cityFilter = null;    // "All" also clears the city
    else if (b.dataset.f === filter) return;
    if (b.dataset.f) filter = b.dataset.f;
    const grid = $("#projectsGrid");
    grid.style.minHeight = grid.offsetHeight + "px"; // avoid the page jumping while cards swap
    renderFilters(); renderProjects(true);
    setTimeout(() => (grid.style.minHeight = ""), 700);
  });
  $("#projectsGrid").addEventListener("click", (e) => {
    const card = e.target.closest(".project"); if (card) openLightbox(+card.dataset.n);
  });
  $("#projectsGrid").addEventListener("keydown", (e) => {
    const card = e.target.closest(".project"); if (card && e.key === "Enter") openLightbox(+card.dataset.n);
  });
  $("#lbClose").addEventListener("click", closeLightbox);
  // In RTL the visual left arrow means "next"
  $("#lbPrev").addEventListener("click", () => stepLb(lang === "ar" ? 1 : -1));
  $("#lbNext").addEventListener("click", () => stepLb(lang === "ar" ? -1 : 1));
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLb(lang === "ar" ? 1 : -1);
    if (e.key === "ArrowRight") stepLb(lang === "ar" ? -1 : 1);
  });

  /* Map interactions */
  $("#ksaMap").addEventListener("click", (e) => {
    const g = e.target.closest(".city");
    if (g) openCity(g.dataset.city); else closeCity();   // tap empty map = zoom back out
  });
  $("#ksaMap").addEventListener("keydown", (e) => {
    const g = e.target.closest(".city"); if (g && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openCity(g.dataset.city); }
  });
  $("#cityList").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    openCity(b.dataset.city);
    if (!isPhone()) $("#ksaMap").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
  });
  $("#cityCard").addEventListener("click", (e) => {
    const el = e.target.closest("button"); if (!el) return;
    if (el.dataset.close !== undefined) closeCity();
    else if (el.dataset.n) openLightbox(+el.dataset.n);
    else if (el.dataset.showCity) showCityProjects(el.dataset.showCity);
    else if (el.dataset.quoteCity) {
      const c = CITIES.find((x) => x.id === el.dataset.quoteCity);
      $('#contactForm [name="city"]').value = c[lang];
      $("#contact").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      setTimeout(() => $('#contactForm [name="name"]').focus({ preventScroll: true }), 600);
    }
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && openCityId && $("#lightbox").hidden) closeCity(); });
  $("#cityProjects").addEventListener("click", (e) => { const b = e.target.closest("button[data-n]"); if (b) openLightbox(+b.dataset.n); });

  /* Dark / light mode */
  function setTheme(theme, save) {
    document.documentElement.setAttribute("data-theme", theme);
    if (save) localStorage.setItem("setline-theme", theme);
    document.querySelector('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#0F1012" : "#24262A");
    $("#themeBtn").setAttribute("aria-pressed", theme === "dark");
  }
  setTheme(document.documentElement.getAttribute("data-theme") || "light", false);
  $("#themeBtn").addEventListener("click", () => {
    setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
  });
  // Follow the device setting automatically until the visitor chooses a theme
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("setline-theme")) setTheme(e.matches ? "dark" : "light", false);
  });

  /* Contact form: opens WhatsApp or the email app with a pre-filled message */
  let via = "whatsapp";
  document.querySelectorAll("#contactForm [data-via]").forEach((b) => b.addEventListener("click", () => (via = b.dataset.via)));
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const labels = lang === "ar"
      ? { title: "طلب عرض سعر — سِت لاين", name: "الاسم", phone: "الجوال", type: "نوع المشروع", city: "المدينة", message: "التفاصيل" }
      : { title: "Quote request — SETLINE", name: "Name", phone: "Mobile", type: "Project type", city: "City", message: "Details" };
    // Only include the fields the visitor actually filled in
    const lines = [labels.title].concat(
      ["name", "phone", "type", "city", "message"]
        .filter((k) => String(f.get(k) || "").trim())
        .map((k) => `${labels[k]}: ${String(f.get(k)).trim()}`)
    );
    const body = lines.join("\n");
    if (via === "email") {
      location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(lines[0])}&body=${encodeURIComponent(body)}`;
    } else {
      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(body)}`, "_blank", "noopener");
    }
  });

  /* ---------- Installable app (PWA) ---------- */
  // Offline support
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      // updateViaCache "none" + update() = phones always pick up a newly published version
      navigator.serviceWorker.register("sw.js", { updateViaCache: "none" })
        .then((reg) => reg.update())
        .catch(() => {});
    });
  }
  const ua = navigator.userAgent;
  const isStandalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isAndroid = /android/i.test(ua);
  // Browsers inside other apps (WhatsApp, Facebook, Instagram...) cannot install apps
  const isInApp = /FBAN|FBAV|Instagram|WhatsApp|Line\/|Snapchat|TikTok|; wv\)/i.test(ua);
  const isSamsung = /SamsungBrowser/i.test(ua);
  const isFirefox = /firefox|fxios/i.test(ua);
  const isIOSSafari = isIOS && !/CriOS|FxiOS|EdgiOS|OPiOS/i.test(ua);
  let deferredPrompt = null;

  // Step-by-step guides, chosen automatically for the visitor's device/browser
  const GUIDE = {
    ar: {
      title: "ثبّت تطبيق سِت لاين",
      inapp: ["أنت تفتح الموقع من داخل تطبيق آخر (مثل واتساب)، وهذا لا يسمح بالتثبيت.",
              "اضغط على النقاط ⋮ أو ••• في أعلى الشاشة.",
              isIOS ? "اختر «فتح في Safari»، ثم اضغط زر «ثبّت التطبيق» مرة أخرى." : "اختر «فتح في Chrome»، ثم اضغط زر «ثبّت التطبيق» مرة أخرى."],
      ios: ["اضغط زر المشاركة <b>⬆</b> (مربع بسهم لأعلى) أسفل الشاشة أو بجانب العنوان.",
            "مرّر لأسفل واختر <b>«إضافة إلى الشاشة الرئيسية»</b>.",
            "اضغط <b>«إضافة»</b>، وسيظهر التطبيق بأيقونته على شاشتك."],
      iosOther: ["على الآيفون يُفضّل التثبيت من متصفح <b>Safari</b>.",
                 "انسخ رابط الموقع وافتحه في Safari.",
                 "اضغط زر المشاركة <b>⬆</b> ثم <b>«إضافة إلى الشاشة الرئيسية»</b>."],
      samsung: ["اضغط القائمة <b>≡</b> أسفل الشاشة.",
                "اختر <b>«إضافة الصفحة إلى»</b> ثم <b>«الشاشة الرئيسية»</b>.",
                "اضغط <b>«إضافة»</b>."],
      android: ["اضغط القائمة <b>⋮</b> أعلى الشاشة في Chrome.",
                "اختر <b>«تثبيت التطبيق»</b> أو <b>«إضافة إلى الشاشة الرئيسية»</b>.",
                "اضغط <b>«تثبيت»</b>، وسيظهر التطبيق مع تطبيقاتك."],
      firefox: ["متصفح Firefox لا يدعم تثبيت التطبيقات.",
                "افتح الرابط في <b>Chrome</b> أو <b>Edge</b>.",
                "ثم اضغط زر «ثبّت التطبيق» مرة أخرى."],
      desktop: ["في <b>Chrome</b> أو <b>Edge</b>: اضغط أيقونة التثبيت <b>⊕</b> في شريط العنوان (يمين الرابط).",
                "أو من القائمة <b>⋮</b> / <b>⋯</b> اختر <b>«تثبيت سِت لاين»</b> (في Edge: التطبيقات ← تثبيت هذا الموقع كتطبيق).",
                "سيفتح التطبيق في نافذة خاصة، وتجده في قائمة ابدأ وسطح المكتب."],
      ok: "تم"
    },
    en: {
      title: "Install the SETLINE app",
      inapp: ["You opened the site inside another app (e.g. WhatsApp), which can't install apps.",
              "Tap the ⋮ or ••• menu at the top.",
              isIOS ? "Choose “Open in Safari”, then tap “Install app” again." : "Choose “Open in Chrome”, then tap “Install app” again."],
      ios: ["Tap the Share button <b>⬆</b> (square with an arrow).",
            "Scroll down and choose <b>“Add to Home Screen”</b>.",
            "Tap <b>“Add”</b> — the app appears on your home screen."],
      iosOther: ["On iPhone, install from <b>Safari</b>.",
                 "Copy the link and open it in Safari.",
                 "Tap Share <b>⬆</b> then <b>“Add to Home Screen”</b>."],
      samsung: ["Tap the menu <b>≡</b> at the bottom.",
                "Choose <b>“Add page to”</b> → <b>“Home screen”</b>.",
                "Tap <b>“Add”</b>."],
      android: ["Tap the Chrome menu <b>⋮</b> at the top.",
                "Choose <b>“Install app”</b> or <b>“Add to Home screen”</b>.",
                "Tap <b>“Install”</b>."],
      firefox: ["Firefox can't install web apps.",
                "Open the link in <b>Chrome</b> or <b>Edge</b>.",
                "Then tap “Install app” again."],
      desktop: ["In <b>Chrome</b> or <b>Edge</b>: click the install icon <b>⊕</b> in the address bar.",
                "Or open the menu <b>⋮</b> / <b>⋯</b> → <b>“Install SETLINE”</b> (Edge: Apps → Install this site as an app).",
                "The app opens in its own window and appears in your Start menu."],
      ok: "Got it"
    }
  };
  function guideKey() {
    if (isInApp) return "inapp";
    if (isIOS) return isIOSSafari ? "ios" : "iosOther";
    if (isFirefox) return "firefox";
    if (isSamsung) return "samsung";
    if (isAndroid) return "android";
    return "desktop";
  }
  function showGuide() {
    const g = GUIDE[lang];
    $("#installHelpTitle").textContent = g.title;
    $("#installHelpSteps").innerHTML = g[guideKey()].map((s) => `<li>${s}</li>`).join("");
    $("#installHelpOk").textContent = g.ok;
    $("#installHelp").hidden = false;
  }

  const installBtns = document.querySelectorAll("[data-install]");
  // Always offer the install button, unless the app is already installed and open
  installBtns.forEach((b) => (b.hidden = isStandalone));

  // Chrome / Edge / Android Chrome give us a one-tap install prompt
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });
  installBtns.forEach((b) => b.addEventListener("click", async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      deferredPrompt = null;
      if (choice.outcome !== "accepted") showGuide();
    } else {
      showGuide(); // no automatic prompt: show the steps for this device
    }
  }));
  $("#installHelpOk").addEventListener("click", () => ($("#installHelp").hidden = true));
  $("#installHelp").addEventListener("click", (e) => { if (e.target.id === "installHelp") $("#installHelp").hidden = true; });
  // Bottom install bar: shown until installed, or until closed (for this visit)
  const bar = $("#installBar");
  if (!isStandalone && sessionStorage.getItem("setline-bar") !== "closed") {
    bar.hidden = false;
    document.body.classList.add("has-install-bar");
  }
  $("#installBarClose").addEventListener("click", () => {
    bar.hidden = true;
    document.body.classList.remove("has-install-bar");
    sessionStorage.setItem("setline-bar", "closed");
  });

  window.addEventListener("appinstalled", () => {
    installBtns.forEach((b) => (b.hidden = true));
    bar.hidden = true;
    document.body.classList.remove("has-install-bar");
  });

  $("#year").textContent = new Date().getFullYear();
  renderAll();
})();
