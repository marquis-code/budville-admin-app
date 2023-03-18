<template>
  <admin-layout>
    <template v-slot:adminHeader="{ userItem }">
      <admin-header :userContent="userItem"></admin-header>
    </template>
    <template v-slot:adminSidebar="{ sidebarItems }">
      <admin-sidebar
        brandName="Budville"
        :sidebarContents="sidebarItems"
      ></admin-sidebar>
    </template>
    <template v-slot:pageContents>
      <div class="w-full">
        <router-view />
      </div>
    </template>
  </admin-layout>
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
};
</script>

<style scoped>
.moveInUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.moveInUp-leave-active {
  animation: moveInUp 0.3s ease-in;
}
@keyframes moveInUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
</style>
