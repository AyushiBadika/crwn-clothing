import { useState } from "react";
import {
  createUserDocumetFromAuth,
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormField = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [formField, setFromField] = useState(defaultFormField);
  const { email, password } = formField;

  const resetFields = () => {
    setFromField(defaultFormField);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromField({ ...formField, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();

    await createUserDocumetFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Incorrect Password");
          break;

        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form action="POST" onSubmit={(event) => handleSubmit(event)}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}
