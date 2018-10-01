import { ButtonsPage } from '../e2e/src/buttons.po';
import {browser} from 'protractor';
const expect = global['chai'].expect;

describe('angular-cli-widgets buttons styles', () => {
  let page: ButtonsPage;

  beforeEach(() => {
    page = new ButtonsPage();
  });

  it('Landing page will be unchanged', () => {
    const width = 800;
    const height = 600;
    browser.driver.manage().window().setSize(width, height);

    page.navigateTo();
    expect(browser.protractorImageComparison.checkScreen('buttons-shell__primary-panel')).to.eventually.equal(0);
  });
});
