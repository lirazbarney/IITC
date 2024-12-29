import axios from "axios";
import validEmail from "../../utils/emailValidation";

export default function Signup() {
  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = new FormData(ev.target as HTMLFormElement);
    const formResult = Object.fromEntries(data.entries());
    const name = formResult.name as string;
    const email = formResult.email as string;
    const password = formResult.password as string;
    if (validEmail(email)) {
      try {
        const result = await axios.post(
          "http://localhost:3000/api/v1/auth/signup",
          { name, email, password }
        );
        alert(`signed up! hello ${result.data.result.name}!`);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          switch (err.response?.status) {
            case 400:
              alert("please make sure all fields were filled");
              break;
            case 409:
              alert("there is already user with that email!");
              break;
            default:
              console.log(err);
              alert(err.message);
          }
        } else {
          console.error("unexpected error accrued", err);
          alert(err);
        }
      }
    }
  }

  return (
    <>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <label htmlFor="name">name: </label>
        <input className="border border-black" name="name" id="name" required />
        <br />
        <label htmlFor="email">email: </label>
        <input
          className="border border-black"
          name="email"
          id="email"
          required
        />
        <br />
        <label htmlFor="password">password: </label>
        <input
          className="border border-black"
          name="password"
          id="password"
          required
        />
        <br />
        <button className="border border-black">Signup!</button>
      </form>
    </>
  );
}