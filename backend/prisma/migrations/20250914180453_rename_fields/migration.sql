/*
  Warnings:

  - The primary key for the `ingredients` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ingredientId` on the `ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `ingredientName` on the `ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `ingredientQuantity` on the `ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `ingredientUnit` on the `ingredients` table. All the data in the column will be lost.
  - The primary key for the `recipes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `instructions` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `recipeId` on the `recipes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `ingredients` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `ingredients` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."ingredients_ingredientName_key";

-- AlterTable
ALTER TABLE "public"."ingredients" DROP CONSTRAINT "ingredients_pkey",
DROP COLUMN "ingredientId",
DROP COLUMN "ingredientName",
DROP COLUMN "ingredientQuantity",
DROP COLUMN "ingredientUnit",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "quantity" TEXT NOT NULL,
ADD COLUMN     "unit" TEXT NOT NULL,
ADD CONSTRAINT "ingredients_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."recipes" DROP CONSTRAINT "recipes_pkey",
DROP COLUMN "instructions",
DROP COLUMN "recipeId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "instruction" TEXT[],
ADD CONSTRAINT "recipes_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "ingredients_name_key" ON "public"."ingredients"("name");
