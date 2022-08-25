<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import HelloWorld from './components/HelloWorld.vue'

const { t, locale } = useI18n()
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <form>
    <label>{{ t('language') }}</label>
    &nbsp;
    <select v-model="locale">
      <option value="en">English</option>
      <option value="vi">Vietnamese</option>
    </select>
  </form>
  <p>{{ t('hello') }}</p>
  <HelloWorld msg="Vite SSG + Vue + Vue I18n" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
