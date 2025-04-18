import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../styles/globals.scss';

const tailwindViewports = {
  'Tailwind-xs 360px': {
    name: 'Tailwind-xs 360px',
    styles: {
      width: '360px',
      height: '768px',
    },
  },
  'Tailwind-sm 640px': {
    name: 'Tailwind-sm 640px',
    styles: {
      width: '640px',
      height: '1024px',
    },
  },
  'Tailwind-md 768px': {
    name: 'Tailwind-md 768px',
    styles: {
      width: '768px',
      height: '1280px',
    },
  },
  'Tailwind-lg 1024px': {
    name: 'Tailwind-lg 1024px',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  'Tailwind-xl 1280px': {
    name: 'Tailwind-xl 1280px',
    styles: {
      width: '1280px',
      height: '768px',
    },
  },
  'Tailwind-2xl 1536px': {
    name: 'Tailwind-2xl 1536px',
    styles: {
      width: '1536px',
      height: '768px',
    },
  },
  'Tailwind-3xl 1786px': {
    name: 'Tailwind-3xl 1786px',
    styles: {
      width: '1786px',
      height: '1024px',
    },
  },
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000000' }],
    },
    viewport: {
      defaultViewport: 'responsive',
      viewports: tailwindViewports || INITIAL_VIEWPORTS,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
