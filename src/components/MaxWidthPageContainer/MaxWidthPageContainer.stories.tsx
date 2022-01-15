import { Meta, Story } from '@storybook/react';

import { color } from '../../utils';

import MaxWidthPageContainer from './MaxWidthPageContainer';
import MaxWidthPageContainerTypes from './MaxWidthPageContainer.types';

export default {
  title: 'Max Width Page Container',
  component: MaxWidthPageContainer,
  argTypes: {},
} as Meta<typeof MaxWidthPageContainer>;

const Template: Story<MaxWidthPageContainerTypes> = (args) => (
  <MaxWidthPageContainer {...args}>
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: color('surface'),
      }}
    >
      <h1
        style={{
          color: color('onSurface'),
        }}
      >
        Contained Content
      </h1>
    </div>
  </MaxWidthPageContainer>
);

export const Default = Template.bind({});
Default.args = {};
