import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import Veevalidate from '@/components/practices/veevalidate'
import Echart from '@/components/practices/echarts'

// vue.extend()是
describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})

describe('veevalidate.vue', () => {
  it('应该能正确传递数据', () => {
    const Constructor = Vue.extend(Veevalidate)
    const vm = new Constructor().$mount()
    expect(vm.$data.msg)
      .to.equal('hello vee-validate!')
  })
})

describe('echarts.vue', () => {
  it('应该能正确收到数据', () => {
    const Constructor = Vue.extend(Echart)
    const vm = new Constructor().$mount()
    expect(vm.$data.option.title.text)
      .to.equal('ECharts 入门示例')
  })
})
