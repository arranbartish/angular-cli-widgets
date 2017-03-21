import { AngularCliWidgetsPage } from './app.po';
const expect = global['chai'].expect;

describe('angular-cli-widgets App', () => {
  let page: AngularCliWidgetsPage;

  beforeEach(() => {
    page = new AngularCliWidgetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).to.eventually.contain('app works!');
  });
});
