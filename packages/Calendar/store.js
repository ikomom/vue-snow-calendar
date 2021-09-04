import Vue from 'vue';
import * as dayjs from "dayjs";

export const state = Vue.observable({
  dataSource: [],
  selectedDate: dayjs(),
  lang: 'zh-cn',
})

const store = {
  state,
  dispatch: function (method, ...args) {
    return this.methods[method].apply(this, [...args])
  },
  methods: {

  }
}

export default store
