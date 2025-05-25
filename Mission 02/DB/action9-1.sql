-- SELECT * FROM students;

-- Module 9.1;
-- SHOW TIMEZONE;
-- SELECT now();

-- CREATE Table timeX (ts TIMESTAMP without time zone, tsz TIMESTAMP with time zone);
-- INSERT INTO timeX VALUES('2025-09-12 10:45:00', '2025-05-22 10:45:00');

-- SELECT * FROM timeX;

-- SELECT CURRENT_DATE;
-- SELECT now();
-- SELECT now()::date;
-- SELECT now()::time;

-- SELECT to_char(now(), 'yyyy/mm/dd');
-- SELECT to_char(now(), 'dd/mm/yyyy');

-- SELECT to_char(now(), 'month');
-- SELECT to_char(now(), 'Month');
-- SELECT to_char(now(), 'MONTH');

-- SELECT to_char(now(), 'DDD');
-- SELECT CURRENT_DATE - INTERVAL '1 year 3 month';
-- SELECT age(CURRENT_DATE, '2004-03-30');

-- SELECT *, age(CURRENT_DATE, dob) FROM students;

-- SELECT extract(MONTH from '2002-03-30'::date);
-- SELECT 'n'::BOOLEAN;

-- Module 9.2;
-- SELECT * FROM students;

-- SELECT country, count(*), avg(age) from students
--     GROUP BY country;

-- SELECT country, avg(age) from students
--     GROUP BY country
--         HAVING avg(age) > 20.60;

-- SELECT extract(YEAR FROM dob) as unique_birth_year,
--  count(*) as born_count
--     FROM students 
--     GROUP BY unique_birth_year
--     HAVING  count(*) > 3;