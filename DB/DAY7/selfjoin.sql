-- 직원 아이디, first_name, manager_id, 상사이름
-- 각 직원의 매니저 출력

SELECT
    A.employee_id,
    A.first_name AS employee_name,  -- Added alias for clarity
    A.manager_id,
    B.first_name AS manager_name    -- Added alias for clarity
FROM
    EMPLOYEES A
JOIN
    EMPLOYEES B ON A.manager_id = B.employee_id;

SELECT DEPARTMENT_ID, DEPARTMENT_NAME, MANAGER_ID
from DEPARTMENTS;

-- 각 부서의 매니저 정보를 출력하시오.
-- 부서ID, 부서명, 매니저ID, 매니저정보

SELECT
    A.DEPARTMENT_ID,
    A.DEPARTMENT_NAME,
    A.MANAGER_ID,
    B.FIRST_NAME
from
    DEPARTMENTS A
JOIN
    EMPLOYEES B ON A.manager_id = B.manager_id
order BY A.DEPARTMENT_ID asc;

-- outer join
-- left
-- right
-- full
SELECT
    d.DEPARTMENT_ID,
    d.DEPARTMENT_NAME,
    d.MANAGER_ID,
    e.FIRST_NAME
from   
    DEPARTMENTS d 
left outer join 
    EMPLOYEES e
ON
    d.manager_id = e.employee_id;

SELECT
    d.DEPARTMENT_ID,
    d.DEPARTMENT_NAME,
    d.MANAGER_ID,
    e.FIRST_NAME
from   
    DEPARTMENTS d 
right outer join 
    EMPLOYEES e
ON
    d.manager_id = e.employee_id;

SELECT
    d.DEPARTMENT_ID,
    d.DEPARTMENT_NAME,
    d.MANAGER_ID,
    e.FIRST_NAME
from   
    DEPARTMENTS d 
full outer join 
    EMPLOYEES e
ON
    d.manager_id = e.employee_id;