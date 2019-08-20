import axios from "axios"

const request = form => {
    axios
        .post(process.env.REACT_APP_BASE_API_ROUTE, {
            query: `
            mutation {
                createUser(userInput: {email: ${form.email}, username: ${form.username}, name: ${form.name}, password: ${form.password}, confirm: ${form.confirmPassword}}) {
                    _id
                    email
                    token
                }
            }
        `,
        })
        .then(res => {
            if (res.data.errors) {
                console.log(res.data.errors)
            } else {
                console.log(res.data)
                return res.data.data.createUser
            }
        })
}

export default request
