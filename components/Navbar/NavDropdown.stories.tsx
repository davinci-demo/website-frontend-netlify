import type { StoryObj, Meta } from '@storybook/react';

import NavDropdown from './NavDropdown';
import { NavDropdownProps } from './NavDropdown';

const meta: Meta<typeof NavDropdown> = {
  component: NavDropdown,
  title: 'Navbar/Dropdown',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Menu Item',
    active: true,
    menuItems: [
      {
        active: true,
        option: 'Menu Item',
        url: 'http://localhost:3001',
      },
    ],
  },
};

export const Primary: Story = {
  args: {
    name: 'People',
    active: true,
    menuItems: [
      {
        active: true,
        option: 'Leadership',
        url: '',
      },
      {
        active: true,
        option: 'Tutors',
        url: '',
      },
      {
        active: false,
        option: 'Alumni',
        url: '',
      },
    ],
  },
};
