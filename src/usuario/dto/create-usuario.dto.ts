import { IsEmail, IsOptional, IsString, Length, IsBoolean } from 'class-validator';

export class CreateUsuarioDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @Length(11, 14)
  cpf!: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
