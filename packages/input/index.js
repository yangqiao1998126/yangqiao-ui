import yqInput from './index.vue'
yqInput.install = function (app) {
  app.component(yqInput.name, yqInput);
}
export default yqInput;
