import { MicrositeEditEventsModule } from './microsite-edit-events.module';

describe('MicrositeEditEventsModule', () => {
  let micrositeEditEventsModule: MicrositeEditEventsModule;

  beforeEach(() => {
    micrositeEditEventsModule = new MicrositeEditEventsModule();
  });

  it('should create an instance', () => {
    expect(micrositeEditEventsModule).toBeTruthy();
  });
});
