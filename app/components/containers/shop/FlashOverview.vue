<template>
  <section class="flash-sales pt-80 overflow-hidden">
    <div class="container container-lg">
      <div class="row gy-4 arrow-style-two">
        <div class="col-lg-6" data-aos="fade-up" data-aos-duration="600">
          <div
            class="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8 ps-56-px"
          >
            <img
              src="/images/bg/flash-sale-bg1.png"
              alt=""
              class="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg"
            />
            <div class="flash-sales-item__content ms-sm-auto">
              <h6 class="text-32 mb-8">X-Connect Smart Television</h6>
              <p class="text-neutral-500 mb-12">Time remaining until the end of the offer.</p>
              <div id="countdown1" class="countdown">
                <ul class="countdown-list flex-align flex-wrap">
                  <li
                    class="countdown-list__item py-8 px-12 text-heading flex-align gap-4 text-sm fw-medium box-shadow-4xl rounded-5"
                  >
                    <span class="days"></span> D
                  </li>
                  <li
                    class="countdown-list__item py-8 px-12 text-heading flex-align gap-4 text-sm fw-medium box-shadow-4xl rounded-5"
                  >
                    <span class="hours"></span> H
                  </li>
                  <li
                    class="countdown-list__item py-8 px-12 text-heading flex-align gap-4 text-sm fw-medium box-shadow-4xl rounded-5"
                  >
                    <span class="minutes"></span> M
                  </li>
                  <li
                    class="countdown-list__item py-8 px-12 text-heading flex-align gap-4 text-sm fw-medium box-shadow-4xl rounded-5"
                  >
                    <span class="seconds"></span> S
                  </li>
                </ul>
              </div>
              <NuxtLink
                to="/shop"
                class="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
              >
                Shop Now
                <span class="icon text-xl d-flex"><i class="ph ph-arrow-right"></i></span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-duration="1000">
          <div
            class="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8 ps-56-px"
          >
            <img
              src="/images/bg/flash-sale-bg2.png"
              alt=""
              class="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg"
            />
            <div class="flash-sales-item__content">
              <h6 class="text-32 mb-8">Vegetables Combo Box</h6>
              <p class="text-heading mb-12">Time remaining until the end of the offer.</p>
              <div id="countdown2" class="countdown">
                <ul class="countdown-list flex-align flex-wrap">
                  <li
                    class="countdown-list__item py-8 px-12 flex-align gap-4 text-sm fw-medium box-shadow-4xl rounded-5 bg-main-600 text-white"
                  >
                    <span class="days"></span> D
                  </li>
                  <li
                    class="countdown-list__item py-8 px-12 flex-align gap-4 text-sm fw-medium box-shadow-4xl rounded-5 bg-main-600 text-white"
                  >
                    <span class="hours"></span> H
                  </li>
                  <li
                    class="countdown-list__item py-8 px-12 flex-align gap-4 text-sm fw-medium box-shadow-4xl rounded-5 bg-main-600 text-white"
                  >
                    <span class="minutes"></span> M
                  </li>
                  <li
                    class="countdown-list__item py-8 px-12 flex-align gap-4 text-sm fw-medium box-shadow-4xl rounded-5 bg-main-600 text-white"
                  >
                    <span class="seconds"></span> S
                  </li>
                </ul>
              </div>
              <NuxtLink
                to="/shop"
                class="btn bg-success-600 hover-bg-success-700 d-inline-flex align-items-center rounded-pill gap-8 mt-24"
              >
                Shop Now
                <span class="icon text-xl d-flex"><i class="ph ph-arrow-right"></i></span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";
import { initializeCountdown } from "@/utils/countdown";

const countdownIntervals: number[] = [];

onMounted(() => {
  const countdown1 = initializeCountdown("countdown1", "2027-12-30T23:59:59", () => {});
  const countdown2 = initializeCountdown("countdown2", "2027-10-30T23:59:59", () => {});

  if (countdown1 !== null) countdownIntervals.push(countdown1);
  if (countdown2 !== null) countdownIntervals.push(countdown2);
});

onBeforeUnmount(() => {
  countdownIntervals.forEach(clearInterval);
});
</script>
