import Elysia, { t } from "elysia";
import type { Snippet } from "@prisma/client";
import { snippetService } from "../services/snippet-service";
import { snippetSchema } from "../schemas/snippet-schema";

export const snippetRoutes = new Elysia().group("/snippets", (app) =>
	app
		.get("/", () => snippetService.getSnippets())
		.post("/", async ({ body }) => snippetService.createSnippet(body), {
			body: snippetSchema,
		}),
);
