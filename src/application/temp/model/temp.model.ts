import 'reflect-metadata';
import { IsDefined, IsString } from 'class-validator';

export class TempRequest {
  @IsString()
  @IsDefined()
  public nonce: string;
}
