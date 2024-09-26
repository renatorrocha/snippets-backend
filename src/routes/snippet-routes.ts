import Elysia from "elysia";
import { snippetService } from "../services/snippet-service";
import { snippetSchema } from "../schemas/snippet-schema";

export const snippetRoutes = new Elysia().group("/snippets", (app) =>
	app
		.get("/", () => snippetService.getAll())
		.get("/:id", ({ params }) => snippetService.getById(params.id))
		.post("/", async ({ body }) => snippetService.create(body), {
			body: snippetSchema,
		})
		.put(
			"/:id",
			async ({ body, params }) => snippetService.update(params.id, body),
			{ body: snippetSchema },
		)
		.delete("/:id", async ({ params }) => snippetService.delete(params.id)),
);
