import { NextApiRequest, NextApiResponse } from 'next';
import { sampleUserData } from '../../../utils/sample-data';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {

    if(!Array.isArray(sampleUserData)) {
        throw new Error('Cannot find user data')
    }

    res.status(200).json(sampleUserData)

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'error' });
  }
};

export default handler;