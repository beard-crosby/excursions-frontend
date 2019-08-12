import React from "react"
import * as classes from "./Input.module.scss"
import { FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types'

const InputSwitch = props => {
    const inputClasses = []
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
            inputElement = 
            <FormGroup>
                <Label for={props.name} className={inputClasses.join(' ')}>{label}</Label>
                <Input 
                    type="input" 
                    name="input" 
                    id={props.name}
                    className={inputClasses.join(' ')}
                    placeholder={props.placeholder} 
                    value={props.value} 
                    onChange={props.changed} />
            </FormGroup>
            break
        case 'email':
            inputElement =
            <FormGroup>
                <Label for={props.name} className={inputClasses.join(' ')}>{label}</Label>
                <Input 
                    type="email" 
                    name="email" 
                    id={props.name} 
                    className={inputClasses.join(' ')}
                    placeholder={props.placeholder} 
                    value={props.value} 
                    onChange={props.changed}/>
            </FormGroup>
            break
        case 'password':
            inputElement = 
            <FormGroup>
                <Label for={props.name} className={inputClasses.join(' ')}>{label}</Label>
                <Input 
                    type="password" 
                    name="password" 
                    id={props.name} 
                    className={inputClasses.join(' ')}
                    placeholder={props.placeholder} 
                    value={props.value} 
                    onChange={props.changed}/>
            </FormGroup>
            break
        case 'textarea':
            inputElement = 
            <FormGroup>
                <Label for={props.name}>{label}</Label>
                <Input 
                    type="textarea" 
                    name="textarea" 
                    id={props.name}
                    className={inputClasses.join(' ')}
                    placeholder={props.placeholder} 
                    value={props.value} 
                    onChange={props.changed}/>
            </FormGroup>
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
            inputElement = 
            <FormGroup>
                <Label for={props.name} className={inputClasses.join(' ')}>{label}</Label>
                <Input 
                    type="input" 
                    name="input" 
                    id={props.name}
                    className={inputClasses.join(' ')}
                    placeholder={props.placeholder} 
                    value={props.value} 
                    onChange={props.changed}/>
            </FormGroup>
    }
    return inputElement
}

Input.propTypes = {
    elementType: PropTypes.string,
    key: PropTypes.string,
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

export default InputSwitch
