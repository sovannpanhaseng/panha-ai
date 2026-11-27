import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Phones on the local network load the dev server over its LAN IP
  // (e.g. http://192.168.x.x:3000). Next blocks dev chunks from hosts it
  // does not know, which leaves the client header un-hydrated on mobile.
  allowedDevOrigins: ["192.168.*.*"],
};

export default nextConfig;
