import { ConfigureEnvEndpointsAngular2Page } from './app.po';

describe('configure-env-endpoints-angular2 App', function() {
  let page: ConfigureEnvEndpointsAngular2Page;

  beforeEach(() => {
    page = new ConfigureEnvEndpointsAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
