import { useQuery } from "@tanstack/react-query"

export default function Intro() {
    async function fetchAlbums() {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums')
        return response.json()
    }

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['albums'],
        queryFn: fetchAlbums,
      })

    if (isPending) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>Error: {error.message}</p>
    }

    return (
        <>
            <h1>Intro</h1>
            {JSON.stringify(data)}
        </>
    )
}