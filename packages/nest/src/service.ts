import {Injectable} from "@nestjs/common";
import { hello } from "@oasis/utils";


@Injectable()
export class PackagesService {
  getHello(): string {
    console.log('hello from packages service');
    return hello();
  }
}