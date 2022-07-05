<template>
  <div style="background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fbackgd%2Fcover%2F00%2F13%2F36%2F5b7df926d9157.jpg%21%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659598537&t=43c6f6a60c9ce29793cfb200f8c02cce')" class="contentBox">
    <div class="imgLogo">
      <img style="opacity: 0.5" src="../assets/img.png" alt="mzl-ui" />
    </div>
    <h3>vite+vue3</h3>
    <div class="tiBox">
      <p>

      </p>
      <div class="buttonGroups">
        <yq-button
          type="primary"
          round
          style="padding: 15px 50px; margin-right: 2vw; font-size: 17px"
          @click="toComponents"
        >立即上手</yq-button
        >

        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";
const router = useRouter();
const toComponents = () => {
  router.push("/yqui/install");
};
const goGuthub = () => {
  // window.open("https://github.com/Ningstyle/mzl-ui");
};
</script>
<style lang="scss" scoped>
.contentBox {
  width: 100%;
  height: auto;
  overflow: hidden;
  min-height: calc(100vh - 64px);
  background: rgba(9, 195, 190, 0.02);
  .imgLogo {
    margin: 50px auto;
    display: block;
    width: 30vw;
    margin-top: 120px;
    position: relative;
    img {
      width: 100%;
      display: block;
    }
  }

  h3 {
    text-align: center;
    font-size: 2vw;
    color: #4a5264;
    margin: 16px 0 0 0;
  }
  .tiBox {
    width: 70%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    p {
      text-align: center;
      color: #636e86;
      font-size: 0.9vw;
    }
    .buttonGroups {
      width: 100%;
      text-align: center;
      height: auto;
      overflow: hidden;
      margin-top: 5vh;
    }
    .cardBox {
      width: 100%;
      height: auto;
      overflow: hidden;
      margin-top: 5vh;
      li {
        list-style: none;
        width: 19%;
        padding: 0 5px 25px 5px;
        box-sizing: border-box;
        float: left;
        list-style: none;
        background: #fff;
        // border: 1px solid #eaeefb;
        border-radius: 5px;
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;
        margin-right: 1%;
        cursor: pointer;
        &:hover {
          background: rgba(9, 195, 190, 0.1);
        }
        p {
          font-size: 18px;
          color: #1f2f3d;
          font-weight: 400;
          padding: 0 14px;
        }
        div {
          font-size: 14px;
          color: #919cac;
          padding: 0 0px;
          line-height: 20px;
          text-align: center;
        }
      }
      li:last-child {
        margin-right: 0;
      }
    }
    .links {
      width: 100%;
      height: auto;
      overflow: hidden;
      text-align: center;
      margin-bottom: 30px;
      margin-top: 1vh;
      li {
        list-style: none;
        display: inline-block;
        font-size: 0.8vw;
        font-weight: 550;
        color: #0e80eb;
        cursor: pointer;
        margin: 0 0.5vw;
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 4px;
          img {
            width: 1.2vw;
            border-radius: 50%;
            margin-right: 7px;
          }
          span {
            margin: 0;
          }
          &:hover {
            span {
              text-decoration: underline;
            }
          }
        }
      }
      p {
        font-size: 20px;
        font-weight: 600;
        color: #515a6e;
        margin: 0;
        line-height: 50px;
      }
      span {
        display: inline-block;
        line-height: 30px;
        color: #0b6bc5;
        font-size: 16px;
        margin: 5px 10px 5px 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
