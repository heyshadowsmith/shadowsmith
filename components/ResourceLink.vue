<template>
  <div>
    <NuxtLink v-if="!external" :to="resource.link" class="flex flex-col-reverse items-start py-2 sm:flex-row sm:items-end sm:py-3 border-t border-b border-transparent hover:border-gray-300">
      <span v-if="resource.year" class="font-mono text-gray-500 text-sm mr-6">
        {{ resource.year }}
      </span>
      <span class="font-medium text-gray-900">
        {{ resource.title }}
      </span>
    </NuxtLink>
    <a v-else :key="index" :href="resource.link" target="_blank" class="flex flex-col-reverse items-start py-2 sm:flex-row sm:items-end sm:py-3 border-t border-b border-transparent hover:border-gray-200">
      <span class="font-mono text-gray-500 text-sm mr-6">
        {{ resource.year }}
      </span>
      <span class="font-medium text-gray-900">
        {{ resource.title }}
      </span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: Object,
      required: true
    },
    external: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
