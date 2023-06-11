import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.nextUrl);
  console.log(request.url);
  if (request.nextUrl.pathname.startsWith("/pc")) {
    return NextResponse.rewrite(
      new URL(
        request.nextUrl.pathname.replace("/pc", ""),
        "http://localhost:3004"
      )
    );
  }
  let token = request.cookies.get("token")?.value;
  console.log("token", token);
  if (!token && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("login", request.nextUrl.origin));
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|Miami%20Dolphins).*)",
  ],
};
