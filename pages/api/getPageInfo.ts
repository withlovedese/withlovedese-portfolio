import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../typings";
//import {PageInfo, Social} from '../../typings'

const query = groq`
    *[_type == "project"][0]
`;

type Data = {
  pageInfo: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = await sanityClient.fetch(query);
  res.status(200).json({ pageInfo });
}
