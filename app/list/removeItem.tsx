'use client'
export default function RemoveItem(props:{id: string}) {
  function remove(e: any, target:  string) {
    fetch(`/api/notice?id=${target}`).then(r => {
      r.json()
      console.log(r)
    }).catch((error)=>{
      //인터넷문제 등으로 실패시 실행할코드
      console.log(error)
    })
  }
  return (
    <a onClick={((e) => remove(e, props.id))}>삭제</a>
  );
}