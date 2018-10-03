import { ButtonsPage } from '../e2e/src/buttons.po';
import {browser, element, By} from 'protractor';
const expect = global['chai'].expect;

describe('angular-cli-widgets buttons styles', () => {
  let page: ButtonsPage;

  beforeEach(() => {
    page = new ButtonsPage();
    const width = 800;
    const height = 600;
    browser.driver.manage().window().setSize(width, height);

    page.navigateTo();
  });

  it('Primary button panel will be unchanged', () => {
    expect(browser.protractorImageComparison.checkElement(page.primaryButtonElement(), 'primary-button'))
      .to.eventually.equal(0);
  });
});
