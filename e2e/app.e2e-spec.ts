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
    expect(true).to.equal(true);
  });
});
