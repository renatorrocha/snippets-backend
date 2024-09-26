import type { Snippet } from "@prisma/client";
import { db } from "../db";
import type { ISnippet } from "../schemas/snippet-schema";

export const snippetService = {
	async createSnippet(data: ISnippet) {
		return db.snippet.create({
			data,
		});
	},

	async getSnippets() {
		return db.snippet.findMany();
	},

	async getSnippetById(id: string) {
		return db.snippet.findUnique({
			where: { id },
		});
	},

	async updateSnippet(id: string, data: Snippet) {
		return db.snippet.update({
			where: { id },
			data,
		});
	},

	async deleteSnippet(id: string) {
		return db.snippet.delete({ where: { id } });
	},
};
