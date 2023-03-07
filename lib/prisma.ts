import { PrismaClient, type Todo, type Top3 } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		log: ['query']
	});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function getTop3(): Promise<{ todos: Todo[] }> {
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

	return { todos: top3 ? top3.todos : [] };
}

export async function createTop3(data: string[]): Promise<Top3> {
	return await prisma.top3.create({
		data: {
			todos: {
				create: data.map((title) => ({ title, complete: false }))
			}
		}
	});
}

export async function updateTodo(id: number, complete: boolean): Promise<Todo> {
	return await prisma.todo.update({
		where: { id },
		data: {
			complete
		}
	});
}
