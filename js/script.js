// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

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