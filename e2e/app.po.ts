import { browser, element, by } from 'protractor';

export class GithubreposearchPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeader() {
    return element(by.css('header'));
  }
}
