<template>
  <section class="vendors-list py-80">
    <div class="container container-lg">
      <div class="flex-between search-custom flex-wrap gap-8 mb-40">
        <span class="text-neutral-600 fw-medium px-40 py-12 rounded-pill border border-neutral-100"
          >Showing 1-20 of 85 results</span
        >
        <div class="flex-align gap-16 search-custom-inner">
          <form
            class="search-form__wrapper position-relative d-block"
            @submit.prevent="handleSubmit"
          >
            <input
              v-model="searchQuery"
              type="text"
              class="search-form__input common-input py-13 ps-16 pe-18 rounded-pill pe-44"
              placeholder="Search vendors by name or ID..."
            />
            <button
              type="submit"
              class="w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
            >
              <i class="ph ph-magnifying-glass"></i>
            </button>
          </form>
          <div class="flex-align gap-8">
            <span class="text-gray-900 flex-shrink-0">Sort by:</span>
            <select
              class="common-input form-select rounded-pill border border-gray-100 d-inline-block ps-20 pe-36 h-48 py-0 fw-medium"
            >
              <option value="1">Latest</option>
              <option value="1">Old</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row gy-4 vendor-card-wrapper">
        <div
          v-for="vendor in vendors"
          :key="vendor.id"
          class="col-xxl-3 col-lg-4 col-sm-6"
          :data-aos="`zoom-in`"
          :data-aos-duration="vendor.aosDuration"
        >
          <div class="vendor-card text-center px-16 pb-24">
            <div>
              <NuxtImg :src="vendor.logo" :alt="vendor.name" class="vendor-card__logo m-12" />
              <h6 class="title mt-32">
                <NuxtLink :to="`/vendor/${slugify(vendor.name)}`" class="">{{
                  vendor.name
                }}</NuxtLink>
              </h6>
              <span class="text-heading text-sm d-block">{{ vendor.deliveryTime }}</span>
              <NuxtLink
                to="/shop"
                class="bg-white text-neutral-600 hover-bg-main-600 hover-text-white rounded-pill py-6 px-16 text-12 mt-8"
                >{{ vendor.offer }}</NuxtLink
              >
            </div>
            <div class="vendor-card__list mt-22 flex-center flex-wrap gap-8">
              <div
                v-for="(image, index) in vendor.productImages"
                :key="index"
                class="vendor-card__item bg-white rounded-circle flex-center"
              >
                <NuxtImg :src="image" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="pagination flex-center flex-wrap gap-16">
        <li class="page-item">
          <NuxtLink
            class="page-link h-64 w-64 flex-center text-xxl rounded-circle fw-medium text-neutral-600 border border-gray-100"
            to="/vendor"
          >
            <i class="ph-bold ph-arrow-left"></i>
          </NuxtLink>
        </li>
        <li class="page-item active">
          <NuxtLink
            class="page-link h-64 w-64 flex-center text-md rounded-circle fw-medium text-neutral-600 border border-gray-100"
            to="/vendor"
            >01</NuxtLink
          >
        </li>
        <li class="page-item">
          <NuxtLink
            class="page-link h-64 w-64 flex-center text-md rounded-circle fw-medium text-neutral-600 border border-gray-100"
            to="/vendor"
            >02</NuxtLink
          >
        </li>
        <li class="page-item">
          <NuxtLink
            class="page-link h-64 w-64 flex-center text-md rounded-circle fw-medium text-neutral-600 border border-gray-100"
            to="/vendor"
            >03</NuxtLink
          >
        </li>
        <li class="page-item">
          <NuxtLink
            class="page-link h-64 w-64 flex-center text-md rounded-circle fw-medium text-neutral-600 border border-gray-100"
            to="/vendor"
            >04</NuxtLink
          >
        </li>
        <li class="page-item">
          <NuxtLink
            class="page-link h-64 w-64 flex-center text-md rounded-circle fw-medium text-neutral-600 border border-gray-100"
            to="/vendor"
            >05</NuxtLink
          >
        </li>
        <li class="page-item">
          <NuxtLink
            class="page-link h-64 w-64 flex-center text-md rounded-circle fw-medium text-neutral-600 border border-gray-100"
            to="/vendor"
            >06</NuxtLink
          >
        </li>
        <li class="page-item">
          <NuxtLink
            class="page-link h-64 w-64 flex-center text-md rounded-circle fw-medium text-neutral-600 border border-gray-100"
            to="/vendor"
            >07</NuxtLink
          >
        </li>
        <li class="page-item">
          <NuxtLink
            class="page-link h-64 w-64 flex-center text-xxl rounded-circle fw-medium text-neutral-600 border border-gray-100"
            to="/vendor"
          >
            <i class="ph-bold ph-arrow-right"></i>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { vendors } from "~/data/vendors";

const searchQuery = ref("");

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function handleSubmit() {
  const trimmedQuery = searchQuery.value.trim();

  if (!trimmedQuery) {
    alert("Please enter a vendor name or ID.");
    return;
  }
}
</script>
