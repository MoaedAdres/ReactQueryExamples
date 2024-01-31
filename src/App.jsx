import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaginatedQuery from './examples/paginatedQuery/PaginatedQuery'
import InfiniteQueries from './examples/InfiniteQueries'
import NormalMutaion from './examples/Mutations/NormalMutation'
import QueryInvalidation from './examples/Mutations/QueryInvalidation(for auto refetching)'
import MutationResponse from './examples/Mutations/MutationResponse'
import OptimisticUpdate from './examples/Mutations/OptimisticUpdates'
function App() {

  return (
    // <PaginatedQuery />
    // <InfiniteQueries />
    // <NormalMutaion />
    <QueryInvalidation />
    // <MutationResponse />
    // <OptimisticUpdate />
  )
}

export default App
