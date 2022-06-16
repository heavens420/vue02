<template>
  <!--  echarts宽高默认为0 必须设置宽高-->
  <div id="main" ref="mychart"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'MyEcharts',
  mounted () {
    // 初始化echarts
    const myecharts = echarts.init(this.$refs.mychart)

    // 设置参数
    myecharts.setOption({
      title: {
        // echarts标题
        text: 'FirstEcharts',
        // 设置标题为超链接
        link: 'https://www.bilibili.com/video/BV14u411D7qK?p=6&spm_id_from=pageDriver',
        // 设置当前页打开
        target: 'self',
        // 设置标题背景
        backgroundColor: 'bluetooth',
        // 设置边框颜色
        borderColor: 'green',
        // 设置边框粗细
        borderWidth: '1px',
        // 设置标题位置
        x: 'center',
        // 设置主标题样式
        textStyle: {
          color: 'yellow',
          fontSize: '10'
        },
        // 设置副标题
        subtext: '副标题',
        // 设置副标题超链接
        sublink: 'https://space.bilibili.com/103967695/favlist?fid=301722795&ftype=create',
        // 设置副标题样式
        subtextStyle: {
          color: 'orange',
          fontSize: '8'
        }
      },
      // 提示信息
      tooltip: {
        // 图形触发 放到图上触发
        // trigger: 'item'
        // 坐标触发 放到图形附近也能触发
        trigger: 'axis',
        // 坐标轴 指示器
        axisPointer: {
          // 十字准星效果
          type: 'cross'
          // 阴影效果
          // type: 'shadow'
        },
        // 是否显示悬浮框 默认true
        // showContent: false,
        // 悬浮框样式
        backgroundColor: 'green',
        borderColor: 'red',
        borderWidth: 5,
        textStyle: {
          color: 'orange'
        },
        // 自定义提示信息
        formatter (params) {
          console.log('params==>' + JSON.stringify(params))
          for (let i = 0; i < params.length; i++) {
            return '自定义信息' + params[i].name + '成绩：' + params[i].data
          }
        }
      },
      legend: {
        // 开启图例 默认开启
        show: true,
        // 设置图例形状 默认长方形
        icon: 'circle',
        // 设置图例位置
        top: '1%',
        left: '10%',
        itemwidth: 100,
        itemheight: 200
      },
      xAxis: {
        // X轴数据
        data: ['Math', 'English', 'Chinese', 'Other'],
        // 类目轴 放在yAxis里面 类名就放在y轴
        type: 'category'
      },
      yAxis: {
        // Y轴数据
        // 数据轴 默认y轴是数据轴
        type: 'value'
      },
      // 系列
      series: {
        // 系列名称
        name: '各科成绩',
        // 修改柱状图颜色
        color: 'green',
        // 柱状图宽度
        barWidth: 20,
        // 柱状图
        type: 'bar',
        // Y轴数据
        data: [90, 83, 65, 77],
        // 设置最大最小值
        markPoint: {
          data: [
            {
              type: 'max',
              name: '这是最大值'
            },
            {
              type: 'min',
              name: '这是最小值'
            }
          ]
        },
        markLine: {
          data: [
            {
              type: 'average',
              name: '这是平均值'
            }
          ]
        }
      }
    })
  }
}
</script>

<style scoped>
#main {
  width: 500px;
  height: 400px;
  border: 1px solid black;
}
</style>
