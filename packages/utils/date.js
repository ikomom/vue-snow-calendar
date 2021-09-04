import * as dayjs from "dayjs";

/**
 * 根据日期生成月份
 * @param date
 */
export const generateMonthData = (date) => {
  //返回当前月份的第一天
  const currentMonthFirstDay = dayjs(date).startOf('month')
  // 返回当月的第一周第一天
  const currentMonthStartDay = currentMonthFirstDay.startOf('week')

  //上一个月
  const prevMonthFirstDay = currentMonthFirstDay.subtract(1, 'month')
  const prevMonthStartDay = prevMonthFirstDay.startOf('week')

  //下一个月
  const nextMonthFirstDay = currentMonthFirstDay.add(1, 'month')
  const nextMonthStartDay = nextMonthFirstDay.startOf('week')

  return {
    currentMonthFirstDay,
    prevMonthData: new Array(42).fill('').map((_, index) => prevMonthStartDay.add(index, 'day')),
    currentMonthData: new Array(42).fill('').map((_, index) => currentMonthStartDay.add(index, 'day')),
    nextMonthData: new Array(42).fill('').map((_, index) => nextMonthStartDay.add(index, 'day')),
  }
}
/**
 * 根据日期生成周数
 * @param date
 */
export const generateWeekData = (date) => {
  const currenWeekStartDay = dayjs(date).startOf('week')
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
