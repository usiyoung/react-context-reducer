import js from '@eslint/js';
import globals from 'globals';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['dist'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,  // TypeScript 파서 설정
    },
    plugins: {
      'react-hooks': eslintPluginReactHooks,
      'react-refresh': eslintPluginReactRefresh,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,  // React Hooks 규칙
      '@typescript-eslint/explicit-module-boundary-types': 'off',  // 모듈 경계 타입 비활성화
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];