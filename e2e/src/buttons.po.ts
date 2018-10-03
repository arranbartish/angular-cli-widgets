import {browser, element, By} from 'protractor';

export class ButtonsPage {

  navigateTo() {
    return browser.get('/buttons');
  }

  primaryButtonElement() {
    const selector = 'primary-panel';
    return element(By.id(selector));
  }
}
