-- CH02. WHERE 절

-- 조건을 통해 원하는 데이터만 데이터베이스에서 가져오는 방법

-- [WHERE 절 사용법]
-- SELECT 조회하고자 하는 컬럼의 정보
-- FROM   데이터를 가져올 테이블 정보
-- WHERE  원하는 행(데이터)만 선별하여 가져오기 위한 '조건 식'

select *
from   employees
where salary = 4800;

select *
from   employees
where manager_id = 100;

select *
from   employees
where department_id = 90;

-- 데베에서 사용하는 자료형 종류
-- varchar(n): 가변형 문자형, n크기만큼 길이를 갖미나 가변 길이로 조종가능
-- number(p,s): 숫자형 자료형
-- P자리 만큼 입력 받고 s자리만큼 소수를 입력 받는다.
-- p,s 생략가능. 최대 크기 138만큼 들어간다

-- date: 날짜형 자료형, sysdate함수를 사용하여 현재 날짜 값을 입력 받는다.
-- > timestamp라는 구체적이라는 시간을 지정하는 자료형도 있음(밀리초까지 지정가능)

-- 데이터 유형에 따른 사용하는 방법
-- 문자형, 날짜형 --> 반드시 ''로 감싸줘야함
-- "" 문자형으로 인식이 안된다. 다만 별칭을 사용할 때 특수문자를 인식할 때 사용한다.


select *
from employees;

-- job_id정보가 it_prog에해당하는 직원의 수는 몇명인가

select *
from employees
where job_id = 'IT_PROG';

-- 비교 연산자
-- =: 같다
-- > : 크다
-- >=: 크거나 같다
-- <: 작다
-- <=: 작거나 같다

-- 급여가 5000이하인 직원 데이터 가져오기
select employee_id, first_name, email, salary
from employees
where salary <= 5000
order by salary desc;

-- ans) In the employees table,120000이하인 직원 조회
select employee_id, first_name, email, salary * 12 as "연봉", job_id
from employees
where salary * 12 >= 120000
order by employee_id desc;

-- 문제) 입사날짜 기준으로 모든 정보 조회
select hire_date                    as "입사날짜", 
            EMPLOYEE_ID         as 직원아이디,
            FIRST_NAME            as 이름,
            LAST_NAME              as 성,
            EMAIL                         as 이메일,
            PHONE_NUMBER     as 전화번호,
            JOB_ID                       as 직책,
            SALARY * 12              as 연봉,
            COMMISSION_PCT  as 보너스,
            MANAGER_ID           as 사수,
            DEPARTMENT_ID    as 부서
from employees
order by hire_date desc;

SELECT *
FROM employees
WHERE hire_date >= DATE '2006-06-01'
ORDER BY hire_date asc; -- 채용일 순으로 정렬 (내림차순, 최신순)


-- 부정비교 연산자
-- !=, <>, ^=  : 같지 않다


-- 문제1) 부서가 50에 해당하지 않는 직원이름과 부서정보
select first_name, department_id
from employees
where department_id != 50
order by department_id asc;


-- 문제2) 직책이 IT_PROG에 해당하지 않는 직원의 아이디, 이름, 직책, 급여
SELECT *
FROM employees
WHERE job_id != 'IT_PROG'
ORDER BY hire_date DESC; -- 예: 'IT_PROG' 직원들을 채용일 최신순으로 정렬

-- 논리 연산자
-- 조건과 조건을 이어주는 역할
-- AND : 모두 만족
-- OR   : ~ 중에 하나 만족


-- 문제) 부서가 30 40 50 에 해당하는 직원들이 이름과 급여와 부서정보를 조회
-- 부서 기준 내림차순
select *
from employees
where department_id = 30 or department_id = 40 or department_id = 50
order by department_id asc;

--문제) 부서가 50이면서 직책이 ST_MAN인 직원의 모든 정보
select *
from employees
where department_id = 50 and job_id = 'ST_MAN';

--문제) 부서가 100이거나 급여 7000 미만
select *
from employees
where department_id = 100 or salary < 7000;

--문제) 직책이 st_man이고 급여가 7000 미만
select *
from employees
where job_id = 'ST_MAN' and salary < 7000;

--문제) 부서가 50, 90 급여가 7000이상
select *
from employees
where (department_id =50 or department_id =70) and salary >= 7000;

--문제) 부서가 100 or 90 그리고 직원 아이디 101
select * 
from employees
where (department_id = 100 or department_id = 90) and employee_id = 101;