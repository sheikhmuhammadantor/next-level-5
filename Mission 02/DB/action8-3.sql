-- Active: 1748008427030@@127.0.0.1@5432@ph
-- SELECT FROM "Table2"
-- SELECT * FROM "Table2"
-- SELECT user_name FROM "Table2"
-- SELECT id, user_age FROM "Table2"
-- SELECT id, user_age as Age FROM "Table2"
-- SELECT id as colum_Id, user_age as Age FROM "Table2"
-- SELECT * FROM "Table2" ORDER BY user_name ASC;
-- SELECT * FROM "Table2" ORDER BY user_name DESC;
-- SELECT user_name as "User Name", user_age as "User Age" FROM "Table2" ORDER BY user_name ASC;
-- SELECT user_name as "User Name", user_age as "User Age" FROM "Table2" ORDER BY "User Name" ASC;
-- SELECT user_name as "User Name", user_age as "User Age" FROM "Table2" ORDER BY id ASC;

-- Module 8.5;
-- SELECT DISTINCT user_age FROM "Table2";
-- SELECT DISTINCT user_name FROM "Table2";

-- Also other logic like JS;
-- SELECT * FROM "Table2"
--     WHERE user_name = 'antor' AND user_age = 19;
-- SELECT * FROM "Table2"
--     WHERE user_name <> 'antor' AND user_age = 19;

-- Module 8.6;
-- SELECT upper(user_name) FROM "Table2";
-- SELECT concat(user_name, user_age) FROM "Table2";
-- SELECT concat(user_name, user_age) as first_naem_with_age, * FROM "Table2";

-- Scalar Function;
-- SELECT length(user_name) FROM "Table2";

-- Aggregate Function;
-- SELECT avg(age) FROM "Table2";
-- Also have max, min, sum, count etc;
-- SELECT max(length(user_name)) FROM "Table2";

-- Module 8.7;
-- SELECT * FROM "Table2"
--     WHERE NOT user_name = 'antor';

-- Nothing to happen with null value (Operation) - Like :
-- SELECT NULL = NULL;
-- SELECT NULL <> NULL;

-- SELECT NULL IS NULL;  -- true;
-- SELECT NULL IS NOT NULL;  -- false;

-- SELECT COLLATION(last_name , "Last Name Not Provided !") as "Last Name" FROM "Table2";   -- Data does not exit;

-- Module 8.8;
-- SELECT * FROM "Table2"
--     WHERE user_name IN('antor', 'antor2', 'Sheikh');

-- SELECT * FROM "Table2"
--     WHERE user_name NOT IN('antor', 'antor2', 'Sheikh');

-- SELECT * FROM "Table2"
--     WHERE user_age BETWEEN 19 and 20;

-- SELECT * FROM "Table2"
--     WHERE user_name NOT LIKE 'ant%';

-- SELECT * FROM "Table2"
--     WHERE user_name ILIKE 's%';

-- SELECT * FROM "Table2"
--     WHERE user_name ILIKE '___i_%';

-- Module 8.9;
-- SELECT * FROM "Table2";
-- SELECT * FROM "Table2" LIMIT 2;
-- SELECT * FROM "Table2" LIMIT 2 OFFSET 1;
-- SELECT * FROM "Table2" LIMIT 2 OFFSET 1 * 2;

-- DELETE FROM "Table1";   -- Never Use It;

-- DELETE FROM "Table1"
--     WHERE user_name ILIKE 's%';

-- Module 8.10;

-- UPDATE student2   -- student is a table name;
--     set email = 'default@gmail.com';

-- UPDATE student2
--     set email = 'default@gmail.com', age = 21
--     WHERE student_id = 45;