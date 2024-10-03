import { Elysia } from "elysia";
import { snippetRoutes } from "./routes/snippet-routes";
import { swagger } from "@elysiajs/swagger";
import jwt from "@elysiajs/jwt";
import { authRoutes } from "./routes/auth-routes";

const app = new Elysia()

    .use(snippetRoutes)
    .use(authRoutes)
    .use(
        swagger({
            documentation: {
                info: {
                    title: "CRUD Snippet Documentation",
                    version: "1.0.0",
                },
                tags: [
                    {
                        name: "snippets",
                        description: "Snippets endpoints",
                    },
                ],
            },
        })
    )
    .listen(Bun.env.PORT ?? 3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
