<!--
 * @Description: 
 * @Author: yucheng
 * @Date: 2024-07-30
 * @LastEditors: 余承
 * @LastEditTime: 2024-07-31
-->
<template>
    <CesiumViewer>
        <Navigation v-if="mapStore.showNavigation"></Navigation>
        <Terrain />
        <Imagelayer />
    </CesiumViewer>
</template>

<script lang='ts' setup>
import { useMapStore } from '@/stores/mapStore';
import CesiumViewer from '../cesium-viewer/CesiumViewer.vue';
import Navigation from '../navigation/Navigation.vue';
import Imagelayer from '../imagelayer/Imagelayer.vue';
import Terrain from '../terrain/Terrain.vue';

const mapStore = useMapStore();
</script>

<style scoped lang='scss'></style>