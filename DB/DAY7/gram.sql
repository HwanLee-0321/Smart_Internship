-- CH00. SQL문법

-- create       : 테이블 만들기
-- alter        : 객체 변경
-- drop         : 객체 삭제
-- truncate     : 객체 영구 삭제
-- rename       : 객체 이름 변경


-- 테이블 정보 확인하는 방법
-- 1. desc
-- 2. 해당 테이블을 마우스로 드래그 후 shift + f4
desc EMPLOYEES;

DROP TABLE 수강생정보;

drop TABLE 수강생정보 cascade constraints;

drop table 성적표;

-- 수강생정보를 생성하는 쿼리
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

select * from 수강생정보;

-- 제약조건(constraint)이란
-- 테이블에 입력 가능한 데이터를 조건으로 제약하는 것

-- [ 제약조건 구문 ]
-- primary key(pk)  : 기본키
-- unique key       : 고유키    
-- not null         : 널이 아님
-- check            : true or false로 판단하는 논리식
-- forign key       : 외래키, 테이블을 연결하는 키

-- [ 데이터 조작어 ]
-- select : 데이터 조회 
-- insert : 데이터 추가
-- update : 데이터 수정
-- delete : 데이터 삭제

INSERT INTO 수강생정보 VALUES ('SMHRD1' , '조준용' , 'A'); 
INSERT INTO 수강생정보 VALUES ('SMHRD2' , '박수현' , 'A'); 
INSERT INTO 수강생정보 VALUES ('SMHRD3' , '박병관' , 'B'); 
INSERT INTO 수강생정보 VALUES ('SMHRD4' , '이명훈' , 'B'); 
INSERT INTO 수강생정보 VALUES ('SMHRD5' , '나예호' , 'B'); 
INSERT INTO 수강생정보 VALUES ('SMHRD6' , '선영표' , 'C'); 
INSERT INTO 수강생정보 VALUES ('SMHRD7' , '최영화' , 'C'); 
INSERT INTO 수강생정보 VALUES ('SMHRD8' , '송찬호' , 'C'); 
INSERT INTO 수강생정보 VALUES ('SMHRD9' , '임승환' , 'C'); 

INSERT INTO 성적표  VALUES ('SMHRD1'  ,'JAVA'     , 90  ); 
INSERT INTO 성적표  VALUES ('SMHRD1'  ,'DATABASE' , 85  ); 
INSERT INTO 성적표  VALUES ('SMHRD1'  ,'PYTHON'   , 100 ); 
INSERT INTO 성적표  VALUES ('SMHRD2'  ,'JAVA'     , 100 ); 
INSERT INTO 성적표  VALUES ('SMHRD2'  ,'DATABASE' , 100 ); 
INSERT INTO 성적표  VALUES ('SMHRD2'  ,'PYTHON'   , 20  ); 
INSERT INTO 성적표  VALUES ('SMHRD3'  ,'JAVA'     , 100 ); 
INSERT INTO 성적표  VALUES ('SMHRD3'  ,'DATABASE' , 100 ); 
INSERT INTO 성적표  VALUES ('SMHRD3'  ,'PYTHON'   , 20  ); 
INSERT INTO 성적표  VALUES ('SMHRD4'  ,'JAVA'     , 85  ); 
INSERT INTO 성적표  VALUES ('SMHRD4'  ,'DATABASE' , 40  ); 
INSERT INTO 성적표  VALUES ('SMHRD4'  ,'PYTHON'   , 60  ); 
INSERT INTO 성적표  VALUES ('SMHRD5'  ,'JAVA'     , 100 ); 
INSERT INTO 성적표  VALUES ('SMHRD5'  ,'DATABASE' , 100 ); 
INSERT INTO 성적표  VALUES ('SMHRD5'  ,'PYTHON'   , 100 ); 
INSERT INTO 성적표  VALUES ('SMHRD6'  ,'JAVA'     , NULL); 
INSERT INTO 성적표  VALUES ('SMHRD6'  ,'DATABASE' , NULL); 
INSERT INTO 성적표  VALUES ('SMHRD6'  ,'PYTHON'   , NULL); 