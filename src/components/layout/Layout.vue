<!--
 * @Description: 
 * @Author: yucheng
 * @Date: 2024-07-30
 * @LastEditors: 余承
 * @LastEditTime: 2024-07-30
-->
<template>
    <div class="layout">
        <CesiumApp />
        <Header></Header>
        <div class="page_container relative z-10 text-white">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { RouterView } from 'vue-router'
import Header from './Header.vue';

import CesiumApp from './CesiumApp.vue';
</script>

<style scoped lang='scss'>
.layout {
    width: 100vw;
    height: 100vh;
}
</style>