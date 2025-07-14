# 🎬 DevMovies

Projeto em React que consome a API do [The Movie Database (TMDb)](https://www.themoviedb.org/?language=pt-br) para exibir os principais filmes, séries e artistas populares da atualidade. A interface é dinâmica, responsiva e moderna.

🔗 **Deploy:** [Acesse o DevMovies](https://henriquemartin5.github.io/DevMovies/)

## 📸 Visão Geral

A aplicação exibe:

- Destaque com filme do momento (com trailer e botão para assistir)
- Carrosséis com:
  - Top Filmes
  - Top Séries
  - Séries Mais Populares
  - Artistas Mais Populares

---

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/) — v19.1.0
- [React Router DOM](https://reactrouter.com/) — navegação entre páginas
- [Axios](https://axios-http.com/) — requisições HTTP
- [Styled-components](https://styled-components.com/) — CSS-in-JS para estilização
- [Swiper.js](https://swiperjs.com/) — carrosséis responsivos
- [Vite](https://vitejs.dev/) — bundler para desenvolvimento e build
- [TMDb API](https://www.themoviedb.org/documentation/api) — fonte dos dados de filmes, séries e pessoas

---

## 🧰 Instalação Local

1. **Clone o repositório:**

git clone https://github.com/henriquemartin5/DevMovies.git
cd DevMovies


2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

## 📁 Estrutura Principal

```
src/
├── components/        # Componentes reutilizáveis (Botão, Modal, Slider)
├── pages/             # Páginas principais (ex: Home.jsx)
├── services/          # Comunicação com a API TMDb
├── styles.js          # Estilizações com styled-components
├── utils/             # Funções auxiliares (ex: getImages)
```

---

## 🧠 Funcionalidades

* Exibição de filme em destaque na home
* Modais com trailers dos filmes
* Rotas dinâmicas para página de detalhes (`/detalhe/:id`)
* Carrosséis com filmes, séries e artistas mais populares
* Estilização com transições e responsividade

---

## 📦 Build para produção

```bash
npm run build
```

---

## 📌 Observações

* O projeto usa a **API pública da TMDb**, que exige uma **chave de API**. A chave pode ser armazenada em um `.env` (não incluso por segurança).
* O deploy foi realizado com **GitHub Pages** através da configuração do Vite.

---

## 👨‍💻 Autor

Desenvolvido por **Henrique Augusto Martins de Vasconcelos**
📧 [henriqueamv86@hotmail.com](mailto:henriqueamv86@hotmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/henriquemartinsvasc/)

---

## 📝 Licença

Este projeto está sob a licença MIT.
