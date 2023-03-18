<template>
  <main class="space-y-10 pb-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      <article
        v-for="stat in stats"
        :key="stat.name"
        class="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
      >
        <span class="inline-block rounded bg-blue-50 p-2 text-white">
          <img
            :src="require(`@/assets/images/${stat.icon}.svg`)"
            :alt="stat.icon"
          />
        </span>

        <p class="mt-0.5 text-base font-medium text-gray-900">
          {{ stat.name }}
        </p>

        <h1
          class="mt-2 text-xl font-semibold leading-relaxed text-gray-700 line-clamp-3"
        >
          {{ stat.value }}
        </h1>
      </article>
    </div>

    <div
      class="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6 mt-6"
    >
      <canvas id="myChart"></canvas>
    </div>

    <div
      class="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
    >
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead>
            <tr>
              <th
                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                Order ID
              </th>
              <th
                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                Customer Name
              </th>
              <th
                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                Product Name
              </th>
              <th
                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                Price
              </th>
              <th
                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                Location
              </th>
              <th
                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                Date
              </th>
              <th class="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <tr v-for="(transaction, index) in transactions" :key="index">
              <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {{ transaction.orderNumber }}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {{ transaction.customer }}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {{ transaction.product }}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                $120,000
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {{ transaction.location }}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {{ transaction.date }}
              </td>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "HomePage",
  data() {
    return {
      stats: [
        {
          name: "Total Revenue",
          value: "$12400",
          icon: "totalRevenueIcon",
        },
        {
          name: "Total Customer",
          value: "12334",
          icon: "totalCustomersIcon",
        },
        {
          name: "Total Order",
          value: "1240",
          icon: "totalOrdersIcon",
        },
        {
          name: "Total Expenses",
          value: "$1240",
          icon: "totalExpensesIcon",
        },
      ],
      transactions: [
        {
          orderNumber: "2323",
          customer: " Ashley Bunmi",
          product: "Cocoanut Banana Bread",
          location: "Luth, Coorperative Hostel",
          date: "4th October 2023",
        },
        {
          orderNumber: "2323",
          customer: " Ashley Bunmi",
          product: "Cocoanut Banana Bread",
          location: "Luth, Coorperative Hostel",
          date: "4th October 2023",
        },
      ],
    };
  },
  mounted() {
    this.loadChart();
  },
  methods: {
    loadChart() {
      const ctx = document.getElementById("myChart");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Revenue",
              data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 60],
              fill: false,
              borderColor: "red",
              tension: 0.1,
            },
            {
              label: "Customer",
              data: [10, 20, 30, 56, 56, 90, 70, 20, 49, 20, 13, 57],
              fill: false,
              borderColor: "green",
              tension: 0.1,
            },
            {
              label: "Order",
              data: [70, 29, 25, 85, 60, 24, 60, 49, 20, 50, 80, 40],
              fill: false,
              borderColor: "orange",
              tension: 0.1,
            },
            {
              label: "Expenses",
              data: [95, 69, 80, 31, 56, 65, 80, 35, 99, 20, 41, 50],
              fill: false,
              borderColor: "indigo",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
};
</script>

<style>
</style>