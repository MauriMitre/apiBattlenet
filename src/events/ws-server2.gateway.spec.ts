import { Test, TestingModule } from '@nestjs/testing';
import { WsServer2Gateway } from './ws-server2.gateway';

describe('WsServer2Gateway', () => {
  let gateway: WsServer2Gateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WsServer2Gateway],
    }).compile();

    gateway = module.get<WsServer2Gateway>(WsServer2Gateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
