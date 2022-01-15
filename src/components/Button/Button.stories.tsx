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

export const Negative = Template.bind({});
Negative.args = {
  ...defaultArgs,
  text: 'This will delete your account!',
  variant: 'negative',
};

export const Positive = Template.bind({});
Positive.args = {
  ...defaultArgs,
  text: 'Create!',
  variant: 'positive',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultArgs,
  text: `You can't click me!`,
  disabled: true,
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  ...defaultArgs,
  text: 'Click me!',
  style: {
    fontFamily: 'monospace',
    width: '50%',
    margin: '2rem',
    padding: '2rem 3rem',
  },
  foregroundColor: color('red'),
  backgroundColor: color('blue'),
};

const ExampleContent = (
  <div>
    <h5 style={{ paddingBottom: cssVar('spacing-4') }}>A Cute Cat</h5>
    <img
      src={'https://placekitten.com/250/250'}
      alt={'Example'}
      style={{ borderRadius: cssVar('corner-radius-medium') }}
    />
  </div>
);

export const CustomChild = Template.bind({});
CustomChild.args = {
  ...defaultArgs,
  children: ExampleContent,
};
