import {connectDB} from "../../util/setupDB";

export default async function handler(req, res) {
  let db = (await connectDB).db("sample01");

  if (req.method = 'POST') {
    let body = req.body;
    if (body.pw != body.confirm) {
      return res.status(500).json('pw 확인')
    }

    let duplicate = await db.collection('user').findOne({id: body.id});
    if (duplicate?.id) {
      return res.status(500).json('id 중복')
    }

    try {
      await db.collection("user").insertOne({id: body.id, pw: body.pw});
      res.redirect(302, '/')
    } catch (error) {
      res.status(400).json(req.body)
    }
  }

}