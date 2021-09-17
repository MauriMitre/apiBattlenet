import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { WsServer2Gateway } from './ws-server2.gateway';

@Module({
  providers: [EventsGateway, WsServer2Gateway],
})
export class EventsModule {}