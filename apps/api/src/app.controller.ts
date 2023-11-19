import {Controller, Get} from "@nestjs/common";
import {hello} from "@oasis/utils";
import {innerHello} from "@oasis/utils/inner";

@Controller('api')
export class AppController {

  @Get()
  getHello(): string {
    console.log('hello from api!')
    return hello();
  }

  @Get('inner')
  getInnerHello(): string {
    return innerHello()
  }

}