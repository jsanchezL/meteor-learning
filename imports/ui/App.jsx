import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Task } from './Task.jsx';

const tasks = [
  {_id:1, text:'T1'},
  {_id:2, text:'T2'},
  {_id:3, text:'T3'},
  {_id:4, text:'T4'}
]

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <ul>
      { tasks.map(task => <Task key={task.key} task={task} />) }
    </ul>
    <Hello/>
    <Info/>
  </div>
);
