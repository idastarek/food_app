-- CreateTable
CREATE TABLE "public"."ingredients" (
    "ingredientId" SERIAL NOT NULL,
    "ingredientName" TEXT NOT NULL,
    "ingredientQuantity" TEXT NOT NULL,
    "ingredientUnit" TEXT NOT NULL,

    CONSTRAINT "ingredients_pkey" PRIMARY KEY ("ingredientId")
);

-- CreateTable
CREATE TABLE "public"."recipes" (
    "recipeId" SERIAL NOT NULL,
    "recipeName" TEXT NOT NULL,
    "ingredients" JSONB NOT NULL,
    "instructions" TEXT[],

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("recipeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ingredients_ingredientName_key" ON "public"."ingredients"("ingredientName");

-- CreateIndex
CREATE UNIQUE INDEX "recipes_recipeName_key" ON "public"."recipes"("recipeName");
