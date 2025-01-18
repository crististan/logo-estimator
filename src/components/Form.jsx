import { useQuery } from "@tanstack/react-query"
import FormStep from "./FormStep"

export default function Form() {
    async function fetchFormSteps() {
        const response = await fetch('http://localhost/logo-estimator/api/data.json') // hosted on xampp
        return response.json()
    }

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['formSteps'],
        queryFn: fetchFormSteps,
      })

    if (isPending) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>Error: {error.message}</p>
    }

    return (
        <>
            <div className="text-sm italic">
                { JSON.stringify(data) }
            </div>
            
            <form className="w-100 max-w-[640px] mx-auto">
                {/* {data.map(step => <FormStep data={step} />)} */}
                <FormStep data={data[1]} />
            </form>
        </>
    )
}