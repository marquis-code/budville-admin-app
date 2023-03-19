<template>
  <main class="flex select-none space-x-6 h-screen relative">
    <div
      class="h-full sticky top-0 bg-gray-50 w-2/12 border-2"
      :class="isSidebarFolded ? 'hidden' : ''"
    >
      <slot name="adminSidebar" :sidebarItems="sidebarContents"></slot>
    </div>
    <div
      class="mx-auto px-6 space-y-8 h-screen overflow-scroll w-10/12"
      :class="isSidebarFolded ? 'w-full pl-0' : ''"
    >
      <div
        class="z-50 cursor-pointer sticky top-0 flex justify-between flex-row-reverse items-center py-4 px-4 bg-gray-50 rounded-lg"
      >
        <img
          v-if="isSidebarFolded"
          @click="toggleHamburger"
          src="@/assets/images/hamburgerMenue.svg"
          alt=""
        />

        <slot name="adminHeader" :userItem="loggedUser"></slot>
      </div>

      <div class="bg-white h-screen z-50">
        <slot name="pageContents"></slot>
      </div>
    </div>

    <div v-if="showHamburger">
      <div
        class="space-y-6 w-full mx-auto z-50 absolute right-0 h-screen pt-6 px-6 bg-gray-200 rounded-tl-lg rounded-bl-lg"
      >
        <div class="flex justify-between flex-row-reverse items-center">
          <div>
            <img
              @click="showHamburger = !showHamburger"
              class="text-white"
              src="@/assets/images/close.svg"
              alt=""
            />
          </div>
          <div class="rounded-full">
            <img
              class="text-white h-10 w-10"
              src="@/assets/images/icon.png"
              alt=""
            />
          </div>
        </div>
        <div
          class="space-y-6 w-full"
          v-for="sidebarContent in sidebarContents"
          :key="sidebarContent.label"
        >
          <div
            @click="showHamburger = !showHamburger"
            class="bg-black space-x-2 flex items-center cursor-pointer border-x-4 border-x-green-500 p-3 pl-6 rounded-lg w-full shadow-sm transition hover:shadow-lg"
          >
            <img
              class="bg-gray-100 rounded-full"
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
    </div>
  </main>
</template> 

<script>
export default {
  name: "AdmninLayout",
  data() {
    return {
      sidebarContents: [
        {
          routeName: "HomePage",
          label: "Dashboard",
          icon: "dashboardIcon",
          description: "",
        },
        {
          routeName: "ProductsPage",
          label: "Products",
          icon: "productsIcon",
          description: "",
        },
        {
          routeName: "OrdersPage",
          label: "Orders",
          icon: "ordersIcon",
          description: "",
        },
        // {
        //   routeName: "Coupons",
        //   label: "Coupons",
        //   icon: "couponIcon",
        //   description: "",
        // },
        // {
        //   routeName: "Customers",
        //   label: "Customers",
        //   icon: "customerIcon",
        //   description: "",
        // },
        // {
        //   routeName: "Marketing",
        //   label: "Marketing",
        //   icon: "marketingIcon",
        //   description: "",
        // },
        // {
        //   routeName: "Message",
        //   label: "Message",
        //   icon: "messageIcon",
        //   description: "",
        // },
        // {
        //   routeName: "Setting",
        //   label: "Setting",
        //   icon: "settingsIcon",
        //   description: "",
        // },
        // {
        //   routeName: "Help",
        //   label: "Help",
        //   icon: "helpIcon",
        //   description: "",
        // },
      ],
      loggedUser: {
        name: "Marquis Abah",
        isLoggedIn: true,
      },
      screenWidth: 0,
      screenHeight: 0,
      debounceHeight: 0,
      debounceWidth: 0,
      heightTimeout: 0,
      widthTimeout: 0,
      isSidebarFolded: false,
      isMobileScreen: false,
      showHamburger: false,
    };
  },
  created() {
    window.addEventListener("resize", this.resizeHandler());
    this.resizeHandler();
  },
  mounted() {
    (this.screenHeight = window.innerHeight),
      (this.screenWidth = window.innerWidth);

    console.log(this.screenHeight);
    console.log(this.screenWidth);
  },
  unmounted() {
    window.removeEventListener("resize", this.resizeHandler());
  },

  methods: {
    toggleHamburger() {
      this.showHamburger = !this.showHamburger;
    },
    resizeHandler() {
      (this.screenHeight = window.innerHeight),
        (this.screenWidth = window.innerWidth);
      let mql = window.matchMedia("(max-width: 767.99px)");
      if (mql.matches) {
        this.isSidebarFolded = true;
        this.isMobileScreen = true;
      } else {
        this.isSidebarFolded = false;
        this.isMobileScreen = false;
      }
    },
  },

  computed: {
    height: {
      get() {
        return this.debouncedHeight;
      },
      set(val) {
        if (this.heightTimeout) clearTimeout(this.heightTimeout);
        this.heightTimeout = setTimeout(() => {
          this.debouncedHeight = val;
        }, 500);
      },
    },

    width: {
      get() {
        return this.debouncedWidth;
      },
      set(val) {
        if (this.widthTimeout) clearTimeout(this.widthTimeout);
        this.widthTimeout = setTimeout(() => {
          this.debouncedWidth = val;
        }, 500);
      },
    },
  },
};
</script>