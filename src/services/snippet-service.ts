import { db } from "../db";
import type { ISnippet } from "../schemas/snippet-schema";

export const snippetService = {
	async create(data: ISnippet) {
		return db.snippet.create({
			data,
		});
	},

	async getAll() {
		return db.snippet.findMany();
	},

	async getById(id: string) {
		return db.snippet.findUnique({
			where: { id },
		});
	},

	async update(id: string, data: ISnippet) {
		return db.snippet.update({
			where: { id },
			data,
		});
	},

	async delete(id: string) {
		return db.snippet.delete({ where: { id } });
	},
};
