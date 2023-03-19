<template>
  <main
    class="flex justify-end items-center space-x-4 "
  >
    <span class="bg-green-200 rounded-full p-3 shadow-sm cursor-pointer relative">
      <img class="h-4 w-4" src="@/assets/images/notificationIcon.svg" alt="" />
      <span class="bg-red-500 absolute -top-2 right-0 rounded-full text-xs text-white p-1 px-2">5</span>
    </span>
    <span class="bg-green-200 rounded-full p-3 shadow-sm cursor-pointer">
      <img class="h-4 w-4" src="@/assets/images/adminIcon.svg" alt="" />
    </span>
  </main>
</template>

<script>
export default {
  name: "AdminHeader",
  props: {
    userContent: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style>
</style>