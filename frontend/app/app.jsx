import { useState, useEffect } from "react";
import { getMessage } from "./api";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        getMessage().then(data => setMessage(data));
    }, []);

    return (
        <div>
            <h1>Frontend Connected to Backend!</h1>
            <p>Backend says: {message}</p>
        </div>
    );
}

export default App;
