-- CHAPTER 04. GROUP BY절

-- 내장함수: 오라클에서 미리 만들어 놓은 함수 > 호출해서 사용하기만 하면 된다.
-- 문자형, 숫자형, 날짜형, 변환형, NULL처리함수, decode(조건함수)

-- count(): 지정한 데이터의 개수를 반환
-- sum():   합을 반환
-- max():   최대 반환
-- min():   최소 반환
-- avg():   평균 반환

-- 직원테이블에서 직원ID의 행의 갯수 가져오기
-- 출력할 때는 반드시 1행만 가능.
SELECT count(EMPLOYEE_ID)
from employees;

SELECT count(DEPARTMENT_ID)
from employees;


SELECT count(*)
from employees;

-- 급여의 총 합계를 구하시오
SELECT sum(SALARY)
from employees;

-- #2) 최대 최소 급여
select MIN(salary), max(salary)
from EMPLOYEES;

-- #3) department_id가 100인 직원들 평균 급여
SELECT round(avg(salary), 1)s
from EMPLOYEES
WHERE DEPARTMENT_ID = 100;