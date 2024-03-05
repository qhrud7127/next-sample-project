export default function Join() {
  return (
    <div>회원가입
      <form action={'/api/user'} method={'POST'}>
        <input type={"text"} name={'id'} placeholder={'id'}/>
        <input type={"password"} name={'pw'} placeholder={'pw'}/>
        <input type={"password"} name={'confirm'} placeholder={'pw-confirm'}/>
        <button>가입</button>
      </form>
    </div>
  );
}