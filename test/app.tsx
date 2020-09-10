import React, { useEffect } from 'react';
import toast from 'components/toast/index';

export default function App() {
    useEffect(() => {
        toast('成功了');
    }, []);
    return (
        <>
            你好
        </>
    );
}
