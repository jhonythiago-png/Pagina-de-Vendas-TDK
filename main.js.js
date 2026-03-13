/* ═══════════════════════════════════════════
   TESOUROS DA BÍBLIA KIDS — MAIN.JS
   Lógica completa da página
═══════════════════════════════════════════ */

// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
  
  // ===========================================
  // PREENCHER TODOS OS ELEMENTOS COM CFG
  // ===========================================
  
  // Preços e textos
  setText('urgFam', CFG.familias);
  setText('testiBadge', CFG.familias + ' já começaram');
  setText('trustFam', CFG.familias);
  
  // Hero badge
  if (CFG.familias) {
    setText('heroBadge', '🔥 ' + CFG.familias + ' confiando');
  }
  
  // Preço no hero
  if (document.getElementById('trustPreco')) {
    document.getElementById('trustPreco').innerText = 'A partir de ' + (CFG.indPor || 'R$ 29,90');
  }
  
  // ===========================================
  // PREÇOS INDIVIDUAL
  // ===========================================
  setText('pIFrom', CFG.indDe);
  setText('pIMain', CFG.indPor);
  setText('pIPer', CFG.indPer);
  if (document.getElementById('pIBtn')) document.getElementById('pIBtn').href = CFG.linkInd;
  
  // ===========================================
  // PREÇOS FAMILIAR
  // ===========================================
  setText('pFFrom', CFG.famDe);
  setText('pFMain', CFG.famPor);
  setText('pFPer', CFG.famPer);
  if (document.getElementById('pFBtn')) document.getElementById('pFBtn').href = CFG.linkFam;
  
  // ===========================================
  // PREÇOS IGREJA/GRUPO
  // ===========================================
  setText('pGFrom', CFG.igrDe);
  setText('pGMain', CFG.igrPor);
  setText('pGPer', CFG.igrPer);
  if (document.getElementById('pGBtn')) document.getElementById('pGBtn').href = CFG.linkIgr;
  
  // ===========================================
  // ANCHOR (plano em destaque)
  // ===========================================
  setText('paFrom', CFG.famDe);
  setText('paMain', CFG.famPor);
  setText('paPer', CFG.famPer);
  
  // Economia
  if (document.getElementById('paSave') && CFG.famDe && CFG.famPor) {
    let deNum = parseFloat(CFG.famDe.replace('R$', '').replace('.', '').replace(',', '.').replace(' ', ''));
    let porNum = parseFloat(CFG.famPor.replace('R$', '').replace('.', '').replace(',', '.').replace(' ', ''));
    if (!isNaN(deNum) && !isNaN(porNum) && deNum > 0) {
      let economia = Math.round(((deNum - porNum) / deNum) * 100);
      document.getElementById('paSave').innerText = 'ECONOMIA DE ' + economia + '%';
    }
  }
  if (document.getElementById('paCta')) document.getElementById('paCta').href = CFG.linkFam;
  
  // ===========================================
  // BLOCO MEIO
  // ===========================================
  setText('midDe', 'De ' + CFG.famDe);
  setText('midPor', CFG.famPor);
  setText('midMain', CFG.famPor);
  setText('midPer', CFG.famPer);
  if (document.getElementById('midCta')) document.getElementById('midCta').href = '#planos';
  
  // ===========================================
  // CTA FINAL
  // ===========================================
  setText('fpFrom', 'De ' + CFG.famDe);
  setText('fpMain', CFG.famPor);
  if (document.getElementById('finalCta')) document.getElementById('finalCta').href = CFG.linkFam;
  
  // ===========================================
  // CONTADOR
  // ===========================================
  setText('cdDe', CFG.famDe);
  setText('cdPor', CFG.famPor);
  
  // ===========================================
  // STICKY MOBILE
  // ===========================================
  if (document.getElementById('stickyTxt')) {
    document.getElementById('stickyTxt').innerText = 'Comprar Agora • ' + (CFG.famPor || 'R$ 47,00');
  }
  setText('stickyDe', 'De ' + CFG.famDe);
  if (document.getElementById('stickyBtn')) document.getElementById('stickyBtn').href = CFG.linkFam;
  
  // ===========================================
  // WHATSAPP
  // ===========================================
  if (CFG.wppNum) {
    let wppUrl = 'https://wa.me/' + CFG.wppNum + '?text=' + encodeURIComponent(CFG.wppMsg || '');
    let wppElements = ['wppF', 'wppFoot'];
    wppElements.forEach(function(id) {
      let el = document.getElementById(id);
      if (el) el.href = wppUrl;
    });
  }
  
  // ===========================================
  // BOTÕES DE NAVEGAÇÃO
  // ===========================================
  let navCta = document.getElementById('navCta');
  if (navCta) navCta.href = CFG.linkFam || CFG.linkInd;
  
  let heroCta = document.getElementById('heroCta');
  if (heroCta) heroCta.href = CFG.linkFam || CFG.linkInd;
  
  // ===========================================
  // NOVOS CTAS ADICIONADOS
  // ===========================================
  
  // CTA no banner dos depoimentos
  if (document.getElementById('bannerBtn')) {
    document.getElementById('bannerBtn').href = CFG.linkFam;
    setText('bannerFrom', CFG.famDe);
    setText('bannerMain', CFG.famPor);
  }
  
  // CTA após depoimentos
  if (document.getElementById('ctaDepoBtn')) {
    document.getElementById('ctaDepoBtn').href = CFG.linkFam;
    setText('ctaDepoFrom', CFG.famDe);
    setText('ctaDepoMain', CFG.famPor);
  }
  
  // Mini CTA flutuante
  if (document.getElementById('miniBtn')) {
    document.getElementById('miniBtn').href = CFG.linkFam;
    setText('miniFrom', CFG.famDe.replace('R$', 'R$'));
    setText('miniMain', CFG.famPor.replace('R$', 'R$'));
  }
  
  // ===========================================
  // INICIAR FUNÇÕES
  // ===========================================
  startTimer();
  startReveal();
  
});

