-- CHAPTER 01. select절

-- 주석기호

-- 주석 색깔 바꾸기
-- 도구 > 환경설정 > 코드편집기 > PL/SQL 구문생성

DESC EMPLOYEES;

-- DESC (describe): 테이블의 정보를 확인하는 명령어

-- 데이터베이스에서 데이터를 가져오는 방법
-- [SELECT 절 사용 방법]
-- SELECT [ALL]은 모든 정보 / [distinct] 중복제거 사용자가 조회하고 '컬럼의 정보'
-- FROM   데이터를 가져올 '테이블의 정보'

-- 직원(employees) 테이블에서 직원의 이름(first_name), 성(last_name)의 정보를 가져오고 싶다.

select FIRST_NAME,LAST_NAME,SALARY /*이 칼럼들을 가져옴 뒤에 테이블로부터*/ from EMPLOYEES;
    
/*
1. SQL 실행 단축기: Crtl + Enter, F9
2. SQL 문장은 대소문자 구분 X 
3. SQL 문장은 띄어쓰기에 영향을 받지 않는다. 
4. SQL 문장 끝에는 반드시 문장의 끝을 알 수 있게 하는 세미콜론(';')을 작성해야함.
*/

-- 정석
select FIRST_NAME,
       LAST_NAME,
       SALARY
  from EMPLOYEES;
    
-- 부서 테이블 (departments)에서 부서 아이디, 부서이름의 컬럼 정보
select department_id, 
       department_name 
from   departments;

-- 직원테이블에서 직원아이디, 직원이름, 급여, 직책, 부서 정보
select first_name,
       last_name,
       salary,
       job_id,
       department_id
from   EMPLOYEES;
    
select job_id,
       job_title
from   jobs;

-- SELECT [ALL]은 모든 정보 / [distinct] 중복제거 사용자가 조회하고 '컬럼의 정보'
select distinct department_id from employees;
select all department_id from employees;

-- '*' 는 전체 컬럼 조회
select * from employees;

select * from countries;

select * from departments;

select * from jobs;

select * from regions;

select * from locations;

-- 산술연산
select employee_id,
       first_name,
       hire_date + 1,
       salary * 12
from   employees;

--별칭을 사용하기
-- ALIAS(별칭) 은 주로 AS라는 키워드로 컬럼명에 별칭을 사용한다.

-- 별칭 사용하는 방법
-- 별칭을 사용시 특수문자까지 사용하기 위해서는 ""로 감싸줘야한다.

-- 1. select 특정컬럼 as 별칭
-- 2. select 특정컬럼 as "별칭"
-- 3. select 특정컬럼 별칭
-- 4. select 특정컬럼 "별칭"  

select employee_id as 직원아이디,
       first_name as 이름,
       hire_date + 1 as "고용 일자",
       salary * 12 as 급여,
       phone_number as 전화번호,
       commission_pct as 보너스
from   employees;

-- order by 
-- select    : target colmn
-- from      : target table info
-- oder by   : colmn sort

select   first_name as 이름,
         salary as 급여,
         department_id as 직책아이디
from     employees
order by salary desc;

-- [Very Eeeeesy sort] (2 point)
--   get all data of employees 'and' sorting by down-grade method
--   standard is hire_date
select * from employees
order by hire_date desc;

-- 'NULL' 이란?
-- 한줄정리) 아무것도 없는 것
-- 1. 산술연산이 안 먹음
-- 2. 데이터 값이 '0'임



