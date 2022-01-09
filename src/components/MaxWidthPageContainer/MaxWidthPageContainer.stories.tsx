import { Meta, Story } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';

import { cssVar } from '../../utils';

import MaxWidthPageContainer from './MaxWidthPageContainer';
import MaxWidthPageContainerTypes from './MaxWidthPageContainer.types';

export default {
  title: 'Page Container',
  component: MaxWidthPageContainer,
  argTypes: {},
} as Meta<typeof MaxWidthPageContainer>;

const Template: Story<MaxWidthPageContainerTypes> = (args) => (
  <>
    <WrapperStyles />
    <MaxWidthPageContainer {...args}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'grid',
          placeItems: 'center',
          backgroundColor: cssVar('color-surface'),
        }}
      >
        <h1
          style={{
            color: cssVar('color-font-on-surface'),
          }}
        >
          Contained Content
        </h1>
      </div>
    </MaxWidthPageContainer>
  </>
);

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

export const Default = Template.bind({});
Default.args = {};
