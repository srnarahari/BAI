import { MicrositeArtworksModule } from './microsite-artworks.module';

describe('MicrositeArtworksModule', () => {
  let micrositeArtworksModule: MicrositeArtworksModule;

  beforeEach(() => {
    micrositeArtworksModule = new MicrositeArtworksModule();
  });

  it('should create an instance', () => {
    expect(micrositeArtworksModule).toBeTruthy();
  });
});
