<template>
  <div>
    <table>
      <thead>
      <tr>
        <th v-for="item in 7" :key="item">
          星期{{ item }}
        </th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

export default {
  name: "XCalendar",
  created() {
    console.log('dayjs', dayjs.duration({month: 3}).weeks())
  },
}
</script>

<style scoped>

</style>
