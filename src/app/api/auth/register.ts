import { NextApiRequest, NextApiResponse } from "next";
import { registerUser } from "@/server/services/authServices";

export async function register(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, email, password } = req.body;
    const user = await registerUser(name, email, password);
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
}
