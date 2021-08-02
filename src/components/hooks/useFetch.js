import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isReady = useRef(true);

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {

        return () => {
            isReady.current = false;
        };

    }, [])

    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isReady.current) {

                    setState({
                        data,
                        loading: false,
                        error: null
                    })
                }

            })
    }, [url])

    return state;

}
