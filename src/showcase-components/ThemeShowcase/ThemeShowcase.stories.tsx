import { Meta, Story } from '@storybook/react';

import ThemeShowcase from './ThemeShowcase';

export default {
  title: 'ThemeShowcase',
  component: ThemeShowcase,
  argTypes: {},
} as Meta<typeof ThemeShowcase>;

const Template: Story<typeof ThemeShowcase> = (args) => (
  <ThemeShowcase {...args} />
);

export const Showcase = Template.bind({});
