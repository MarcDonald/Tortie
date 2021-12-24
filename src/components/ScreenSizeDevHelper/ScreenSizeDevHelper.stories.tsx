import { Meta, Story } from '@storybook/react';
import React from 'react';

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

export const Customised = Template.bind({});
Customised.args = {
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
