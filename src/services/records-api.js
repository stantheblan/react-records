import axios from 'axios'
export const createRecord = item => {
    const URL = `http://localhost:3001/records/`
    return axios.post(URL, item)
}
export const getRecords = () => {
    const URL = `http://localhost:3001/records`
    return axios.get(URL)
}
