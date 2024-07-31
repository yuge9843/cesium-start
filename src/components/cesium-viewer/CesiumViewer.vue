<!--
 * @Description: 
 * @Author: yucheng
 * @Date: 2024-07-30
 * @LastEditors: 余承
 * @LastEditTime: 2024-07-30
-->
<template>
  <div class="cesium_viewer">
    <VcConfigProvider :access-token="config.token" :cesium-path="config.cesiumPath" :locale="mapStore.getLang">
      <VcViewer :showCredit="false" shadows @ready="onViewerReady">
        <slot></slot>
      </VcViewer>
    </VcConfigProvider>
  </div>
</template>

<script lang='ts' setup>
import { useMapStore } from '@/stores/mapStore';
import { VcConfigProvider, VcViewer } from 'vue-cesium'
import type { VcReadyObject } from 'vue-cesium/es/utils/types';

const mapStore = useMapStore()

const config = {
  cesiumPath: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js',
  token: import.meta.env.VITE_CESIUM_ION_TOKEN
}

// 监听 viewer 准备就绪
const onViewerReady = (readyObj: VcReadyObject) => {
  const scene = readyObj.viewer.scene
  resetMouseAction(scene)
}

/**
 * @description: 重置鼠标滚轮和右键拖动的默认行为(cesium默认的鼠标行为过于难用)
 * @param {Cesium.Scene} scene
 * @return {*}
 */
const resetMouseAction = (scene: Cesium.Scene) => {
  // 设置鼠标滚轮进行视图 zoom 变化
  scene.screenSpaceCameraController.zoomEventTypes = [
    Cesium.CameraEventType.WHEEL
  ]
  // 设置鼠标右键拖动地图, 允许用户在3D和2.5D模式下倾斜，或者在2D模式下旋转的输入
  scene.screenSpaceCameraController.tiltEventTypes = [
    Cesium.CameraEventType.RIGHT_DRAG
  ]
  scene.screenSpaceCameraController.minimumZoomDistance = 0.8
}
</script>

<style scoped lang='scss'>
.cesium_viewer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>