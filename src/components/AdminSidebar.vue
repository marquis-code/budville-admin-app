<template>
  <main class="flex justify-center items-center space-y-10 flex-col px-6">
    <h1 class="text-3xl text-orange-400 font-mono font-bold pt-6">
      <img class="h-10 w-10" :src="require(`@/assets/images/${brandName}.png`)" alt="" />
      <!-- {{ brandName }} -->
    </h1>
    <div class="space-y-6 w-full">
      <div
        class="space-y-6 w-full"
        v-for="sidebarContent in sidebarContents"
        :key="sidebarContent.label"
      >
        <div
          class="bg-gray-200 space-x-2 flex items-center cursor-pointer border-x-4 border-x-green-500 p-2 pl-6 rounded-full w-full shadow-sm transition hover:shadow-lg"
        >
          <img
            :alt="sidebarContent.label"
            :src="require(`@/assets/images/${sidebarContent.icon}.svg`)"
          />
          <router-link
            class="text-gray-500"
            :to="{ name: sidebarContent.routeName }"
          >
            {{ sidebarContent.label }}
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "AdminSidebar",
  props: {
    sidebarContents: {
      type: Array,
      required: true,
      default: () => [],
    },
    brandName: {
      type: String,
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>