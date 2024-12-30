import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Chat } from "./pages/chat/Chat";
import { Layout } from "./app/Layout";

export const App=()=>{
    return(
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Chat />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}