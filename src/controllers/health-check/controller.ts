import {Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();
export class ApiHealthCheckController {
  public static async healthCheck(
    req: Request,
    res: Response
  ): Promise<Response> {
    const task = 'API-Health-Check';
    try {
      return res.json({
        status: 'ok',
        message: 'Server is running',
        uptime: process.uptime(),
        timestamp: Date.now(),
      });
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: 'Server is not running',
        error: error.message,
        timestamp: Date.now(),
      });
    }
  }
}
