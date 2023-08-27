// uno.config.ts
import { defineConfig } from 'unocss'
import { presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import {
  presetAttributify,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
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
      },
      scale: 1.2,
    }),
  ],
})