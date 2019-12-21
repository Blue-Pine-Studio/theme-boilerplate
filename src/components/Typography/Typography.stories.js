import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading1, TextStyle1 } from './Typography';

storiesOf('Typography', module)
    .add('Heading 1', () => (
        <>
            <Heading1>Heading1</Heading1>
        </>
    ))
    .add('Text Style 1', () => (
        <>
            <TextStyle1>TextStyle1</TextStyle1>
        </>
    ));
