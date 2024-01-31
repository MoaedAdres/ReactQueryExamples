import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
const fetchHerosapi = () => {
    // console.log("sdfsdfsd")
    return axios.get('http://localhost:4000/super-heros')
}

const handleAddHeroClicked = (hero) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts2', { userId: 1313, title: "ns", body: "asd" })
}

export const fetchHeros = (otherOption) => {

    return useQuery({ queryKey: ['fetch-heros'], queryFn: fetchHerosapi, ...otherOption })
}


export const useAddSuperHero = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: handleAddHeroClicked,

        onSuccess: () => {
            console.log("111 In success")
            queryClient.invalidateQueries('fetch-heros')
        }
    })
}


