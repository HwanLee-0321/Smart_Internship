import React from 'react'
import {useParams, useSearchParams} from 'react-router-dom'

const Product = () => {
    /*
    [useParams]
    - url 파라미터 정보를 가져올 수 있다.
    - 물품의 고유한 값을 설정/출려하는데 사용
    - useParams의 값 설정은 하나만 가능 => 해당 컴포넌트가 가지고 있는 고유한
        성질을 담을 때 사용 = > 학번, 사번, 주민번호

    [useSearchParams]
    - 라우터 사용시 QueryString 정보를 가져와서 관리하고 싶을 때
    - url 뒤에 ?속성=값&속성=값....
    - 인기글, 신규글, 카테고리화...
    */
    let {num} = useParams();
    console.log('게시물 번호',num);

    // 변수이름 고정
    // => state처럼 사용
    const [ query, setQuery ] = useSearchParams();
    console.log('인기글임?', query.get('best'));

    return (
        <div>
            {num}번째 게시물입니다.
        </div>
    )
}

export default Product