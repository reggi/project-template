import { AppController } from "./app.controller";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../users/user.entity";
import { UsersModule } from "../users/user.module";

@Module({
  controllers: [AppController],
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "",
      password: "",
      database: "test",
      synchronize: true,
      logging: false,
      entities: [UserEntity],
    }),
  ],
})
export class AppModule {}
