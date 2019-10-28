import { MicrositeOverviewModule } from './microsite-overview.module';

describe('MicrositeOverviewModule', () => {
  let micrositeOverviewModule: MicrositeOverviewModule;

  beforeEach(() => {
    micrositeOverviewModule = new MicrositeOverviewModule();
  });

  it('should create an instance', () => {
    expect(micrositeOverviewModule).toBeTruthy();
  });
});
