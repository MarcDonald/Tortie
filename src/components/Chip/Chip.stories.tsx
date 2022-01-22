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

type Args = ChipTypes & PassthroughProps;

const Template: Story<ChipTypes & PassthroughProps> = (args: Args) => (
  <Chip {...args} />
);

const MultipleTemplate: Story<{
  first?: Args;
  second?: Args;
  third?: Args;
}> = (args) => (
  <div style={{ display: 'flex', gap: '8px' }}>
    {args.first && <Chip {...args.first} />}
    {args.second && <Chip {...args.second} />}
    {args.third && <Chip {...args.third} />}
  </div>
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

export const Disabled = MultipleTemplate.bind({});
Disabled.args = {
  first: {
    variant: 'primary',
    text: 'Primary',
    disabled: true,
  },
  second: {
    variant: 'secondary',
    text: 'Secondary',
    disabled: true,
  },
  third: {
    variant: 'tertiary',
    text: 'Tertiary',
    disabled: true,
  },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  text: 'Custom Chip!',
  style: {
    fontFamily: 'monospace',
    fontSize: '3rem',
    width: '50%',
    margin: '2rem',
    padding: '2rem 3rem',
  },
  colors: {
    foregroundColor: color('green'),
    backgroundColor: color('blue'),
    textColor: color('white'),
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
