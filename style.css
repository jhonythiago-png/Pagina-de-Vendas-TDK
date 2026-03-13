# Tesouros da Bíblia Kids — Página de Vendas

Página de vendas estática. Deploy gratuito via GitHub + Render.

---

## Estrutura de arquivos

```
tbk-vendas/
├── index.html   → estrutura da página (não precisa editar)
├── style.css    → estilos visuais (não precisa editar)
├── main.js      → lógica da página (não precisa editar)
├── config.js    → ✅ EDITE AQUI — preços, links, vídeo, WhatsApp
└── README.md    → este arquivo
```

---

## Como editar preços e links

Abra o arquivo **`config.js`** e altere os valores:

```js
var CFG = {
  // PREÇOS — formato "R$ 00,00"
  indDe:  "R$ 57,00",       // preço riscado individual
  indPor: "R$ 29,90",       // preço final individual

  famDe:  "R$ 97,00",       // preço riscado familiar
  famPor: "R$ 47,00",       // preço final familiar

  igrDe:  "R$ 197,00",      // preço riscado igreja
  igrPor: "R$ 97,00",       // preço final igreja

  // LINKS — cole os links da Hotmart aqui
  linkInd: "https://hotmart.com/SEU_LINK_INDIVIDUAL",
  linkFam: "https://hotmart.com/SEU_LINK_FAMILIAR",
  linkIgr: "https://hotmart.com/SEU_LINK_GRUPO",

  // VÍDEO — ID do YouTube (vídeo deve ser "Não listado")
  // Ex: link https://youtu.be/dQw4w9WgXcQ → ID = dQw4w9WgXcQ
  youtubeId: "",

  // WHATSAPP — número com código do país, sem espaços
  wppNum: "5544984373004",

  // CONTADOR — horas antes de reiniciar
  timerH: 24,
};
```

Salve e faça push. O Render atualiza em ~1 minuto.

---

## Deploy no Render (passo a passo)

### 1. Subir para o GitHub

1. Crie um repositório novo no GitHub (pode ser privado)
2. Faça upload dos 4 arquivos: `index.html`, `style.css`, `main.js`, `config.js`
   - Ou use Git:
     ```bash
     git init
     git add .
     git commit -m "primeira versão"
     git remote add origin https://github.com/SEU_USUARIO/tbk-vendas.git
     git push -u origin main
     ```

### 2. Criar o site no Render

1. Acesse [render.com](https://render.com) e faça login
2. Clique em **New → Static Site**
3. Conecte sua conta do GitHub e selecione o repositório
4. Configure assim:
   - **Name:** tbk-vendas (ou qualquer nome)
   - **Branch:** main
   - **Root Directory:** (deixe em branco)
   - **Build Command:** (deixe em branco)
   - **Publish Directory:** `.` (ponto)
5. Clique em **Create Static Site**
6. Em ~1 minuto o site estará no ar com um link `.onrender.com`

### 3. Domínio personalizado (opcional)

No painel do Render, vá em **Settings → Custom Domains** e adicione seu domínio.

---

## Como atualizar a página

Sempre que alterar qualquer arquivo e fazer push para o GitHub,
o Render detecta automaticamente e publica a nova versão em ~1 minuto.

```bash
git add config.js
git commit -m "atualiza preço familiar"
git push
```

---

## Adicionar o vídeo de vendas

1. Suba o vídeo no YouTube como **"Não listado"** (não privado)
2. Copie o ID do vídeo — é a parte após `v=` no link:
   - Link: `https://www.youtube.com/watch?v=ABC123xyz`
   - ID: `ABC123xyz`
3. Cole no `config.js`:
   ```js
   youtubeId: "ABC123xyz",
   ```
4. Salve e faça push

---

Dúvidas? Contato via WhatsApp configurado na página.
