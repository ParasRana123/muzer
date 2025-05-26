"use client";
import { signIn } from "next-auth/react";

export function Appbar() {
    return <div className="flex justify-between">
        <div>
            Muzi
        </div>
        <div>
            <button className="m-2 p-2 bg-blue-400" onClick={() => signIn()}>Sign In</button>
        </div>
    </div>
}