import axios from 'axios'
import queryString from 'query-string'
import axiosClient from './AxiosClient'

const API = {
    get: async ({ endpoint, params }) => {
        let response
        try {
            response = await axiosClient.get(endpoint, { params })
        } catch (error) {
            console.log('Failed to call api get', error)
            return error
        }
        return response
    },
}

export default API
