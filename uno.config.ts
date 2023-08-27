// uno.config.ts
import { defineConfig } from 'unocss'
import { presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'


import {
  presetAttributify,
  presetTypography,
} from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetAttributify(),
    presetUno(),
    presetTypography(),
    presetIcons(
      {
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        simple: ():Promise<any> => import('@iconify-json/simple-icons/icons.json').then(i => i.default),
      },
      scale: 1.2,
    }),
  ],
})