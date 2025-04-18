import Navbar from './Navbar';
import { NAV_ITEMS_LEFT, NAV_ITEMS_RIGHT } from './navbarItems';

import * as NavDropdownStories from './NavDropdown.stories';


export const Default = {
  args: {
    leftHeaders: NAV_ITEMS_LEFT,
    rightHeaders: NAV_ITEMS_RIGHT,
  },
};


const meta = {
  component: Navbar,
  title: 'Navbar',
};

export default meta;