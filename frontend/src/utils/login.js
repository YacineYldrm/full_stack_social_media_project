import dotenv from "dotenv";
import silentRefresh from "./silentRefresh";

const login = async (email, password, stateSetter) => {
    const accessToken = await fetch(
        import.meta.env.VITE_API_KEY + "userData/login",
        {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: { "Content-Type": "application/json" },
        }
    );
    const { success, tokens } = await accessToken.json();
    stateSetter(`Bearer ${tokens.accessToken}`);
    silentRefresh(tokens.accessToken, tokens.refreshToken, stateSetter);
};

export default login;
