# Vue 规范

## Vue Component 结构
```vue
<template>
  <div class="component"></div>
</template>

<script >
  export default {
    name: 'componentName',
    // components
    components: {},
    // Mixin
    mixins: [],
    data () {
      return {
        msg: 'hello world'
      }
    },
    // props
    props: {},
    // 计算属性
    computed: {},
    // watch
    watch: {},
    // 方法
    methods: {},
    // 组件生命周期 ================================================
    beforeCreate () {},
    created () {},
    beforeMount () {},
    mounted () {},
    beforeUpdate () {},
    updated () {},
    beforeDestroy () {},
    destroyed () {},
    activated () {},
    deactivated () {},
    // 组件生命周期 ================================================
    
    // 路由钩子 ====================================================
    beforeRouteEnter () {},
    beforeRouteUpdate () {},
    beforeRouteLeave () {},
    // 路由钩子 ====================================================
  }
</script>

<style>
  .component {}
</style>
```

## Vue官方指南参考
[风格指南](https://cn.vuejs.org/v2/style-guide/)
