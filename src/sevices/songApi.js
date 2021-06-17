import axios from 'axios'
export const getOneSong = () =>
    axios
        .get(`get-song`)
        .then((response) => ({ response }))
        .catch((error) => ({ error }))
// export
