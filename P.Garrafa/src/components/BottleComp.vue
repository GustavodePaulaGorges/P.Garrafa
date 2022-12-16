<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a
          href=""
          class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        >
          <div class="relative pb-48 overflow-hidden">
            <img
              class="absolute inset-0 h-full w-full object-cover"
              :src="order.imageForPrinting"
              alt=""
            />
          </div>
          <p class="text-center text-xs underline text-gray-600">
            Arte selecionada para impressão
          </p>
          <div class="p-4">
            <span
              class="inline-block px-2 py-1 leading-none bg-blue-200 text-blue-800 rounded-full font-semibold uppercase tracking-wide text-xs"
              >Produção iniciada</span
            >
            <h2 class="mt-2 mb-2 font-bold">{{ bottle.name }}</h2>
            <p class="text-sm">
              {{ bottle.description }}
            </p>
            <div class="mt-3 flex items-center">
              <span class="font-bold text-xl">{{ bottle.price }}</span
              >&nbsp;<span class="text-sm font-semibold">RS$</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      bottle: {},
    };
  },
  async created() {
    const response = await axios.get(
      `http://localhost:8000/bottles/${this.order.bottle}`
    );
    this.bottle = response.data;
  },
};
</script>
