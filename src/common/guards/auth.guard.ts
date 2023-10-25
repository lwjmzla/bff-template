import { Request } from 'express';

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TRANSFORM_PUBLIC_KEY_METADATA } from '../contants/decorator.contants';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<string[]>(TRANSFORM_PUBLIC_KEY_METADATA, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('未授权');
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    // console.log(request.headers)
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : request.headers['usertoken'] as string
  }
}