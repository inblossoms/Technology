<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #aside-ads-before>
      <div class="advertising">
        <div>
          <a href=""> 广告位ing </a>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style>
.advertising {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-radius: 12px;
  min-height: 256px;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
  font-weight: 500;
  background-color: rgb(25, 25, 29);
}
</style>
