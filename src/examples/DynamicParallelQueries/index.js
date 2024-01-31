import React from 'react'
import { useQueries } from '@tanstack/react-query'

const fetchPost = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}

// to fetch multiple post togerther
export const multipleQueriesHook = ({ ids }) => {
    return useQueries( // it return array of queries result
        ids.map((id) => {
            return {
                queryKey: ['someName', id],
                queryFn: () =>fetchPost(id)
            }
        })
    )
}
