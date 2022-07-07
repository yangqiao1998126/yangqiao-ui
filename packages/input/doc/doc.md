<script setup>
import demo1 from './demo1.vue';
import demo2 from './demo2.vue';
import demo3 from './demo3.vue';
import demo4 from './demo4.vue';
import demo5 from './demo5.vue';
import demo6 from './demo6.vue';
import demo7 from './demo7.vue';
import preview from '@/components/preview.vue';
</script>

# Input 输入框

####  

<br />

## 基本使用
#### input 的基本使用

<demo1/>
<preview compName="input" demoName="demo1"/>

<br />

## 禁用状态
#### input 的禁用状态，通过 _disabled_ 属性限制输入及操作

<demo2/>
<preview compName="input" demoName="demo2"/>

<br />

## 可清空数据
#### input 的 value 可快捷清空，通过 _clearable_ 属性启用

<demo3/>
<preview compName="input" demoName="demo3"/>

<br />

## 使用图标
#### 使用 _leftIcon_ 或者 _rightIcon_ 来定义显示图标并确定显示的位置;如果是密码类型，可通过 _showPassword_ 来启用是否开启显示密码

- 如果已经设置 _showPassword_ 显示密码图标，则不生效；
- 如果定义了右侧显示图标，那 _clearable_ 将不再起作用

<demo4/>
<preview compName="input" demoName="demo4"/>

<br />

## 不同大小
#### 通过设置 _size_ 属性来适应不同大小

<demo5/>
<preview compName="input" demoName="demo5"/>

<br />

## 组合输入
#### 设置插槽名为 _btn_

<demo6/>
<preview compName="input" demoName="demo6"/>

<br />

## 自定义聚焦颜色
#### 设置 _focusColor_ 来自定义聚焦颜色

<demo7/>
<preview compName="input" demoName="demo7"/>
