-- CreateTable
CREATE TABLE "People" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "gender" VARCHAR(255) NOT NULL,
    "hairColour" VARCHAR(255) NOT NULL,
    "height" VARCHAR(255) NOT NULL,
    "mass" VARCHAR(255) NOT NULL,
    "skinColour" VARCHAR(255) NOT NULL,
    "species" VARCHAR(255) NOT NULL,
    "eyeColour" VARCHAR(255) NOT NULL,
    "homeWorld" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "People_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "People_name_key" ON "People"("name");
