import { NextResponse } from "next/server";
import packageJson from "../../../../package.json";

interface HealthResponse {
  status: "healthy";
  version: string;
  uptime: number;
  timestamp: string;
}

export async function GET(): Promise<NextResponse<HealthResponse>> {
  return NextResponse.json({
    status: "healthy",
    version: packageJson.version,
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
  });
}
