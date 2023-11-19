import { Module } from '@nestjs/common'
import {AppController} from "./app.controller";
import {PackageModule} from "@oasis/nest";

@Module({
  controllers: [AppController],
  imports: [PackageModule]
})
export class AppModule {}