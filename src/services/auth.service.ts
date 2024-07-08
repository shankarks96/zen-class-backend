import {appConfig} from '../config';
import {UserModel} from '../models';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {NotFountException, UnauthorizedException} from '../utils';
export class AuthService {
  public async login(email: string, password: string, role: string) {
    const user = await UserModel.findOne({email: email});
    if (!user) {
      throw new NotFountException('User not found');
    }
    if (user.role !== role) {
      throw new UnauthorizedException('Unauthorized access');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    const accessToken = await this.generateJwtAccessToken(user.toJSON());
    return {
      token: {
        accessToken,
        type: 'Bearer',
      },
      user: {
        email: user.email,
        role: user.role,
        avatar: user.profile.avatar,
        bio: user.profile.bio,
        status: user.status,
      },
    };
  }
  public async logout(): Promise<void> {
    console.log('logout');
  }
  public async register(user: any) {
    if (user.password) {
      // hash password using bcrypt
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, salt);
      user.password = hashedPassword;
    }
    const newUser = new UserModel(user);
    return await newUser.save();
  }

  async generateJwtAccessToken(user: any) {
    const accessToken = jwt.sign(user, appConfig.JWT_SECRET, {
      expiresIn: appConfig.JWT_EXPIRATION,
    });
    return accessToken;
  }
  async validateJwtToken(token: string) {
    const decode = jwt.verify(token, appConfig.JWT_SECRET);
    if (decode) {
      return decode;
    }
    throw new UnauthorizedException('Invalid token');
  }
}
