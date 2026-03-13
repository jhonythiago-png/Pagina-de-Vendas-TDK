/**
 * main.js — Lógica da página de vendas
 * Não precisa editar este arquivo.
 * Todas as configurações ficam em config.js
 */
(function () {
  var c = CFG;
  var wUrl = "https://wa.me/" + c.wppNum + "?text=" + encodeURIComponent(c.wppMsg);

  function s(id, v) { var e = document.getElementById(id); if (e) e.textContent = v; }
  function h(id, v) { var e = document.getElementById(id); if (e) e.href = v; }

  /* ── APLICA CONFIGURAÇÃO ── */
  function apply() {
    // Nav
    h("navCta", c.linkFam);
    // Hero
    s("heroBadge", c.familias + " já estão criando esse hábito");
    h("heroCta", c.linkFam);
    s("trustFam", c.familias);
    s("trustPreco", "a partir de " + c.indPor);
    // Urgência — sem negrito, texto limpo (Fix 4)
    s("urgFam", c.familias);
    // Contador
    s("cdPor", c.indPor);
    s("cdDe", c.indDe);
    // Depoimentos badge
    s("testiBadge", "Mais de 500 famílias já começaram");
    // CTA inline 1 — após histórias preview
    h("storiesCta", c.linkFam);
    s("storiesFrom", c.indDe);
    s("storiesPor", c.indPor);
    // CTA inline 2 — meio dos depoimentos
    h("testiMidCta", c.linkFam);
    s("testiMidFrom", c.famDe);
    s("testiMidPor", c.famPor);
    // CTA inline 3 — após todos os depoimentos
    h("testiEndCta", "#planos");
    s("testiEndFrom", c.indDe);
    s("testiEndPor", c.indPor);
    // Âncora familiar
    s("paFrom", c.famDe);
    s("paMain", c.famPor);
    s("paPer", c.famPer);
    var de = parseFloat(c.famDe.replace("R$ ", "").replace(",", "."));
    var por = parseFloat(c.famPor.replace("R$ ", "").replace(",", "."));
    if (!isNaN(de) && !isNaN(por)) {
      s("paSave", "Economia de R$ " + (de - por).toFixed(0) + ",00 nessa oferta");
    }
    h("paCta", c.linkFam);
    // Planos
    s("pIFrom", c.indDe); s("pIMain", c.indPor); s("pIPer", c.indPer); h("pIBtn", c.linkInd);
    s("pFFrom", c.famDe); s("pFMain", c.famPor); s("pFPer", c.famPer); h("pFBtn", c.linkFam);
    s("pGFrom", c.igrDe); s("pGMain", c.igrPor); s("pGPer", c.igrPer); h("pGBtn", c.linkIgr);
    // Final
    s("fpFrom", c.indDe);
    s("fpMain", c.indPor);
    h("finalCta", c.linkFam);
    // Sticky
    h("stickyBtn", c.linkFam);
    s("stickyTxt", "Quero Ensinar Meu Filho — " + c.famPor);
    s("stickyDe", "De " + c.famDe + " por apenas " + c.famPor);
    // WhatsApp
    h("wppF", wUrl);
    h("wppFoot", wUrl);
    // Vídeo
    if (c.youtubeId && c.youtubeId.length > 3) {
      var ph = document.getElementById("vidPh");
      if (ph) {
        var f = document.createElement("iframe");
        f.src = "https://www.youtube.com/embed/" + c.youtubeId + "?rel=0";
        f.allow = "accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture";
        f.allowFullscreen = true;
        f.style.cssText = "position:absolute;inset:0;width:100%;height:100%;border:none";
        ph.replaceWith(f);
      }
    }
  }

  /* ── VÍDEO PLACEHOLDER CLICK ── */
  window.doVideo = function () {
    if (c.youtubeId && c.youtubeId.length > 3) {
      var ph = document.getElementById("vidPh");
      if (!ph) return;
      var f = document.createElement("iframe");
      f.src = "https://www.youtube.com/embed/" + c.youtubeId + "?autoplay=1&rel=0";
      f.allow = "accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture";
      f.allowFullscreen = true;
      f.style.cssText = "position:absolute;inset:0;width:100%;height:100%;border:none";
      ph.replaceWith(f);
    }
  };

  /* ── CONTADOR REGRESSIVO ── */
  function initTimer() {
    var KEY = "tbk_end";
    var now = Date.now();
    var stored = null;
    try { stored = parseInt(localStorage.getItem(KEY)); } catch (e) { }
    var end = (stored && stored > now) ? stored : now + c.timerH * 3600000;
    try { localStorage.setItem(KEY, end); } catch (e) { }

    function pad(n) { return n < 10 ? "0" + n : "" + n; }

    function tick() {
      var d = end - Date.now();
      if (d <= 0) {
        try { localStorage.removeItem(KEY); } catch (e) { }
        end = Date.now() + c.timerH * 3600000;
        try { localStorage.setItem(KEY, end); } catch (e) { }
        d = end - Date.now();
      }
      var hh = Math.floor(d / 3600000);
      var mm = Math.floor((d % 3600000) / 60000);
      var ss = Math.floor((d % 60000) / 1000);
      var t = pad(hh) + ":" + pad(mm) + ":" + pad(ss);
      var e1 = document.getElementById("topTimer");
      var e2 = document.getElementById("cdH");
      var e3 = document.getElementById("cdM");
      var e4 = document.getElementById("cdS");
      if (e1) e1.textContent = t;
      if (e2) e2.textContent = pad(hh);
      if (e3) e3.textContent = pad(mm);
      if (e4) e4.textContent = pad(ss);
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ── FAQ ── */
  window.doFaq = function (el) {
    var it = el.parentElement;
    var op = it.classList.contains("open");
    document.querySelectorAll(".fi.open").forEach(function (i) { i.classList.remove("open"); });
    if (!op) it.classList.add("open");
  };

  /* ── SCROLL REVEAL ── */
  function initReveal() {
    var ob = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); ob.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".rev").forEach(function (el) { ob.observe(el); });
  }

  /* ── DEMO STORIES — cards e modal ── */
  var readCount = 0;
  var readIds = {};
  try { readIds = JSON.parse(localStorage.getItem("tbk_read") || "{}"); readCount = Object.keys(readIds).length; } catch(e) {}

  var thumbColors = ["sg1","sg2","sg3","sg4"];

  function renderGrid() {
    var grid = document.getElementById("demoGrid");
    if (!grid || !window.DEMO_STORIES) return;
    grid.innerHTML = "";
    DEMO_STORIES.forEach(function(story, idx) {
      var done = readIds[story.id];
      var card = document.createElement("div");
      card.className = "scard";
      card.onclick = function() { openStory(story); };
      card.innerHTML =
        '<div class="sthumb ' + thumbColors[idx % 4] + '" style="position:relative">' +
          '<span style="font-size:2.8rem">' + story.emoji + '</span>' +
          (done ? '<div style="position:absolute;top:8px;right:8px;background:#1E8449;color:#fff;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:.75rem">✓</div>' : '') +
        '</div>' +
        '<div class="si">' +
          '<h4>' + story.title + '</h4>' +
          '<span>' + story.ref + '</span>' +
        '</div>' +
        '<div class="scard-hint">Toque para ler</div>';
      grid.appendChild(card);
    });
  }

  function openStory(story) {
    var modal = document.getElementById("storyModal");
    document.getElementById("smCategory").textContent = story.category;
    document.getElementById("smRef").textContent = story.ref;
    document.getElementById("smEmoji").textContent = story.emoji;
    document.getElementById("smTitle").textContent = story.title;
    // Corpo
    var body = document.getElementById("smBody");
    body.innerHTML = "";
    story.story.forEach(function(p) {
      var div = document.createElement("div");
      div.className = "sm-para";
      div.textContent = p;
      body.appendChild(div);
    });
    // Lições
    var list = document.getElementById("smLessons");
    list.innerHTML = "";
    story.lesson.forEach(function(l) {
      var li = document.createElement("li");
      li.textContent = l;
      list.appendChild(li);
    });
    // Botão lida
    updateReadBtn(story.id);
    document.getElementById("smReadBtn").onclick = function() { markRead(story.id); };
    // CTA
    h("smCta", c.linkFam);
    // Abre
    modal.classList.add("open");
    modal.querySelector(".story-modal-box").scrollTop = 0;
    document.body.style.overflow = "hidden";
  }

  function updateReadBtn(id) {
    var done = readIds[id];
    var btn = document.getElementById("smReadBtn");
    var ico = document.getElementById("smReadIcon");
    var txt = document.getElementById("smReadTxt");
    var cnt = document.getElementById("smReadCount");
    if (done) {
      btn.classList.add("done");
      ico.textContent = "✓";
      txt.textContent = "Lida!";
    } else {
      btn.classList.remove("done");
      ico.textContent = "○";
      txt.textContent = "Marcar como lida";
    }
    cnt.textContent = Object.keys(readIds).length;
  }

  window.markRead = function(id) {
    if (!id) return;
    if (readIds[id]) {
      delete readIds[id];
    } else {
      readIds[id] = true;
    }
    try { localStorage.setItem("tbk_read", JSON.stringify(readIds)); } catch(e) {}
    updateReadBtn(id);
    renderGrid();
  };

  window.closeStory = function() {
    var modal = document.getElementById("storyModal");
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  // Fechar com ESC
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") window.closeStory();
  });

  /* ── INIT ── */
  apply();
  initTimer();
  initReveal();
  renderGrid();
})();
