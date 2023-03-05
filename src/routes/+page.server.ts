
/** @type {import('./$types').PageServerLoad} */
export async function load(event:any) {
  const { prisma } = event.locals;
  async function loadCardData(){
    const allCards: Array<string> = await prisma.card.findMany();
    console.log(allCards);
    return {allCards};
    
  }
  return (loadCardData());

}