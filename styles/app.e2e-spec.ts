import { AngularCliWidgetsPage } from './app.po';
import {browser} from 'protractor';
const expect = global['chai'].expect;

describe('angular-cli-widgets styles', () => {
  let page: AngularCliWidgetsPage;

  beforeEach(() => {
    page = new AngularCliWidgetsPage();
  });

  it('Landing page will be unchanged', () => {
    var width = 800;
    var height = 600;
    browser.driver.manage().window().setSize(width, height);

    page.navigateTo();
    expect(browser.protractorImageComparison.checkScreen('landing-page')).to.eventually.equal(0);
  });
});
