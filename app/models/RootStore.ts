import {types, getSnapshot} from 'mobx-state-tree';

const Todo = types.model({
  name: '',
  done: false,
});

const User = types.model({
  name: '',
});

const john = User.create();
const eat = Todo.create();

console.log('John:', getSnapshot(john));
console.log('Eat TODO:', getSnapshot(eat));
