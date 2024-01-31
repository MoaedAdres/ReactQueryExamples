import React from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import { customQueryHook } from './customHook'
const About = () => {
    const onSuccess = (data) => {
        console.log("Fetching is success", data)
    }
    const onError = (error) => {
        console.log("Error when fetching", error)
    }
    // note : for parallel queries just use two useQuery with different endpoint and it's done

    const { isLoading: customLoadingName, data: customDataName, isFetching, isError, error, refetch } = customQueryHook(onSuccess,onError,{})
    console.log(customLoadingName, isFetching)
    if (customLoadingName || isFetching) {
        return <Loader />
    }
    if (isError) {
        // console.log("error when fetching", error)//the same in onError callback
        return <h1>"error"</h1>
    }
    console.log("success when fetching", customDataName)//the same in onSuccess callback
    return (
        <div>
            <button className='bg-red-700' onClick={refetch}>Fetch Posts</button>
        </div>
    )
}

export default About