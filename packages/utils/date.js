import * as dayjs from "dayjs";
/**
 * 生成月份
 * @param date
 */
export const generateMonthData = (date) => {
  //返回当前月份的第一天
  const currentMonthFirstDay = dayjs(date).startOf('month')
  // 返回当月的第一周第一天
  const currentMonthStartDay = currentMonthFirstDay.startOf('week')

  return {
    currentMonthFirstDay,
    currentMonthData: new Array(42).fill('').map((_, index) => currentMonthStartDay.add(index, 'day')),
  }
}
/**
 * 生成周
 * @param date
 */
export const generateWeekData = (date) => {
  const currenWeekStartDay =  dayjs(date).startOf('week')
  const prevWeekStartDay = currenWeekStartDay.subtract(1, 'week')
  const nextWeekStartDay = currenWeekStartDay.add(1, 'week')
  return {
    currenWeekFirstDay: currenWeekStartDay,
    generateWeekDateList: [
      new Array(7).fill('').map((_, index) => prevWeekStartDay.add(index, 'day')),
      new Array(7).fill('').map((_, index) => currenWeekStartDay.add(index, 'day')),
      new Array(7).fill('').map((_, index) => nextWeekStartDay.add(index, 'day')),
    ],
  }
}
