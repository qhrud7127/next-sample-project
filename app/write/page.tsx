export default function Write() {
  return (
    <div>
      Write 화면이라구욧
      <form action={"/api/notice"} method={'POST'}>
        <label title="title">title :</label>
        <input type={"text"} name={'title'}/>
        <label title="content">content :</label>
        <input type={"text"} name={'content'}/>
        <button type={"submit"}>submit</button>
      </form>
    </div>
  )
}