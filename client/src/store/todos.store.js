import {FILTER_TYPES} from './../config/constants';

class TodosStore {
  todos = [];
  filterType = FILTER_TYPES.ALL;
  setFilterType = value => {
    this.filterType = value;
  };
  getFilteredTodos = () => {
    return this.todos.filter(item =>
      this.filterType === FILTER_TYPES.COMPLETED
        ? item.done
        : this.filterType === FILTER_TYPES.NOT_COMPLETED
        ? !item.done
        : item,
    );
  };
  setTodos = list => {
    this.todos = list;
  };
  addTodo = item => {
    this.todos = [...this.todos, item];
  };
  updateTodo = item => {
    this.todos = this.todos.map(elem => (elem._id === item._id ? item : elem));
  };
  deleteTodo = id => {
    this.todos = this.todos.filter(elem => elem._id !== id);
  };
}

const todosStore = new TodosStore();

export default todosStore;
