import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
  const jobs = await prisma.job.findMany({
    take: 6,
    include: {
      CategoryJob: true,
      Company: {
        include: {
          Companyoverview: true,
        },
      },
    },
  });

  return NextResponse.json(jobs);
}
