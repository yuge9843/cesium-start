/*
 * @Description: 
 * @Author: yucheng
 * @Date: 2024-07-30
 * @LastEditors: 余承
 * @LastEditTime: 2024-07-30
 */
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CESIUM_ION_TOKEN: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }