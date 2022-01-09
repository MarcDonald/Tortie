import { Meta, Story } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';

import ThemeShowcase from './ThemeShowcase';

export default {
  title: 'ThemeShowcase',
  component: ThemeShowcase,
  argTypes: {},
} as Meta<typeof ThemeShowcase>;

const Template: Story<typeof ThemeShowcase> = (args) => (
  <>
    <WrapperStyles />
    <ThemeShowcase {...args} />
  </>
);

export const Showcase = Template.bind({});

const WrapperStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  #root {
    background-color: cssVar('color-background')
    padding: 0;
    margin: 0;
  }
`;
