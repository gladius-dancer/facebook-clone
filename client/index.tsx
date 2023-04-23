import * as React from "react";
import App from "./src/App";
import { createRoot } from "react-dom/client";
import {Provider} from "react-redux";
import {setupStore} from "./src/store/store";

const container = document.getElementById("root");
const root = createRoot(container!);
const store = setupStore()

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
