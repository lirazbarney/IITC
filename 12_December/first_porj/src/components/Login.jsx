import instagramLight from "../assets/instagram-light.png"
import instagramDark from "../assets/instagram-dark.png"

import "./login.css"
import { useState } from "react";



function Login() {

    const inputStyle = "border p-0.5 text-sm font-light";
    const maxWidth = 100;

    const [isDark, setIsDark] = useState("false")

    function changeTheme(newTheme) {
        setIsDark(newTheme);
    }

    return <>
        <div className={`border-2 p-4 flex flex-col w-100 max-w-100 ${isDark ? "bg-black" : "bg-white"}`}>
            <img className="w-56 self-center" src={isDark ? instagramDark : instagramLight} alt="logo" />
            <form className="flex flex-col gap-2" action="">
                <input className={inputStyle} type="email" placeholder="enter username" required />
                <input className={inputStyle} type="password" placeholder="enter password" required />
                <button className="rounded-md bg-sky-400 text-white font-medium p-1">Log in</button>
            </form>
        </div>
        <button onClick={() => setIsDark(!isDark)}>dark theme</button>
    </>
}

export default Login;
