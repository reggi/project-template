import { Controller, Get } from "@nestjs/common";

import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get("/me")
  async me(): Promise<UserEntity> {
    return await this.userService.findOne(1);
  }
}
