import React, {useContext} from 'react';
import { TodoContext } from '../../context/Ex12TodoContext';
import ListItem from './ListItem';

const List = () => {
  // 컨텍스트 사용 => Todo라는 스테이트 변수 가져오기
  // 콘솔에 찍어보기
  const {todo} = useContext(TodoContext);
  console.log(todo);

  return (
    <div>
      <table>
        <tbody>
          
        </tbody>
      </table>
    </div>
  )
}

export default List