<template>
  <div :class="['shop-sidebar', { active: isSidebarActive }]">
    <button
      type="button"
      class="shop-sidebar__close d-lg-none d-flex w-32 h-32 flex-center border border-gray-100 rounded-circle hover-bg-main-600 position-absolute inset-inline-end-0 me-10 mt-8 hover-text-white hover-border-main-600"
      @click="closeSidebar"
    >
      <i class="ph ph-x"></i>
    </button>
    <div class="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
      <h6 class="text-xl border-bottom border-gray-100 pb-24 mb-24">Product Category</h6>
      <ul class="max-h-540 overflow-y-auto scroll-sm">
        <li class="mb-24">
          <NuxtLink to="/product-details-two" class="text-gray-900 hover-text-main-600"
            >Mobile & Accessories (12)</NuxtLink
          >
        </li>
        <li class="mb-24">
          <NuxtLink to="/product-details-two" class="text-gray-900 hover-text-main-600"
            >Laptop (12)</NuxtLink
          >
        </li>
        <li class="mb-24">
          <NuxtLink to="/product-details-two" class="text-gray-900 hover-text-main-600"
            >Electronics (12)</NuxtLink
          >
        </li>
        <li class="mb-24">
          <NuxtLink to="/product-details-two" class="text-gray-900 hover-text-main-600"
            >Smart Watch (12)</NuxtLink
          >
        </li>
        <li class="mb-24">
          <NuxtLink to="/product-details-two" class="text-gray-900 hover-text-main-600"
            >Storage (12)</NuxtLink
          >
        </li>
        <li class="mb-24">
          <NuxtLink to="/product-details-two" class="text-gray-900 hover-text-main-600"
            >Portable Devices (12)</NuxtLink
          >
        </li>
        <li class="mb-24">
          <NuxtLink to="/product-details-two" class="text-gray-900 hover-text-main-600"
            >Action Camera (12)</NuxtLink
          >
        </li>
        <li class="mb-24">
          <NuxtLink to="/product-details-two" class="text-gray-900 hover-text-main-600"
            >Smart Gadget (12)</NuxtLink
          >
        </li>
        <li class="mb-24">
          <NuxtLink to="/product-details-two" class="text-gray-900 hover-text-main-600"
            >Monitor (12)</NuxtLink
          >
        </li>
        <li class="mb-24">
          <NuxtLink to="/product-details-two" class="text-gray-900 hover-text-main-600"
            >Smart TV (12)</NuxtLink
          >
        </li>
        <li class="mb-24">
          <NuxtLink to="/product-details-two" class="text-gray-900 hover-text-main-600"
            >Camera (12)</NuxtLink
          >
        </li>
        <li class="mb-24">
          <NuxtLink to="/product-details-two" class="text-gray-900 hover-text-main-600"
            >Monitor Stand (12)</NuxtLink
          >
        </li>
        <li class="mb-0">
          <NuxtLink to="/product-details-two" class="text-gray-900 hover-text-main-600"
            >Headphone (12)</NuxtLink
          >
        </li>
      </ul>
    </div>
    <PriceRangeSlider :min="0" :max="25" />
    <div class="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
      <h6 class="text-xl border-bottom border-gray-100 pb-24 mb-24">Filter by Rating</h6>
      <div class="flex-align gap-8 position-relative mb-20">
        <label class="position-absolute w-100 h-100 cursor-pointer" for="rating5"> </label>
        <div class="common-check common-radio mb-0">
          <input id="rating5" class="form-check-input" type="radio" name="flexRadioDefault" />
        </div>
        <div
          class="progress w-100 bg-gray-100 rounded-pill h-8"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="70"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-main-600 rounded-pill" style="width: 70%"></div>
        </div>
        <div class="flex-align gap-4">
          <span class="text-xs fw-medium text-warning-600 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-warning-600 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-warning-600 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-warning-600 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-warning-600 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
        </div>
        <span class="text-gray-900 flex-shrink-0">124</span>
      </div>
      <div class="flex-align gap-8 position-relative mb-20">
        <label class="position-absolute w-100 h-100 cursor-pointer" for="rating4"> </label>
        <div class="common-check common-radio mb-0">
          <input id="rating4" class="form-check-input" type="radio" name="flexRadioDefault" />
        </div>
        <div
          class="progress w-100 bg-gray-100 rounded-pill h-8"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-main-600 rounded-pill" style="width: 50%"></div>
        </div>
        <div class="flex-align gap-4">
          <span class="text-xs fw-medium text-warning-600 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-warning-600 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-warning-600 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-warning-600 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-gray-400 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
        </div>
        <span class="text-gray-900 flex-shrink-0">52</span>
      </div>
      <div class="flex-align gap-8 position-relative mb-20">
        <label class="position-absolute w-100 h-100 cursor-pointer" for="rating3"> </label>
        <div class="common-check common-radio mb-0">
          <input id="rating3" class="form-check-input" type="radio" name="flexRadioDefault" />
        </div>
        <div
          class="progress w-100 bg-gray-100 rounded-pill h-8"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="35"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-main-600 rounded-pill" style="width: 35%"></div>
        </div>
        <div class="flex-align gap-4">
          <span class="text-xs fw-medium text-warning-600 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-warning-600 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-warning-600 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-gray-400 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-gray-400 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
        </div>
        <span class="text-gray-900 flex-shrink-0">12</span>
      </div>
      <div class="flex-align gap-8 position-relative mb-20">
        <label class="position-absolute w-100 h-100 cursor-pointer" for="rating2"> </label>
        <div class="common-check common-radio mb-0">
          <input id="rating2" class="form-check-input" type="radio" name="flexRadioDefault" />
        </div>
        <div
          class="progress w-100 bg-gray-100 rounded-pill h-8"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="20"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-main-600 rounded-pill" style="width: 20%"></div>
        </div>
        <div class="flex-align gap-4">
          <span class="text-xs fw-medium text-warning-600 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-warning-600 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-gray-400 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-gray-400 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-gray-400 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
        </div>
        <span class="text-gray-900 flex-shrink-0">5</span>
      </div>
      <div class="flex-align gap-8 position-relative mb-0">
        <label class="position-absolute w-100 h-100 cursor-pointer" for="rating1"> </label>
        <div class="common-check common-radio mb-0">
          <input id="rating1" class="form-check-input" type="radio" name="flexRadioDefault" />
        </div>
        <div
          class="progress w-100 bg-gray-100 rounded-pill h-8"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="5"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-main-600 rounded-pill" style="width: 5%"></div>
        </div>
        <div class="flex-align gap-4">
          <span class="text-xs fw-medium text-warning-600 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-gray-400 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-gray-400 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-gray-400 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
          <span class="text-xs fw-medium text-gray-400 d-flex"
            ><i class="ph-fill ph-star"></i
          ></span>
        </div>
        <span class="text-gray-900 flex-shrink-0">2</span>
      </div>
    </div>
    <div class="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
      <h6 class="text-xl border-bottom border-gray-100 pb-24 mb-24">Filter by Color</h6>
      <ul class="max-h-540 overflow-y-auto scroll-sm">
        <li class="mb-24">
          <div class="form-check common-check common-radio checked-black">
            <input id="color1" class="form-check-input" type="radio" name="color" />
            <label class="form-check-label" for="color1">Black(12)</label>
          </div>
        </li>
        <li class="mb-24">
          <div class="form-check common-check common-radio checked-primary">
            <input id="color2" class="form-check-input" type="radio" name="color" />
            <label class="form-check-label" for="color2">Blue (12)</label>
          </div>
        </li>
        <li class="mb-24">
          <div class="form-check common-check common-radio checked-gray">
            <input id="color3" class="form-check-input" type="radio" name="color" />
            <label class="form-check-label" for="color3">Gray (12)</label>
          </div>
        </li>
        <li class="mb-24">
          <div class="form-check common-check common-radio checked-success">
            <input id="color4" class="form-check-input" type="radio" name="color" />
            <label class="form-check-label" for="color4">Green (12)</label>
          </div>
        </li>
        <li class="mb-24">
          <div class="form-check common-check common-radio checked-danger">
            <input id="color5" class="form-check-input" type="radio" name="color" />
            <label class="form-check-label" for="color5">Red (12)</label>
          </div>
        </li>
        <li class="mb-24">
          <div class="form-check common-check common-radio checked-danger">
            <input id="color6" class="form-check-input" type="radio" name="color" />
            <label class="form-check-label" for="color6">White (12)</label>
          </div>
        </li>
        <li class="mb-0">
          <div class="form-check common-check common-radio checked-purple">
            <input id="color7" class="form-check-input" type="radio" name="color" />
            <label class="form-check-label" for="color7">Purple (12)</label>
          </div>
        </li>
      </ul>
    </div>
    <div class="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
      <h6 class="text-xl border-bottom border-gray-100 pb-24 mb-24">Filter by Brand</h6>
      <ul class="max-h-540 overflow-y-auto scroll-sm">
        <li class="mb-24">
          <div class="form-check common-check common-radio">
            <input id="brand1" class="form-check-input" type="radio" name="color" />
            <label class="form-check-label" for="brand1">Apple</label>
          </div>
        </li>
        <li class="mb-24">
          <div class="form-check common-check common-radio">
            <input id="brand2" class="form-check-input" type="radio" name="color" />
            <label class="form-check-label" for="brand2">Samsung</label>
          </div>
        </li>
        <li class="mb-24">
          <div class="form-check common-check common-radio">
            <input id="brand3" class="form-check-input" type="radio" name="color" />
            <label class="form-check-label" for="brand3">Microsoft</label>
          </div>
        </li>
        <li class="mb-24">
          <div class="form-check common-check common-radio">
            <input id="brand4" class="form-check-input" type="radio" name="color" />
            <label class="form-check-label" for="brand4">Apple</label>
          </div>
        </li>
        <li class="mb-24">
          <div class="form-check common-check common-radio">
            <input id="brand5" class="form-check-input" type="radio" name="color" />
            <label class="form-check-label" for="brand5">HP</label>
          </div>
        </li>
        <li class="mb-24">
          <div class="form-check common-check common-radio">
            <input id="DELL" class="form-check-input" type="radio" name="color" />
            <label class="form-check-label" for="DELL">DELL</label>
          </div>
        </li>
        <li class="mb-0">
          <div class="form-check common-check common-radio">
            <input id="Redmi" class="form-check-input" type="radio" name="color" />
            <label class="form-check-label" for="Redmi">Redmi</label>
          </div>
        </li>
      </ul>
    </div>
    <div class="shop-sidebar__box rounded-8">
      <NuxtImg src="/images/thumbs/advertise-img1.png" alt="Image" />
    </div>
  </div>
  <div
    class="side-overlay"
    :class="{ show: isOverlayVisible }"
    aria-hidden="true"
    @click="closeSidebar"
  ></div>
</template>

<script setup lang="ts">
import { useSidebar } from "#imports";
import PriceRangeSlider from "../vendor/PriceRangeSlider.vue";
const { isOverlayVisible, isSidebarActive, closeSidebar } = useSidebar();
</script>
