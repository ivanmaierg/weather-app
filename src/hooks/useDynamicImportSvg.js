import React, { useState, useEffect, useRef } from 'react'

const useDynamicSVGImport = (name, options = {}) => {
    const ImportedIconRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const { onCompleted, onError } = options;
    useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                ImportedIconRef.current = (
                    ImportedIconRef.current = (await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!@icons/weatherStatus/${name}.svg`)).default
                )
                if (onCompleted) {
                    onCompleted(name, ImportedIconRef.current);
                }
            } catch (err) {
                if (onError) {
                    onError(err);
                }
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [name, onCompleted, onError]);

    return { error, loading, SvgIcon: ImportedIconRef.current };
}
export default useDynamicSVGImport