import useDynamicSVGImport from '@/hooks/useDynamicImportSvg';
import PropTypes from 'prop-types';
import React from 'react'
import brokenImage from '@icons/brokenImage.svg';
const Icon = ({ name = '', onCompleted, onError, ...rest }) => {
    const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
        onCompleted,
        onError
    });
    if (error) {
        return <img src={brokenImage} alt='Icon' width={'100%'} height={'auto'} />;
    }
    if (loading) {
        return "Loading...";
    }
    if (SvgIcon) {
        return <SvgIcon {...rest} />;
    }
    return null;
};

Icon.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string,
};
export default Icon
