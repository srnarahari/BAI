import { ArticleModule } from './artwork.module';

describe('ArticleModule', () => {
  let articleModule: ArticleModule;

  beforeEach(() => {
    articleModule = new ArticleModule();
  });

  it('should create an instance', () => {
    expect(articleModule).toBeTruthy();
  });
});
