import { IsString, isNumber, IsOptional, IsNumber } from "class-validator";
export class CreateIssueDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description: string;
}
