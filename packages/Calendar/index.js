// 导入组件，组件必须声明 name
import XCalendar from './index.vue'

// 为组件提供 install 安装方法，供按需引入
XCalendar.install = function (Vue) {
  Vue.component(XCalendar.name, XCalendar)
}

// 导出组件
export default XCalendar
