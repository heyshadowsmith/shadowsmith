<template>
  <div>
    <ResourceLink v-for="(talk, index) in talks" :key="index" :resource="talk" :external="true" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      talks: [
        {
          title: 'How to deploy an Express API on Vercel',
          link: 'https://youtu.be/eX_oh_mbx4M',
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
