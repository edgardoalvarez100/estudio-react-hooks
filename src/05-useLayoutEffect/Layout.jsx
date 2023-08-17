import { useCounter, useFetch } from "../hooks";
import { Qoute } from './../03-examples/Qoute'
import { Loading } from './../03-examples/Loading'

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data, hasError, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { quote, author } = !!data && data[0]
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                isLoading ?
                    <Loading />
                    : <Qoute author={author} quote={quote} />
            }

            <button className="btn btn-primary" disabled={isLoading} onClick={() => {
                increment()
            }}>Next qoute</button>

        </>
    )
}
