import yqButton from './button/index.js';
import yqSpace from './Space/index.js';
const install = app => {
  app.use(yqButton);
  app.use(yqSpace);
}
const YQUI = {
  install,
}
export {yqButton,yqSpace}
export default YQUI;
