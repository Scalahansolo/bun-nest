import {Controller, Get} from "@nestjs/common";
import {hello} from "@oasis/utils";

@Controller('api')
export class AppController {

  @Get()
  getHello(): string {
    console.log('hello from api!')
    return hello();
  }

}