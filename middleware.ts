import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Rewrite /rewritten/[slug] to /route?slug=[slug]
  // URL bar should show as `/rewritten/hello-world`,
  // but it should render the page using `/route?slug=hello-world`
  if (url.pathname.startsWith("/rewritten/")) {
    url.pathname = "/route";
    url.searchParams.set("slug", url.pathname.split("/")[1]);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
