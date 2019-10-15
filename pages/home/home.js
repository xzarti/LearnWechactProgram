// pages/home/home.js
Page({
  data:{
    name: 'code',
    age:18,
    students:[
      
      {id:1001,name:'aaa',classname:'rj2'},
      {id: 1002, name: 'aaab', classname: 'rj2'},
      {id: 1003, name: 'aaav', classname: 'rj2'},
      {id: 1004, name: 'aaaf', classname: 'rj2'}
      
    ],
    counter:0
  },
  dianji(){
    // this.data.counter +=1

    // this.setData()刷新函数
    
    this.setData({
      counter:this.data.counter +1
    })
  },
  jianshao(){
    this.setData({
      counter:this.data.counter -1
    })
  }
})