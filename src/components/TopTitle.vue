<template>
    <div class="top">{{title}}</div>
</template>

<script>
export default {
  name: 'TopTitle',
  props: ['title']
}
</script>

<style lang="scss" scoped>
.top{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: .44rem;
    background: #FFF;
    line-height: .44rem;
    text-align: center;
    font-size: .16rem;
    color: #333333;
}
</style>
