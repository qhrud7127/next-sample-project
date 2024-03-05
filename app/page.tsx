import {connectDB} from "@/util/setupDB";
import List from "@/app/list/page";
import Link from "next/link";

export default async function Home() {
  let db = (await connectDB).db("sample01");
  let result = await db.collection('notice').find().toArray();
  return (
    <div>
      아주 기본적인 공지사항을 만들어보겠습니다.<br/>
      여기는 메인화면<br/>
      tr 따ㄹㅏ잡기 레쓰고<br/>
      <Link href={'/user/join'}> <p>회원가입</p> </Link>
      <List result={result}></List>
    </div>
  );
}
