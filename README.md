#  FIAP Labs

---

##  Sobre o Projeto

O **FIAP Labs** é um aplicativo mobile desenvolvido com React Native + Expo que tem como objetivo melhorar o processo de reserva de laboratórios dentro da FIAP.

Atualmente, alunos enfrentam dificuldades para identificar quais laboratórios estão disponíveis e organizar o uso desses espaços. O processo pode ser confuso e pouco eficiente.

A solução proposta é um aplicativo simples e intuitivo que permite visualizar os laboratórios disponíveis e realizar reservas de forma rápida.

---

##  Problema Escolhido

A operação escolhida foi a **reserva de laboratórios**, pois é uma atividade comum no dia a dia dos alunos e pode gerar conflitos de uso e falta de organização.

---

##  Funcionalidades

*  Visualização de laboratórios disponíveis
*  Status do laboratório (Livre ou Ocupado)
*  Reserva de laboratório
*  Bloqueio de reserva para labs ocupados
*  Feedback visual ao usuário
*  Mensagem para estado vazio (sem reservas)

---

##  Integrantes do Grupo

* Julia Carolina Ferreira Silva RM558896

---

##  Como Rodar o Projeto

###  Pré-requisitos

* Node.js instalado
* Expo
* App Expo Go (no celular) ou Emulador Android

---

###  Passo a passo

```bash
# Clonar o repositório
git clone https://github.com/JuliaSilva7/fiap-mdi-cp1-fiap-labs.git

# Entrar na pasta
cd fiap-mdi-cp1-fiap-labs

# Instalar dependências
npm install --legacy-peer-deps

# Rodar o projeto
npx expo start
```

---

###  Como Executar

*  No celular: escanear o QR Code com o Expo Go
*  No emulador: pressionar **A** no terminal

---

##  Demonstração

###  Prints das Telas

* Tela Home
<p align="center">
<img height="1000" alt="Imagem da Home" src="https://github.com/user-attachments/assets/d4787146-f00c-4c4a-a8be-ac5677e0f064" />
</p>

* Tela de Laboratórios
<p align="center">
<img  width="300" alt="Imagem Lab 1" src="https://github.com/user-attachments/assets/6d9325b1-60d4-43e4-91d6-f4478cc17286" />
<img  width="300" alt="Imagem Lab 2" src="https://github.com/user-attachments/assets/f56a256c-cdf8-4a08-91c0-cc2c7015b5a2" />
<img  width="300" alt="Imagem Lab 3" src="https://github.com/user-attachments/assets/03b2ca88-87f0-455a-b654-d42989c7dda9" />
</p>

* Tela de Reservas
<p align="center">
<img width="230"  alt="Screenshot_1775617178" src="https://github.com/user-attachments/assets/04dcdcf0-3960-4fe1-a42a-0b6c370a03ef" />
<img width="230" alt="Screenshot_1775617181" src="https://github.com/user-attachments/assets/d064ed55-3ec4-427a-ada6-ffc72e42e120" />
<img width="230" alt="Screenshot_1775617188" src="https://github.com/user-attachments/assets/34ecbbbe-df3e-44a2-aa3b-de6bdfc7bce5" />
<img width="230" alt="Screenshot_1775617197" src="https://github.com/user-attachments/assets/eb094903-7c9f-40e9-8a8e-db505422f563" />
</p>


---

###  Vídeo / GIF

<p align="center">
  <img src="https://github.com/user-attachments/assets/2efc2053-52a2-4f16-a712-e51c17999b67" width="350"/>
</p>


---

##  Decisões Técnicas

###  Estrutura do Projeto

O projeto foi organizado utilizando o padrão do Expo Router, com separação em:

* `app/` → telas da aplicação
* `components/` → componentes reutilizáveis
* `styles/` → configuração de estilos

---

###  Hooks Utilizados

* **useState**

  * Gerenciar estado dos laboratórios
  * Controlar reservas
  * Feedback de interface

* **useEffect**

  * Simular carregamento de dados (loading)

---

###  Navegação

A navegação foi implementada utilizando **Expo Router**, com múltiplas telas:

* Home (`index.jsx`)
* Laboratórios (`labs.jsx`)
* Reservas (`reservas.jsx`)

---

##  Próximos Passos

Com mais tempo, o projeto poderia evoluir para:

*  Sistema de login de usuários
*  Integração com API real
*  Persistência de dados (AsyncStorage)
*  Notificações de reserva
*  Histórico de uso de laboratórios

---

##  Considerações Finais

O projeto foi desenvolvido com foco na simplicidade e usabilidade, buscando resolver um problema real da rotina acadêmica com uma solução prática e eficiente.

---

