const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
let todos = JSON.parse(localStorage.getItem('todos')) || [];
const renderTodos = () => {
  todoList.innerHTML = ''; 
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Xóa';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => {
      deleteTodo(index);
    };
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
};
const addTodo = (event) => {
  event.preventDefault();
  const newTodo = todoInput.value.trim();
  if (newTodo) {
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos)); 
    renderTodos(); 
    todoInput.value = ''; 
  }
};
const deleteTodo = (index) => {
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos)); 
  renderTodos(); 
};
todoForm.addEventListener('submit', addTodo);
renderTodos();