# 📱 FIAP Labs

---

## 📌 Sobre o Projeto

O **FIAP Labs** é um aplicativo mobile desenvolvido com React Native + Expo que tem como objetivo melhorar o processo de reserva de laboratórios dentro da FIAP.

Atualmente, alunos enfrentam dificuldades para identificar quais laboratórios estão disponíveis e organizar o uso desses espaços. O processo pode ser confuso e pouco eficiente.

A solução proposta é um aplicativo simples e intuitivo que permite visualizar os laboratórios disponíveis e realizar reservas de forma rápida.

---

## 🎯 Problema Escolhido

A operação escolhida foi a **reserva de laboratórios**, pois é uma atividade comum no dia a dia dos alunos e pode gerar conflitos de uso e falta de organização.

---

## 🚀 Funcionalidades

* 📋 Visualização de laboratórios disponíveis
* 📊 Status do laboratório (Livre ou Ocupado)
* 📅 Reserva de laboratório
* 🚫 Bloqueio de reserva para labs ocupados
* ⚡ Feedback visual ao usuário
* 📭 Mensagem para estado vazio (sem reservas)

---

## 👥 Integrantes do Grupo

* Julia Carolina Ferreira Silva RM558896

---

## ⚙️ Como Rodar o Projeto

### 📌 Pré-requisitos

* Node.js instalado
* Expo CLI
* App Expo Go (no celular) ou Emulador Android

---

### ▶️ Passo a passo

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/fiap-mdi-cp1-fiap-labs.git

# Entrar na pasta
cd fiap-mdi-cp1-fiap-labs

# Instalar dependências
npm install

# Rodar o projeto
npx expo start
```

---

### 📱 Executar

* 📲 No celular: escanear o QR Code com o Expo Go
* 💻 No emulador: pressionar **A** no terminal

---

## 🎥 Demonstração

### 📸 Prints das Telas

* Tela Home
* Tela de Laboratórios
* Tela de Reservas

*(Inserir imagens aqui)*

---

### 🎬 Vídeo / GIF

Link para demonstração do app:

👉 (Inserir link do YouTube ou Google Drive)

---

## 🧠 Decisões Técnicas

### 📂 Estrutura do Projeto

O projeto foi organizado utilizando o padrão do Expo Router, com separação em:

* `app/` → telas da aplicação
* `components/` → componentes reutilizáveis
* `styles/` → configuração de estilos

---

### ⚛️ Hooks Utilizados

* **useState**

  * Gerenciar estado dos laboratórios
  * Controlar reservas
  * Feedback de interface

* **useEffect**

  * Simular carregamento de dados (loading)

---

### 🔀 Navegação

A navegação foi implementada utilizando **Expo Router**, com múltiplas telas:

* Home (`index.jsx`)
* Laboratórios (`labs.jsx`)
* Reservas (`reservas.jsx`)

---

## 🔮 Próximos Passos

Com mais tempo, o projeto poderia evoluir para:

* 🔐 Sistema de login de usuários
* ☁️ Integração com API real
* 💾 Persistência de dados (AsyncStorage)
* 🔔 Notificações de reserva
* 📊 Histórico de uso de laboratórios

---

## 💡 Considerações Finais

O projeto foi desenvolvido com foco na simplicidade e usabilidade, buscando resolver um problema real da rotina acadêmica com uma solução prática e eficiente.

---

# 🚀 #KeepCoding

