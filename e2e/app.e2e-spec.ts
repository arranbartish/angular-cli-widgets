import { AngularCliWidgetsPage } from './app.po';

describe('angular-cli-widgets App', () => {
  let page: AngularCliWidgetsPage;

  beforeEach(() => {
    page = new AngularCliWidgetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
