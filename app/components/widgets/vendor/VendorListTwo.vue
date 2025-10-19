<template>
  <div
    :class="['list-grid-wrapper vendors-two-item-wrapper grid-cols-3', { 'list-view': isListView }]"
  >
    <div
      v-for="vendor in vendors"
      :key="vendor.id"
      class="vendors-two-item rounded-12 overflow-hidden bg-color-three border border-neutral-50 hover-border-main-two-600 transition-2"
    >
      <div class="vendors-two-item__top bg-overlay style-two position-relative">
        <div class="vendors-two-item__thumbs h-210">
          <NuxtImg :src="vendor.image" :alt="`${vendor.name} image`" class="cover-img" />
        </div>
        <div
          class="position-absolute top-0 inset-inline-start-0 w-100 h-100 p-24 z-1 d-flex flex-column justify-content-between"
        >
          <div class="d-flex align-items-center justify-content-between">
            <span class="w-80 h-80 flex-center bg-white rounded-circle flex-shrink-0">
              <NuxtImg :src="vendor.icon" :alt="`${vendor.name} icon`" />
            </span>
            <button
              type="button"
              class="text-uppercase border border-white px-16 py-8 rounded-pill text-white text-sm hover-bg-main-two-600 hover-text-white hover-border-main-two-600 transition-2"
            >
              FOLLOW
            </button>
          </div>
          <div class="mt-16">
            <h6 class="text-white fw-semibold mb-12">
              <NuxtLink :to="`/vendor-two/${slugify(vendor.name)}`">
                {{ vendor.name }}
              </NuxtLink>
            </h6>
            <div class="flex-align gap-6">
              <div class="flex-align gap-8">
                <span v-for="n in 5" :key="n" class="text-xs fw-medium text-warning-600 d-flex">
                  <i class="ph-fill ph-star"></i>
                </span>
              </div>
              <span class="text-xs fw-medium text-white">{{ vendor.rating }}</span>
              <span class="text-xs fw-medium text-white">({{ vendor.ratingCount }})</span>
            </div>
          </div>
        </div>
      </div>

      <div class="vendors-two-item__content p-24 flex-grow-1">
        <div class="d-flex flex-column gap-14">
          <div class="flex-align gap-8">
            <span class="flex-center text-main-two-600 text-2xl flex-shrink-0">
              <i class="ph ph-map-pin-line"></i>
            </span>
            <p class="text-md text-gray-900">{{ vendor.address }}</p>
          </div>
          <div class="flex-align gap-8">
            <span class="flex-center text-main-two-600 text-2xl flex-shrink-0">
              <i class="ph ph-envelope-simple"></i>
            </span>
            <NuxtLink
              :to="`mailto:${vendor.email}`"
              class="text-md text-gray-900 hover-text-main-60"
            >
              {{ vendor.email }}
            </NuxtLink>
          </div>
          <div class="flex-align gap-8">
            <span class="flex-center text-main-two-600 text-2xl flex-shrink-0">
              <i class="ph ph-phone"></i>
            </span>
            <NuxtLink :to="`tel:${vendor.phone}`" class="text-md text-gray-900 hover-text-main-60">
              {{ vendor.phone }}
            </NuxtLink>
          </div>
        </div>

        <NuxtLink
          :to="`/vendor-two/${slugify(vendor.name)}`"
          class="btn bg-neutral-600 hover-bg-neutral-700 text-white py-12 px-24 rounded-8 flex-center gap-8 fw-medium mt-24"
        >
          Visit Store
          <span class="text-xl d-flex text-main-two-600">
            <i class="ph ph-storefront"></i>
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vendors } from "~/data/vendor-two";
import { useViewToggle } from "~/composables/useViewToggle";

const { isListView } = useViewToggle();

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
</script>
