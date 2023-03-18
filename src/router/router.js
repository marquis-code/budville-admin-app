import { createWebHistory, createRouter } from "vue-router";
import { loadRouteComponent } from "@/utils/route.util";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: loadRouteComponent("HomePage"),
  },
  {
    path: "/products",
    name: "ProductsPage",
    component: loadRouteComponent("Products/Index"),
    // redirect: "ProductsPage",
    children: [
      {
        path: "",
        component: loadRouteComponent("Products/List/ProductsList"),
        name: "ProductsPage",
      },
      {
        path: "add-product",
        component: loadRouteComponent("Products/components/createProduct"),
        name: "CreateProduct",
      },
      {
        path: "details/:productId",
        component: loadRouteComponent("Products/Details/showProduct"),
        name: "ShowProduct",
      },
    ],
  },
  {
    path: "/orders",
    name: "OrdersPage",
    // redirect: "OrdersPage",
    component: loadRouteComponent("Orders/OrdersIndex"),
    children: [
      {
        path: "",
        component: loadRouteComponent("Orders/List/OrdersList"),
        name: "OrdersPage",
      },
      {
        path: "create",
        component: loadRouteComponent("Orders/components/createOrder"),
        name: "CreateOrder",
      },
      {
        path: "details/:productId",
        component: loadRouteComponent("Orders/Details/showOrde"),
        name: "ShowOrder",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
