import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig([
  globalIgnores(
    ['**/dist/**'],
  ),
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
	{
    rules: {
      'vue/multi-word-component-names': 'off',
    },
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  },
])
