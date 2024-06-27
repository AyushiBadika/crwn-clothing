import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumetFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-up-form.styles.scss";
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

export default function SignUpForm() {
  const [formField, setFromField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;

  const resetFields = () => {
    setFromField(defaultFormField);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumetFromAuth({ ...user, displayName });
      resetFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("Cannor create user, email already in use");
      else console.log("User creation encountered an erro" + error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action="POST" onSubmit={(event) => handleSubmit(event)}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

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

        <FormInput
          label="Confirm password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}
