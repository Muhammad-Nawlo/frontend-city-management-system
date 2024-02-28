import { Button } from "@/components/UI/Button";
import { storage } from "@/utils/storage";

const AuthButton = () => {
  const token = storage.getToken();
  if (!token) return <SigninButton />;
  return (
    <div>
      {/* <img src='' alt='' /> */}
      <span className="w-16 h-16 bg-gray-600 rounded-full"></span>
    </div>
  );
};

export default AuthButton;

function SigninButton() {
  return <Button>Sign in</Button>;
}
