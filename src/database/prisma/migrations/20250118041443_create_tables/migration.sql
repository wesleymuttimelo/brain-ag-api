-- CreateTable
CREATE TABLE "farmer" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,

    CONSTRAINT "farmer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "farm" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "totalArea" DOUBLE PRECISION NOT NULL,
    "arableArea" DOUBLE PRECISION NOT NULL,
    "vegetationArea" DOUBLE PRECISION NOT NULL,
    "farmerId" UUID NOT NULL,

    CONSTRAINT "farm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "harvest" (
    "id" UUID NOT NULL,
    "year" INTEGER NOT NULL,
    "farmId" UUID NOT NULL,

    CONSTRAINT "harvest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crop" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "harvestId" UUID NOT NULL,
    "farmId" UUID NOT NULL,

    CONSTRAINT "crop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "farmer_document_key" ON "farmer"("document");

-- CreateIndex
CREATE INDEX "idx_farmer_cpf_cnpj" ON "farmer"("document");

-- CreateIndex
CREATE INDEX "idx_farm_farmerId" ON "farm"("farmerId");

-- CreateIndex
CREATE INDEX "idx_harvest_farmId" ON "harvest"("farmId");

-- CreateIndex
CREATE INDEX "idx_crop_harvestId" ON "crop"("harvestId");

-- CreateIndex
CREATE INDEX "idx_crop_farmId" ON "crop"("farmId");

-- AddForeignKey
ALTER TABLE "farm" ADD CONSTRAINT "farm_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "farmer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "harvest" ADD CONSTRAINT "harvest_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "crop" ADD CONSTRAINT "crop_harvestId_fkey" FOREIGN KEY ("harvestId") REFERENCES "harvest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "crop" ADD CONSTRAINT "crop_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "farm"("id") ON DELETE CASCADE ON UPDATE CASCADE;
