import { Meta, Story } from '@storybook/react';

import Button from './Button';
import ButtonTypes from './Button.types';

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonTypes> = (args) => <Button {...args} />;

const defaultArgs = {
  text: 'Click me!',
  onClick: () => {
    console.log('Click');
  },
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  variant: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  variant: 'secondary',
};
export const Ghost = Template.bind({});
Ghost.args = {
  ...defaultArgs,
  variant: 'ghost',
};
