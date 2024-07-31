<!--
 * @Description: 
 * @Author: yucheng
 * @Date: 2024-07-30
 * @LastEditors: 余承
 * @LastEditTime: 2024-07-31
-->
<template>
    <VcLayerImagery v-if="imageryProviderComp">
        <component :is="imageryProviderComp"></component>
    </VcLayerImagery>
</template>

<script lang='ts' setup>
import { useMapStore } from '@/stores/mapStore';
import { imageLayerProviderEnum } from '@/typings/enumeration';
import { shallowRef, watchEffect } from 'vue';
import { VcLayerImagery, VcImageryProviderArcgis, VcImageryProviderAmap, VcImageryProviderTencent, VcImageryProviderBaidu, VcImageryProviderTianditu, VcImageryProviderBing, VcImageryProviderSupermap } from 'vue-cesium'

const mapStore = useMapStore()

const imageryProviderComp = shallowRef<any>(undefined)

const imageryProviderCompMap = new Map<imageLayerProviderEnum, any>([
    [imageLayerProviderEnum.高德, VcImageryProviderAmap],
    [imageLayerProviderEnum.腾讯, VcImageryProviderTencent],
    [imageLayerProviderEnum.谷歌, VcImageryProviderArcgis],
    [imageLayerProviderEnum.arcgis, VcImageryProviderArcgis],
    [imageLayerProviderEnum.必应, VcImageryProviderBing],
    [imageLayerProviderEnum.百度, VcImageryProviderBaidu],
    [imageLayerProviderEnum.天地图, VcImageryProviderTianditu],
    [imageLayerProviderEnum.超图, VcImageryProviderSupermap],
])

const getImageryProviderComponent = () => {
    const imageryProvider = mapStore.imageLayerProvider
    imageryProviderComp.value = imageryProviderCompMap.get(imageryProvider)
}

watchEffect(() => {
    getImageryProviderComponent()
})
</script>

<style scoped lang='scss'></style>