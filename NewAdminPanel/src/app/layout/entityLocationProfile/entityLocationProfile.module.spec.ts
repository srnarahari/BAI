import { EntityLocationProfileModule } from './entityLocationProfile.module';

describe('ArticleModule', () => {
  let articleModule: EntityLocationProfileModule;

  beforeEach(() => {
    articleModule = new EntityLocationProfileModule();
  });

  it('should create an instance', () => {
    expect(articleModule).toBeTruthy();
  });
});
