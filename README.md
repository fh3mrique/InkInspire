# INKISPIRE
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/fh3mrique/InkInspire/blob/main/LICENSE) 

# Sobre o projeto


InkInspire é uma aplicação web fullstack construída inteiramente por mim, com o propósito de agregar ao meu portfólio de projetos. O principal objetivo desta plataforma é oferecer aos usuários uma experiência envolvente e informativa, onde possam explorar uma variedade de artistas e seus portfólios de tatuagens.

Através do InkInspire, os usuários podem buscar estilos e modelos de tatuagens, consultar os preços das artes que desejam fazer e explorar os trabalhos de diversos tatuadores. Além disso, a aplicação permite que os próprios tatuadores cadastrem, editem e excluam suas próprias artes, criando assim um artbook online acessível ao público.

# Layout web
### Collection Resources: 
A API fornece uma coleção de recursos, onde os dados são modelados com a granularidade necessária para os requisitos e, em seguida, exibidos em uma interface web que segue a filosofia de layout em alvenaria (masonry).

![Web 1](https://github.com/fh3mrique/assets/blob/main/portgif.gif)


### Pageable Resources: 
A API oferece busca paginada de recursos por nome e estilo, aprimorando a experiência do usuário ao facilitar a localização de recursos específicos.

![Web 1](https://github.com/fh3mrique/assets/blob/main/searchFind.gif)


### Singleton Resource:
A API fornece um recurso único, permitindo que o usuário, ao clicar em um recurso, seja redirecionado para uma página com mais informações sobre a arte, como preço, estilo e o artista responsável, melhorando o poder de decisão do cliente.

![Web 1](https://github.com/fh3mrique/assets/blob/main/print3.png)


# Gerenciamento de eventos complexos
No projeto, o gerenciamento de eventos complexos é fundamental para proporcionar uma experiência de usuário eficiente e intuitiva. Um dos principais exemplos é a sincronização entre o componente de filtro de buscas por tattoos e o componente de paginação, implementada através do padrão de projeto Observer.

### Sincronização entre Filtros de Busca e Paginação
O componente de filtro de buscas por tattoos está perfeitamente sincronizado com o componente de paginação, garantindo que a busca de recursos seja paginada de forma eficiente. Isso significa que, ao aplicar filtros de busca, os resultados exibidos são automaticamente atualizados e a paginação se ajusta para refletir os novos dados.


O componente de filtro de buscas por tattoos está sincronizado com o componete de paginação, ligados atraves do padrão de prejeto observe o sistema fornece uma busca de recursos paginada 

![Web 1](https://github.com/fh3mrique/assets/blob/main/paginationEvent.gif)

# UI e UX da aplicação
O sistema utiliza loaders, toasts e uma página de erros para aprimorar a experiência do usuário. Loaders indicam visualmente que uma operação está em andamento, toasts fornecem feedback imediato sobre as ações do usuário, e a página de erros oferece informações claras e úteis em caso de problemas, garantindo uma navegação mais fluida e informativa.

![Web 1](https://github.com/fh3mrique/assets/blob/main/loaders.gif)
![Web 1](https://github.com/fh3mrique/assets/blob/main/Toasty.gif)


## Segurança e Validação
### Autenticação e Restrição de Conteúdo Baseado em Perfil: 
O sistema possui autenticação e autorização implementadas usando o módulo Spring Security com o fluxo OAuth2 e JWT. No front-end, foi implementada a restrição de rotas baseada em perfil. Todos os usuários podem acessar a tela de portfólios, mas apenas usuários logados têm acesso a certas rotas protegidas, como a aba admin, que contém as rotas responsáveis pelas operações de cadastrar, atualizar e deletar artes. Entre os usuários logados, apenas aqueles com perfil de administrador, como Maria, podem excluir outros usuários, pois possuem um papel especial. Por outro lado, Alex, que não possui perfil de administrador, nem sequer vê a aba de usuários, restringindo o acesso dos usuários logados com base em seus níveis de autorização. Além disso, usuários que não estão logados, ao tentarem acessar uma rota protegida, serão redirecionados automaticamente para a tela de login.

![Web 2](https://github.com/fh3mrique/assets/blob/main/chrome-capture-2024-5-23%20(1).gif)

### Validações de formulario
O sistema utiliza a biblioteca react-hook-form para o controle e verificação de formulários, proporcionando uma maneira eficiente e simplificada de gerenciar os estados dos formulários no React. Para garantir que os dados inseridos atendam a requisitos específicos, são usadas expressões regulares (regex) para validação. 

![Web 3](https://github.com/fh3mrique/assets/blob/main/Screenshot-20240518043457.png)![Web 4](https://github.com/fh3mrique/assets/blob/main/chrome-capture-2024-5-18.png) 

## Responsividade
![Mobile 1](https://github.com/fh3mrique/assets/blob/main/Capturar.PNG) ![Mobile 2](https://github.com/fh3mrique/assets/blob/main/Capturarhome1.PNG)

## Classes do projeto
![Modelo Conceitual](https://github.com/fh3mrique/assets/blob/main/diagrama.PNG)


# Tecnologias utilizadas
### Back end
- Postgres
- JPA / Hibernate
- Java
- Spring
- Maven
### Front end
- HTML / CSS / JS / TypeScript
- ReactJS
  
# Como executar o projeto

### Back end
Pré-requisitos: Java (Qualquer versão igual ou superior a 14)

```bash
# clonar repositório
git clone https://github.com/fh3mrique/InkInspire.git

# entrar na pasta do projeto back end
cd API

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```# entrar na pasta do projeto front end web
cd frontend

# instalar dependências
npm install

# executar o projeto
npm run dev
```

# Autor

Filipe Henrique de Lima

https://www.linkedin.com/in/filipehlima/

# Seeding SQL do Banco para Testes

```sql
INSERT INTO tb_user (email, password) VALUES ('alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (email, password) VALUES ('maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_artist (name, photo, perfil, contact, email) VALUES ('ARTISTA', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3QMTfNx_NMJOQFGE6nzKI8Btm7ktrFtMZp-ilYWqCA&s', 'Esse é meu perfil', '81 932324345', 'artista@gmail.com');
INSERT INTO tb_artist (name, photo, perfil, contact, email) VALUES ('ARTISTA 2', 'https://s2.glbimg.com/SmsWi_YyltW2P41o_rqhxCpmOybp8-DwBidCisRnwI2QoQwS7DYrQjPIFKkFlySW/e.glbimg.com/og/ed/f/original/2013/09/09/ami_james_a.jpg', 'Esse é meu perfil', '81 932324345', 'artista2@gmail.com');

INSERT INTO tb_style (name) VALUES ('Tradicional Americana'), ('Cultura Pop'), ('Realismo'), ('Preto e Cinza'), ('Aquarela'), ('Neo Tradicional'), ('Geométrico'), ('Tribal'), ('Minimalista');

INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Tatuagem Shikamaru', 'Tatuagem do personagem Shikamaru fumando do anime naruto', 2, 300.00, 'https://i.pinimg.com/564x/48/88/63/4888637b3a66673bd1c62cdae99c0674.jpg', 2);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Chihiro', 'Tatuagem do personagem Chihiro no braço', 2, 300.00, 'https://i.pinimg.com/564x/36/89/3e/36893ec75246c665ede61000ee841d30.jpg', 2);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Django', 'Tatuagem do personagem Django no braço', 2, 450.00, 'https://i.pinimg.com/564x/02/93/7d/02937df18823d284ebf569c301899d26.jpg', 2);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Art Pulp Fiction', 'Arte do filme Pulp Fiction colorida no braço', 2, 600.00, 'https://i.pinimg.com/564x/66/96/61/669661270c42575bef3435d6bcce221b.jpg', 2);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Art Personagem R2D2', 'Arte do personagem R2D2 do filme StarWars', 2, 245.00, 'https://i.pinimg.com/564x/09/04/40/090440e0136cf9b27fe4c7dbbfdaeab2.jpg', 2);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Art Poderoso Chefão', 'Arte caricata colorida do filme Poderoso Chefão', 2, 375.00, 'https://i.pinimg.com/564x/3d/15/04/3d150491a9880718fa375e75ceab6760.jpg', 2);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Art Mob', 'Arte do personagem Mob do anime Mob Psycho 100', 2, 850.00, 'https://i.pinimg.com/564x/3f/88/93/3f88939554a55dad10b757217eec6de9.jpg', 2);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Art Mob', 'Arte do personagem Mob do anime Mob Psycho 100', 2, 300.00, 'https://i.pinimg.com/564x/04/89/d5/0489d552ba98ec2dc17dbc50c56ff577.jpg', 2);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Art Bordelands', 'Arte do game Bordelands', 2, 300.00, 'https://i.pinimg.com/564x/9c/ef/49/9cef49ff8df51c5aa1b48e1123ec4fbd.jpg', 2);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Tatuagem Itachi', 'Tradicional americana arte', 2, 300.00, 'https://i.pinimg.com/564x/f5/db/24/f5db240f0cdc1c2cd164a7f9b702d5ff.jpg', 1);

INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Tatuagem Felino realista', 'Tatuagem Felino realista', 3, 300.00, 'https://i.pinimg.com/564x/2a/64/65/2a64657829e3e7eaf0ac4b3f92860a51.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Tatuagem menina realista', 'Tatuagem menina realista', 3, 300.00, 'https://i.pinimg.com/564x/a9/24/7c/a9247c7484c2d88c20bfdf965a60d685.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Tatuagem mulher gato realista', 'Tatuagem mulher gato realista', 3, 300.00, 'https://i.pinimg.com/564x/55/1a/b8/551ab82df91de14deb57cccf6c0baef9.jpg', 1);

INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Tatuagem preto e branco arte 1', 'Tatuagem mulher gato realista', 4, 344.00, 'https://i.pinimg.com/564x/47/d3/4d/47d34d8ccfe79cf3af26d90ab8421c5b.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Tatuagem preto e branco arte 2', 'Tatuagem mulher gato realista', 4, 543.00, 'https://i.pinimg.com/564x/4d/9f/07/4d9f07ba58ad52cc9bbf45be6b4d060e.jpg', 1);

INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Animais aquarela', 'Lorem ipsum dolor sit amet. Ut rerum placeat et esse aliquam sed ipsam adipisci. Vel quia minus a assumenda quisquam ea quos autem et delectus ratione sit obcaecati saepe ex excepturi odit.', 5, 765.00, 'https://i.pinimg.com/564x/43/b8/98/43b898ca10da62dbb7d07179d78aeab8.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Agua viva aquarela', 'Agua viva aquarela', 5, 765.00, 'https://i.pinimg.com/564x/14/b9/a4/14b9a4c4e1526977e115efbd23d7310c.jpg', 1);

