import { html, fixture, expect } from '@open-wc/testing';

import '../src/demo-web-series.js';

describe('DemoWebSeries', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<demo-web-series></demo-web-series>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
