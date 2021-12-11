import { ComponentMeta, ComponentStory } from '@storybook/react';

import React from 'react';
import {StyledComponentExample} from '../pages/index';

export default {
  title: 'Example/StyledComponentExample',
  component: StyledComponentExample,
} as ComponentMeta<typeof StyledComponentExample>;

export const Primary: ComponentStory<typeof StyledComponentExample> = () => <StyledComponentExample />;
