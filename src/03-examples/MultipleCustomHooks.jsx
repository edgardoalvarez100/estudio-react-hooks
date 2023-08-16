import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"


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
                    (<div className="alert alert-info text-center">
                        <h3>Loading</h3>
                    </div>)
                    : (<figure className="text-end">
                        <blockquote className="blockquote">
                            <p >{quote}</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">{author}</figcaption>
                    </figure>)
            }

            <button className="btn btn-primary" disabled={isLoading} onClick={() => {
                increment()
            }}>Next qoute</button>

        </>
    )
}
