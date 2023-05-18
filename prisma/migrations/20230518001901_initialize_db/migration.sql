-- CreateTable
CREATE TABLE "Bot" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "attack" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "health" INTEGER NOT NULL,
    "energy" INTEGER NOT NULL,
    "intelligence" INTEGER NOT NULL,
    "picture" TEXT,
    "isRare" BOOLEAN,
    "isFavorite" BOOLEAN DEFAULT false,

    CONSTRAINT "Bot_pkey" PRIMARY KEY ("id")
);
