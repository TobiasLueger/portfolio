// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";



export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { project } = req.query;

  const regex = /\/([^\/]+)$/; // Regex, um den letzten Wert nach dem letzten Schrägstrich zu extrahieren

  const url:any = req.headers.referer;
  const page = url.match(regex)[1];
  


  console.log(page)

  if (page === "mediclin") {
    res.status(200).json({
      page: page,
      pageTitel: "Mediclin"
     });
  }

  if (page === "mennekes") {
    res.status(200).json({
      page: page,
      pageTitel: "Mennekes"
     });
  }

  if (page === "mennekes-headless-ui-components") {
    res.status(200).json({
      page: page,
      pageTitel: "Mennekes Headless UI Components"
     });
  }

  if (page === "kögler") {
    res.status(200).json({
      page: page,
      pageTitel: "Kögler"
     });
  }

  if (page === "europa") {
    res.status(200).json({
      page: page,
      pageTitel: "Europa"
     });
  }
  
}
