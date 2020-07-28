import React from 'react';
import CustomButton from '../../src/index';
import { storiesOf } from '@storybook/react';


const story = storiesOf("Custom button",module);

story.addWithJSX("simple",() => <CustomButton/>);