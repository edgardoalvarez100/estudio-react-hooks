import { memo } from "react";


export const Small = memo(({ value }) => {

    console.log("small redencion");
    return (
        <small>{value}</small>
    )
})
