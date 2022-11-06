// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type ExercisePayload = {
  status: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExercisePayload>,
) {
  res
    .status(200)
    .json({ status: `all good: ${Math.round(Math.random() * 10)}` });
}
