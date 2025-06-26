-- CHAPTER 05. JOIN

-- RDBMS( 관계형 데이터 베이스 )

-- PK( primary key ): 기본 키, 데이터베이스에서 각 행(row) 고유하게 식별하기 위한
-- 컬럼 값이다 > 반드시 테이블에서 PK가 존재해야한다.
-- PK의 특징은 NOT NULL + UNIQUE이다.

-- FK ( FOREIGH KEY ): 외래키, 테이블과 테이블을 이어주는 역할하는 키이다.

-- [ 조인 사용 방법 ]
-- SELECT  테이블1.컬럼명,  테이블2.컬럼명 --> . 경로를 작성
-- FROM    테이블1, 테이블2 --> 해당 테이블을 조인하겠다.
-- WHERE   테이블1.컬럼명 = 테이블2.컬럼명 --> 해당 조건으로 조인하겠다 ( 조인조건 )

SELECT 
    EMPLOYEE_ID, 
    FIRST_NAME, 
    DEPARTMENT_ID
FROM
    EMPLOYEES;

SELECT * FROM DEPARTMENTS;

SELECT * FROM LOCATIONS;

SELECT * FROM COUNTRIES; 

-- 쿼리 예시: 전체 직원 목록을 직원 ID 오름차순으로 정렬
SELECT
    e.employee_id,
    e.first_name,
    d.department_name
FROM
    EMPLOYEES e,
    DEPARTMENTS d
WHERE
    e.department_id = d.department_id
ORDER BY
    e.employee_id ASC; -- GROUP BY 절 없이 바로 정렬합니다.

-- [ 조인 프로세스 ]
-- 조인할 대상 테이블 정보를 확인
-- FROM: 조인할 테이블을 컴마(,) 기준으로 작성
-- WHERE: 조인 조긴이 되는 특정 컬럼을 확인하여 조인 조건절을 작성
-- SELECT: 경로(.)를 작성하여 조회하고자 하는 컬럼 값을 작성

-- 기본 질의 쿼리
SELECT * from 수강생정보;
SELECT * from 성적표;

SELECT 성적표.과목, 수강생정보.소속반, 수강생정보.학생ID, 수강생정보.학생이름
from 수강생정보, 성적표
where 수강생정보.학생ID = 성적표.학생ID;

-- 직원ID, 이름, 직책ID, 직책TITLE 의 컬럼의 정보 순으로 출력
-- 조인할 데이터들의 정보: EMPLOYEES, JOBS

SELECT e.EMPLOYEE_ID, e.FIRST_NAME, j.JOB_TITLE
from 
    EMPLOYEES e, 
    JOBS j
where e.JOB_ID = j.JOB_ID;

-- 부서ID, 부서명, 위치ID, 도로주소, 도시

SELECT d.DEPARTMENT_ID, d.DEPARTMENT_NAME, l.STREET_ADDRESS, l.CITY 
from 
    DEPARTMENTS d,
    LOCATIONS l
where
    d.LOCATION_ID = l.LOCATION_ID;
