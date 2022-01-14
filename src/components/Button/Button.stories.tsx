import { Meta, Story } from '@storybook/react';

import { PassthroughProps } from '../../types';
import { color, cssVar } from '../../utils';

import Button from './Button';
import ButtonTypes from './Button.types';

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonTypes & PassthroughProps> = (
  args: ButtonTypes & PassthroughProps
) => <Button {...args} />;

const defaultArgs = {
  onClick: () => {
    console.log('Click');
  },
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  text: 'Click me!',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  text: 'Click me!',
  variant: 'secondary',
};

export const Ghost = Template.bind({});
Ghost.args = {
  ...defaultArgs,
  text: 'Click me!',
  variant: 'ghost',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  ...defaultArgs,
  text: 'Click me!',
  style: {
    width: '50%',
    backgroundColor: color('blue'),
    margin: '2rem',
    padding: '2rem',
    fontFamily: 'monospace',
  },
};

const ExampleContent = (
  <div>
    <h5 style={{ paddingBottom: cssVar('spacing-4') }}>Cat</h5>
    <img src={'http://placekitten.com/150/150'} alt={'Example'} />
  </div>
);

export const CustomChild = Template.bind({});
CustomChild.args = {
  ...defaultArgs,
  children: ExampleContent,
};
