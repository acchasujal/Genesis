import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("main: starting render");
createRoot(document.getElementById("root")!).render(<App />);

  
