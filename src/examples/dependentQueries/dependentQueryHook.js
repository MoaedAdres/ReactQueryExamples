import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const firstApi = (id) => {

    return
}
const secondDependentOnFirst = (id) => {
    return
}
const dependentQueriesExample = ({ id }) => {
    const onSuccess=()=>{
        
    }
    const { data: user } = useQuery(['user', id], () => firstApi(id))
    const channelId = user?.channelId

    useQuery([courses, channelId], () => secondDependentOnFirst(channelId),
        {
            enabled: !!channelId // only enable the request after channelId has a value
        })
    
    return (
        <div>dependentQueriesExample</div>
    )
}

export default dependentQueriesExample