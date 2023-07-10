import axios from 'axios'

/*Rodar cm IPV4  json-server --watch -d 180 --host ipv4  db.json*/

const api = axios.create({
    baseURL: 'http://192.168.15.116:3000'
})

export default api;