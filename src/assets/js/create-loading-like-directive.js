import { createApp } from 'vue'
import { addClass, removeClass } from './dom'
const relativeCls = 'g-relative'
export default function createLoadingLikeDirective (comp) {
  return {
    mounted(el, bingding) {
      const app = createApp(comp)
      const instance = app.mount(document.createElement('div'))
      const name = comp.name
      if (!el[name]) {
        el[name] = {}
      }
      // 将新创建的vue实例先存到el上一份，以在updated的时候使用
      el[name].instance = instance
      const title = bingding.arg
      if (typeof title !== 'undefined') {
        instance.setTitle(title)
      }
      console.table('mounted', el[name].instance.$el)
      if (bingding.value) {
        append(el)
      }
    },
    updated(el, binding) {
      console.log('updated', el)
      const title = binding.arg
      const name = comp.name
      if (typeof title !== 'undefined') {
        el[name].instance.setTitle(title)
      }
      if (binding.value !== binding.oldValue) {
        binding.value ? append(el) : remove(el)
      }
    }
  }
  function append(el) {
    const name = comp.name
    const style = getComputedStyle(el)
    if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
      addClass(el, relativeCls)
    }
    // vm.$el vm 挂载的DOM节点
    el.appendChild(el[name].instance.$el)
  }
  function remove(el) {
    const name = comp.name
    removeClass(el, relativeCls)
    el.removeChild(el[name].instance.$el)
  }
}
