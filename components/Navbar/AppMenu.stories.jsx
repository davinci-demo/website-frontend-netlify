// App.stories.jsx
import React from 'react';
import AppMenu, { menuObj_proposal } from './AppMenu';

const meta = {
  title: 'Navbar/AppMenu',
  component: AppMenu,
  tags:['autodocs'],
  argTypes: {
    alignment: {
      control: { type: 'radio' },
      options: [
        'up/down', 
        'wider'
      ],
      description: 'Controls the layout of the menu items',
    },
  },
};

// This line exports the story configuration
export default meta;

// Using CSF3 for the stories
export const Default = {
  args: {
    menuWidth: "w-60",
    alignment: 'flex-col', // default alignment
  }
};

// export const WideMenu = {
//   ...Default,
//   args: {
//     menuWidth: "w-[600px]",
//     alignment: 'flex flex-wrap',
//   },
// };

