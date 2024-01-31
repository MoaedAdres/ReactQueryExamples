import React from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
const fetchHero = ({ queryKey }) => {
    const id = queryKey[1]
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}
export const queryByIdHook = (heroId) => {
    const queryClient=useQueryClient()
    return useQuery(['super-hero', heroId], fetchHero,{
        initialData:()=>{
            const hero=queryClient.getQueryData('super-heros')?.data?.find((hero)=>hero.id===parseInt(heroId))
            if (hero){
                return {data:hero}
            }
            else {
                return undefined
            }
        }
    })
}

