import { env } from "@/env"
import { shared } from "shared"

const server = Bun.serve({
  port: env.PORT,
  fetch(req) {
    const res = new Response("Hello from server!")
    res.headers.set("Access-Control-Allow-Origin", "*")
    res.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS",
    )
    return res
  },
})

console.log(`Server is running on ${server.url}`)

console.log(shared)
