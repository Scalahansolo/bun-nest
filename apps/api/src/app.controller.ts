import {Controller, Get, Inject} from "@nestjs/common";
import {innerHello} from "@oasis/utils/inner";
import {PackagesService} from "@oasis/nest";

@Controller('api')
export class AppController {

  constructor(
    private packageService: PackagesService
  ){}


  @Get()
  getHello(): string {
    return this.packageService.getHello();
  }

  @Get('inner')
  getInnerHello(): string {
    return innerHello()
  }

}