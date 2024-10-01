import { Elysia } from "elysia";
import { snippetRoutes } from "./routes/snippet-routes";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia().use(swagger()).use(snippetRoutes).listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
