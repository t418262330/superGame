<template>
  <div class="my-tag" :style="styleObj">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    styleObj: {
      type: Object,
      default: () => {
        return {
          color: '#409eff'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-tag {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ecf5ff;
  display: inline-block;
  height: 16px;
  padding: 0 10px;
  font-size: 10px;
  color: #409eff;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
}
</style>
