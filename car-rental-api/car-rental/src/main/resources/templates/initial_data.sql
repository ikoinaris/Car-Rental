/* initialize location values */
INSERT INTO location (id, name) VALUES (1, 'Airport');
INSERT INTO location (id, name) VALUES (2, 'Central Train Station');
INSERT INTO location (id, name) VALUES (3, 'Central Bus Station');
INSERT INTO location (id, name) VALUES (4, 'City Centre');
INSERT INTO location (id, name) VALUES (5, 'City Hall');

/* initiazlize extra values */
INSERT INTO extras (id, name, img_url, daily_price) VALUES (1, 'Steal insurance', 'url', 10);
INSERT INTO extras (id, name, img_url, daily_price) VALUES (2, 'Baby sit', 'url', 15);
INSERT INTO extras (id, name, img_url, daily_price) VALUES (3, 'GPS', 'url', 20);

/* initialize vehicle values */
INSERT INTO vehicle (id, title, daily_price, img_url, type) VALUES (1, 'title1', 19, 'url', 'Sedan')
INSERT INTO vehicle (id, title, daily_price, img_url, type) VALUES (2, 'title2', 25, 'url', 'Sports car')
INSERT INTO vehicle (id, title, daily_price, img_url, type) VALUES (3, 'title3', 28, 'url', 'SUV')
INSERT INTO vehicle (id, title, daily_price, img_url, type) VALUES (4, 'title4', 33, 'url', 'Coupe')