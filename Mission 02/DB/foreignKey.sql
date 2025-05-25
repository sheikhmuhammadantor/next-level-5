-- Active: 1748008427030@@127.0.0.1@5432@ph2
-- CREATE TABLE "user" (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(25) NOT NULL
-- );

-- CREATE TABLE post(
--     id SERIAL PRIMARY KEY,
--     title TEXT NOT NULL,
--     user_id INTEGER REFERENCES "user"(id) on delete set DEFAULT DEFAULT 2 
-- );

-- INSERT INTO "user" (username) VALUES
-- ('akash'),
-- ('batash'),
-- ('sagor'),
-- ('nodi');

-- INSERT INTO post (title, user_id) VALUES
-- ('Enjoying a sunny day with Akash! ☀️', 2),
-- ('Batash just shared an amazing recipe! 🍲', 1),
-- ('Exploring adventures with Sagor.🌟', 4),
-- ('Nodi''s wisdom always leaves me inspired. 📚', 4);

SELECT * FROM "user";
SELECT * FROM post;

-- INSERT INTO post (title, user_id) VALUES('test', NULL)
-- DELETE FROM "post" WHERE id = 1;

-- ALTER TABLE post
--     Alter COLUMN user_id set NOT NULL;
-- DELETE FROM "post" WHERE id = 6;
-- ALTER TABLE post
--     Alter COLUMN user_id set NOT NULL;

-- Deletion constraint on DELETE user
-- Restrict Deletion -> ON DELETE RESTRICT / ON DELETE NO ACTION (default)
-- Cascading Deletion -> ON DELETE CASCADE
-- Setting NULL -> ON DELETE SET NULL
-- Set Default value -> ON DELETE SET DEFAULT

-- DELETE FROM "user" 
--     WHERE id = 4;


-- Module 9.6;
