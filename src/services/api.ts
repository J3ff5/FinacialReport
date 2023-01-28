import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.fiscaldata.treasury.gov/services/api/fiscal_service'
})

export default api;
