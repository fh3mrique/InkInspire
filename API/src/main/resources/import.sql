INSERT INTO tb_user ( email, password) VALUES ( 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (email, password) VALUES ( 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_artist (name, photo, perfil, contact, email) VALUES ('ARTISTA', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3QMTfNx_NMJOQFGE6nzKI8Btm7ktrFtMZp-ilYWqCA&s', 'Esse é meu perfil', '81 932324345', 'artista@gmail.com');
INSERT INTO tb_artist (name, photo, perfil, contact, email) VALUES ('ARTISTA 2','https://s2.glbimg.com/SmsWi_YyltW2P41o_rqhxCpmOybp8-DwBidCisRnwI2QoQwS7DYrQjPIFKkFlySW/e.glbimg.com/og/ed/f/original/2013/09/09/ami_james_a.jpg', 'Esse é meu perfil', '81 932324345', 'artista2@gmail.com')

INSERT INTO tb_style (name) VALUES ('Tradicional Americana'),('Cultura Pop'),('Realismo'),('Preto e Cinza'),('Aquarela'),('Neo Tradicional'),('Geométrico'),('Tribal'),('Minimalista');

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
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Astronauta aquarela', 'Astronauta aquarela', 5, 765.00, 'https://i.pinimg.com/564x/bf/a7/1b/bfa71ba0b88f913c540269eb489fab85.jpg', 1);

INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Art neo tradicional 1', 'Lorem ipsum dolor sit amet. Ut rerum placeat et esse aliquam sed ipsam adipisci. Vel quia minus a assumenda quisquam ea quos autem et delectus ratione sit obcaecati saepe ex excepturi odit.', 6, 765.00, 'https://i.pinimg.com/564x/3a/26/d1/3a26d1a01aeb04e5e80d58a822cc9b19.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Art neo tradicional 2', 'Lorem ipsum dolor sit amet. Ut rerum placeat et esse aliquam sed ipsam adipisci. Vel quia minus a assumenda quisquam ea quos autem et delectus ratione sit obcaecati saepe ex excepturi odit.', 6, 765.00, 'https://i.pinimg.com/564x/32/f2/c0/32f2c0edf0314d22cf81f40ac53bb980.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Art neo tradicional 3', 'Lorem ipsum dolor sit amet. Ut rerum placeat et esse aliquam sed ipsam adipisci. Vel quia minus a assumenda quisquam ea quos autem et delectus ratione sit obcaecati saepe ex excepturi odit.', 6, 765.00, 'https://i.pinimg.com/564x/44/a8/f2/44a8f2f6c685e93f0b289e807b74e994.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Art neo tradicional 4', 'Lorem ipsum dolor sit amet. Ut rerum placeat et esse aliquam sed ipsam adipisci. Vel quia minus a assumenda quisquam ea quos autem et delectus ratione sit obcaecati saepe ex excepturi odit.', 6, 765.00, 'https://i.pinimg.com/564x/0a/a2/47/0aa247b4943432059dfd9c8e9c0e0105.jpg', 1);

INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Art geometrica 1', 'Lorem ipsum dolor sit amet. Ut rerum placeat et esse aliquam sed ipsam adipisci. Vel quia minus a assumenda quisquam ea quos autem et delectus ratione sit obcaecati saepe ex excepturi odit.', 7, 765.00, 'https://i.pinimg.com/564x/44/6b/9c/446b9c00186668213d9130481ff32de1.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Art geometrica 2', 'Lorem ipsum dolor sit amet. Ut rerum placeat et esse aliquam sed ipsam adipisci. Vel quia minus a assumenda quisquam ea quos autem et delectus ratione sit obcaecati saepe ex excepturi odit.', 7, 213.00, 'https://i.pinimg.com/564x/d3/9f/73/d39f7320550253aad4d76c14f8f0c2c0.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Art geometrica 3', 'Lorem ipsum dolor sit amet. Ut rerum placeat et esse aliquam sed ipsam adipisci. Vel quia minus a assumenda quisquam ea quos autem et delectus ratione sit obcaecati saepe ex excepturi odit.', 7, 884.00, 'https://i.pinimg.com/564x/14/a6/7c/14a67cac62f29be42c3b93395f764634.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Art geometrica 4', 'Lorem ipsum dolor sit amet. Ut rerum placeat et esse aliquam sed ipsam adipisci. Vel quia minus a assumenda quisquam ea quos autem et delectus ratione sit obcaecati saepe ex excepturi odit.', 7, 432.00, 'https://i.pinimg.com/564x/93/e3/14/93e3149a7d80081afbebac287891c23e.jpg', 1);

INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Tattoo Tribal', 'Lorem ipsum dolor sit amet. Ut rerum placeat et esse aliquam sed ipsam adipisci. Vel quia minus a assumenda quisquam ea quos autem et delectus ratione sit obcaecati saepe ex excepturi odit.', 8, 765.00, 'https://i.pinimg.com/564x/28/b4/4b/28b44bf220c32c675cf1936dab0f0732.jpg', 1);

INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Tattoo Minimaslista 1', 'Lorem ipsum dolor sit amet. Ut rerum placeat et esse aliquam sed ipsam adipisci. Vel quia minus a assumenda quisquam ea quos autem et delectus ratione sit obcaecati saepe ex excepturi odit.', 8, 765.00, 'https://i.pinimg.com/564x/0b/d6/b8/0bd6b8123e460ea025d3781d5335a455.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Tattoo Minimaslista 2', 'Lorem ipsum dolor sit amet. Ut rerum placeat et esse aliquam sed ipsam adipisci. Vel quia minus a assumenda quisquam ea quos autem et delectus ratione sit obcaecati saepe ex excepturi odit.', 8, 765.00, 'https://i.pinimg.com/564x/01/46/79/014679aaafb892fc89768c6880a0de0c.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Tattoo Minimaslista 3', 'Lorem ipsum dolor sit amet. Ut rerum placeat et esse aliquam sed ipsam adipisci. Vel quia minus a assumenda quisquam ea quos autem et delectus ratione sit obcaecati saepe ex excepturi odit.', 8, 765.00, 'https://i.pinimg.com/564x/77/7a/b3/777ab3dfc70d69975bd8f8b6444fb7d3.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Tattoo Minimaslista 4', 'Lorem ipsum dolor sit amet. Ut rerum placeat et esse aliquam sed ipsam adipisci. Vel quia minus a assumenda quisquam ea quos autem et delectus ratione sit obcaecati saepe ex excepturi odit.', 8, 765.00, 'https://i.pinimg.com/564x/c9/7c/ab/c97cab3f97a92916ad51ccbbb439ab82.jpg', 1);


INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('art 1', 'Tradicional americana arte', 1, 300.00, 'https://i.pinimg.com/564x/3c/fd/37/3cfd378292efca544a022d9030990c48.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('art 1', 'Tradicional americana arte', 1, 300.00, 'https://miro.medium.com/v2/resize:fit:2880/1*Cmyv3dqFP0CVkhCx9qK5GQ.jpeg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('art 1', 'Tradicional americana arte', 1, 300.00, 'https://i.pinimg.com/564x/e1/4a/88/e14a887f1fb51bc4c43c3c9f66a5e023.jpg', 2);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('art 1', 'Tradicional americana arte', 1, 300.00, 'https://i.pinimg.com/474x/c6/bb/e6/c6bbe627eeb6897c19394d354cc0a9d4.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('art 1', 'Tradicional americana arte', 1, 300.00, 'https://i.pinimg.com/736x/38/0f/ef/380fef3e8b8800373350fec323ac5a2b.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('art 1', 'Tradicional americana arte', 1, 300.00, 'https://i.pinimg.com/564x/69/3a/3a/693a3a0667dcd01fdfcc43f9d539137b.jpg', 1);
