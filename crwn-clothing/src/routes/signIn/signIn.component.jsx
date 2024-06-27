import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopUp,
  createUserDocumetFromAuth,
} from "../../utils/firebase/firebase.utils";
export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();

    const userDocRef = await createUserDocumetFromAuth(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <SignUpForm />
    </div>
  );
}
