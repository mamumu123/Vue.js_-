var STRRAGE_KEY = 'todo-vuejs';//名称
var todoStorage = {
    fetch() {
        var todos = JSON.parse(localStorage.getItem(STRRAGE_KEY) || '[]');//
        todos.forEach((todo, index) => {
            todo.id = index
        });
        todoStorage.uid = todos.length;
        return todos;
    },
    save(todos) {
        localStorage.setItem(STRRAGE_KEY, JSON.stringify(todos))
    }
}

var app = new Vue({
    el: "#todolist",
    data: {
        inputValue: '',
        items: todoStorage.fetch()
    },
    methods: {
        add() {
            this.items.push({text: this.inputValue, complated: false});
            this.inputValue = '';
        },
        removeTodo(todo) {
            this.items.splice(this.items.indexOf(todo), 1)//删除这个
        }

    },
    watch: {
        items: {
            handler(items) {
                todoStorage.save(items)
            }
        },
        deep: true
    }
})