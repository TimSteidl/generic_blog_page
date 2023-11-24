import withRoot from "@/components/hocs/withRoot.tsx";
import { useBlogs } from "@/components/hooks/useBlogs.ts";
import { useBlogSelector } from "@/slices/blogSlice.ts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card.tsx";
import { createBlog } from "@/components/api/blog.ts";
import React from "react";
import { Badge } from "@/components/ui/badge.tsx";
import { useUserSelector } from "@/slices/userSlice.ts";
import { CreateBlog } from "@/components/pages/local/blogs/CreateBlog.tsx";
import { submitComment } from "@/components/api/comment.ts";
import { Separator } from "@/components/ui/separator.tsx";
import { CommentSection } from "@/components/pages/local/blogs/CommentSection.tsx";

const Blogs = () => {
  useBlogs();
  const { blogs } = useBlogSelector();
  const { user } = useUserSelector();
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [currentComment, setCurrentComment] = React.useState<string>("");

  return (
    <Card className={"min-h-screen h-fit w-full bg-popover-foreground"}>
      <CreateBlog
        onChange={(event) => setTitle(event.target.value)}
        onChange1={(event) => setContent(event.target.value)}
        onClick={() => {
          createBlog(title, content, user?.id ? user.id : 0).then((answer) => {
            console.log(answer);
          });
        }}
      />
      <hr />
      {blogs.map((blog) => (
        <Card key={blog.blog.id} className={"m-3"}>
          <CardHeader>
            <div className={"text-pink-300"}>{blog.blog.header}</div>
          </CardHeader>
          <CardContent>{blog.blog.content}</CardContent>
          <CardFooter className={"flex justify-between w-full flex-nowrap"}>
            <div className={"text-pink-300"}>
              <Badge className={"mr-4"}>
                {blog.user ? blog.user.name : "Anonymous User"}
              </Badge>
              <Badge className={"mr-4"}>
                Rating: {blog.rating ? blog.rating.value : 0}
              </Badge>
              <Badge className={"mr-4"}>
                Comments: {blog.comments ? blog.comments.length : 0}
              </Badge>
            </div>
          </CardFooter>
          <CardFooter className={"w-full"}>
            <CommentSection
              blog={blog}
              callbackfn={(comment) => (
                <div className={"mt-4"} key={comment.id}>
                  {comment.content}
                  <br />
                  <div className={"text-pink-200"}>
                    Created:{" "}
                    {comment.createdAt
                      .toString()
                      .split("T")[1]
                      .split("+")[0]
                      .split(".")[0]
                      .substring(0, 5)}
                    , {comment.createdAt.toString().split("T")[0].split("-")[2]}
                    .{comment.createdAt.toString().split("T")[0].split("-")[1]}
                  </div>

                  <Separator orientation={"horizontal"} />
                </div>
              )}
              onChange={(e) => setCurrentComment(e.target.value)}
              onClick={() =>
                submitComment(
                  blog.blog.id,
                  currentComment,
                  user?.id ? user.id : 0,
                )
              }
            />
          </CardFooter>
        </Card>
      ))}
    </Card>
  );
};

export default withRoot(Blogs);
