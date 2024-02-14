import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import AdminDashboard from "./pages/AdminPage/AdminDashboard";
import Login from "./pages/LoginPage/LoginPage";
import { useEffect, useState } from "react";

function App() {
    const [authorization, setAuthorization] = useState(null);

    useEffect(() => {
        console.log(authorization);
    }, [authorization]);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route
                path="/login"
                element={
                    <Login
                        onLoginSuccess={(authorization) => {
                            setAuthorization(authorization);
                        }}
                    />
                }
            />
        </Routes>
    );
}

export default App;
