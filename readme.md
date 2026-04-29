# 🌿 AgroAgenda — Landing Page

### Governança Financeira e Precisão no Cultivo Familiar

> **Amazon Hacking 2026** · CESUPA ARGO · Vila de Jutaiteua, Moju-PA

---

## 📋 Sumário

- [Sobre este Repositório](#-sobre-este-repositório)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Páginas e Responsabilidades](#-páginas-e-responsabilidades)
- [Como Executar](#-como-executar)
- [Tecnologias](#-tecnologias)
- [Relação com o App Mobile](#-relação-com-o-app-mobile)
- [Time](#-time)

---

## 📦 Sobre este Repositório

Este repositório contém a **landing page pública** e o **protótipo web** do AgroAgenda — uma interface HTML/CSS/JS que serve dois propósitos:

1. **Landing page** (`index.html`) — Apresentação do produto para investidores, parceiros e agricultores, comunicando o problema, a solução e o ecossistema Balança + App.
2. **Protótipo navegável do app** (`pages/`) — Simulação das telas principais do aplicativo mobile em ambiente web, com dados persistidos via `localStorage`, permitindo demonstrações sem precisar do app instalado.

> Para o código-fonte do aplicativo mobile em React Native, consulte o repositório [`agroagenda-app`](https://github.com/SergioGTF/Agro-Agenda-App).

---

## 🌲 Sobre o Projeto

O **AgroAgenda** é uma iniciativa de impacto socioambiental desenvolvida no **Amazon Hacking 2026** para transformar a realidade da agricultura familiar na **Vila de Jutaiteua**, município de Moju, no Pará.

O projeto resolve o **"Gargalo da Gestão Analógica"**: agricultores familiares dependem do **"olhômetro"** — estimativa visual do peso — para precificar seus produtos. Esse erro acumulado ao longo da safra representa renda perdida, invisível e sem volta.

A solução é um **ecossistema integrado**:

```
  ⚖️ Balança Inteligente  ──bluetooth──▶  📱 App AgroAgenda  ──wifi──▶  ☁️ Nuvem
     Calcula tudo                          Visualiza e armazena           Backup
```

> **A balança é o cérebro dos cálculos. O app é a ponte de visualização e armazenamento.**

---

## 📁 Estrutura de Pastas

```
└── 📁 AgroAgenda-Web
    │
    ├── 📁 assets                      # Recursos estáticos
    │   ├── 🖼️ icon.png               # Ícone principal do app (logo)
    │   ├── 🖼️ iconcultura.png        # Ícone do módulo Registro de Cultura
    │   ├── 🖼️ iconestoque.png        # Ícone do módulo Registro de Estoque
    │   ├── 🖼️ iconrelatorio.png      # Ícone do módulo Relatórios
    │   ├── 🖼️ iconuser.png           # Ícone de perfil do usuário
    │   └── 🎨 styles.css             # Estilos globais do protótipo
    │
    ├── 📁 js
    │   └── 📄 app.js                 # Navegação, localStorage e toasts
    │
    ├── 📁 pages                       # Telas do protótipo (simulação do app mobile)
    │   ├── 🌐 login.html             # Tela de login com credenciais do agricultor
    │   ├── 🌐 home.html              # Menu principal com acesso aos 3 módulos
    │   ├── 🌐 registro-cultura.html  # Formulário de cadastro de cultura por talhão
    │   ├── 🌐 registro-estoque.html  # Formulário de estoque com cálculo em tempo real
    │   └── 🌐 relatorios.html        # Dashboard que lê dados do localStorage
    │
    ├── 🌐 index.html                 # Landing page pública do produto
    └── 📝 README.md                  # Este arquivo
```

---

## 🌐 Páginas e Responsabilidades

### Landing Page

| Arquivo      | Descrição                                                                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index.html` | Página pública de apresentação do produto. Contém hero, problema, arquitetura do sistema, funcionalidades, fluxo de operação, impacto e CTA para o protótipo. |

**Seções da landing:**

- **Hero** — Proposta de valor e mockup do app
- **O Problema** — Os 4 gargalos da gestão analógica
- **Como Funciona** — Arquitetura Balança → Bluetooth → App com papéis bem definidos
- **Funcionalidades** — O que cada componente do ecossistema faz
- **Fluxo de Operação** — Os 5 passos do ciclo completo
- **Impacto Social** — Métricas e propósito do projeto
- **CTA** — Acesso ao protótipo navegável

### Protótipo Web (`pages/`)

| Arquivo                       | Rota equivalente no app | Descrição                                                    |
| ----------------------------- | ----------------------- | ------------------------------------------------------------ |
| `pages/login.html`            | `/login`                | Autenticação simulada; redireciona para a home               |
| `pages/home.html`             | `/inicio`               | Menu principal com os 3 cartões de navegação                 |
| `pages/registro-cultura.html` | `/registros`            | Formulário de cultura (tipo, hectares, talhão, data)         |
| `pages/registro-estoque.html` | `/registros`            | Formulário de estoque com cálculo peso × preço em tempo real |
| `pages/relatorios.html`       | `/relatorios`           | Dashboard com total colhido e lucro lidos do localStorage    |

---

## 🚀 Como Executar

Não há dependências ou build — basta abrir o arquivo no navegador.

### Opção 1 — Abrir diretamente

```bash
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

### Opção 2 — Servidor local (recomendado)

Evita problemas de CORS ao carregar arquivos locais.

```bash
# Com Python (nativo na maioria dos sistemas)
python3 -m http.server 3000

# Com Node.js
npx serve .

# Com VS Code
# Instale a extensão "Live Server" e clique em "Go Live"
```

Acesse `http://localhost:3000` no navegador.

### Navegação no protótipo

```
index.html
    └── [Acessar o App] ──▶ pages/login.html
                                  └── [Entrar] ──▶ pages/home.html
                                                        ├── [Registro de Cultura] ──▶ pages/registro-cultura.html
                                                        ├── [Registro de Estoque] ──▶ pages/registro-estoque.html
                                                        └── [Relatórios] ──▶ pages/relatorios.html
```

> **Dados persistidos:** O protótipo usa `localStorage` do navegador. Os registros salvos aparecem automaticamente na tela de Relatórios. Para limpar os dados, acesse o DevTools (`F12`) → Application → Local Storage → limpar.

---

## 🛠️ Tecnologias

| Tecnologia          | Uso                                                     |
| ------------------- | ------------------------------------------------------- |
| **HTML5**           | Estrutura de todas as páginas                           |
| **CSS3**            | Estilos e moldura de celular (`assets/styles.css`)      |
| **JavaScript ES6+** | Navegação, localStorage e feedback visual (`js/app.js`) |
| **localStorage**    | Persistência de dados offline no protótipo              |

Sem frameworks, sem dependências externas, sem build step — **abre direto no navegador**.

---

## 📱 Relação com o App Mobile

Este repositório é o **protótipo web** e a **vitrine pública** do produto. A versão de produção é o app mobile em React Native:

|                | Landing Page (este repo)    | App Mobile                         |
| -------------- | --------------------------- | ---------------------------------- |
| **Tecnologia** | HTML / CSS / JS puro        | React Native + Expo                |
| **Plataforma** | Navegador web               | Android (iOS futuro)               |
| **Bluetooth**  | ✗ Não suportado             | ✅ BLE com ESP32                   |
| **Dados**      | `localStorage` (simulação)  | AsyncStorage + Nuvem               |
| **Cálculos**   | Simulados no frontend       | Recebidos da Balança via Bluetooth |
| **Propósito**  | Demonstração e apresentação | Uso real no campo                  |

---

## 👥 Time

Desenvolvido por estudantes do **Centro Universitário do Estado do Pará (CESUPA)** no evento **Amazon Hacking 2026**:

### Cientistas da Computação 👨‍💻

- Tayron Reis
- Ronald Damasceno
- André Felipe
- Cauê Milhomem
- Guilherme Jensen
- João Paulo Oliveira

### Engenheiros da Computação 🏗️

- Sergio Gabriel Tavares Farias
- Gabriel Antonio
- Leonardo Sales

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e de impacto social no contexto do **Amazon Hacking 2026 — CESUPA ARGO**.

---

<div align="center">
  <strong>Feito com 💚 para a Amazônia</strong><br>
  Vila de Jutaiteua · Moju-PA · 2026
</div>
