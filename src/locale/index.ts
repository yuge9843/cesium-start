import zhCN from 'vue-cesium/es/locale/lang/zh-hans'
import enUS from 'vue-cesium/es/locale/lang/en-us'

export enum LocaleEnum {
    ZH_CN = 'zh-CN',
    EN_US = 'en-US'
}

export const localeMap = {
    [LocaleEnum.ZH_CN]: zhCN,
    [LocaleEnum.EN_US]: enUS
}