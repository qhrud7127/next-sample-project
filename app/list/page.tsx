import Link from "next/link";
import RemoveItem from "@/app/list/removeItem";

export default function List(result: any) {
  const results = result;
  function dateFormat(date: Date) {
    let month: number | string = date.getMonth() + 1;
    let day: number | string = date.getDate();
    let hour: number | string = date.getHours();
    let minute: number | string = date.getMinutes();
    let second: number | string = date.getSeconds();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;

    return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
  }

  return (
    <div>
      <h2>공지사항</h2>
      <p>* 공지사항을 조회합니다.</p>
      <input type={"text"} placeholder={'제목으로 검색'}></input>
      <button>검색</button>
      <Link href={'/write'}><h4>입력</h4></Link>
      <table>
        <thead>
        <tr>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>수정</th>
        </tr>
        </thead>
        <thead>
        {results.map((e: any,i: number) =>
              <tr key={i} className={'list-item'}>
                <td> <Link href={'/detail/' + e._id}>{e.title}</Link></td>
                <td>{e?.regId}</td>
                <td>{dateFormat(e?.regdate)}</td>
                <td><Link href={'/update/' + e._id}>수정</Link></td>
                <td><RemoveItem id={e._id.toString()}/></td>
              </tr>
          )}
        </thead>
      </table>
    </div>
  )
}