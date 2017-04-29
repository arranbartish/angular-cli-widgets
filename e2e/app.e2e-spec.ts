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

    var width = 800;
    var height = 600;
    browser.driver.manage().window().setSize(width, height);

    page.navigateTo();
    //assert.equal(browser.protractorImageComparison.checkScreen('landing-page'), 0);

    expect(browser.protractorImageComparison.checkScreen('landing-page')).toEqual(0);
  });
});
