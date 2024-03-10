import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { all } from "axios";


import { NextApiRequest, NextApiResponse } from "next";

connect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
       
        if (req.method === 'GET') { 
           const allUsers=await User.find({})  
            return res.status(200).json({
                message: "All users provided successfully",
                success: true,
                allUsers
            });
        } else {
            return res.status(405).json({ error: "Method Not Allowed" });
        }
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
}
