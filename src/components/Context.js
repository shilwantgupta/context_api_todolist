import React,{createContext,useState,useReducer} from 'react'

export const ListConsumer = createContext();
export  function ListProvider(props) {
    const reducer =(todolist,action)=>{
        switch(action.type){
            case 'ADD_TASK':
                return [...todolist,action.payload];
            case 'DELETE_TASK':
                return todolist.filter((d,i)=>{return d.id!=action.payload});
            default:
                return todolist;
        }
    }
    const initialValue = [
        {
            id:1,
            title:'Demo',
            description:'This is short description of demo'
        }
    ];
    const [todolist,setTodoList] = useReducer(reducer,initialValue);


    return (
        <div>
            <ListConsumer.Provider value={[todolist,setTodoList]}>
                {props.children}
            </ListConsumer.Provider>
        </div>
    )
}
