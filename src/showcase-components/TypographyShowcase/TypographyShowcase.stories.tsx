import { Meta, Story } from '@storybook/react';

import TypographyShowcase from './TypographyShowcase';

export default {
  title: 'TypographyShowcase',
  component: TypographyShowcase,
  argTypes: {},
} as Meta<typeof TypographyShowcase>;

const exampleSentence = 'The quick brown fox jumps over the lazy dog.';

const Template: Story<typeof TypographyShowcase> = (args) => (
  <TypographyShowcase
    semanticTags={false}
    fontSizes={false}
    fontWeights={false}
    exampleSentence={exampleSentence}
    {...args}
  />
);

export const SemanticTags = Template.bind({});
SemanticTags.args = {
  semanticTags: true,
  fontSizes: false,
  fontWeights: false,
};

export const FontSizes = Template.bind({});
FontSizes.args = {
  fontSizes: true,
  semanticTags: false,
  fontWeights: false,
};

export const FontWeights = Template.bind({});
FontWeights.args = {
  fontWeights: true,
  fontSizes: false,
  semanticTags: false,
};
