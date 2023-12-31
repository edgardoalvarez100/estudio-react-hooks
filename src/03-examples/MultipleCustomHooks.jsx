import { useCounter, useFetch } from "../hooks";
import { Qoute } from "./Qoute";
import { Loading } from "./Loading";

export const MultipleCustomHooks = () => {

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
