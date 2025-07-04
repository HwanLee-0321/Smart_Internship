-- 기본 테이블 뼈대 생성 
create table member(
	id varchar(50),
    pw varchar(50),
    nick varchar(50)
);

-- 전체 멤버 보기 
select * from member;

-- 예시 멤버 생성 
INSERT INTO member VALUES ('123' , '123' , '123');
INSERT INTO member VALUES ('SMHRD1' , '123' , '123'); 
INSERT INTO member VALUES ('SMHRD2' , '1234' , '1234');
INSERT INTO member VALUES ('SMHRD3' , '12345' , '12345');