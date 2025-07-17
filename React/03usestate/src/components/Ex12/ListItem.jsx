import React, { useContext } from 'react'
import { TodoContext } from '../../context/Ex12TodoContext'

// 부모 컴포넌트(List)로부터 item 객체를 props로 받습니다.
const ListItem = ({ item }) => {
  const { todo, setTodo } = useContext(TodoContext);

  // 할 일 완료/미완료 상태를 토글하는 함수입니다.
  const handleToggle = () => {
    const updatedTodo = todo.map(t =>
      t.key === item.key ? { ...t, completed: !t.completed } : t
    );
    setTodo(updatedTodo);
  };

  // 할 일을 삭제하는 함수입니다.
  const handleDelete = () => {
    const updatedTodo = todo.filter(t => t.key !== item.key);
    setTodo(updatedTodo);
  };

  return (
    <tr>
      <td>
        {/* 체크박스를 클릭하면 handleToggle 함수가 호출됩니다. */}
        <input type="checkbox" checked={item.completed} onChange={handleToggle} />
      </td>
      <td>
        <label>
          {/* 할 일의 완료 여부에 따라 텍스트에 취소선을 적용합니다. */}
          <span className='todo-text' style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            {item.text}
          </span>
        </label>
      </td>
      <td>
        {/* 삭제 버튼을 클릭하면 handleDelete 함수가 호출됩니다. */}
        <button onClick={handleDelete}>삭제</button>
      </td>
    </tr>
  )
}

export default ListItem