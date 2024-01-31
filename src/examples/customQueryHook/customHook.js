import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}
export const customQueryHook = (onSuccess, onError, otherOption) => {
    return useQuery('fetchPosts', fetchPosts,
        {
            onSuccess,
            onError,
            select: (data) => { // transform the data or filter it 
                const posts = data?.data
                return posts
            },
            ...otherOption
        }
    )

}
