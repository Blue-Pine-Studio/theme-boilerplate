import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import bp from '../MediaQueries';

const HeaderTitleStyled = styled.h1`
    font-size: 36px;
    font-weight: 600;
    color: ${(props) => props.theme.color.white};
    `;

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    background: ${(props) => props.theme.color.black};
    
    @media(${bp.tablet}) {
        background: ${(props) => props.theme.color.purple};
    }    
    padding: 20px 30px;
    height: 120px;
    
    ${(props) => props.light && css`
    background: ${(themeProps) => themeProps.theme.color.lightGray};
    
    ${HeaderTitleStyled} {
    color: ${(themeProps) => themeProps.theme.color.black};
    }
    `}
`;

const Header = (props) => {
    const { light } = props;

    return (
        <HeaderStyled light={light}>
            <HeaderTitleStyled>
                Gatsby Project + Storybook
            </HeaderTitleStyled>
        </HeaderStyled>
    );
};

Header.propTypes = {
    light: PropTypes.bool,
};

Header.defaultProps = {
    light: false,
};

export default Header;
