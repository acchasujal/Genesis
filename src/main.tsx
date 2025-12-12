import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import AppWithIntro from "./AppIntro";

console.log("main: starting render");
createRoot(document.getElementById("root")!).render(<AppWithIntro><App /></AppWithIntro>);