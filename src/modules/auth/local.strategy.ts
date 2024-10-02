import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { HelpersService } from '../../core/helpers/helpers.service';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authService: AuthService,
        private readonly helpersService: HelpersService
    ) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const isEmail = await this.helpersService.validateEmail(username)
        if (!isEmail) {
            throw new UnauthorizedException('Wrong email format.');
        }
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException('Invalid user credentials');
        }
        return user;
    }
}
