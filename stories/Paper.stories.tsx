import { ComponentMeta, ComponentStory } from '@storybook/react';

import {PaperComponentExample} from '../pages/index';
import React from 'react';

export default {
  title: 'Example/PaperComponentExample',
  component: PaperComponentExample,
} as ComponentMeta<typeof PaperComponentExample>;

export const Primary: ComponentStory<typeof PaperComponentExample> = () => <PaperComponentExample />;
