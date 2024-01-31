import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
const fetchHerosapi = () => {
    // console.log("sdfsdfsd")
    return axios.get('http://localhost:4000/super-heros')
}

const handleAddHeroClicked = (hero) => {
    return axios.post('http://localhost:4000/super-heros', hero)
}

export const fetchHeros = (onSuccess, onError, otherOption) => {

    return useQuery('fetch-heros', fetchHerosapi, { onSuccess, onError, refetchOnWindowFocus: false, ...otherOption })
}


export const useAddSuperHero = () => {
    const queryClient = useQueryClient()
    return useMutation(handleAddHeroClicked, {
        onMutate: async (newHero) => {
            console.log("onMutate")
            await queryClient.cancelQueries('fetch-heros')
            const previosHeroData = queryClient.getQueryData("fetch-heros")
            queryClient.setQueryData('fetch-heros', (oldQueryData) => {
                console.log(newHero)
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, { ...newHero }]
                }
            })
            return {
                previosHeroData
            }
        },
        onError: (_error, _newHero, context) => {
            console.log("onError", context.previosHeroData)
            queryClient.setQueryData('fetch-heros', context.previosHeroData)
        },
        onSettled: () => {
            console.log("on Settled")
            queryClient.invalidateQueries('fetch-heros')
        }
    })
}


