<template>
  <Layout class=" !h-[100vh]">
    <LayoutSider width="30" class="!bg-[#f8f9fc]" style="border-right: 1px solid #c9ceda;">
    </LayoutSider>
    <Layout>
      <LayoutHeader class=" !h-[10vh] !bg-white" style="border-bottom: 1px solid #c9ceda;">
        <div class="logo" />
      </LayoutHeader>
      <Layout>
        <LayoutContent class="!p-[10px] !box-border">
          Content
        </LayoutContent>
      </Layout>
    </Layout>
  </Layout>
</template>
<script lang="ts" setup>
import {
  Layout, LayoutContent, LayoutHeader, LayoutSider,
} from "ant-design-vue";
</script>
