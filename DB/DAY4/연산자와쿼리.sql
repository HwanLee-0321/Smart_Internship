-- SQL연산자
-- SQL에서만 사용하는 연산자
-- IS NULL / IS NOT NULL
-- IN
-- BETWEEN
-- LIKE

-- IS NULL
-- 데이터값이 NULL인 값을 조회하여 가져온다

-- is null        : 데이터가 null
-- is not null  : 데이터가 null이 아닌 값

select first_name, salary, commission_pct
from employees
where commission_pct is not null
order by commission_pct desc;

select first_name, salary, commission_pct
from employees
where commission_pct is null;

-- 부서 아이디 조회
select department_id
from employees;

-- 부서가 존재하지 않는 직원의 이름
SELECT *
FROM employees
where department_id is null;

-- 책임자가 있는 부서의 모든 정보
select *
from departments
where manager_id is not null;

-- IN 연산자
-- 특정 커럼에 포함된 데이터를 여러개 조회할 떄 사용한다

-- 부서가 10,20,30,40에 해당하는 직원의 이름과 부서정보를 조회하시오

select * 
from employees 
where department_id in (10,20,30,40) 
        or department_id is null;
        
-- #problem1
select *
from employees
where job_id in('AD_PRES', 'IT_PROG');

-- #problem2
select *
from employees
where email in ('SANDE' , 'TFOX', 'DLEE');

-- #problem3
select *
from employees
where manager_id not in(100,102,103,104,105);

-- #problem4
select *
from employees
where department_id not in (10,20,30,40);

SELECT FIRST_NAME, SALARY
    FROM EMPLOYEES
 WHERE SALARY >= 10000
    AND SALARY <= 20000
ORDER BY SALARY ASC ;

SELECT FIRST_NAME, SALARY
    FROM EMPLOYEES
 WHERE salary between 10000 and 20000
ORDER BY SALARY ASC ;

select *
from employees;

select *
from employees
where phone_number like '650%';

-- #1
select *
from employees
where first_name like 'S%n';

-- #2
select *
from employees
where first_name like '__it';

-- #3
select *
from employees
where first_name like '_e%';


SELECT username,account_status,created FROM dba_users ORDER BY created;