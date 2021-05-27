<template>
  <div>
    <NuxtLink v-for="(link, index) in links" :key="index" :to="link.path" class="menu-link flex items-start py-2 sm:flex-row sm:items-end sm:py-3 border-t border-b border-transparent hover:border-gray-200">
      <span class="font-medium text-gray-900">
        {{ link.title }}
      </span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          title: 'Articles',
          path: '/'
        },
        {
          title: 'Wins',
          path: '/wins'
        },
        {
          title: 'Talks',
          path: '/talks'
        },
        {
          title: 'Music',
          path: '/music'
        },
        {
          title: 'About',
          path: '/about'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Menu | Shadow Smith'
    }
  }
}
</script>

<style>
.menu-link {
  transition: all 0.25s ease;
}
</style>
