import React, {useContext} from 'react';
// TodoContext와 ListItem 컴포넌트를 임포트합니다.
import { TodoContext } from '../../context/Ex12TodoContext';
import ListItem from './ListItem';

const List = () => {
  // useContext 훅을 사용하여 TodoContext로부터 todo 배열을 가져옵니다.
  const {todo} = useContext(TodoContext);

  return (
    <div>
      <table>
        <tbody>
          {/* 
            todo 배열을 map 함수로 순회하면서 각 할 일(item)에 대해 ListItem 컴포넌트를 생성합니다.
            key와 item prop을 전달합니다.
          */}
          {todo.map((item) => (
            <ListItem key={item.key} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List