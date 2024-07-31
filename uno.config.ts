// uno.config.js
import { defineConfig, presetAttributify, presetUno, transformerVariantGroup, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons()
  ],
  transformers: [
    transformerVariantGroup()
  ],
  rules: [
  ],
  shortcuts: [
    {
      'flex-center': 'flex items-center justify-center'
    }
  ]
})
