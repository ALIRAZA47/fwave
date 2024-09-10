import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SigninUserDto } from './dto/signin-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(email);
    console.log(user, pass, email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = {
      email: user.email,
      sub: user.id,
      id: user.id,
      createdAt: user.created_at,
      firstName: user.firstName,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  create(createAuthDto: SigninUserDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
