import axios from "axios";
import validEmail from "../../utils/emailValidation.js";
import { useContext } from "react";
import { UserContext } from "../providers/user-context.js";
import User from "../../types/userType.js";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const login = userContext.login;

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = new FormData(ev.target as HTMLFormElement);
    const formResult = Object.fromEntries(data.entries());
    const email = formResult.email as string;
    const password = formResult.password as string;
    if (validEmail(email)) {
      try {
        const result = await axios.post(
          "http://localhost:3000/api/v1/auth/login",
          {
            email,
            password,
          }
        );
        const { user } = result.data;

        const newUser: User = {
          id: user._id,
          name: user.name,
          email: user.email,
          plan: user.plan,
        };
        login(newUser);
        alert(`logged in! hello ${result.data.user.name}!`);
        navigate("/");
      } catch (err) {
        if (axios.isAxiosError(err)) {
          switch (err.response?.status) {
            case 400:
              alert(
                "please make sure that both email and password fields were filled"
              );
              break;
            case 401:
              alert("invalid password");
              break;
            case 404:
              alert("there is no user with that email");
              break;
          }
        } else {
          console.error("unexpected error accrued", err);
        }
      }
    }
  }

  return (
    <>
      <form
        onSubmit={(ev) => {
          handleSubmit(ev);
        }}
      >
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
          required
          className="border border-black"
          name="password"
          id="password"
        />
        <br />
        <button className="border border-black">Log in!</button>
      </form>
    </>
  );
}
