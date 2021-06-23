/* empty and initialize table location */
TRUNCATE TABLE location;
INSERT INTO location (id, name) VALUES (1, 'Airport');
INSERT INTO location (id, name) VALUES (2, 'Central Train Station');
INSERT INTO location (id, name) VALUES (3, 'Central Bus Station');
INSERT INTO location (id, name) VALUES (4, 'City Centre');
INSERT INTO location (id, name) VALUES (5, 'City Hall');

/* empty and initialize table extra */
TRUNCATE TABLE extras;
INSERT INTO extras (id, name, img_url, daily_price, rental_id) VALUES (1, 'Steal insurance', 'url', 10, null);
INSERT INTO extras (id, name, img_url, daily_price, rental_id) VALUES (2, 'Baby sit', 'url', 15, null);
INSERT INTO extras (id, name, img_url, daily_price, rental_id) VALUES (3, 'GPS', 'url', 20, null);

/* empty and initialize table vehicle */
INSERT INTO vehicle (id, title, daily_price, img_url, type, gear_system) VALUES (1, 'title1', 19, 'url', 'Sedan', 'Manual');
INSERT INTO vehicle (id, title, daily_price, img_url, type, gear_system) VALUES (2, 'title2', 25, 'url', 'Sedan', 'Auto');
INSERT INTO vehicle (id, title, daily_price, img_url, type, gear_system) VALUES (3, 'title3', 28, 'url', 'Sedan', 'Manual');
INSERT INTO vehicle (id, title, daily_price, img_url, type, gear_system) VALUES (4, 'title4', 33, 'url', 'Sedan', 'Auto');