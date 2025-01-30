import { env } from "@/env"
import { shared } from "shared"
import { setupCounter } from "./counter.ts"
import "./style.css"
import viteLogo from "/vite.svg"
import typescriptLogo from "./typescript.svg"

const app = document.querySelector<HTMLDivElement>("#app")
if (!app) throw new Error("App not found")
app.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
  `

const counter = document.querySelector<HTMLButtonElement>("#counter")
if (!counter) throw new Error("Counter not found")
setupCounter(counter)

console.log(shared)

const response = await fetch(env.VITE_SERVER_URL)
const data = await response.text()
console.log(data)
