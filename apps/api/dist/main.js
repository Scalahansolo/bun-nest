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
var __legacyMetadataTS = (k, v) => {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};

// src/main.ts
import {NestFactory} from "@nestjs/core";

// src/app.module.ts
import {Module} from "@nestjs/common";

// src/app.controller.ts
import {Controller, Get} from "@nestjs/common";
import {innerHello} from "@oasis/utils/inner";
import {PackagesService} from "@oasis/nest";
class AppController {
  packageService;
  constructor(packageService) {
    this.packageService = packageService;
  }
  getHello() {
    return this.packageService.getHello();
  }
  getInnerHello() {
    return innerHello();
  }
}
__legacyDecorateClassTS([
  Get(),
  __legacyMetadataTS("design:type", Function),
  __legacyMetadataTS("design:paramtypes", []),
  __legacyMetadataTS("design:returntype", String)
], AppController.prototype, "getHello", null);
__legacyDecorateClassTS([
  Get("inner"),
  __legacyMetadataTS("design:type", Function),
  __legacyMetadataTS("design:paramtypes", []),
  __legacyMetadataTS("design:returntype", String)
], AppController.prototype, "getInnerHello", null);
AppController = __legacyDecorateClassTS([
  Controller("api"),
  __legacyMetadataTS("design:paramtypes", [
    typeof PackagesService === "undefined" ? Object : PackagesService
  ])
], AppController);

// src/app.module.ts
import {PackageModule} from "@oasis/nest";
class AppModule {
}
AppModule = __legacyDecorateClassTS([
  Module({
    controllers: [AppController],
    imports: [PackageModule]
  })
], AppModule);

// src/main.ts
async function bootstrap() {
  const app3 = await NestFactory.create(AppModule);
  await app3.listen(3000);
}
bootstrap();
