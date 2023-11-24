import { Card, CardContent } from "@/components/ui/card.tsx";
import { ModeToggle } from "@/components/ui/mode-toggle.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Home, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input.tsx";
import { useSession } from "@/components/hooks/useSession.ts";

export const NavigationBar = () => {
  const { logout } = useSession();
  const navigate = useNavigate();
  return (
    <div className={"flex justify-center"}>
      <Card className={"w-1/2 h-full m-2 bg-pink-600"}>
        <div className={"flex justify-between"}>
          <CardContent className={"pt-4 w-fit flex"}>
            <Button onClick={() => navigate("/blogs")} size={"icon"}>
              <Home />
            </Button>
            <Button
              className={"ml-4 bg-card text-accent-foreground"}
              onClick={() => navigate("/account")}
              size={"icon"}
            >
              <User />
            </Button>
          </CardContent>
          <CardContent className={"pt-4 flex-nowrap flex w-full"}>
            <Input placeholder={"Start typing..."} autoFocus></Input>
          </CardContent>
          <CardContent className={"pt-4 w-fit flex"}>
            <ModeToggle />
            <Button
              onClick={() => {
                navigate("/login");
                logout();
              }}
              className={"ml-4"}
              size={"icon"}
            >
              <LogOut />
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};
