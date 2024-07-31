/*
 * @Description: 
 * @Author: yucheng
 * @Date: 2024-07-30
 * @LastEditors: 余承
 * @LastEditTime: 2024-07-31
 */
import type { LocaleEnum } from "@/locale"
import { imageLayerProviderEnum, terrainProviderEnum } from "@/typings/enumeration"


const mapConfig = {
    /**
     * 语言
     */    
    lang: 'zh-hans' as LocaleEnum,
    /**
     * 是否显示导航器
     */    
    showNavigation: true,
    /**
     *  影像提供者
     */ 
    imageLayerProvider: imageLayerProviderEnum.高德,
    /**
     * 地形提供者
     */ 
    terrainProvider: terrainProviderEnum.cesium
}

export default mapConfig