import React from "react"
import * as classes from "./Input.module.scss"
import PropTypes from 'prop-types'
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"

const TextFieldWithSyles = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#111111',
        },
        '& .MuiInput-underline': {
            '&:after': {
                borderBottomColor: '#111111'
            }
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#111111',
            },
            '&:hover fieldset': {
                borderColor: '#111111',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#111111',
            },
        },
    },
})(TextField);

const Input = props => {
    const inputClasses = [classes.Input]
    if (props.invalid && props.validation && props.touched && props.focusChanged) {
        inputClasses.push(classes.Invalid)
    }

    let label = props.name
    if (props.invalid && props.touched && props.focusChanged) {
        label = props.invalidName
    }

    let inputElement = null
    switch (props.elementType) {
        case 'input':
            inputElement = <TextFieldWithSyles
                label={label}
                placeholder={props.placeholder}
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}
                margin='normal' />
            break
        case 'password':
            inputElement = <TextFieldWithSyles
                label={label}
                type='password'
                placeholder={props.placeholder}
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}
                margin='normal' />
            break
        case 'textarea':
            inputElement = <TextFieldWithSyles
                label={label}
                placeholder={props.placeholder}
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}
                multiline
                rows='4'
                margin='normal'
                variant='outlined' />
            break
        case 'file':
            inputElement =
                <div className={classes.fileWrapper}>
                    <label htmlFor="file">
                        <input
                            type="file"
                            name={props.name}
                            id="file"
                            className={classes.input}
                            value={props.value}
                            onChange={props.changed} />
                        <p>{props.placeholder}</p>
                        <div className={classes.img}>{props.img}</div>
                    </label>
                </div>
            break
        default:
            inputElement = <TextFieldWithSyles
                placeholder={props.placeholder}
                label={label}
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}
                margin='normal' />
    }
    return inputElement
}

Input.propTypes = {
    elementType: PropTypes.string.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    invalid: PropTypes.bool,
    validation: PropTypes.object,
    invalidMessage: PropTypes.string,
    img: PropTypes.string,
    touched: PropTypes.bool,
    focusChanged: PropTypes.bool,
    value: PropTypes.string,
    changed: PropTypes.func
}

export default Input
