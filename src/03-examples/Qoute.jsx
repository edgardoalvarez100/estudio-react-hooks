import { useLayoutEffect, useRef, useState } from "react"


export const Qoute = ({ author, quote }) => {

    const pRef = useRef();
    const [sizeBox, setSizeBox] = useState({ height: 0, width: 0 })


    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setSizeBox({ height, width });

    }, [quote])

    return (
        <>
            <figure className="text-end">
                <blockquote className="blockquote" style={{ display: 'flex' }}>
                    <p ref={pRef}>{quote}</p>
                </blockquote>
                <figcaption className="blockquote-footer">{author}</figcaption>
            </figure>
            <code>{JSON.stringify(sizeBox)}</code>
        </>



    )
}
