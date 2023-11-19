var __legacyDecorateClassTS = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1;i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// src/main.ts
import {NestFactory} from "@nestjs/core";

// src/app.module.ts
import {Module} from "@nestjs/common";

// src/app.controller.ts
import {Controller, Get} from "@nestjs/common";
import {hello} from "@oasis/utils";
import {innerHello} from "@oasis/utils/inner";
class AppController {
  getHello() {
    console.log("hello from api!");
    return hello();
  }
  getInnerHello() {
    return innerHello();
  }
}
__legacyDecorateClassTS([
  Get()
], AppController.prototype, "getHello", null);
__legacyDecorateClassTS([
  Get("inner")
], AppController.prototype, "getInnerHello", null);
AppController = __legacyDecorateClassTS([
  Controller("api")
], AppController);

// src/app.module.ts
class AppModule {
}
AppModule = __legacyDecorateClassTS([
  Module({
    controllers: [AppController]
  })
], AppModule);

// src/main.ts
async function bootstrap() {
  const app3 = await NestFactory.create(AppModule);
  await app3.listen(3000);
}
bootstrap();
