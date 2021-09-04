<template>
  <div class="x-month-cell">
    <div class="background"></div>
    <div class="header">
      {{date.format('MM/DD')}}
    </div>
    <div class="event" draggable>
      <div class="event-bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonthCell",
  props: {
    date: {
      type: Object,
      default: () => new Date()
    }
  }
}
</script>

<style scoped lang="less">
.x-month-cell {
  position: relative;

  .header {
    text-align: right;
    font-size: 12px;
  }

  .event {

  }

  .event-bar {
    height: 20px;
    background-color: red;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: lightseagreen;
    opacity: 0.5;
    pointer-events: none;
    z-index: -1;
  }
}
</style>
