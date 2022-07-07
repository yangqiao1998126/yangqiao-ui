import yqButton from './button/index.js';
import yqSpace from './Space/index.js';
import yqInput from './input/index.js';
const install = app => {
  app.use(yqButton);
  app.use(yqSpace);
  app.use(yqInput);
}
const YQUI = {
  install,
}
export {yqButton,yqSpace,yqInput}
export default YQUI;
