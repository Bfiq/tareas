import './App.css';
import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoItem} from './TodoItem';
import {TodoList} from './TodoList';
import {TodoHome} from './TodoHome';

const todos = [
  {id: 1, text: "hacer prueba de desarrollo 1", completed: false},
  {id: 2, text: "hacer prueba de desarrollo 2", completed: false},
  {id: 3, text: "hacer prueba de desarrollo 3 estratocopuslusnicopus xd, mucho texto en este ejemplo", completed: false}
];

function App() {
  return (
    {/*Creación de los componentes que tendra el listador de tareas */},
    <React.Fragment>
      <div className='columns-blocks'>
        <div className='block-1'>
          <TodoHome/>
        </div>
        <div className='block-2'>
          <TodoCounter/>
          <TodoSearch/>
          <TodoList>
            {todos.map(todo => (
              <TodoItem key={/*id*/todo.id} text={todo.text}/>
            ))}
          </TodoList>
          <CreateTodoButton/>
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default App;
