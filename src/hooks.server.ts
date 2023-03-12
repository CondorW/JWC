import { PrismaClient } from "@prisma/client";
/** @type {import('@sveltejs/kit').Handle} */



const prisma = new PrismaClient();
async function prismaMain() {
    await prisma.$connect();
    console.log("DB-Connection successfully established");
    
}
prismaMain()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });


export async function handle({ event, resolve }: any) {
    event.locals.prisma = prisma;
    if (event.url.pathname.startsWith('/custom')) {
        return new Response('custom response');
    }

    const response = await resolve(event);
    return response;
}