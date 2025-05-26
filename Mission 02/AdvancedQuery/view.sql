-- Active: 1748008427030@@127.0.0.1@5432@practicetaskdb@public
-- Module 10.4;
SELECT * from employees2;

CREATE View dept_avg_salary AS
SELECT department_name, avg(salary) FROM employees2 GROUP BY department_name;

SELECT * from dept_avg_salary;

CREATE View test_view AS
SELECT employee_name, salary, department_name 
FROM employees2 
WHERE department_name in 
(SELECT department_name FROM employees2 WHERE department_name LIKE '%R%');

SELECT * from test_view;


-- Simplifying complex queries
-- Improved security
-- Enhanced data abstraction


-- Module 10.5, 6, 7, 8, 9 - Doesn't Practice Yet;