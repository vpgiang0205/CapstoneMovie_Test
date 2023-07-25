import React, { useState, useEffect, useMemo, useCallback } from 'react'
import CustomHooks from './custom-hooks';

export default function HooksPage() {
    // useState tra ve mang co 2 phan tu, phan tu value va phan tu method
    /** tham so trong useState de set cho value */
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("useEffect - Chạy một lần duy nhất nếu đối số thứ 2 là mảng rỗng - giống componentDidMount")
    }, [])

    useEffect(() => {
        console.log("useEffect - Chạy nếu number thay đổi - giống componentWillUpdate");
    }, [number])


    const countUp = () => {
        let i = 0;
        while (i < 1000) {
            i++
        }
        console.log(i)
        return i
    }


    const renderNoti = () => {
        console.log("a")
    }

    const renderNotiCallBack = useCallback(renderNoti, [])


    const countUpUseMemo = useMemo(() => countUp(), [number])

    return (
        <div>
            <p>Number: {number}</p>
            <p>Count: {countUpUseMemo}</p>
            <button className='btn btn-success' onClick={() => { setNumber(number + 1) }}>Click</button>
            <CustomHooks />

            </div>
    )
}
