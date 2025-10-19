<template>
  <div :class="['list-grid-wrapper grid-cols-4', { 'list-view': isListView }]">
    <div
      v-for="product in products"
      :key="product.id"
      class="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2"
    >
      <div class="product-card__thumb rounded-8 bg-gray-50 position-relative">
        <NuxtLink
          :to="product.detailLink"
          class="w-100 h-100 flex-center"
          aria-label="View product details"
        >
          <NuxtImg :src="product.image" :alt="product.name" class="w-auto max-w-unset" />
        </NuxtLink>

        <div
          class="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8"
          aria-hidden="true"
        >
          <span
            v-if="product.discount"
            class="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-xs fw-semibold"
          >
            {{ product.discount }}
          </span>
          <span
            v-if="product.badge"
            class="text-neutral-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-xs fw-semibold"
          >
            {{ product.badge }}
          </span>
        </div>

        <div
          class="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm"
        >
          <button
            type="button"
            class="expand-btn w-40 h-40 text-md d-flex justify-content-center align-items-center rounded-circle"
            :class="{ 'bg-main-two-600 text-white': expandedItems[product.id.toString()] }"
            aria-label="Expand options"
            @click="toggleExpand(product.id.toString())"
          >
            <i :class="expandedItems[product.id.toString()] ? 'ph ph-x' : 'ph ph-plus'"></i>
          </button>
          <div
            class="expand-icons gap-20 my-20"
            :class="{
              'd-flex': expandedItems[product.id.toString()],
              'd-none': !expandedItems[product.id.toString()],
            }"
          >
            <button
              type="button"
              class="text-neutral-600 text-xl flex-center hover-text-main-two-600 wishlist-btn"
              aria-label="Add to wishlist"
            >
              <i class="ph ph-heart"></i>
            </button>
            <button
              type="button"
              class="text-neutral-600 text-xl flex-center hover-text-main-two-600"
              aria-label="View product"
            >
              <i class="ph ph-eye"></i>
            </button>
            <button
              type="button"
              class="text-neutral-600 text-xl flex-center hover-text-main-two-600"
              aria-label="Shuffle options"
            >
              <i class="ph ph-shuffle"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="product-card__content mt-16 w-100">
        <h6 class="title text-lg fw-semibold my-16">
          <NuxtLink :to="product.detailLink" class="link text-line-2" tabindex="0">{{
            product.name
          }}</NuxtLink>
        </h6>

        <div class="flex-align gap-6" aria-label="Product rating">
          <div class="flex-align gap-8" aria-hidden="true">
            <span v-for="star in 5" :key="star" class="text-xs fw-medium text-warning-600 d-flex">
              <i
                :class="['ph-fill ph-star', { 'opacity-30': star > Math.round(product.rating) }]"
              ></i>
            </span>
          </div>
          <span class="text-xs fw-medium text-gray-500">{{ product.rating.toFixed(1) }}</span>
          <span class="text-xs fw-medium text-gray-500">({{ product.ratingCount }})</span>
        </div>
        <span
          v-if="product.fulfilledBy"
          class="py-2 px-8 text-xs rounded-pill text-main-two-600 bg-main-two-50 mt-16"
        >
          Fulfilled by {{ product.fulfilledBy }}
        </span>

        <div class="product-card__price mt-16 mb-30">
          <span
            v-if="product.oldPrice"
            class="text-gray-400 text-md fw-semibold text-decoration-line-through"
          >
            {{ product.oldPrice }}
          </span>
          <span class="text-heading text-md fw-semibold">
            {{ product.price }}
            <span class="text-gray-500 fw-normal">{{ product.priceUnit }}</span>
          </span>
        </div>

        <NuxtLink
          to="/cart"
          class="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
          tabindex="0"
          aria-label="Add product to cart"
        >
          Add To Cart <i class="ph ph-shopping-cart"></i>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useViewToggle } from "~/composables/useViewToggle";
import { products } from "~/data/vendor-list-two";

const { isListView } = useViewToggle();
const expandedItems = ref<Record<string, boolean>>({});

const toggleExpand = (productId: string) => {
  expandedItems.value[productId] = !expandedItems.value[productId];
};
</script>
