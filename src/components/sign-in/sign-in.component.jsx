import React from "react";

import "./sign-in.styles.scss";

import FornmInput from "../form-input/form-input.component"

import CustomButton from "../custom-button/custom-button.component"

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2 >I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FornmInput label="Email" type="email" name="email" value={this.state.email} required onChange={this.handleChange} />
                    <FornmInput label="Password" type="password" name="password" value={this.state.password} required onChange={this.handleChange} />
                    <CustomButton type="submit" value="Submit Form" >Submit</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;