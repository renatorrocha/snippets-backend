import Elysia from "elysia";
import { snippetService } from "../services/snippet-service";
import { snippetSchema } from "../schemas/snippet-schema";

export const snippetRoutes = new Elysia({
    detail: {
        tags: ["snippets"],
    },
}).group("/snippets", (app) =>
    app
        .get("/", () => snippetService.getAll(), {
            detail: {
                summary: "Get all Snippets",
            },
        })
        .get("/:id", ({ params }) => snippetService.getById(params.id), {
            detail: {
                summary: "Get Snippet by id",
            },
        })
        .post("/", async ({ body }) => snippetService.create(body), {
            body: snippetSchema,
            detail: {
                summary: "Create new Snippet",
            },
        })
        .put(
            "/:id",
            async ({ body, params }) => snippetService.update(params.id, body),
            {
                body: snippetSchema,
                detail: {
                    summary: "Update Snippet",
                },
            }
        )
        .delete(
            "/:id",
            async ({ params }) => snippetService.delete(params.id),
            {
                detail: {
                    summary: "Delete Snippet",
                },
            }
        )
);
