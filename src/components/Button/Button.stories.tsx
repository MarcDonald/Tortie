import { Meta, Story } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<typeof Button> = (args) => (
  <Button text={'Click me!'} onClick={() => {}} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};
export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
};
