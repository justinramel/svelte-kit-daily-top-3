import type { PageServerLoad, Actions } from './$types';
import { createTop3, getTop3, updateTodo } from '../../lib/prisma';
import type { Todo } from '@prisma/client';

export const load = (async () => {
	return await getTop3();
}) satisfies PageServerLoad<{ todos: Todo[] }>;

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		return createTop3((data.getAll('todo') as string[]) ?? []);
	},
	update: async ({ request }) => {
		const data = await request.formData();
		const id = Number(data.get('id'));
		const complete = data.get('todo') === 'on';
		return updateTodo(id, complete);
	}
} satisfies Actions;
