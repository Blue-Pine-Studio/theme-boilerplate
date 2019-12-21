import theme from '../assets/theme/theme';

const {
    tablet,
    phone,
} = theme.mediaQueries;

const bp = {
    tablet: `min-width: ${tablet}`,
    phone: `min-width: ${phone}`,
};

export default bp;
