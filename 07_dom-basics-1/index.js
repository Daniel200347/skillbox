(function () {
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');
    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название новго дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';
    button.disabled = true;
    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);
    input.addEventListener('input', function (e) {
      e.preventDefault();
      if (input.value.length > 0) {
        button.disabled = false;
      } else if (input.value.length == 0) {
        button.disabled = true;
      }
    });
    return {
      form,
      input,
      button
    };
  };

  function CreateTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  };

  function createTodoItem(name) {
    let item = document.createElement('li');
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;
    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);
    return {
      item,
      doneButton,
      deleteButton,
    };
  };

  function createTodoApp(container, title = 'Список дел', arayCases = JSON.parse(localStorage.getItem('tasks')) || []) {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = CreateTodoList();
    let tasks = arayCases;
    console.log(localStorage.getItem('tasks'))
    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    function Task1(description) {
      this.name = description;
      this.done = false;
    }

    const createTemplate = (Task1, index) => {
      return
    }
    const fillHtmlList = () => {
      tasks.forEach((item, index) => {
        todoList.append(createTodoItem(item.name).item)
      })
    }
    fillHtmlList()
    const updateLocal = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    todoItemForm.form.addEventListener('submit', () => {
      tasks.push(new Task1(todoItemForm.input.value));
      updateLocal();
    })
    todoItemForm.form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!todoItemForm.input.value) {
        return;
      }
      let todoItem = createTodoItem(todoItemForm.input.value);
      todoItem.doneButton.addEventListener('click', function () {
        todoItem.item.classList.toggle('list-group-item-success');
      });
      todoItem.deleteButton.addEventListener('click', function () {
        if (confirm('are your sure?') && todoItem.item.remove) {
          todoItem.item.remove();
        }
      });
      todoList.append(todoItem.item);
      todoItemForm.input.value = '';
    })
  }

  window.createTodoApp = createTodoApp;
})();
createTodoApp(document.body, 'Список дел')
