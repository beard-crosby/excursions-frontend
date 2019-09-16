export const loginForm = {
    email: {
        elementType: "email",
        name: "Email",
        invalidName: "Please enter a valid Email.",
        placeholder: "Your Email",
        value: "",
        validation: {
            required: true,
            emailRequired: true,
        },
        valid: false,
        invalidMessage: "Email must be a in a valid Email address format",
        touched: false,
        focusChanged: false,
    },
    password: {
        elementType: "password",
        name: "Password",
        invalidName: "Please enter a valid password",
        placeholder: "Your Password",
        value: "",
        validation: {
            required: true,
            passwordRequired: true,
        },
        valid: false,
        invalidMessage:
            "Password must be 6 to 13 characters, must include no spaces, at least one upper case letter and one number.",
        touched: false,
        focusChanged: false,
    },
}

export const signUpForm = {
    email: {
        elementType: "email",
        name: "Email",
        invalidName: "Please enter a valid Email.",
        placeholder: "Your Email",
        value: "",
        validation: {
            required: true,
            emailRequired: true,
        },
        valid: false,
        invalidMessage: "Email must be a in a valid Email address format.",
        touched: false,
        focusChanged: false,
    },
    userName: {
        elementType: "input",
        name: "Username",
        invalidName: "Please enter a valid Username.",
        placeholder: "Your Username",
        value: "",
        validation: {
            required: true,
            userNameRequired: true,
        },
        valid: false,
        invalidMessage:
            "Username must be between 6 and 12 characters long, must only include letters, numbers, underscores and hyphens",
        touched: false,
        focusChanged: false,
    },
    fullName: {
        elementType: "input",
        name: "Full Name",
        invalidName: "Please enter your Full name.",
        placeholder: "Your Full Name",
        value: "",
        validation: {
            required: true,
        },
        valid: false,
        invalidMessage:
            "Your Full name will be used under Author and Creator headings.",
        touched: false,
        focusChanged: false,
    },
    password: {
        elementType: "password",
        name: "Password",
        invalidName: "Please enter a valid password.",
        placeholder: "Your Password",
        value: "",
        validation: {
            required: true,
            passwordRequired: true,
        },
        valid: false,
        invalidMessage:
            "Password must be 6 to 13 characters, must include no spaces, at least one upper case letter and one number.",
        touched: false,
        focusChanged: false,
    },
    rePassword: {
        elementType: "password",
        name: "Password Check",
        invalidName: "Please enter a valid password.",
        placeholder: "Your Password again",
        value: "",
        validation: {
            required: true,
            rePasswordRequired: true,
        },
        valid: false,
        invalidMessage:
            "Password must be 6 to 13 characters, must include no spaces, at least one upper case letter and one number.",
        touched: false,
        focusChanged: false,
    },
}
