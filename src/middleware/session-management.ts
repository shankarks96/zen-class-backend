import { NextFunction, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { AppExceptionHandler, NotFountException, UnauthorizedException } from '../utils';
import { Request } from '../@types';
import { User } from '../@types/user.dto';

export const handleUserSession = async(req: Request, res: Response, next?: NextFunction) => {
    try {
    const token = req.headers['authorization'];
    if (!token) {
        throw new NotFountException('Token not found');
    }
    const tokenParts = token.split(' ');
    if (tokenParts[0] !== 'Bearer') {
       throw new UnauthorizedException('Unauthorized access');
    }
    const jwtToken = tokenParts[1];
    // validate jwt token
        const validate:User = await new AuthService().validateJwtToken(jwtToken) as User;
        if (!validate) {
            throw new UnauthorizedException('Invalid token');
        }
        req.user=validate;
    } catch (error) {
        return AppExceptionHandler.handle(error, res);
    }

}