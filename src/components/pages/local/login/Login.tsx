import withRoot from "@/components/hocs/withRoot.tsx";
import { useSession } from "@/components/hooks/useSession.ts";
import { Input } from "@/components/ui/input.tsx";
import { Card } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Album } from "lucide-react";
import { useEffect, useState } from "react";
import { useUserSelector } from "@/slices/userSlice.ts";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, register } = useSession();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user } = useUserSelector();

  useEffect(() => {
    const checkLoggedIn = () => {
      if (user != null) {
        navigate("/blogs");
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <div className={"justify-center flex pt-32"}>
      <Card className={"w-96 h-fit justify-center p-4"}>
        <Album className={"w-24 h-24 mx-auto"} />
        <h1 className={"text-center text-3xl font-bold pb-4"}>Login</h1>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input
                placeholder="Username"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input
                type={"password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div className={"pt-4"}>
          <Button
            className={"bg-pink-600 w-full"}
            onClick={() => login(username, password)}
            variant={"outline"}
          >
            Login
          </Button>
        </div>
        <div className={"pt-4"}>
          <Button
            className={"bg-pink-600 w-full"}
            onClick={() => register(username, password)}
            variant={"outline"}
          >
            Register
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default withRoot(Login);
