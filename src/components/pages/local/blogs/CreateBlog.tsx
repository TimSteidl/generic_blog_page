import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { Plus, RefreshCcw } from "lucide-react";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Button } from "@/components/ui/button.tsx";
import { getAllBlogs } from "@/components/api/blog.ts";
import { setBlogs } from "@/slices/blogSlice.ts";
import { useAppDispatch } from "@/store/reduxHooks.ts";

export function CreateBlog(props: {
  onChange: (event: any) => any;
  onChange1: (event: any) => any;
  onClick: () => void;
}) {
  const dispatch = useAppDispatch();
  return (
    <>
      <Popover
        onOpenChange={() =>
          getAllBlogs().then((blogs) => {
            dispatch(setBlogs(blogs));
          })
        }
      >
        <PopoverTrigger>
          <Plus
            className={
              "text-secondary mt-2 ml-4 hover:animate-bounce hover:text-pink-400 border rounded"
            }
            size={"25px"}
          />
        </PopoverTrigger>
        <PopoverContent align={"start"}>
          <div className={"flex flex-col space-y-1.5 mb-1"}>
            <Input placeholder="Title" onChange={props.onChange} />
          </div>
          <div className={"flex flex-col space-y-1.5"}>
            <Textarea placeholder="Content" onChange={props.onChange1} />
          </div>
          <div className={"pt-4"}>
            <Button
              className={"bg-pink-600 w-full"}
              onClick={props.onClick}
              variant={"outline"}
            >
              Create new Post
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <Button
        onClick={() => {
          getAllBlogs().then((blogs) => {
            dispatch(setBlogs(blogs));
          });
        }}
      >
        <RefreshCcw
          className={
            "hover:animate-spin-slow hover:text-pink-400 border rounded"
          }
        />
      </Button>
    </>
  );
}
