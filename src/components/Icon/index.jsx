import useDynamicSVGImport from '@/hooks/useDynamicImportSvg';
import React from 'react'

const Icon = ({ name, onCompleted, onError, ...rest }) => {
    const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
        onCompleted,
        onError
    });
    if (error) {
        return error.message;
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
