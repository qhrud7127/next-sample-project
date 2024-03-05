import {connectDB} from "@/util/setupDB";
import {ObjectId} from "bson";

export default async function Detail(props: any) {
  let db = (await connectDB).db("sample01");
  let result = await db.collection('notice').findOne({_id: new ObjectId(props.params.id)});

  return (
    <form >
      <label title="title">title :</label>
      <input type={"text"} name={'title'} defaultValue={result.title} readOnly={true}/>
      <input type={"hidden"} name={'_id'} defaultValue={result._id} readOnly={true}/>
      <label title="content">content :</label>
      <input type={"text"} name={'content'} defaultValue={result.content} readOnly={true}/>
    </form>
  )
}