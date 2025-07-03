// 1. Get elements
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// 2. Event listeners
addBtn.addEventListener('click', addItem);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addItem();
});

// 3. Add task function
function addItem() {
  const text = input.value.trim();
  if (!text) {
    alert('Please enter a to-do item!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = text;

  // ✅ Check/Uncheck button
  const checkBtn = document.createElement('button');
  checkBtn.textContent = '✔';
  checkBtn.classList.add('check');
  checkBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // ❌ Delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = '✖';
  delBtn.classList.add('delete');
  delBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(checkBtn);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = '';
  input.focus();
}
