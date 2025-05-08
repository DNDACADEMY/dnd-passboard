import type { Preview } from '@storybook/react'
import '../src/styles/globals.css'
import '../src/styles/reset.css'
import {pretendard} from '../src/styles/fonts/pretendard'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={pretendard.className}>
        <Story />
      </div>
    )
  ]
};

export default preview;