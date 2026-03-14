export class CreateUserDto {
  name: string;
  lastName?: string;
  email: string;
  password: string;
  age?: number;
  role?: 'user' | 'admin';
  phone?: string;
  address?: string;
  isActive?: boolean;
}
