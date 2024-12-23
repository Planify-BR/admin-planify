import { useSignIn } from "./hooks/useSignIn";
import { Template } from "./template";

export default function SignIn() {
  const hookParams = useSignIn();
  return <Template {...hookParams} />;
}
