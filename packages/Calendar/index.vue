<template>
  <div>
    <div style="margin-bottom: 20px">
      <select v-model="year">
        <template v-for="item in (year + 10)">
          <option v-if="item > 2000" :value="item" :key="item">{{ item }} 年</option>
        </template>
      </select>
      <select v-model="month">
        <option v-for="item in 12" :value="item" :key="item">{{ item }} 月</option>
      </select>
      <select v-model="day">
        <option v-for="item in monthDayCount" :value="item" :key="item">{{ item }} 日</option>
      </select>
      (max: {{monthDayCount}})
      {{month}}-{{day}}
      {{selectedDate.format('YYYY / MM / DD')}}
    </div>
    <month :selectedDate="selectedDate"/>
  </div>
</template>

<script>
import * as dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
dayjs.extend(duration)

import Month from "./month";

export default {
  name: "XCalendar",
  components: {Month},
  props: {
    mode: {
      type: String,
      default: 'month'
    },
    lang: {
      type: String,
      default: 'zh-cn',
    },
    initDate: {// YYYY-MM
      type: [String, Date],
      default: () => new Date(),
    }
  },
  data() {
    return {
      year: this.initDate.getFullYear(),
      month: this.initDate.getMonth() + 1,
      day: this.initDate.getDate(),
    }
  },
  provide() {
    return {
      langType: this.langType,
      // selectedDate: this.selectedDate.format('YYYY-MM-DD'),
    }
  },
  computed: {
    langType() {
      return require(`./lang/${this.lang}`).default
    },
    monthDayCount() {
      return dayjs().month(this.month - 1).daysInMonth()
    },
    selectedDate() {
      return dayjs().year(this.year).month(this.month - 1).date(this.day)
    }
  },
  watch: {
    month() {
      if (this.monthDayCount < this.day) {
        this.day = this.monthDayCount
      }
    }
  },
}
</script>

<style scoped>

</style>
