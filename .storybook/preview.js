import '!style-loader!css-loader!sass-loader!../src/assets/styles/reset.scss'
import '!style-loader!css-loader!sass-loader!../src/assets/styles/index.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}