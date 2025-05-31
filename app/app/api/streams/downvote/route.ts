import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
    const data = CreateStreamSchema.parse(await req.json());
}