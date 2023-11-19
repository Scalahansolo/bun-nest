import {Module} from "@nestjs/common";
import {PackagesService} from "./service.ts";


@Module({
  exports: [PackagesService],
  providers: [PackagesService]
})
export class PackageModule {}