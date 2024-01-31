import React, { useState } from 'react'
import axios from 'axios'
import { fetchHeros, useAddSuperHero } from './queries'
const NormalMutaion = () => {
    const [name, setName] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const onSuccess = (data) => {
        console.log("Fetching is success", data)
    }
    const onError = (error) => {
        console.log("Error when fetching", error)
    }
    // note : for parallel queries just use two useQuery with different endpoint and it's done
    const { isLoading: customLoadingName, data, isFetching, isError, error, refetch } = fetchHeros(onSuccess, onError, { enabled: false })
    const { mutate, isError: isError2, isLoading, } = useAddSuperHero()
    const buttonClicked = () => {
        const hero = { name }
        mutate(hero)
    }
    if (customLoadingName) {
        return <h1>Loading ...</h1>
    }
    if (isError) {
        // console.log("error when fetching", error)//the same in onError callback
        return <h1>"error"</h1>
    }
    return (
        <div>
            <input value={name} className='border-2 border-solid border-sky-600' name='name' onChange={handleNameChange} />
            <button onClick={buttonClicked}>Add Hero</button>
            <br></br>
            <button onClick={refetch}>fetchHero</button>
            {data?.data?.map((hero, index) => <h1>{hero.name}</h1>)}
        </div>
    )
}

export default NormalMutaion