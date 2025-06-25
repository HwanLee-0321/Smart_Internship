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
