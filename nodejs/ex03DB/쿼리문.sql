-- 기본 테이블 뼈대 생성 
create table member(
	id varchar(50),
    pw varchar(50),
    nick varchar(50)
);

-- 전체 멤버 보기 
select * from member;