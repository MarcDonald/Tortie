import { Meta, Story } from '@storybook/react';

import ScreenSizeDevHelper from './ScreenSizeDevHelper';
import ScreenSizeDevHelperTypes from './ScreenSizeDevHelper.types';

export default {
  title: 'Screen Size Dev Helper',
  component: ScreenSizeDevHelper,
  argTypes: {},
} as Meta<typeof ScreenSizeDevHelper>;

const Template: Story<ScreenSizeDevHelperTypes> = (args) => (
  <ScreenSizeDevHelper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // Have to add this since it would be hidden in storybook production
  forceShow: true,
};

export const Customised = Template.bind({});
Customised.args = {
  forceShow: true,
  backgroundColor: 'blue',
  textColor: 'white',
  opacity: '100%',
  breakpoints: {
    tabletMin: `${200 / 16}rem`,
    laptopMin: `${400 / 16}rem`,
    desktopMin: `${600 / 16}rem`,
    largeDesktopMin: `${800 / 16}rem`,
  },
};
