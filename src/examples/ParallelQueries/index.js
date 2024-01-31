import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const firstApi = (id) => {

    return
}
const secondDependentOnFirst = (id) => {
    return
}
const dependentQueriesExample = ({ id, id2 }) => {
    const onSuccess = () => {

    }
    useQuery(['user', id], () => firstApi(id))

    useQuery([courses, id2], () => secondDependentOnFirst(id2))

    return (
        <div>dependentQueriesExample</div>
    )
}

export default dependentQueriesExample