// Função auxiliar para setar texto
function setText(id, value) {
  let el = document.getElementById(id);
  if (el && value) el.innerText = value;
}

// ===========================================
// TIMER REGRESSIVO
// ===========================================
function startTimer() {
  let timerEl = document.getElementById('topTimer');
  let cdH = document.getElementById('cdH');
  let cdM = document.getElementById('cdM');
  let cdS = document.getElementById('cdS');
  
  if (!timerEl && !cdH) return;
  
  // Define horário de término (agora + CFG.timerH horas)
  let horas = CFG.timerH || 24;
  let end = new Date();
  end.setHours(end.getHours() + horas);
  
  function updateTimer() {
    let now = new Date();
    let diff = end - now;
    
    if (diff <= 0) {
      // Reinicia
      end = new Date();
      end.setHours(end.getHours() + horas);
      diff = end - now;
    }
    
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    let hh = hours.toString().padStart(2, '0');
    let mm = minutes.toString().padStart(2, '0');
    let ss = seconds.toString().padStart(2, '0');
    
    if (timerEl) timerEl.innerText = hh + ':' + mm + ':' + ss;
    if (cdH) cdH.innerText = hh;
    if (cdM) cdM.innerText = mm;
    if (cdS) cdS.innerText = ss;
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);
}

// ===========================================
// REVEAL ANIMATION
// ===========================================
function startReveal() {
  let reveals = document.querySelectorAll('.rev');
  
  function checkReveal() {
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('in');
      }
    }
  }
  
  window.addEventListener('scroll', checkReveal);
  checkReveal(); // verificar ao carregar
}

// ===========================================
// VÍDEO
// ===========================================
function doVideo() {
  let container = document.getElementById('vidContainer');
  if (!container || !CFG.youtubeId) {
    window.open('https://www.youtube.com/watch?v=' + (CFG.youtubeId || ''), '_blank');
    return;
  }
  
  container.innerHTML = '<iframe src="https://www.youtube.com/embed/' + CFG.youtubeId + '?autoplay=1&rel=0&modestbranding=1" frameborder="0" allowfullscreen allow="autoplay"></iframe>';
}

// ===========================================
// FAQ
// ===========================================
function doFaq(el) {
  let faqItem = el.closest('.fi');
  if (faqItem) {
    faqItem.classList.toggle('open');
  }
}