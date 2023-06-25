import {Module} from '@nestjs/common';

import {MyNestLibModule} from "@nx-test/my-nest-lib";

import {AppController} from './app.controller';
import {AppService} from './app.service';

@Module({
  imports: [MyNestLibModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
