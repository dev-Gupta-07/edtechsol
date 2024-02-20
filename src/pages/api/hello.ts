// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {connect} from'@/dbConfig/dbConfig'
type Data = {
  name: string;
};
connect()
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  res.status(200).json({ name: "John Doe" });
}
