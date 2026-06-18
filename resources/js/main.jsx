import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './components/ui/theme-provider';

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);