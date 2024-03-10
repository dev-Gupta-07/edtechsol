import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

import { NextApiRequest, NextApiResponse } from "next";

connect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
       
        if (req.method === 'POST') { 
            console.log(req.body)
            const { name,username, email, password } = req.body;
             console.log(name)
            const existingUser = await User.findOne({$or: [{ email }, { username }]});

            if (existingUser) {
                return res.status(400).json({ error: "User already exists" });
            }
            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(password, salt);
            console.log("gge")
            const newUser = new User({
                name,
                username,
                email,
                password: hashedPassword
            });
            const savedUser = await newUser.save();
            console.log(savedUser)
            const user={
                name:savedUser.name,
                username:savedUser.username,
                email:savedUser.email
            }
            return res.status(200).json({
                message: "User created successfully",
                success: true,
                user
            });
        } else {
            return res.status(405).json({ error: "Method Not Allowed" });
        }
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
}
