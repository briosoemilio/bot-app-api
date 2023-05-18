import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const optimusPrimeRecord = await prisma.bot.create({
    data: {
      name: 'Optimus Prime',
      purpose: 'I am the prime bot, I will initialize the database.',
      attack: 99999,
      defense: 99999,
      health: 99999,
      energy: 99999,
      intelligence: 99999,
      picture: '',
      isRare: true,
      isFavorite: true,
    },
  });
  console.log({ optimusPrimeRecord });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
