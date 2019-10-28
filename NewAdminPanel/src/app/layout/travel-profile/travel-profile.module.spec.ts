import { TravelProfileModule } from './travel-profile.module';

describe('TravelProfileModule', () => {
  let travelProfileModule: TravelProfileModule;

  beforeEach(() => {
    travelProfileModule = new TravelProfileModule();
  });

  it('should create an instance', () => {
    expect(travelProfileModule).toBeTruthy();
  });
});
