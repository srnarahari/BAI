import { MicrositeEditModule } from './microsite-edit.module';

describe('MicrositeEditModule', () => {
  let micrositeEditModule: MicrositeEditModule;

  beforeEach(() => {
    micrositeEditModule = new MicrositeEditModule();
  });

  it('should create an instance', () => {
    expect(micrositeEditModule).toBeTruthy();
  });
});
