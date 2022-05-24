import './App.css';
import React from 'react';


class App extends React.Component
{
  constructor(){
    super();
    this.state={
      show:true,
      pos:0
    };
  }
  
  render(){
    let todo1=localStorage.getItem('key')
    const todo=todo1.split(",");

    const data=[];
    data.push(todo)

    
    const getdata=()=>{
      let val=document.getElementById("data").value;
      data.push(val);
      localStorage.setItem("key",data);
    }

    const deleteItem=(pos)=>{
      todo.splice(pos,1)
      localStorage.setItem("key",todo);
    }

    
    const updateItem=(index)=>{
      let val=todo[index];
      document.getElementById("data").value=val;
      let btn=document.getElementById("upd");
      this.state.show?btn.style.display="block":document.getElementById("upd").style.display="None";
      this.setState({pos:index});
    }
    
    const update=()=>{
      let val=document.getElementById("data").value;
      todo.splice(this.state.pos,1,val);
      localStorage.setItem("key",todo);
    }
    const itemList=[];
    todo.map((item,index)=>{
      itemList.push(<><div className='itembox'> <p key={index} className='item'>{item}</p> 
      <button className='btn' onClick={()=>updateItem(index)}>&#9998;</button>
      <button className='btn' onClick={()=>deleteItem(index)}>&#10060;</button> </div> </>)})

    return (
      <div className="App">
      <div>
            <h1><u>TodoList</u></h1>
            <input type={"text"} id="data"></input>
            <button id="upd" style={{display:'None'}} classNa='btn' onClick={update}>&#9998;</button>
            <button onClick={()=>getdata()} className='btn'>+</button>
            {data.length?itemList:null}
        </div>
      </div>
    );
  }
}

export default App;
