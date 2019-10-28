import { MicrositeModule } from './microsite.module';

describe('MicrositeModule', () => {
  let micrositeModule: MicrositeModule;

  beforeEach(() => {
    micrositeModule = new MicrositeModule();
  });

  it('should create an instance', () => {
    expect(micrositeModule).toBeTruthy();
  });
});
