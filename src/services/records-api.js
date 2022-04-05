import axios from 'axios'
export const createRecord = item => {
    const URL = `http://localhost:3001/records/`
    return axios.post(URL, item)
}
export const getRecord = id => {
    const URL = `http://localhost:3001/records/${id}`
    return axios.get(URL)
}
export const getRecords = () => {
    const URL = `http://localhost:3001/records`
    return axios.get(URL)
}
export const deleteRecord = id => {
    const URL = `http://localhost:3001/records/${id}`
    return axios.delete(URL)
}