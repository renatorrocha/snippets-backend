import { Elysia } from "elysia";
import { snippetRoutes } from "./routes/snippet-routes";

const app = new Elysia().use(snippetRoutes).listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
