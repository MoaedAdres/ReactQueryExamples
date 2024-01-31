import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
const fetchHerosapi = () => {
    // console.log("sdfsdfsd")
    return axios.get('http://localhost:4000/super-heros')
}

const handleAddHeroClicked = (hero) => {
    return axios.post('http://localhost:4000/super-heros', hero)
}

export const fetchHeros = (onSuccess, onError, otherOption) => {

    return useQuery('fetch-heros', fetchHerosapi, { onSuccess, onError, ...otherOption })
}


export const useAddSuperHero = () => {
    return useMutation(handleAddHeroClicked)
}


