import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const fetchPost = ({ queryKey }) => {
    const id = queryKey[1]
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}
export const queryByIdHook = (itemId) => {
    return useQuery(['postId', itemId], fetchPost)
}
