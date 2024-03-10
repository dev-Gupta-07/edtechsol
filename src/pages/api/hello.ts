// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {connect} from'@/dbConfig/dbConfig'

const data ={
  "posts": [
    { "id": 1, "title": "Post 1", "body": "Body of post 1" },
    { "id": 2, "title": "Post 2", "body": "Body of post 2" }
  ],
  "comments": [
    { "id": 1, "postId": 1, "body": "Comment 1" },
    { "id": 2, "postId": 1, "body": "Comment 2" },
    { "id": 3, "postId": 2, "body": "Comment 3" }
  ]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  res.status(200).json(data);
}
