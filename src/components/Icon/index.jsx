import useDynamicSVGImport from '@/hooks/useDynamicImportSvg';
import React from 'react'
import brokenImage from '@icons/brokenImage.svg';
const Icon = ({ name, onCompleted, onError, ...rest }) => {
    const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
        onCompleted,
        onError
    });
    if (error) {
        return <img src={brokenImage} width={'100%'} height={'auto'} />;
    }
    if (loading) {
        return "Loading...";
    }
    if (SvgIcon) {
        return <SvgIcon {...rest} />;
    }
    return null;
};



export default Icon
