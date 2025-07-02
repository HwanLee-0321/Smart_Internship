-- 기본 테이블 뼈대 생성 
create table member(
	id varchar(50),
    pw varchar(50),
    nick varchar(50)
);

-- 전체 멤버 보기 
select * from member;

INSERT INTO 수강생정보 VALUES ('SMHRD1' , '조준용' , 'A'); 
INSERT INTO 수강생정보 VALUES ('SMHRD2' , '박수현' , 'A'); 
INSERT INTO 수강생정보 VALUES ('SMHRD3' , '박병관' , 'B'); 
INSERT INTO 수강생정보 VALUES ('SMHRD4' , '이명훈' , 'B'); 
INSERT INTO 수강생정보 VALUES ('SMHRD5' , '나예호' , 'B'); 
INSERT INTO 수강생정보 VALUES ('SMHRD6' , '선영표' , 'C'); 