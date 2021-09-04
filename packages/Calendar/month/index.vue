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
      <tr v-for="(row, index) in monthData" :key="index" style="position: relative">
        <td v-for="(item, itemIndex) in row" :key="itemIndex" @dragover.stop="onDragover">
          <month-cell :date="item"/>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

import {generateMonthData} from "../../utils/date";
import {chunk} from "../../utils/common";
import MonthCell from "./MonthCell";

export default {
  name: "Month",
  components: {MonthCell},
  inject: ['langType'],
  props: {
    selectedDate: {
      type: Object,
      default: () => new Date(),
    }
  },
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
    padding: 0px;
  }

}
</style>
