<template>
  <section class="vendor-two-details py-80">
    <div class="container container-lg">
      <div class="vendor-two-details-wrapper d-flex flex-wrap align-items-start gap-24">
        <ShopSidebarThree />

        <div class="vendor-two-details__contents">
          <div
            class="inner-banner-two bg-img rounded-16 overflow-hidden"
            style="background-image: url(/images/thumbs/inner-banner-two-bg.png)"
          >
            <div class="row">
              <div class="col-6 d-xl-block d-none"></div>
              <div class="col-xl-6 d-xl-flex">
                <div class="text-center py-32">
                  <h6 class="text-white">Daily Offer</h6>
                  <h3 class="my-32 text-white">SALE 48% OFF</h3>
                  <NuxtLink
                    to="/shop"
                    class="btn btn-main d-inline-flex align-items-center rounded-8 gap-8"
                  >
                    Shop Now
                    <span class="icon text-xl d-flex"><i class="ph ph-shopping-cart"></i></span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <VendorSearchThree />
          <VendorListThree />
          <VendorPagination />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ShopSidebarThree from "~/components/widgets/sidebar/ShopSidebarThree.vue";
import VendorSearchThree from "~/components/widgets/vendor/VendorSearchThree.vue";
import VendorListThree from "~/components/widgets/vendor/VendorListThree.vue";
import VendorPagination from "~/components/widgets/vendor/VendorPagination.vue";
</script>
