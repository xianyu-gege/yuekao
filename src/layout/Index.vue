<template>
  <Layout class=" !h-[100vh]">
    <LayoutSider width="50" class="!bg-[#f8f9fc]" style="border-right: 1px solid #c9ceda;">
      <div class="text-center">
          <Icon
            icon="icon-park-outline:workbench"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />工作台
        </div>
        <div class="text-center">
          <Icon
            icon="tdesign:folder-1"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />项目
        </div>
        <div class="text-center">
          <Icon
            icon="ph:open-ai-logo-fill"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />AI
        </div>
        <div class="text-center">
          <Icon
            icon="ph:file-text-duotone"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />事项
        </div>
        <div class="text-center">
          <Icon
            icon="ph:code-fill"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />代码
        </div>
        <div class="text-center">
          <Icon
            icon="gravity-ui:cube"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />
          制品
        </div>
        <div class="text-center">
          <Icon
            icon="ic:baseline-insights"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />
          洞察
        </div>
        <div class="text-center">
          <Icon
            icon="akar-icons:book"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />
          知识
        </div>
        <div class="text-center">
          <Icon
            icon="mdi:automatic"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />
          自动化
        </div>
    </LayoutSider>
    <Layout>
      <LayoutHeader class=" !h-[10vh] !bg-white" style="border-bottom: 1px solid #c9ceda;">
        <div class="text-[1.5vw] font-semibold leading-[4.5vw]">
            代码仓库
        </div>
      </LayoutHeader>
      <Layout>
        <LayoutContent class="!p-[10px] !box-border">
          <div>
            <router-link
              to="/basea"
              class="w-[6vw]
              h-[3vw] inline-block text-[1.3vw] focus:border-b-2 border-[#306fde] text-center"
              >最近访问</router-link
            ><router-link
              to="/baseb"
              class="w-[6vw] h-[3vw]
              inline-block text-[1.3vw] focus:border-b-2 border-[#306fde] text-center"
              >全部仓库</router-link
            ><router-link
              to="/basec"
              class="w-[6vw] h-[3vw]
              inline-block text-[1.3vw] focus:border-b-2 border-[#306fde] text-center"
              >开源仓库</router-link
            >
          </div>
        </LayoutContent>
      </Layout>
    </Layout>
  </Layout>
</template>
<script lang="ts" setup>
import {
  Layout, LayoutContent, LayoutHeader, LayoutSider,
} from "ant-design-vue";
import { Icon } from "@iconify/vue";
</script>
