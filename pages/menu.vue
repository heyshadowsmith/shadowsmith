<template>
  <div>
    <ResourceLink v-for="(item, index) in items" :key="index" :resource="item" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Articles',
          link: '/'
        },
        {
          title: 'Wins',
          link: '/wins'
        },
        {
          title: 'Talks',
          link: '/talks'
        },
        {
          title: 'Music',
          link: '/music'
        },
        {
          title: 'About',
          link: '/about'
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
