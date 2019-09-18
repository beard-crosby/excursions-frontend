import validator from "validator"

export function isEmail(val) {
    return validator.isEmail(val)
}

export function isUsername(val) {
    return validator.isAlphanumeric(val)
}
