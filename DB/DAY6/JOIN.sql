-- 부서벌 평균 급여
-- 단 부서가 50 80 100
-- 평균 급여는 "평균 급여"라는 별칭으로 출력하고 소수점 1의 자리까지 표시하시오.
SELECT department_id as 부서, round(avg(salary),1) as "평균 급여"
from employees
where DEPARTMENT_ID in (50,80,100)
GROUP by DEPARTMENT_ID;

-- HAVNING절
-- GROUP BY 절 이후에 실행되는 조건문
-- 집계가 완료된 대상을 조건을 통해 필터링 하는 문법
SELECT 소속반, count(학생ID) 
from 수강생정보
GROUP by 소속반
having count(학생ID) >= 3;

-- #1) 직원테이블에서 부서별 최고 연봉이 100000 이상인 부서만 조회
SELECT
    department_id AS 부서,
    MAX(salary * 12) AS 부서별_최고연봉
FROM
    EMPLOYEES
GROUP BY
    department_id
HAVING
    MAX(salary * 12) >= 100000;

-- #2) 직원테이블에서 직업별 평균 급여가 10000이상인 직업만 조회
SELECT
    JOB_ID AS 직업,
    avg(salary) AS 직업별_평균급여
FROM
    EMPLOYEES
GROUP BY
    JOB_ID
HAVING
    MAX(salary) >= 10000;


-- #3) 부서별 급여 총 합계
-- 단 급여 총 합계가 10000이하인 부서만 출력
-- 부서가 NULL인 부서는 제외
SELECT
    DEPARTMENT_ID as 부서,
    sum(salary) AS 부서별_급여합계
FROM
    EMPLOYEES
where 
    DEPARTMENT_ID IS NOT NULL
GROUP BY
    DEPARTMENT_ID
HAVING
    sum(salary) <= 10000;