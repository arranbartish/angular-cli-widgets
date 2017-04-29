import { AngularCliWidgetsPage } from './app.po';
import {browser} from 'protractor';
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

  it('should be the same', () => {
    page.navigateTo();
    expect(browser.protractorImageComparison.checkScreen('landing-page')).to.eventually.equal(0);
  });
});
