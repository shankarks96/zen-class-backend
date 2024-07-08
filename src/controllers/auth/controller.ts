import {Request, Response} from 'express';
import { AuthService } from '../../services/auth.service';

export class AuthController {
  private static AuthService = new AuthService()
  public static async login(req: Request, res: Response): Promise<void> {
    const data = await AuthController.AuthService.login(req.body.email, req.body.password, req.body.role);
    res.status(200).json(data);
  }
  public static async logout(req: Request, res: Response): Promise<void> {
    res.status(200).json({message: 'logout'});
  }
  public static async register(req: Request, res: Response): Promise<void> {
    const data = await AuthController.AuthService.register(req.body);
    res.status(201).json(data);
  }
}
