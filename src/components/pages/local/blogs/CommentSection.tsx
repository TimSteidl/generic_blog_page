import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible.tsx";
import { ArrowBigDown, PlusCircleIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import axios from "axios";
import { Blog } from "@/model.ts";

export function CommentSection(props: {
  blog: Blog;
  callbackfn: (comment: any) => React.JSX.Element;
  onChange: (e) => any;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  onClick: () => Promise<axios.AxiosResponse<any>>;
}) {
  return (
    <Collapsible className={"w-full"}>
      <CollapsibleTrigger>
        <div className={"flex-nowrap flex"}>
          Comments <ArrowBigDown />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className={"justify-between flex flex-nowrap"}>
        <div className={"mt-4 w-full"}>
          {props.blog.comments.length > 0
            ? props.blog.comments.map(props.callbackfn)
            : "No comments yet"}
        </div>

        <Popover>
          <PopoverTrigger>
            <PlusCircleIcon />
          </PopoverTrigger>
          <PopoverContent align={"end"}>
            <Input
              onChange={props.onChange}
              placeholder={"Start typing..."}
            ></Input>
            <Button onClick={props.onClick} className={"mt-4 w-full"}>
              Submit
            </Button>
          </PopoverContent>
        </Popover>
      </CollapsibleContent>
    </Collapsible>
  );
}
