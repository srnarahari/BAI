import { GetArtworkModule } from './getArtwork.module';

describe('GetarticlesModule', () => {
  let getarticlesModule: GetArtworkModule;

  beforeEach(() => {
    getarticlesModule = new GetArtworkModule();
  });

  it('should create an instance', () => {
    expect(getarticlesModule).toBeTruthy();
  });
});
