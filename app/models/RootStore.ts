import {types} from 'mobx-state-tree';

const Todo = types.model({
  name: '',
  done: false,
});

const User = types.model({
  name: '',
});

const john = User.create();
const eat = Todo.create();

module.exports = {
  john,
  eat,
};
