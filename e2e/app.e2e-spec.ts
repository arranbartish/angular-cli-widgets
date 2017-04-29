import { AngularCliWidgetsPage } from './app.po';
import {browser} from "protractor";
//const expect = global['chai'].expect;

describe('angular-cli-widgets App', () => {
  let page: AngularCliWidgetsPage;

  beforeEach(() => {
    page = new AngularCliWidgetsPage();
  });

  it('should display message saying app works', () => {
    // page.navigateTo();
    // expect(page.getParagraphText()).to.eventually.contain('app works!');

    page.navigateTo();
    //assert.equal(browser.protractorImageComparison.checkScreen('landing-page'), 0);

    expect(browser.protractorImageComparison.checkScreen('landing-page')).toEqual(0);
  });
});
