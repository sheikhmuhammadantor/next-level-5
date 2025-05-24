-- Active: 1748008427030@@127.0.0.1@5432@ph
-- SELECT * FROM persion_2
-- CREATE TABLE "Table3" (
--     id SERIAL,
--     user_name VARCHAR(30) NOT NULL UNIQUE,
--     age INTEGER CHECK(age > 18),
--     PRIMARY KEY(id)
-- )

-- DROP Table tabletwo

-- CREATE TABLE "Table2" (
--     id SERIAL,
--     user_name VARCHAR(30) NOT NULL,
--     age INTEGER CHECK(age >= 18),
--     UNIQUE(user_name),
--     PRIMARY KEY(id, user_name)
-- );

-- INSERT INTO "Table2"(id, user_name, age) VALUES(1, 'antor', 20);
-- SELECT * FROM "Table2"

-- INSERT INTO "Table2"(id, user_name, age) VALUES(3, 'Sheikh', 20);

-- INSERT INTO "Table2"(user_name) VALUES("Table3");

-- ALTER TABLE "Table2"
-- RENAME COLUMN age to user_age;

-- ALTER TABLE "Table2"
-- Alter COLUMN age set DEFAULT 19;

-- SELECT * FROM "Table2";

-- INSERT INTO "Table2"(user_name) VALUES('antor2');
-- UPDATE "Table2"
-- SET user_age = 19
-- WHERE user_age = 20;

-- SELECT * FROM "Table2";
-- DELETE FROM "Table2"
-- WHERE id = 5;

-- DELETE FROM "Table2"
-- WHERE user_name = 'afheikh';

-- DELETE FROM "Table2"
-- WHERE id = 2;

-- ALTER Table "Table2"
-- ADD Column default_email VARCHAR(30) NOT NULL DEFAULT 'default@gmail.com';

-- SELECT * FROM "Table2"

-- ALTER Table "Table2"
-- DROP Column default_email;