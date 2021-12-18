import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

import constants from "../../lib/constants";

const defaultExport = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(`${constants.FIXER_API_URL}/latest`, {
      params: {
        access_key: constants.FIXER_ACCESS_KEY,
      },
    });
    return res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    throw new Error();
  }
};

export default defaultExport;
