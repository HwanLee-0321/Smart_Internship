-- CHAPTER 03. 오라클 함수


-- 함수란
-- 입력값(input) 을 넣어서 특정한 기능을 수행하는 프로그램

SELECT 
        first_name,
        email,
        upper(first_name) as UPPER함수사용,
        lower(email) as LOWER함수사용
FROM EMPLOYEES;

-- DUAL 테이블은 임시값 혹은 함수 결과값을 확인하는 용도로 사용하는 테스트용 테이블입니다.
SELECT 'HELLO WORLD', 1234567, length('HELLO WORLD')
FROM DUAL;

-- 직원의 fisrt_name의 길이가 6이상인 직원의 이름과 급여 정보를 조회하시오.
SELECT first_name, SALARY
from EMPLOYEES
WHERE length(FIRST_NAME) >= 6
ORDER BY length(FIRST_NAME) asc;

-- substr(): 문자열을 추출하는 함수
-- substr(입력값, 시작위치, 추출위치)

SELECT 'This is string',
        substr('this is string', 10) as SUBSRT값
from dual;

-- replace()함수: 괄호 안 문자 데이터를 다른 문자로 바꾸어주는 함수
SELECT  'This is char' as 원본문자열,
        replace('This is char', 'char', 'string') as REPLACE결과
FROM DUAL;

-- trim(): 양족의 공백을 제거해주는 함수
SELECT '              Large space                 'as 원본,
        trim('              Large space                 ') as TRIM의결과
FROM DUAL;

-- 숫자형 함수
-- ROUND: 특정 위치에서 반올림 하는 함수

-- ROUND(반올림 할 숫자, 반올림 위치)
SELECT 1234.56789 as BASENUM,
       round(1234.56789, 3) as AFTERROUND
FROM DUAL;

-- MOD: 나머지 구하는 함수
SELECT mod(100,17) as MOD_RES
FROM DUAL;

-- 날짜형 함수
-- SYSDATE: 현재 날짜와 시간을 출력해주는 함수
-- > 입력시 바로 출력이 되며 추 단위까지 출력이 가능

-- 날짜 데이터끼리는 연산 불가능
SELECT  sysdate + 1 as 다음날,
        sysdate - 1 as 어제,
        sysdate + 1/24 as 한시간더함,
        sysdate + 1/24/60 as "1분을더함"
FROM dual;

-- add_month

-- 형 변환 함수
SELECT to_number(999, '100') + 700
from dual;

SELECT TO_NUMBER('1,000', 9999) + 700
from dual;

-- to_number(): 문자데이터를 숫자 데이터로 변환하는 함수
-- to_number(문자열 데이터, 인식 될 숫자 형태)

-- 자료형 변환식 표현 형식
-- 9: 숫자의 한자리를 의미
-- 0: 빈자리를 0으로 채움
-- $: 달러표시를 붙여서 표기함
-- L: 지역 화페 단위 기호를 붙여서 출력
-- .: 소수점
-- ,: 천단위

-- to_char(): 날짜, 숫자 데이터를 문자 데이터로 변환
-- to_char(변환 데이터, 출력 형태)

SELECT first_name, SALARY,
        to_char(SALARY, 'L999,999')
from EMPLOYEES;

-- 날짜 표현 형식
-- YYYY/RRRR: 연도를 4자리로 표현
-- YY/RR: 연도를 2자리로
-- MM: 월표현
-- MON: 월 을 표현
-- MONTH: 일 이름을 전체로 표현
-- DD: 일을 2자리로
-- DAY: 요일을 전체로 표현

SELECT TO_DATE('20250625', 'YYYYMMDD')
FROM dual;

-- NULL 처리 함수
-- NVL() / NVL2(): NULL값을 대체 할 수 있는 함수
-- NVL(NULL인지 여부 검사할 데이터, NULL인 경우 반환할 데이터)
-- NVL2(NULL인지 여부 검사할 데이터, NULL이 아닐 경우 반환할 데이터, NULL일 경우 반환할 데이터)

SELECT first_name, salary, commission_pct,
        nvl(commission_pct, 0)
from    EMPLOYEES;

SELECT first_name, salary, commission_pct,
        nvl(commission_pct, 0),
        nvl2(COMMISSION_PCT, 1, 0)
from    EMPLOYEES;

-- #1) 직원테이블에서 
-- 매니저가 있으면 직원
-- 매니저가 없으면 대표
SELECT FIRST_NAME, LAST_NAME, EMPLOYEE_ID, MANAGER_ID, nvl2(MANAGER_ID, '직원', '대표')
from EMPLOYEES;
-- 

-- 조건 함수
-- DECODE(): 상황에 따라 다른 데이터를 반환하는 함수
-- > 검사대상과 비교해서 지정한 값을 변환

-- DECODE(검사대상이 될 컬럼 또는 데이터, 비교값)

SELECT EMPLOYEE_ID, FIRST_NAME, salary, MANAGER_ID, decode(MANAGER_ID, NULL, '대표', '직원'),
       decode(MANAGER_ID, 100, '대표', 101, '전무', 102, '상무', 103, '팀장', '직원')
from EMPLOYEES;