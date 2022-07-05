import yqButton from './index.vue';
yqButton.install = function (app) {
  app.component(yqButton.name, yqButton);
}
export default yqButton;
