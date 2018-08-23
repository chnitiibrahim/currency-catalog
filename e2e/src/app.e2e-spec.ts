import { AppPage } from './app.po';

describe('Currency Catalog App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Currency catalog', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Currency catalog');
  });
});
