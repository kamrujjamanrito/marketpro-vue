<template>
  <section class="vendor-two py-80">
    <div class="container container-lg">
      <VendorSearchTwo />
      <div class="row">
        <div class="col-xl-3 col-lg-4">
          <ShopSidebarTwo />
        </div>
        <div class="col-xl-9 col-lg-8">
          <VendorListTwo />
          <VendorPagination />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import VendorSearchTwo from "~/components/widgets/vendor/VendorSearchTwo.vue";
import ShopSidebarTwo from "~/components/widgets/sidebar/ShopSidebarTwo.vue";
import VendorListTwo from "~/components/widgets/vendor/VendorListTwo.vue";
import VendorPagination from "~/components/widgets/vendor/VendorPagination.vue";
</script>
