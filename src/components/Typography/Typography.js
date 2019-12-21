import React from 'react';
import DynamicComponent from '../DynamicComponent';
import theme from '../../assets/theme/theme';

const {
    heading1,
    textStyle1,
} = theme.textStyles;

export const Heading1 = (props) => {
    const { children } = props;
    return (
        <DynamicComponent {...heading1} {...props}>
            {children}
        </DynamicComponent>
    );
};

export const TextStyle1 = (props) => {
    const { children } = props;
    return (
        <DynamicComponent {...textStyle1} {...props}>
            {children}
        </DynamicComponent>
    );
};
