import { t } from "elysia";

export const snippetSchema = t.Object({
	title: t.String(),
	description: t.String(),
	code: t.String(),
});

export type ISnippet = typeof snippetSchema.static;
