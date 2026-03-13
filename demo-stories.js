/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║   TESOUROS DA BÍBLIA KIDS — CONFIGURAÇÃO DA PÁGINA      ║
 * ║                                                          ║
 * ║   EDITE APENAS ESTE ARQUIVO.                             ║
 * ║   Todos os preços, links e textos da página              ║
 * ║   são controlados daqui.                                 ║
 * ║                                                          ║
 * ║   Após editar: salve → commit → push para o GitHub.      ║
 * ║   O Render atualiza em ~1 minuto automaticamente.        ║
 * ╚══════════════════════════════════════════════════════════╝
 */

var CFG = {

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     1. LINKS DE COMPRA
     ─────────────────────────────────────────────────────
     Cole aqui os links gerados na Hotmart (ou outra
     plataforma). Esses links alimentam os botões:

     linkFam → usados em 8 CTAs:
       · Botão do nav (topo)
       · Botão principal do hero
       · CTA após histórias demo
       · CTA dentro do modal de história
       · CTA no meio dos depoimentos
       · Box de preço âncora (plano familiar)
       · Card do plano Familiar
       · CTA final da página
       · Barra sticky mobile

     linkInd → usado em 1 CTA:
       · Card do plano Individual

     linkIgr → usado em 1 CTA:
       · Card do plano Igreja/Grupo
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  linkInd: "https://hotmart.com/SEU_LINK_INDIVIDUAL",
  linkFam: "https://hotmart.com/SEU_LINK_FAMILIAR",
  linkIgr: "https://hotmart.com/SEU_LINK_GRUPO",


  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     2. PREÇOS
     ─────────────────────────────────────────────────────
     Formato obrigatório: "R$ 00,00"
     Os valores "De" aparecem riscados na página.
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  // Plano Individual
  indDe:  "R$ 57,00",           // preço riscado  (era)
  indPor: "R$ 29,90",           // preço final    (por)
  indPer: "acesso por 1 ano",

  // Plano Familiar — o mais destacado na página
  famDe:  "R$ 97,00",           // preço riscado  (era)
  famPor: "R$ 47,00",           // preço final    (por)
  famPer: "acesso por 1 ano — família completa",

  // Plano Igreja / Grupo
  igrDe:  "R$ 197,00",          // preço riscado  (era)
  igrPor: "R$ 97,00",           // preço final    (por)
  igrPer: "acesso por 1 ano para o grupo",


  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     3. VÍDEO DE VENDAS (YouTube)
     ─────────────────────────────────────────────────────
     IMPORTANTE: o vídeo deve estar como "Não listado"
     no YouTube (não "Privado" — privado bloqueia embed).

     Como pegar o ID:
       Link: https://www.youtube.com/watch?v=XYt0uxBbpSA
       ID  : XYt0uxBbpSA  ← só essa parte

     Deixe "" para exibir o placeholder clicável.
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  youtubeId: "XYt0uxBbpSA",


  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     4. WHATSAPP
     ─────────────────────────────────────────────────────
     wppNum: número com DDI + DDD, sem espaços ou traços
     Exemplo: 5544999990000  (55 = Brasil, 44 = DDD)

     Aparece no botão flutuante e no rodapé.
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  wppNum: "5544984373004",
  wppMsg: "Olá! Tenho uma dúvida sobre o Tesouros da Bíblia Kids.",


  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     5. CONTADOR REGRESSIVO
     ─────────────────────────────────────────────────────
     Horas antes do contador zerar e reiniciar.
     O tempo é salvo no navegador do visitante —
     se ele fechar e voltar, continua de onde parou.
     Padrão recomendado: 24 horas.
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  timerH: 24,


  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     6. PROVA SOCIAL
     ─────────────────────────────────────────────────────
     Aparece na barra de urgência, no hero e nos
     depoimentos. Atualize quando crescer a base.
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  familias: "+500 famílias",

};
