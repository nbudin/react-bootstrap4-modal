// @ts-check

import typescriptEslint from 'typescript-eslint';
import globals from 'globals';
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';

const flatReact = /** @type {NonNullable<typeof reactPlugin.configs.flat>} */ (
  reactPlugin.configs.flat
);

export default typescriptEslint.config(
  { ignores: ['dist/*', '.yarn/*', '.pnp.cjs'] },
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,
  // @ts-expect-error eslint-plugin-react-hooks and typescriptEslint are fighting
  flatReact.recommended,
  flatReact['jsx-runtime'],
  {
    plugins: {
      'react-hooks': hooksPlugin,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: 12,
      sourceType: 'module',
    },

    rules: {
      ...hooksPlugin.configs.recommended.rules,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
);
