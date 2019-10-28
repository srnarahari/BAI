import { GetEventModule } from './getEvent.module';

describe('GetarticlesModule', () => {
  let getarticlesModule: GetEventModule;

  beforeEach(() => {
    getarticlesModule = new GetEventModule();
  });

  it('should create an instance', () => {
    expect(getarticlesModule).toBeTruthy();
  });
});
