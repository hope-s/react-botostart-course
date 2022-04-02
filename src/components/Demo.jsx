import React, { Suspense } from "react";
import { useAxios } from "use-axios";

export default function Demo() {
  const {
    data: { comments },
  } = useAxios("https://api.freerealapi.com/comments");
  console.log(comments);
  return (
    <div style={{ textAlign: "center" }}>
      {comments.map((i, index) => (
        <p key={index}>{i.text}</p>
      ))}
    </div>
  );
}
