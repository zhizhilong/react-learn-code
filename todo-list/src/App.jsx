import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
import axios from 'axios'

export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  // 初始化状态
  state = {
    todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'20220918地震了快跑',done:false}
    ]
  }

  // addTodo 用于添加一个todo,接收的参数是todo对象
  addTodo = (todoObj) => {
    // 获取原todos
    const {todos}  = this.state
    // 追加一个todo
    const newTodos = [todoObj,...todos]
    // 更新状态
    this.setState({todos:newTodos})
  }

  // updateTodo 用于更新一个todo对象
  updateTodo = (id,done) => {
    const {todos} = this.state
    console.log(id,done);
    const newTodos = todos.map((todoObj) => {
      console.log(todoObj);
      if (todoObj.id === id) {
        return {...todoObj,done}
      }
    })
    this.setState({todos:newTodos})
  }

  // deleteTodo用于删除一个todo对象
  deleteTod = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }

  // checkAllTodo 用于全选
  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      return {...todoObj,done}
    })
    this.setState({todos:newTodos})
  }

  // clearAllDone 用于清除所有已完成的
  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }

  getStudentDta = () => {
    axios.get('http://localhost:3000/api1/students').then(
      res => {console.log(res);}
    )
  }
  getCarDta = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      res => {console.log(res);}
    )
  }


  render() {
    const {todos} = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTod={this.deleteTod} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
        <button onClick={this.getStudentDta}>获取学生数据</button>
        <button onClick={this.getCarDta}>获取汽车数据</button>
      </div>
    )
  }
}
