// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};


const apiBaseUrl = 'http://localhost:8000/api/';
const userUrl = `${apiBaseUrl}users/`;
const courseUrl = `${apiBaseUrl}courses/`;
const enrollmentUrl = `${apiBaseUrl}enrollment/`;
//const forumUrl = `${apiBaseUrl}forum/`;


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' });
}
