import {connectDB} from "../../util/setupDB";
import {ObjectId} from "bson";

export default async function handler(req, res) {
  let db = (await connectDB).db("sample01");
  let result;
  console.log('req!!!!!!!!!')
  console.log(req)
  let body = req.body;
  switch (req.method) {
    case 'GET':
      if(req.query?.id) {
        result = await db.collection('notice').deleteOne({_id: new ObjectId(req.query?.id)});
        res.redirect(302, '/')
      } else {
        result = await db.collection('notice').find().toArray();
        res.status(200).json(result)
      }
      break;
    case 'POST':
      console.log(body)
      if (body.title == '') {
        return res.status(500).json('제목써라')
      }
      if (body.content == '') {
        return res.status(500).json('content써라')
      }
      try {
        if (body._id) {
          result = await db.collection('notice').updateOne({_id: new ObjectId(body._id)}, {
            $set: {
              title: body.title,
              content: body.content
            }
          });
          res.redirect(302, `/detail/${body._id}`)
        } else {
          result = await db.collection('notice').insertOne({...body, regdate: new Date(), regId: 'qhrud7127'});
          res.redirect(302, `/detail/${result.insertedId}`)
        }
        break;
      } catch (error) {
        res.status(400).json(body)
        break;
      }
    case 'DELETE' : {
      result = await db.collection('notice').deleteOne({_id: new ObjectId(body)});
      res.redirect(302, '/')
    }
    default:
      res.status(400).json(body)
  }

}