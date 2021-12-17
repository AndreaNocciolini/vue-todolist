// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

const app = new Vue (
    {   
        el: `#app`,
        data: {
            todoNew: ``,
            todos: [
            ]
        },
        methods: {
            add: function(){
                if (this.todoNew != ``) {
                    let obj = {
                    text: this.todoNew,
                    done: false
                }
                this.todos.unshift(obj);
                this.todoNew = ``
                }
                
            },
            remove: function(index) {
                this.todos.splice(index, 1)
            },
            checked: function (index) {
                this.todos[index].done = !this.todos[index].done;
                console.log(this.todos[index].done)
            }
        },
    }
)