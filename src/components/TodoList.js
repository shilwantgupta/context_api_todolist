import React,{useContext,useState} from 'react'
import {ListConsumer} from './Context';


export default function TodoList() {
const [todolist,setTodoList] = useContext(ListConsumer);
const [newtodolist,newTotoList] = useState({title:'',description:''});
const onHandleChange = (e) =>{
    newTotoList({...newtodolist,[e.target.name]:e.target.value});
}

const addTask = () =>{
    const list = {id:todolist.length+1,...newtodolist};
    setTodoList({type:'ADD_TASK',payload:list});
}

const deleteItem = (id)=>{
    setTodoList({type:'DELETE_TASK',payload:id});
}
    return (
        <div>
            <div className="row">
                <div className="col-md-6 card text-left p-4">
                    <div className="form-group">
                        <input type="text" name="title" placeholder="Title" className="form-control" value={newtodolist.title} onChange={onHandleChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" placeholder="Description" className="form-control" value={newtodolist.description} onChange={onHandleChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={addTask}>Add Task</button>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { todolist.map((data,index)=>(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.description}</td>
                                    <th><button onClick={()=>deleteItem(data.id)}>Delete</button></th>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
