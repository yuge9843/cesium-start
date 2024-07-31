<!--
 * @Description: 
 * @Author: yucheng
 * @Date: 2024-07-30
 * @LastEditors: yuSeen
 * @LastEditTime: 2024-07-31
-->
<template>
  <VcCompass :outerOptions="outerOptions" />
  <VcZoomControl position="top-right" :offset="[40, 126]" background="rgba(0,0,0,0)" />
  <VcMyLocation position="top-right" :offset="[40, 226]" background="rgba(0,0,0,0)" color="#fff" />
  <VcStatusBar position="bottom" background="rgba(0,0,0,0.4)" customClass="status_bar" />
</template>

<script lang='ts' setup>
import { VcStatusBar, VcCompass, VcZoomControl, VcMyLocation } from 'vue-cesium'

const outerOptions = {
  color: 'rgba(81,90,110,0.8)'
}
</script>

<style lang='scss'>
.status_bar {
    min-width: 1100px;
}
</style>