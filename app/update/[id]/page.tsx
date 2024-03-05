import {connectDB} from "@/util/setupDB";
import {ObjectId} from "bson";
import RemoveItem from "@/app/list/removeItem";

export default async function Update(props: any) {
  let db = (await connectDB).db('sample01');
  let data = await db.collection('notice').findOne({_id: new ObjectId(props.params.id)});

  return (
    <div>
      Update 화면이라구욧
      <form action={'/api/notice'} method={'POST'}>
        <label title="title">title :</label>
        <input type={"text"} name={'title'} defaultValue={data.title}/>
        <input type={"hidden"} name={'_id'} defaultValue={data._id}/>
        <label title="content">content :</label>
        <input type={"text"} name={'content'} defaultValue={data.content}/>
        <button type={"submit"}>submit</button>
      </form>
      <RemoveItem id={data._id.toString()}/>
    </div>
  )
}