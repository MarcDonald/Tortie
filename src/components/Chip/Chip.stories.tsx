import { Meta, Story } from '@storybook/react';

import { PassthroughProps } from '../../types';
import { color, cssVar } from '../../utils';

import Chip from './Chip';
import ChipTypes from './Chip.types';

export default {
  title: 'Chip',
  component: Chip,
  argTypes: {},
} as Meta<typeof Chip>;

const Template: Story<ChipTypes & PassthroughProps> = (args) => (
  <Chip {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: 'Important Chip!',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Somewhat important!',
  variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  text: 'Not that important!',
  variant: 'tertiary',
};

export const Bad = Template.bind({});
Bad.args = {
  text: 'Oh no!',
  variant: 'negative',
};

export const Good = Template.bind({});
Good.args = {
  text: 'Yay!',
  variant: 'positive',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  text: 'Custom Chip!',
  colors: {
    backgroundColor: color('background'),
    hoverColor: color('surface'),
    borderColor: color('blue'),
    textColor: color('onBackground'),
  },
};

const ExampleChild = (
  <div style={{ display: 'grid', placeContent: 'center' }}>
    <img
      src={'https://placekitten.com/50/20'}
      alt={'Example'}
      style={{
        borderRadius: cssVar('corner-radius-medium'),
      }}
    />
  </div>
);

export const CustomChild = Template.bind({});
CustomChild.args = {
  children: ExampleChild,
};
