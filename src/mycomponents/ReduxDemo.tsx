import { createRef } from "react";
import { Component, ReactNode } from "react";
import { useRef } from "react";

import {  legacy_createStore as createStore} from 'redux';

const names=["Ramnath","Rajiv","Rohit"];

//const action ={type:"ADD_NAME",data:"Rahul"}

const reducer =(state=names,action:any)=>{

    switch(action.type){
        case "ADD_NAME":
            return [...state,action.data];
        case "DELETE_NAME":
            let names=[...state];
            names.splice(0,1);
            return names;
        default:
            return state;
    }
}

const store=createStore(reducer);



class ReduxDemo extends Component{

    constructor(props:any){
        super(props);
        //subscribe the UI update function on state state
        store.subscribe(this.updateUI);
    }
    
  
    nameRef=createRef<HTMLInputElement>();
 

    addData=(evt:any)=>{
        //var document:Document=window.document;
        evt.preventDefault();

        //take input from user textbox
        let nameRef=createRef<HTMLInputElement>();
        const name=this.nameRef.current?.value;
        
        //create action object
        const action={type:"ADD_NAME",data:name};
        console.log(action);
        //dispatch the action to reducer
        store.dispatch(action);
       
        document.getElementById("txtData")?.focus();

        console.log("state:", store.getState());
    }

    deleteData=(evt:any)=>{
        evt.preventDefault();
        console.log("deleted...");

        const action ={type:"DELETE_NAME",data:""};
        store.dispatch(action);
        
    }

    updateUI=()=>{
        let names=store.getState(); //get the data from the store

        //update the UI element
        let htmlStr="<ul>";
        names.forEach(name=>{
            htmlStr+="<li>"+name+"</li>";
        });
        htmlStr+="</ul>";


        let para = document.getElementById('namesList') as HTMLParagraphElement;
        para.innerHTML = htmlStr;     
        
    }

    render(): ReactNode {
        return(
            <div className="container">
                <p>
                    Enter data:
                    <input type="text" id="txtData" ref={this.nameRef}  />
                </p>
                <button className="btn btn-primary" onClick={this.addData}>
                    Add Data
                </button>
                <button className="btn btn-warning" onClick={this.deleteData}>
                    Delete Data
                </button>

                <p id="namesList"></p>
            </div>
        )
    }
}

export default ReduxDemo;