<template>
  <div class="about">
    <h3>It is aim to try out flex and sticky -- windows height:{{ windowsHeight }}px</h3>
    <div class="one" :style="heightStyle">
      <span style="height: 140px;"><p style="font-size: 35px;">Span1</p></span>
      <span style="height: 100px;order: 3"><p>Span2</p></span>
      <span style="height: 110px;order: 2"><p>Span3</p></span>
      <span style="height: 80px;align-self: flex-start"><p>Span4</p></span>
      <span style="height: 160px;flex-basis: 250px"><p>Span5</p></span>
      <span style="height: 150px;"><p>Span6</p></span>
      <span style="height: 120px;"><p>Span7</p></span>
    </div>

    <div class="two"  :style="heightStyle">
      <span style="width: 100px;height: 100px;background: #42b983">Left</span>
      <span style="flex: 1;background: green;height: 100px;">Middle</span>
      <span style="width: 100px;height: 100px;background: burlywood">Right</span>
    </div>

    <div class="pic" :style="heightStyle">
      <img src="https://w.wallhaven.cc/full/x1/wallhaven-x1wroo.jpg" :style="heightStyle" style="align-self: center">
    </div>

    <div class="pic"   :style="heightStyle">
      <img src="https://w.wallhaven.cc/full/lm/wallhaven-lmxmxy.png"  :style="heightStyle">
    </div>

    <div class="pic"  :style="heightStyle">
<!--      <img src="https://w.wallhaven.cc/full/96/wallhaven-96yzg8.png"  :style="heightStyle">-->
      <img src="https://w.wallhaven.cc/full/x1/wallhaven-x1wroo.jpg"  :style="heightStyle">
    </div>

    <div class="pic"  :style="heightStyle">
      <img src="https://w.wallhaven.cc/full/96/wallhaven-96w8e8.png"  :style="heightStyle">
    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      windowsHeight: document.documentElement.clientHeight,
      heightStyle: {
        height: document.documentElement.clientHeight + 'px'
        // width: 1200 + 'px'
      }
    }
  },
  created () {
  },
  watch: {
    windowsHeight (newVal, oldVal) {
      // this.windowsHeight = document.documentElement.clientHeight
      console.log(newVal)
      console.log(oldVal)
      console.log(this.windowsHeight)
    }
  }
}
</script>

<style scoped>

.about {
  /*margin: auto;*/
  /*display: flex;*/
  /*justify-content: center;*/
  /*justify-content: space-between;*/
}
.one {
  /*width: 1200px;*/
  /*height: 790px;*/
  border: black solid 1px;
  display: flex;
  position: sticky;
  top: 0;
  margin: auto;
  background: aliceblue url("https://w.wallhaven.cc/full/ox/wallhaven-oxv6gl.png") no-repeat fixed center center;

  /*设置主轴方向 默认x轴 即row，从左往右排列*/
  /*flex-direction: row;*/
  /*翻转主轴方向 即从右往左排列*/
  /*flex-direction: row-reverse;*/
  /*设置主轴为y轴*/
  /*flex-direction: column;*/

  /*设置主轴上子元素排列方式 */
  /*justify-content: flex-start | flex-end | center | space-between | space-around;*/
  /*所有子元素居中对齐*/
  justify-content: center;
  /*所有子元素靠右对齐（默认主轴x轴，从左到右）*/
  /*justify-content: flex-end;*/
  /*所有子元素靠对左齐（默认主轴x轴，从左到右）*/
  /*justify-content: flex-start;*/
  /*子元素均分主轴空间*/
  /*justify-content: space-around;*/
  /*左右元素贴边 剩下的元素平均分配主轴空间*/
  /*justify-content: space-between;*/
  /*子元素不给高度时 自动设置子元素高度等于父元素高度*/
  /*justify-content: stretch;*/

  /*设置子元素是否换行 默认 nowrap不换行 可选wrap换行*/
  /*不换行时，若子元素超出父元素容纳范围时 子元素自动缩小尺寸以保证素有子元素仍在父元素中*/
  flex-wrap: wrap;

  /*设置侧轴子元素排列方式(主轴有多行情况), 可选参数同justify-content*/
  /*align-content: flex-start | flex-end | center | space-between | space-around | stretch;*/
  /*侧轴子元素居中*/
  align-content: center;

  /*设置侧轴子元素排列方式(主轴为单行情况)，可选参数为上部分，毕竟是单行情况 有些参数无存在必要*/
  /*align-items: flex-start | flex-end | center | baseline | stretch;*/
  /*侧轴子元素靠右对齐*/
  /*align-items: flex-end;*/
  /*子元素基线对齐*/
  align-items: baseline;
  /*flex-direction 和 flex-wrap 的结合体;*/
  /*flex-flow: row nowrap;*/
}

.one span {
  border: 1px olivedrab solid;
  /*width: 200px;*/
  display: flex;
  /*align-items: center;*/
  /*justify-content: center;*/
  /*子元素上的属性*/
  /*子元素排列顺序 数值越小越靠前 可为负值 默认0*/
  order: 0;
  /*子元素放大比例，默认0，数值越大占主元素比例越大，即放大比例越大*/
  flex-grow: 0;
  /*子元素缩放比例，默认为1，数值越大，缩放比例越大*/
  flex-shrink: 1;
  /*自定义子元素大小，默认值auto*/
  /*flex-basis: 200px 300px;*/
  /*个性化子元素样式设置,auto为继承主元素样式，其它可覆盖主元素样式*/
  /*align-self: auto | flex-start | flex-end | center | baseline | stretch;*/
  /*align-self: flex-start;*/
  /*flex 是 flex-grow flex-shrink flex-basis 的简写默认值为 0 1 auto*/
  flex: 0 1 auto;
}

.one span p {
  font-size: 25px;
  color: aqua;
}

.two {
  display: flex;
  position: sticky;
  top: -100px;
  /*width: 1200px;*/
  /*height: 870px;*/
  border: 1px black solid;
  margin: auto;
  background: url("https://w.wallhaven.cc/full/73/wallhaven-73lgx3.png") no-repeat fixed;
  background-size: auto;
  /*background: cornflowerblue;*/
}

.pic {
  background: white;
  justify-content: center;
  display: flex;
  position: sticky;
  top: 0;
  /*width: 1600px;*/
  /*height: this.windowHeight px;*/
  /*height: 937px;*/
  border: 1px black solid;
  /*margin: auto;*/
}

</style>
