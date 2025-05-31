import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { z } from "zod";

const UpvoteSchema = z.object({
    streamId: z.string(),
    
})

export async function POST(req: NextRequest) {
    const session = getServerSession();
    const data = UpvoteSchema.parse(await req.json());
}