/*
 * @Description: 
 * @Author: yucheng
 * @Date: 2024-07-30
 * @LastEditors: 余承
 * @LastEditTime: 2024-07-31
 */
import mapConfig from '@/config/mapConfig'
import { localeMap, type LocaleEnum } from '@/locale'
import { defineStore } from 'pinia'

export const useMapStore = defineStore('map', {
  state: () => ({
    /**
     * 语言
     */    
    lang: mapConfig.lang,
    /**
     * 是否显示导航器
     */    
    showNavigation: mapConfig.showNavigation,
    /**
     *  影像提供者
     */
    imageLayerProvider: mapConfig.imageLayerProvider,
    /**
     *  地形提供者
     */
    terrainProvider: mapConfig.terrainProvider,
  }),
  actions: {
    setLang(lang: LocaleEnum) {
      this.lang = lang
    },
    setShowNavigation(show: boolean) {
      this.showNavigation = show
    }
  },
  getters: {
    getLang: (state) => {
        return localeMap[state.lang]
    }
  }
})