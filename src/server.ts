import { Elysia } from "elysia";
import { snippetRoutes } from "./routes/snippet-routes";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia()
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
    .use(snippetRoutes)
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
