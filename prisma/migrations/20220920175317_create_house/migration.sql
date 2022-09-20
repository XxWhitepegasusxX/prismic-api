-- CreateTable
CREATE TABLE "House" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);
