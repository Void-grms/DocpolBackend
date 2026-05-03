-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "nombreCompleto" TEXT NOT NULL,
    "grado" TEXT,
    "cargo" TEXT,
    "cip" TEXT,
    "telefono" TEXT,
    "dependenciaId" TEXT,
    "plan" TEXT NOT NULL DEFAULT 'free',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "User_dependenciaId_fkey" FOREIGN KEY ("dependenciaId") REFERENCES "Dependencia" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Dependencia" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "siglas" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,
    "superiorId" TEXT,
    "region" TEXT,
    "direccion" TEXT,
    CONSTRAINT "Dependencia_superiorId_fkey" FOREIGN KEY ("superiorId") REFERENCES "Dependencia" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TipoDocumento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "grupo" TEXT NOT NULL,
    "categoria" TEXT NOT NULL DEFAULT 'General',
    "clasificacion" TEXT NOT NULL DEFAULT 'comun',
    "descripcion" TEXT NOT NULL DEFAULT '',
    "camposJson" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Documento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "tipoId" INTEGER NOT NULL,
    "numeroCorrelativo" INTEGER NOT NULL DEFAULT 0,
    "anio" INTEGER NOT NULL,
    "dependenciaId" TEXT,
    "siglas" TEXT NOT NULL DEFAULT '',
    "estado" TEXT NOT NULL DEFAULT 'borrador',
    "clasificacion" TEXT NOT NULL DEFAULT 'comun',
    "datos" TEXT NOT NULL,
    "contenidoHtml" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Documento_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Documento_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "TipoDocumento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Documento_dependenciaId_fkey" FOREIGN KEY ("dependenciaId") REFERENCES "Dependencia" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Expediente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "asunto" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'abierto',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Expediente_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ExpedienteDocumento" (
    "expedienteId" TEXT NOT NULL,
    "documentoId" TEXT NOT NULL,
    "orden" INTEGER NOT NULL,
    "folioInicio" INTEGER,
    "folioFin" INTEGER,

    PRIMARY KEY ("expedienteId", "documentoId"),
    CONSTRAINT "ExpedienteDocumento_expedienteId_fkey" FOREIGN KEY ("expedienteId") REFERENCES "Expediente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ExpedienteDocumento_documentoId_fkey" FOREIGN KEY ("documentoId") REFERENCES "Documento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Contador" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
