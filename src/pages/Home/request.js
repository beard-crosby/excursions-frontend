import axios from 'axios'

const request = (email, password) => {
    axios.post(process.env.REACT_APP_API_ROUTE, {
        variables: {
            email: email,
            password: password
        },
        query: `
            query Login($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                    token
                    tokenExpiry
                }
            }
        `
    })
    .then(res => res.data.errors ? 'error' : res
    )
}

export default request
