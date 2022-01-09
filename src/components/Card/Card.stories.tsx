import { Meta, Story } from '@storybook/react';

import { PassthroughProps } from '../../types';

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
    <p>
      Countless definitions will be lost in modifications like metamorphosis in
      mankinds. All those minds will be lost in courages like voyages in
      adventures the teleporter is more nanomachine now than phenomenan. Vital
      and unearthly unrelated.
    </p>
  </div>
);

export const Static = Template.bind({});
Static.args = {
  ...defaultArgs,
  children: ExampleContent,
};

export const Hoverable = Template.bind({});
Hoverable.args = {
  ...defaultArgs,
  hoverable: true,
  children: ExampleContent,
};
