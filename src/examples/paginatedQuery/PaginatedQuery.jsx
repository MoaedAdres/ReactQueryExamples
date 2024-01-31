import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchSuperHeros = (pageNumber) => {
  return axios.get(`http://localhost:4000/super-heros?_page=${pageNumber}`)
}

const PaginatedQuery = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { data, isLoading, isFetching, isError, error } = useQuery(['super-heros', pageNumber], () => fetchSuperHeros(pageNumber)
  ,{keepPreviousData:true})
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>Some Error Happend</h1>
  }
  return (
    <div className='p-0 m-0'>
      {data.data.data?.map((hero, index) => <p>His Name is {hero.name}</p>)}
      <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber == 1}>Previous</button>
      <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber == 3}>Next</button>
    {isFetching && <p>Fetching...</p>}
    </div>
  )
}

export default PaginatedQuery