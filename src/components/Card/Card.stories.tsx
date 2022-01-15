import { Meta, Story } from '@storybook/react';

import { PassthroughProps } from '../../types';
import { color, cssVar } from '../../utils';
import { Button } from '../index';

import Card from './Card';
import CardTypes from './Card.types';

export default {
  title: 'Card',
  component: Card,
  argTypes: {},
} as Meta<typeof Card>;

const Template: Story<CardTypes & PassthroughProps> = (args) => (
  <Card {...args}>{args.children}</Card>
);

const defaultArgs: CardTypes = {
  title: 'Malfunction accelerative like a vital teleporter.',
  titleAs: 'h5',
  hoverable: false,
};

const ExampleContent = (
  <div>
    <p>
      The queen is more girl now than astronaut. Chemical and cunningly
      photonic. Pathway of a ship-wide shield, gather the paralysis! None of
      these sonic showers will be lost in pressures like galaxies in courages
    </p>
    <div style={{ display: 'grid', placeContent: 'center' }}>
      <img
        src={'https://placekitten.com/250/250'}
        alt={'Example'}
        style={{
          borderRadius: cssVar('corner-radius-medium'),
        }}
      />
    </div>
    <div
      style={{
        margin: `${cssVar('spacing-3')} ${cssVar('spacing-4')}`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Button
        onClick={() => {
          console.log('Delete');
        }}
        text={'Delete'}
        variant={'negative'}
      />
      <Button
        onClick={() => {
          console.log('Continue');
        }}
        text={'Continue'}
        variant={'positive'}
      />
    </div>
  </div>
);

export const Static = Template.bind({});
Static.args = {
  ...defaultArgs,
  content: 'The lieutenant commander goes mankind like a lunar transporter!',
};

export const Hoverable = Template.bind({});
Hoverable.args = {
  ...defaultArgs,
  hoverable: true,
  content: 'Captain of a unrelated metamorphosis, desire the paralysis!',
};

export const CustomChild = Template.bind({});
CustomChild.args = {
  ...defaultArgs,
  children: ExampleContent,
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  ...defaultArgs,
  cardAs: 'aside',
  titleAs: 'h3',
  content:
    'Intelligent, evil transformators rudely grab a reliable, unrelated space.',
  contentAs: 'h6',
  hoverable: true,
  style: {
    width: '50%',
    backgroundColor: color('primary'),
    color: color('onPrimary'),
    padding: '2rem',
  },
};
