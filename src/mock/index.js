
import Mock from 'mockjs'

const data1 = Mock.mock('/api/goodlist', 'get', () => {
  return Mock.mock({ // 一旦return 本次mock结束 无法使用mock函数 需重新mock
    // status: 200,
    // message: 'success',
    // 随机生成30-50条数据
    'data|7-15': [
      {
        // eslint-disable-next-line no-undef
        id: '@increment()',
        name: '@cword(2,5)',
        price: '@float(10,30,2,9)',
        pic: '@dataImage(70x50)',
        date: '@date("yyyy-MM-dd HH:mm:ss")'
      }
    ]
  })
})

Mock.mock('/api/getContent', 'get', () => {
  return Mock.mock({
    'data|1': {
      con: '@cword(3000,4000)'
    }
  })
})
Mock.mock('/api/tableData', 'get', () => {
  return Mock.mock({
    'data|5-10': [{
      date: '@date(yyyy-MM-dd)',
      name: '@cname',
      address: '@county(true)',
      phone: "@string('0123456789',7)"
    }
    ]
  })
})

Mock.mock('/api/addgood', 'post', function (id) {
  console.log(id)
  return Mock.mock({
    status: 200,
    message: 'tianjia 成功'
  })
})

Mock.mock('/api/find', 'post', () => {
  return {
    sataus: 100,
    message: 'good job',
    data: [
      { id: 12, name: 'nihao', age: 33 },
      { id: 5, name: 'hello', age: 13 }
    ],
    total: 2
  }
})

Mock.mock('/api/1', 'post', (option) => {
  // option 是请求相关参数
  console.log(option)
  return {
    status: 101,
    message: 'nihao',
    list: data1,
    total: 2
  }
})

Mock.mock(/\/api\/get/, 'post', (option) => {
  console.log(option)

  // const re = /\/api\/getgoods\/(\d+)/.exec(option.url)

  return {
    status: 'hello',
    data2: [{
      name: 'nini',
      id: 23
      // id: re[1] - 0
    },
    {
      id: 2,
      name: 'jjj'
    }]
  }
}
)
