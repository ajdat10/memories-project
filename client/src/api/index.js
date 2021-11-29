import axios from 'axios'

const url = 'http://localhost:1010/posts'

export const fetchPosts = () => axios.get(url)