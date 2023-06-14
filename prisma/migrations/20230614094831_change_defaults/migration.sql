/*
  Warnings:

  - Made the column `image` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "image" SET DEFAULT '',
ALTER COLUMN "published" SET DEFAULT false;
