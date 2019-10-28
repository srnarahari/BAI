import { MicrositeEventsModule } from './microsite-events.module';

describe('MicrositeEventsModule', () => {
  let micrositeEventsModule: MicrositeEventsModule;

  beforeEach(() => {
    micrositeEventsModule = new MicrositeEventsModule();
  });

  it('should create an instance', () => {
    expect(micrositeEventsModule).toBeTruthy();
  });
});
