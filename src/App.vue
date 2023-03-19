<template>
  <div
    class="flex justify-center items-center flex-col h-screen"
    v-if="isLoading"
  >
    <div class="relative">
      <div class="w-20 h-20 border-purple-200 border-2 rounded-full"></div>
      <div
        class="w-20 h-20 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"
      ></div>
    </div>

    <div class="relative">
      <div class="w-10 h-10 border-purple-200 border-2 rounded-full"></div>
      <div
        class="w-10 h-10 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"
      ></div>
    </div>

    <div class="relative">
      <div class="w-5 h-5 border-purple-200 border-2 rounded-full"></div>
      <div
        class="w-5 h-5 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"
      ></div>
    </div>
    <h1 class="font-bold font-mono text-orange-400 pl-1">Welcome Admin 🥰</h1>
  </div>
  <transition name="bounce">
    <div v-if="!isLoading">
      <admin-layout>
        <template v-slot:adminHeader="{ userItem }">
          <admin-header :userContent="userItem"></admin-header>
        </template>
        <template v-slot:adminSidebar="{ sidebarItems }">
          <admin-sidebar
            brandName="icon"
            :sidebarContents="sidebarItems"
          ></admin-sidebar>
        </template>
        <template v-slot:pageContents>
          <div class="w-full">
            <router-view />
          </div>
        </template>
      </admin-layout>
    </div>
  </transition>
</template>

<script>
import AdminLayout from "./components/AdminLayout.vue";
import AdminHeader from "./components/AdminHeader.vue";
import AdminSidebar from "./components/AdminSidebar.vue";
export default {
  name: "App",
  components: {
    AdminLayout,
    AdminHeader,
    AdminSidebar,
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  },
  data() {
    return {
      isLoading: true,
    };
  },
};
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
