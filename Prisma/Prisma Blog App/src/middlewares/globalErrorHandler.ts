import { NextFunction, Request, Response } from "express";
import { Prisma } from "generated/prisma/client";

function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let statusCode = 500;
  let errorMessage = "Internal server error";
  let errorDetails = err;

  // 1️⃣ Validation error
  if (err instanceof Prisma.PrismaClientValidationError) {
    statusCode = 400;
    errorMessage = "Invalid or missing fields provided";

  // 2️⃣ Known request errors (most important)
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2000":
        statusCode = 400;
        errorMessage = "Value is too long for the field";
        break;

      case "P2001":
        statusCode = 404;
        errorMessage = "Record not found";
        break;

      case "P2002":
        statusCode = 409;
        errorMessage = "Unique constraint failed (already exists)";
        break;

      case "P2003":
        statusCode = 400;
        errorMessage = "Foreign key constraint failed";
        break;

      case "P2004":
        statusCode = 400;
        errorMessage = "Database constraint failed";
        break;

      case "P2005":
      case "P2006":
      case "P2007":
        statusCode = 400;
        errorMessage = "Invalid data provided";
        break;

      case "P2011":
        statusCode = 400;
        errorMessage = "Null constraint violation";
        break;

      case "P2012":
        statusCode = 400;
        errorMessage = "Missing required value";
        break;

      case "P2014":
        statusCode = 400;
        errorMessage = "Relation constraint violation";
        break;

      case "P2025":
        statusCode = 404;
        errorMessage = "Record not found";
        break;

      default:
        statusCode = 400;
        errorMessage = "Database error";
    }

  // 3️⃣ Unknown request error
  } else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    statusCode = 500;
    errorMessage = "Unknown database error";

  // 4️⃣ DB initialization error
  } else if (err instanceof Prisma.PrismaClientInitializationError) {
    statusCode = 500;
    errorMessage = "Database connection failed";

  // 5️⃣ Prisma engine crash
  } else if (err instanceof Prisma.PrismaClientRustPanicError) {
    statusCode = 500;
    errorMessage = "Critical database error";
  }

  res.status(statusCode).json({
    success: false,
    message: errorMessage,
    error: process.env.NODE_ENV === "production" ? undefined : errorDetails,
  });
}

export default errorHandler;
