<template>
  <div>
    <a v-for="(talk, index) in talks" :key="index" :href="talk.url" target="_blank" class="talk-link flex flex-col-reverse items-start py-2 sm:flex-row sm:items-end sm:py-3 border-t border-b border-transparent hover:border-gray-200">
      <span class="font-mono text-gray-500 text-sm mr-6">{{ talk.year }} </span><span class="font-medium text-gray-900">
        {{ talk.title }}
      </span>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      talks: [
        {
          title: 'How to deploy an Express API on Vercel',
          url: 'https://youtu.be/eX_oh_mbx4M',
          year: '2020'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Talks | Shadow Smith'
    }
  }
}
</script>

<style>
.talk-link {
  transition: all 0.25s ease;
}
</style>
