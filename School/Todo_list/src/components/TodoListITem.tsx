import React, { useContext } from 'react'
import { Todo } from '../models/Todo';
import { TodoContextType } from '../contexts/TodoContextType';
import { TodoContext } from '../contexts/TodoContext';

export interface TodoListItens{
    todo : Todo
}

const TodoListItem = (props:TodoListItens) =>{

  const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext);

    const handleChange = (event:any) =>{
        toggle(props.todo)
    }
    const onRemove = (todo:Todo)=>{
        removeTodo(todo)
    }

    return(
      <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
          <label>
              <input className="uk-checkbox"
                  type="checkbox"
                  checked={props.todo.done}
                  onChange={handleChange}
              />
          </label>
      </td>
      <td className="uk-width-expand">
          {props.todo.title}
      </td>
      <td className="uk-width-auto">
          <button
              className="uk-icon-button uk-button-danger"
              uk-icon="trash"
              onClick={() => onRemove(props.todo)}
          ></button>
      </td>
  </tr>

    )

}

export default TodoListItem;