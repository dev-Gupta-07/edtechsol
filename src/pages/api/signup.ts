import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

import { NextApiRequest, NextApiResponse } from "next";

connect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
       
        if (req.method === 'POST') { 
            const { name,username, email, password } = req.body;
             console.log(name)
            const existingUser = await User.findOne({$or: [{ email }, { username }]});

            if (existingUser) {
                return res.status(400).json({ error: "User already exists" });
            }
            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(password, salt);
            const newUser = new User({
                name,
                username,
                email,
                password: hashedPassword
            });
            const savedUser = await newUser.save();
            return res.status(200).json({
                message: "User created successfully",
                success: true,
                savedUser
            });
        } else {
            return res.status(405).json({ error: "Method Not Allowed" });
        }
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
}
