import React , {useContext} from 'react';
import TodoListItem from './TodoListITem';
import { TodoContextType } from '../contexts/TodoContextType';
import { TodoContext } from '../contexts/TodoContext';

const TodoList = () =>{

  const { todos } = useContext<TodoContextType>(TodoContext);


  return(
    <table className="uk-table">
        <caption>Lista de Tarefas</caption>
        <thead>
            <tr>
              <th>#</th>
              <th>Tarefa</th>
              <th>Done</th>
            </tr>
        </thead>
        <tbody>
         {
           todos?.map(
             todo =>(
              <TodoListItem todo={todo} key={todo.id}/>
             )
           )
         }
        </tbody>
    </table>
  )

};

export default TodoList;