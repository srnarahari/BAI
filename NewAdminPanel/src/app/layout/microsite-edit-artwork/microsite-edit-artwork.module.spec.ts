import { MicrositeEditArtworkModule } from './microsite-edit-artwork.module';

describe('MicrositeEditArtworkModule', () => {
  let micrositeEditArtworkModule: MicrositeEditArtworkModule;

  beforeEach(() => {
    micrositeEditArtworkModule = new MicrositeEditArtworkModule();
  });

  it('should create an instance', () => {
    expect(micrositeEditArtworkModule).toBeTruthy();
  });
});
