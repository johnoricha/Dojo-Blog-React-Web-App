import { useEffect, useState } from "react"

function useFetch<Type = void> (url: string): Type {

    const [data, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url).then((res) => {

                if (!res.ok) {
                    throw Error("Failed to fetch data")
                }

                return res.json()
            }).then((data) => {

                setBlogs(data)

                setIsLoading(false)

            }).catch((err) => {

                setIsLoading(false)
                setError(err.message)

            })
        }, 1000)
    }, [url])

    return <Type>{ data, isLoading, error }

}

export default useFetch