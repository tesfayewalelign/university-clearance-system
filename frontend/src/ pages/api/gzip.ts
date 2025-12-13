// pages/api/gzip.ts
import type { NextApiRequest, NextApiResponse } from "next";
import gzipSize from "gzip-size";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "public/file.txt");
  const content = fs.readFileSync(filePath);
  const size = gzipSize.sync(content);
  res.status(200).json({ size });
}
