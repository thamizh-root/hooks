import React from 'react';
import WithMemo from './withMemo';
import WithoutMemo from './withoutMemo';


export default function Memo() {
    return (
        <>
            <WithMemo />
            <WithoutMemo />
        </>
    )
}