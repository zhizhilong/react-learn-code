import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    // 获取用户的输入 （连续解构赋值 + 重命名）
    const { keyWordElement: {value:keyword} } = this
    //发送请求前 通知App 更新状态
    this.props.updateAppStatus({isFirst:false,isLoading:true})
    // 发送网络请求
    axios.get(`/api1/search/users1?q=${keyword}`).then(
      response => {
        // 请求成功后通知App更新状态
        this.props.updateAppStatus({isLoading: false,users:response.data.items})
      },
      error => {
        // 请求失败后 通知App 更新状态
        this.props.updateAppStatus({isLoading: false,err:error.message})
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/> &nbsp; 
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
