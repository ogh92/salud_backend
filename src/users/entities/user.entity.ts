import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  lastName?: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  age?: number;

  @Prop({ enum: ['user', 'admin'], default: 'user' })
  role?: 'user' | 'admin';

  @Prop()
  phone?: string;

  @Prop()
  address?: string;

  @Prop({ default: true })
  isActive?: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
