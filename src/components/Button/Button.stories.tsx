import { Meta, Story } from '@storybook/react';
import React from 'react';

import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  disabled: false,
  text: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  disabled: false,
  text: 'Secondary',
};
