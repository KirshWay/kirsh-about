// @ts-check
import eslint from '@eslint/js';
import astroParser from 'astro-eslint-parser';
import astroPlugin from 'eslint-plugin-astro';
// @ts-expect-error - Нет типов для eslint-plugin-jsx-a11y
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

const importSortGroups = {
  groups: [
    ['^@?\\w'],
    ['^@/'],
    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
    ['^.+\\.?(css|scss|sass)$'],
    ['^[^.].*\\u0000$', '^\\.\\..*\\u0000$', '^\\./.*\\u0000$'],
  ],
};

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.astro/**',
      'coverage/**',
      'pnpm-lock.yaml',
      'public/**',
      '.DS_Store',
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        extraFileExtensions: ['.astro'],
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      astro: astroPlugin,
      prettier: prettierPlugin,
      'jsx-a11y': jsxA11y,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      'prettier/prettier': 'warn',
      'simple-import-sort/imports': ['error', importSortGroups],
      'simple-import-sort/exports': 'error',
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
    processor: astroPlugin.processors['.astro'],
    plugins: {
      astro: astroPlugin,
      'jsx-a11y': jsxA11y,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'astro/no-conflict-set-directives': 'error',
      'astro/no-deprecated-astro-canonicalurl': 'error',
      'astro/no-deprecated-astro-fetchcontent': 'error',
      'astro/no-deprecated-astro-resolve': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'astro/valid-compile': 'error',
      'prettier/prettier': 'warn',
      'simple-import-sort/imports': ['error', importSortGroups],
      'simple-import-sort/exports': 'error',

      'astro/jsx-a11y/alt-text': 'error',
      'astro/jsx-a11y/anchor-has-content': 'error',
      'astro/jsx-a11y/anchor-is-valid': 'error',
      'astro/jsx-a11y/aria-props': 'error',
      'astro/jsx-a11y/aria-proptypes': 'error',
      'astro/jsx-a11y/aria-role': 'error',
      'astro/jsx-a11y/aria-unsupported-elements': 'error',
      'astro/jsx-a11y/heading-has-content': 'error',
      'astro/jsx-a11y/html-has-lang': 'error',
      'astro/jsx-a11y/img-redundant-alt': 'error',
      'astro/jsx-a11y/label-has-associated-control': 'error',
      'astro/jsx-a11y/no-distracting-elements': 'error',
      'astro/jsx-a11y/no-redundant-roles': 'error',
      'astro/jsx-a11y/tabindex-no-positive': 'error',
      'astro/jsx-a11y/iframe-has-title': 'error',
    },
  },
  ...astroPlugin.configs['jsx-a11y-recommended'],
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  }
);
