<template>
  <div class="container">
    <div class="echarts-container" id="echart" ref="echart">
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'Echart',
    data () {
      return {
        option: {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    },
    mounted () {
      this.initChart()
    },
    methods: {
      initChart () {
        let dom = this.$refs.echart
        this.myChart = echarts.init(dom)
        this.myChart.setOption(this.option)
      }
    }
  }
</script>

<style scoped>
  .echarts-container {
    width: 600px;
    height: 400px;
  }
</style>