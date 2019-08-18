import axios from "axios"

const request = (email, password) => {
    let ret
    console.log("Making Login Request")
    axios
        .post(process.env.REACT_APP_BASE_API_ROUTE, {
            variables: {
                email: email,
                password: password,
            },
            query: `
            query Login($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                    token
                    tokenExpiry
                }
            }
        `,
        })
        .then(res => {
            if (res.data.errors) {
                console.log("ERROR")
                console.log(res)
            } else {
                ret = res.data.data.login
                console.log(ret)
                return res
            }
        })
    return ret
}

export default request
