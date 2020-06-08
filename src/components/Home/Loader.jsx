import React from 'react';

export default function Loader({ showLoader }) {
    return <div className={showLoader ? 'loader' : 'loader inactive'}></div>;
}
