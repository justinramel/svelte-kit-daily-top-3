import type { PageServerLoad } from './$types';
import { prisma } from '../../lib/prisma';
import type { Top3 } from '@prisma/client';

export const load = (async () => {
	const top3 = await prisma.top3.findFirst({
		where: {
			createdAt: {
				equals: new Date()
			}
		},
		include: {
			todos: {
				orderBy: {
					id: 'asc'
				}
			}
		}
	});

	if (!top3) throw Error('NO DATA!');

	return top3;
}) satisfies PageServerLoad<Top3>;
