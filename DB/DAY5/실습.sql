/*
아래 주석들은 테이블 초기화 코드이다.
*/

DROP TABLE 학생인적사항 ;
DROP TABLE 수강생정보 ; 
DROP TABLE 성적표 ; 

CREATE TABLE 수강생정보 (
학생ID   VARCHAR2(9) PRIMARY KEY , 
학생이름  VARCHAR2(50) NOT NULL , 
소속반    VARCHAR2(5) 
); 

CREATE TABLE 성적표 ( 
    학생ID VARCHAR2(9) , 
    과목   VARCHAR2(30) , 
    성적   NUMBER  , 
    CONSTRAINT PK_성적표 PRIMARY KEY(학생ID , 과목) , 
    CONSTRAINT FK_성적표 FOREIGN KEY(학생ID) REFERENCES 수강생정보(학생ID) 
)  ; 

INSERT INTO 수강생정보 VALUES ('SMHRD1' , '조준용' , 'A') ; 
INSERT INTO 수강생정보 VALUES ('SMHRD2' , '박수현' , 'A') ; 
INSERT INTO 수강생정보 VALUES ('SMHRD3' , '박병관' , 'B') ; 
INSERT INTO 수강생정보 VALUES ('SMHRD4' , '이명훈' , 'B') ; 
INSERT INTO 수강생정보 VALUES ('SMHRD5' , '나예호' , 'B') ; 
INSERT INTO 수강생정보 VALUES ('SMHRD6' , '선영표' , 'C') ; 
INSERT INTO 수강생정보 VALUES ('SMHRD7' , '최영화' , 'C') ; 
INSERT INTO 수강생정보 VALUES ('SMHRD8' , '송찬호' , 'C') ; 
INSERT INTO 수강생정보 VALUES ('SMHRD9' , '임승환' , 'C') ; 

INSERT INTO 성적표 VALUES('SMHRD1'  ,'JAVA'     , 90); 
INSERT INTO 성적표 VALUES('SMHRD1'  ,'DATABASE' , 85); 
INSERT INTO 성적표 VALUES('SMHRD1'  ,'PYTHON'   , 100); 
INSERT INTO 성적표 VALUES('SMHRD2'  ,'JAVA'     , 100); 
INSERT INTO 성적표 VALUES('SMHRD2'  ,'DATABASE' , 100); 
INSERT INTO 성적표 VALUES('SMHRD2'  ,'PYTHON'   , 20); 
INSERT INTO 성적표 VALUES('SMHRD3'  ,'JAVA'     , 100); 
INSERT INTO 성적표 VALUES('SMHRD3'  ,'DATABASE' , 100); 
INSERT INTO 성적표 VALUES('SMHRD3'  ,'PYTHON'   , 20); 
INSERT INTO 성적표 VALUES('SMHRD4'  ,'JAVA'     , 85); 
INSERT INTO 성적표 VALUES('SMHRD4'  ,'DATABASE' , 40); 
INSERT INTO 성적표 VALUES('SMHRD4'  ,'PYTHON'   , 60); 
INSERT INTO 성적표 VALUES('SMHRD5'  ,'JAVA'     , 100); 
INSERT INTO 성적표 VALUES('SMHRD5'  ,'DATABASE' , 100); 
INSERT INTO 성적표 VALUES('SMHRD5'  ,'PYTHON'   , 100); 
INSERT INTO 성적표 VALUES('SMHRD6'  ,'JAVA'     , NULL); 
INSERT INTO 성적표 VALUES('SMHRD6'  ,'DATABASE' , NULL); 
INSERT INTO 성적표 VALUES('SMHRD6'  ,'PYTHON'   , NULL); 

COMMIT;

SELECT *
from "수강생정보";

SELECT *
from "성적표";

-- group by 절이란
-- 특정 컬럼을 기준으로 그룹화(묶음)

-- SQL 작성 순서
-- SELECT > FROM > WHERE > GROUP BY > HAVING > ORDER BY

-- ★★★ SQL 실행 순서 ★★★
-- FROM > WHERE > GROUP BY > HAVING > SELECT > ORDER BY

SELECT 소속반, count(학생ID)
from 수강생정보
GROUP by 소속반;

-- 성적표 테이블에서 최대 최저 성적 출력
SELECT 과목, min(성적), max(성적)
from 성적표
group by 과목;

-- 직원테이블에서 부서별 직원 급여 총 합계
SELECT department_id, sum(salary)
from EMPLOYEES
GROUP by DEPARTMENT_ID
order by sum(salary) desc;

SELECT job_id, count(JOB_id), avg(salary)
from EMPLOYEES
GROUP by job_id;

-- #4) 성적표에서 학생별로 과목의 총점 
SELECT 학생ID,sum(성적)
FROM 성적표
WHERE 학생ID != 'SMHRD6' AND
      과목   != 'PYTHON'
GROUP BY 학생ID;