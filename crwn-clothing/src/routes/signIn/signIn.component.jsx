import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";
export default function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
}
