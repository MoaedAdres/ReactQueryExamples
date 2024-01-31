import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Loader from '../components/Loader'
const fetchPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}
const About = () => {
    const onSuccess = (data) => {
        console.log("Fetching is success", data)
    }
    const onError = (error) => {
        console.log("Error when fetching", error)
    }
    // note : for parallel queries just use two useQuery with different endpoint and it's done

    const { isLoading: customLoadingName, data: customDataName, isFetching, isError, error, refetch } = useQuery('fetchPosts', fetchPosts,
        // {cacheTime:3000} //we pass cachtime if we want to change the time for the cashed data
        // {staleTime:10000} the time to set the request from fresh to stale(if it stale it will refetch the data when access it)
        // {refetchOnMount:false} // fetch every time the component mount(pass 'always' to do the behavior regardless of the status if is it stale or fresh)
        // {refetchOnWindowFocus:false } // fetch every time the window focused (pass 'always' to do the behavior regardless of the status if is it stale or fresh)
        // {
        //   refetchInterval: 2000, // in this case it will refetch the request every 2 second 
        //   refetchIntervalInBackground: true // we pass this property to also refetch the data when the browser is not focused
        // }
        {
            enabled: false,// we set enabled to false if we want to active the request on user event but every thing like cashing and stale is still the same
        }
        // {
        // onSuccess,//to handle side effect when fetching is success
        // onError //to handle side effect when fetching is not success
        // }

        // {
        //   // select:(data)=>{ // transform the data or filter it 
        //   //   const posts=data?.data
        //   //   return posts
        //   // }
        // }


    )
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