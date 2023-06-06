import type { Meta } from '@storybook/angular';

import { AppComponent } from './app.component';

const meta: Meta<AppComponent> = {
  title: 'AppComponent',
  component: AppComponent,
  // decorators: [
  //   moduleMetadata({
  //     imports: [AppComponent, Example1Component],
  //   }),
  // ],
};
export default meta;

export const Primary = {
  render: (args: AppComponent) => ({
    props: args,
  }),
  args: {},
};
