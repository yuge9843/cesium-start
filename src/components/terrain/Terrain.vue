<!--
 * @Description: 
 * @Author: yucheng
 * @Date: 2024-07-30
 * @LastEditors: 余承
 * @LastEditTime: 2024-07-31
-->
<template>
    <component :is="terrainProviderComp" v-if="terrainProviderComp"></component>
</template>

<script lang='ts' setup>
import { useMapStore } from '@/stores/mapStore';
import { terrainProviderEnum } from '@/typings/enumeration';
import { shallowRef, watchEffect } from 'vue';
import { VcTerrainProviderCesium, VcTerrainProviderArcgis, VcTerrainProviderTianditu } from 'vue-cesium'

const mapStore = useMapStore()

const terrainProviderComp = shallowRef<any>(undefined)

const terrainProviderCompMap = new Map<terrainProviderEnum, any>([
    [terrainProviderEnum.arcgis, VcTerrainProviderArcgis],
    [terrainProviderEnum.cesium, VcTerrainProviderCesium],
    [terrainProviderEnum.天地图, VcTerrainProviderTianditu],
])

const getTerrainProviderComponent = () => {
    const terrainProvider = mapStore.terrainProvider
    terrainProviderComp.value = terrainProviderCompMap.get(terrainProvider)
}

watchEffect(() => {
    getTerrainProviderComponent()
})
</script>

<style scoped lang='scss'></style>