import React from 'react'
import axios from 'axios'
import { useInfiniteQuery } from '@tanstack/react-query'
const fetchSuperHeros = ({ pageParam =1}) => {
    return axios.get(`http://localhost:4000/super-heros?_page=${pageParam}`)
}
const InfiniteQueries = () => {
    const { isFetching, isLoading, data, isError, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(['super-heros'], fetchSuperHeros, {
        getNextPageParam: (lastPage, pages) => {
            if (pages.length < lastPage.data.last) {
                return pages.length + 1
            }
            else
                return undefined
        }
    })
    if (isLoading) {
        return <h1>Loading ...</h1>
    }
    if (isError) {
        return <h1>Somthing happend</h1>
    }
    return (
        <div>
            {data.pages.map((group, index) => {
                return group.data.data.map((hero) => <h1>{hero.name}</h1>)
            })}
            <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>
            {isFetching && "Fetching "}
            {isFetchingNextPage&&"Fetching Next "}
        </div>
    )
}

export default InfiniteQueries