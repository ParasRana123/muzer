import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const UpvoteSchema = z.object({
    streamId: z.string(),
    
})

export async function POST(req: NextRequest) {
    const session = getServerSession();
    const user = await prismaClient.user.findFirst({
        where: {
            email: session?.user?.email ?? ""
        }
    });
    if(!user) {
        return NextResponse.json({
            message: "Unauthenticated"
        } , {
            status: 403
        })
    }

    try {

    } catch () {

    }
    const data = UpvoteSchema.parse(await req.json());
}