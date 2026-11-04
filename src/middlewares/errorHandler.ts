import type { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  const message = err.message || 'Erro interno do servidor';
  
  res.status(status).json({ error: message });
};