import { AccountUpdateModule } from './account-update.module';

describe('AccountUpdateModule', () => {
  let accountUpdateModule: AccountUpdateModule;

  beforeEach(() => {
    accountUpdateModule = new AccountUpdateModule();
  });

  it('should create an instance', () => {
    expect(accountUpdateModule).toBeTruthy();
  });
});
