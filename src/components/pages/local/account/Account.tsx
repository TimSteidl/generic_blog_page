import withRoot from "@/components/hocs/withRoot.tsx";
import { useUserSelector } from "@/slices/userSlice.ts";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useEffect, useState } from "react";

const Account = () => {
  const { user } = useUserSelector();
  const [edit, setEdit] = useState(true);
  useEffect(() => {
    console.log({ user });
  }, []);
  return (
    <>
      Account
      <Button onClick={() => setEdit(!edit)}>Edit account</Button>
      <Input placeholder={user?.name} disabled={edit}></Input>
      <Input placeholder={user?.password} disabled={edit}></Input>
    </>
  );
};

export default withRoot(Account);
