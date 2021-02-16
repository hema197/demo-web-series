import { html } from 'lit-html';
import '../src/demo-web-series.js';

export default {
  title: 'DemoWebSeries',
  component: 'demo-web-series',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <demo-web-series
      style="--demo-web-series-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </demo-web-series>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
