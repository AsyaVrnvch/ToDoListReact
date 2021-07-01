import React, {Component} from "react"
import Task from './components/task'
import TaskInput from "./components/TaskInput";

class App extends Component{
    constructor() {
        super();
        this.state={
            tasks: [
                {id:0, title: 'Сходить в магазин', done: true},
                {id:1, title: 'Постирать, погладить', done: false},
                {id:2, title: 'Выучить стих', done: false},
                {id:3, title: 'Сделать домашнее задание', done: true},
                {id:4, title: 'Убраться в доме', done: false}
            ]
        }
    }

    doneTask = id => {
        const index = this.state.tasks.map(task=>task.id).indexOf(id);
        this.setState(state=>{
            let {tasks} = state;
            tasks[index].done=true;
            return tasks;
        })
    }

    deleteTask = id =>{
        const index = this.state.tasks.map(task=>task.id).indexOf(id);
         this.setState(state=>{
             let {tasks} = state;
             delete tasks[index];
             return tasks;
         })
    }

    addTask = task => {
        this.setState(state=>{
            let {tasks} = state;
            tasks.push({
                id: tasks.length !==0 ? task.length : 0,
                title:task,
                done:false
            })
            return tasks;
        })
    }

    render() {
        const {tasks} = this.state;
        const activeTasks = tasks.filter(task=>!task.done)
        const doneTasks = tasks.filter(task=>task.done)
        return(
            <div className='App'>
                <h1 className='top'>Active tasks: {activeTasks.length}</h1>
                {[...activeTasks,...doneTasks].map(task=>
                    <Task 
                        doneTask={()=>this.doneTask(task.id)} 
                        deleteTask={()=>this.deleteTask(task.id)} 
                        changeTask={()=>this.changeTask(task.id)}
                        task={task} 
                        key={task.id}/>
                    )}
                <TaskInput addTask={this.addTask}/>
            </div>
        )
    }
}

export default App