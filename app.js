const app = Vue.createApp({
    data() {
        return {
            tasks:[],
            enteredTaskValue:'',
            taskListIsVisible:true,
        }
    },
    computed:{
        listWatcher(){
           return this.taskListIsVisible ? 'Hide list' : 'Show List';
        },
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredTaskValue)
        },
        toggleTaskList(){
            this.taskListIsVisible = !this.taskListIsVisible;
        }
    },
})

app.mount('#assignment')