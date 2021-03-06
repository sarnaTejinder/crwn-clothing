import React from "react";

import "./sign-in.styles.scss";

import FornmInput from "../form-input/form-input.component"

import CustomButton from "../custom-button/custom-button.component"

import { auth, signInWithGoogle } from "../../firebase/firebase.utils"

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" })
        } catch (error) {
            console.log(error);
        }
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
                    <div className="buttons">
                        <CustomButton type="submit" >SIGN IN</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                    </div></form>
            </div>
        )
    }
}

export default SignIn;