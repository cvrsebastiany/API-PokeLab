import { Controller, Post, Body, HttpCode, HttpStatus, Res, Get, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import type { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Login de usuário', 
    description: 'Autentica um usuário e retorna um token JWT em cookie httpOnly' 
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Login realizado com sucesso',
    schema: {
      type: 'object',
      properties: {
        usuario: {
          type: 'object',
          properties: {
            id: { type: 'number', example: 1 },
            email: { type: 'string', example: 'ash@pokemon.com' },
            nome: { type: 'string', example: 'Ash Ketchum' },
            telefone: { type: 'string', example: '(11) 98765-4321' },
            ativo: { type: 'boolean', example: true },
            perfil: { type: 'object' },
          },
        },
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Email ou senha inválidos' })
  async login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const result = await this.authService.login(loginDto);
    
    // Set httpOnly cookie with the token
    res.cookie('access_token', result.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // true in production (HTTPS)
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    // Return only user data (not the token)
    return {
      usuario: result.usuario,
    };
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Logout de usuário', 
    description: 'Remove o cookie de autenticação' 
  })
  @ApiResponse({ status: 200, description: 'Logout realizado com sucesso' })
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('access_token');
    return { message: 'Logout realizado com sucesso' };
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ 
    summary: 'Obter usuário atual', 
    description: 'Retorna os dados do usuário autenticado pelo token no cookie' 
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Dados do usuário retornados com sucesso',
  })
  @ApiResponse({ status: 401, description: 'Não autenticado' })
  async getMe(@Request() req) {
    return this.authService.getUserById(req.user.sub);
  }
}
