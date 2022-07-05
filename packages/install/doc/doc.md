# 安装使用

## 安装

#### 推荐使用 _npm_ 的方式安装,也可选用 _cnpm_ 或 _yarn_ 进行安装。

```
npm install yangqiao-ui
cnpm install yangqiao-ui
yarn add yangqiao-ui
```
<br/>

## 使用 yangqiao-ui

#### 需要注意的是 css 样式文件需要您单独引入。

```javascript
/*js*/
import { createApp } from "vue";
import App from "@/App.vue";
import yangqiaoUi from "yangqiao-ui";
import "../node_modules/yangqiao-ui/dist/style.css";

const app = createApp(App);
app.use(yangqiaoUi);
app.mount("#app");
```

<br/>

## 按需引用

#### 您可以根据个人需要按需引用组件来使用，按需引用时不需要使用 _app.use()_ 方法注册。

```javascript
/*js*/
import { yqButton } from "yangqiao-ui";

<yq-button>点击</yq-button>
```
