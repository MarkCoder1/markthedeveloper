import { NextResponse } from 'next/server';

export const GET = () => {
  const body = `User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: https://example.com/sitemap.xml`;
  return new NextResponse(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
};