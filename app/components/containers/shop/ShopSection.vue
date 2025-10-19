<template>
  <section class="shop py-80">
    <div class="container container-lg">
      <div class="row">
        <div class="col-lg-3">
          <ShopSidebarMain />
        </div>

        <div class="col-lg-9">
          <div class="flex-between gap-16 flex-wrap mb-40">
            <span class="text-gray-900">Showing 1-20 of 85 result</span>
            <div class="position-relative flex-align gap-16 flex-wrap">
              <div class="list-grid-btns flex-align gap-16">
                <button
                  type="button"
                  :class="[
                    'grid-btn text-2xl d-flex w-48 h-48 border rounded-8 justify-content-center align-items-center',
                    isListView ? 'border-gray-100' : 'border-main-600 text-white bg-main-600',
                  ]"
                  :aria-pressed="!isListView"
                  aria-label="Grid view"
                  @click="toggleGridView"
                >
                  <i class="ph ph-squares-four"></i>
                </button>
                <button
                  type="button"
                  :class="[
                    'list-btn text-2xl d-flex w-48 h-48 border rounded-8 justify-content-center align-items-center',
                    isListView ? 'border-main-600 text-white bg-main-600' : 'border-gray-100',
                  ]"
                  :aria-pressed="isListView"
                  aria-label="List view"
                  @click="toggleListView"
                >
                  <i class="ph ph-list-bullets"></i>
                </button>
              </div>
              <div class="position-relative text-gray-500 flex-align gap-4 text-14">
                <label for="sorting" class="text-inherit flex-shrink-0">Sort by: </label>
                <select
                  id="sorting"
                  class="form-control common-input px-14 py-14 text-inherit rounded-6 w-auto"
                >
                  <option value="1" selected>Popular</option>
                  <option value="1">Latest</option>
                  <option value="1">Trending</option>
                  <option value="1">Matches</option>
                </select>
              </div>
              <button
                type="button"
                class="w-44 h-44 d-lg-none d-flex flex-center border border-gray-100 rounded-6 text-2xl sidebar-btn"
                @click="toggleSidebar"
              >
                <i class="ph-bold ph-funnel"></i>
              </button>
            </div>
          </div>
          <div :class="['list-grid-wrapper', { 'list-view': isListView }]">
            <div
              v-for="product in productList"
              :key="product.id"
              class="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2"
            >
              <NuxtLink
                :to="product.link"
                class="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
              >
                <span
                  v-if="product.badge"
                  class="product-card__badge text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                  :class="`bg-${product.badge.color} px-8 py-4`"
                >
                  {{ product.badge.text }}
                </span>
                <NuxtImg :src="product.image" alt="Product Image" class="w-auto max-w-unset" />
              </NuxtLink>

              <div class="product-card__content mt-16">
                <h6 class="title text-lg fw-semibold mt-12 mb-8">
                  <NuxtLink :to="product.link" class="link text-line-2" tabindex="0">
                    {{ product.title }}
                  </NuxtLink>
                </h6>

                <div class="flex-align mb-20 mt-16 gap-6">
                  <span class="text-xs fw-medium text-gray-500">{{ product.rating }}</span>
                  <span class="text-xs fw-medium text-warning-600 d-flex">
                    <i class="ph-fill ph-star"></i>
                  </span>
                  <span class="text-xs fw-medium text-gray-500">({{ product.reviews }})</span>
                </div>

                <div class="mt-8">
                  <div
                    class="progress w-100 bg-color-three rounded-pill h-4"
                    role="progressbar"
                    aria-label="Product progress"
                    :aria-valuenow="product.progress.sold"
                    aria-valuemin="0"
                    :aria-valuemax="product.progress.total"
                  >
                    <div
                      class="progress-bar bg-main-two-600 rounded-pill"
                      :style="`width: ${(product.progress.sold / product.progress.total) * 100}%`"
                    ></div>
                  </div>
                  <span class="text-gray-900 text-xs fw-medium mt-8">
                    Sold: {{ product.progress.sold }}/{{ product.progress.total }}
                  </span>
                </div>

                <div class="product-card__price my-20">
                  <span class="text-gray-400 text-md fw-semibold text-decoration-line-through">
                    ${{ product.price.original.toFixed(2) }}
                  </span>
                  <span class="text-heading text-md fw-semibold">
                    ${{ product.price.sale.toFixed(2) }}
                    <span class="text-gray-500 fw-normal">{{ product.price.unit }}</span>
                  </span>
                </div>

                <NuxtLink
                  to="/cart"
                  class="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                  tabindex="0"
                >
                  Add To Cart <i class="ph ph-shopping-cart"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <ul class="pagination flex-center flex-wrap gap-16">
            <li class="page-item">
              <NuxtLink
                class="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                to="/shop"
              >
                <i class="ph-bold ph-arrow-left"></i>
              </NuxtLink>
            </li>
            <li class="page-item active">
              <NuxtLink
                class="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                to="/shop"
                >01</NuxtLink
              >
            </li>
            <li class="page-item">
              <NuxtLink
                class="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                to="/shop"
                >02</NuxtLink
              >
            </li>
            <li class="page-item">
              <NuxtLink
                class="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                to="/shop"
                >03</NuxtLink
              >
            </li>
            <li class="page-item">
              <NuxtLink
                class="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                to="/shop"
                >04</NuxtLink
              >
            </li>
            <li class="page-item">
              <NuxtLink
                class="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                to="/shop"
                >05</NuxtLink
              >
            </li>
            <li class="page-item">
              <NuxtLink
                class="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                to="/shop"
                >06</NuxtLink
              >
            </li>
            <li class="page-item">
              <NuxtLink
                class="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                to="/shop"
                >07</NuxtLink
              >
            </li>
            <li class="page-item">
              <NuxtLink
                class="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                to="/shop"
              >
                <i class="ph-bold ph-arrow-right"></i>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSidebar } from "#imports";
import { productList } from "~/data/products-list";
import { useViewToggle } from "~/composables/useViewToggle";
import ShopSidebarMain from "~/components/widgets/sidebar/ShopSidebarMain.vue";
const { isListView, toggleListView, toggleGridView } = useViewToggle();
const { toggleSidebar } = useSidebar();
</script>
