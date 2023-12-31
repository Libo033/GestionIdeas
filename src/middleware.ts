import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const mySession: RequestCookie | undefined = request.cookies.get("mySession");

  if (mySession !== undefined) {
    let secret_key: Uint8Array = new TextEncoder().encode("valentin");
    const value = await jwtVerify(mySession.value, secret_key);

    if (value.payload.uid) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/home", "/home/:path*"],
};
