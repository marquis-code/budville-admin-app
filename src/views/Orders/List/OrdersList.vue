<template>
  <main>
    <div
      class="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6 mt-4"
    >
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead>
            <tr>
              <th
                v-for="(field, index) in fields"
                :key="index"
                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                {{ field.label }}
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
                  @click="handleProduct(transaction)"
                  href.prevent="#"
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
export default {
  name: "OrdersList",
  data() {
    return {
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
      fields: [
        {
          label: "Order ID",
        },
        {
          label: "Customer Name",
        },
        {
          label: "Product Name",
        },
        {
          label: "Price",
        },
        {
          label: "Location",
        },
        {
          label: "Date",
        },
      ],
    };
  },
  methods: {
    handleProduct(product) {
      console.log(product);
    },
  },
};
</script>

<style>
</style>