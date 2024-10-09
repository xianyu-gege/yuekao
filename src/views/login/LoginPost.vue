<template>
  <div class=" flex items-center">
    <div class=" w-[200px] h-[100vh]">
      <Carousel autoplay>
        <img src="../../images/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png" alt="">
        <img src="../../images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" alt="">
        <img src="../../images/appzx4bpYR9rpFdZULrF9EFycs2l-416.png" alt="">
      </Carousel>
    </div>
    <div class=" flex-1 h-[100vh] flex justify-center items-center">
      <div class="w-[300px] flex flex-col justify-center items-center">
        <h1 class=" text-[15px] mb-[30px]">登录，即刻创造您的应用</h1>
        <Space direction="vertical" class="w-full" size="large">
          <Input v-model:value="userLoginInfo.username" placeholder="请输入邮箱" class="w-full" />
          <Input.Password
           v-model:value.lazy="userLoginInfo.password"
           autofocus placeholder="请输入密码" class="w-full" />
        </Space>
        <div class="w-full">
          <Radio v-model:checked="checked" class="font">我已阅读并同意
            <Button type="link" class="buton">《服务协议</Button>
            和<Button type="link" class="buton">《隐私政策》</Button>
          </Radio>
        </div>
        <Button @click="loginHandle" type="primary" class="w-full mt-[30px]">登录</Button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  Carousel, Space, Input, Button, Radio, App,
} from "ant-design-vue";
import { getAccessToken } from "@/api";
import to from "await-to-js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const { notification } = App.useApp();
const router = useRouter();
const userLoginInfo = ref({
  username: "3113415005@qq.com",
  password: "wx09270013",
});
const loginHandle = async () => {
  const loginData = {
    grant_type: "password",
    username: userLoginInfo.value.username,
    password: userLoginInfo.value.password,
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
    scope: import.meta.env.VITE_CLIENT_SCOPE,
  };
  // eslint-disable-next-line no-unused-vars
  const [err, res] = await to(getAccessToken(loginData));
  if (!err) {
    notification.success({ message: "登录成功！" });
    router.replace("/home");
  }
};
</script>
<style scoped>
.font {
  font-size: 8px;
}

.buton {
  font-size: 8px;
}
</style>
