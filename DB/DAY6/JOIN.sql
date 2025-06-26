SELECT department_id as 부서, round(avg(salary),1) as 평균급여
from employees
where DEPARTMENT_ID in (50,80,100)
GROUP by DEPARTMENT_ID;