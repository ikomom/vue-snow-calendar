<template>
  <table class="x-month-container" :border="1">
    <thead>
    <tr>
      <th v-for="item in langType.day" :key="item">
        {{ item }}
      </th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in monthData" :key="index">
        <td v-for="(item, itemIndex) in row" :key="itemIndex" @dragover.stop="onDragover">
          {{item.format('MM/DD')}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

import {generateMonthData} from "../../utils/date";
import {chunk} from "../../utils/common";

export default {
  name: "Month",
  inject: ['langType', 'selectedDate'],
  props: {},
  data() {
    return {
      monthData: []
    }
  },
  methods: {
    onDragover(e) {
      console.log('onDragover', e)
    }
  },
  watch: {
    selectedDate: {
      immediate: true,
      handler(val) {
        if (val) {
          this.monthData = chunk(generateMonthData(val).currentMonthData, 7)
          console.log('monthData', this.monthData, val)
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.x-month-container {
  border-collapse: collapse;
  width: 100%;
  th,td {
    padding: 10px;
  }

}
</style>
