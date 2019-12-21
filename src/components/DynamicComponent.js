import React from 'react';
import styled from 'styled-components';
import { fontSize, color, fontWeight, lineHeight } from 'styled-system';

const tag = '';

const StyledDynamicComponent = styled(tag)`
    ${fontSize}
    ${color}
    ${fontWeight}
    ${lineHeight}
`;

const DynamicComponent = ({ chosenTag = 'p', children, ...props }) => {
    const WithComponent = StyledDynamicComponent.withComponent(chosenTag);
    return <WithComponent {...props}>{children}</WithComponent>;
};

DynamicComponent.defaultProps = {
    chosenTag: 'p',
};

export default DynamicComponent;
