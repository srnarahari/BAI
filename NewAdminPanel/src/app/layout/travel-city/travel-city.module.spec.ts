import { TravelCityModule } from './travel-city.module';

describe('TravelCityModule', () => {
  let travelCityModule: TravelCityModule;

  beforeEach(() => {
    travelCityModule = new TravelCityModule();
  });

  it('should create an instance', () => {
    expect(travelCityModule).toBeTruthy();
  });
});
