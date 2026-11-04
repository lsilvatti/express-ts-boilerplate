import type { Request, Response, NextFunction } from 'express';
import { ZodObject, ZodError } from 'zod';

export const validateRequest = (schema: ZodObject) => 
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ errors: error.issues });
        return;
      }
      return next(error);
    }
  };