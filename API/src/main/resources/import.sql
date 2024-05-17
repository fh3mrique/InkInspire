INSERT INTO tb_user ( email, password) VALUES ( 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (email, password) VALUES ( 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_artist (name, photo, perfil, contact, email) VALUES ('ARTISTA', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3QMTfNx_NMJOQFGE6nzKI8Btm7ktrFtMZp-ilYWqCA&s', 'Esse é meu perfil', '81 932324345', 'artista@gmail.com');
INSERT INTO tb_artist (name, photo, perfil, contact, email) VALUES ('ARTISTA 2','https://s2.glbimg.com/SmsWi_YyltW2P41o_rqhxCpmOybp8-DwBidCisRnwI2QoQwS7DYrQjPIFKkFlySW/e.glbimg.com/og/ed/f/original/2013/09/09/ami_james_a.jpg', 'Esse é meu perfil', '81 932324345', 'artista2@gmail.com')

INSERT INTO tb_style (name) VALUES ('Tradicional Americana'),('Realismo'),('Preto e Cinza'),('Aquarela'),('Neo Tradicional'),('Ilustrativo'),('Geométrico'),('Tribal'),('Trash Polka'),('Minimalista');

INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Tatuagem Shikamaru', 'Tradicional americana arte', 1, 300.00, 'https://i.pinimg.com/564x/48/88/63/4888637b3a66673bd1c62cdae99c0674.jpg', 2);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('Tatuagem Itachi', 'Tradicional americana arte', 1, 300.00, 'https://i.pinimg.com/564x/f5/db/24/f5db240f0cdc1c2cd164a7f9b702d5ff.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('art 1', 'Tradicional americana arte', 1, 300.00, 'https://i.pinimg.com/564x/3c/fd/37/3cfd378292efca544a022d9030990c48.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('art 1', 'Tradicional americana arte', 1, 300.00, 'https://miro.medium.com/v2/resize:fit:2880/1*Cmyv3dqFP0CVkhCx9qK5GQ.jpeg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('art 1', 'Tradicional americana arte', 1, 300.00, 'https://i.pinimg.com/564x/e1/4a/88/e14a887f1fb51bc4c43c3c9f66a5e023.jpg', 2);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('art 1', 'Tradicional americana arte', 1, 300.00, 'https://i.pinimg.com/474x/c6/bb/e6/c6bbe627eeb6897c19394d354cc0a9d4.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('art 1', 'Tradicional americana arte', 1, 300.00, 'https://i.pinimg.com/736x/38/0f/ef/380fef3e8b8800373350fec323ac5a2b.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('art 1', 'Tradicional americana arte', 1, 300.00, 'https://i.pinimg.com/564x/69/3a/3a/693a3a0667dcd01fdfcc43f9d539137b.jpg', 1);
INSERT INTO tb_tattoo (name, description, style_id, price, art_url, artist_id) VALUES ('art2', 'Tradicional americana arte', 1, 300.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgl9-2aRi651khRKSIxRlSSFCa3t1_mS6wRhlph2UftK-E6Pkp80SuUgwV5CphWzwNZM&usqp=CAU', 2);
