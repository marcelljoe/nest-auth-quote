import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

import { HelpersService } from '../helpers/helpers.service';

@Injectable()
export class IsPasswordUnique implements CanActivate {
    constructor(
        private readonly helpersService: HelpersService
    ) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    async validateRequest(request) {
        const goodPw = this.helpersService.validatePassword(request.body.password)
        if (!goodPw.isValid) {
            throw new ForbiddenException(goodPw.resp);
        }
        return true;
    }
}
