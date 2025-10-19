<template>
  <section class="vendors-list py-80">
    <div class="container container-lg">
      <div class="row gy-4">
        <div class="col-xxl-2 col-xl-3 col-lg-4">
          <ShopSidebar />
        </div>
        <div class="col-xxl-10 col-xl-9 col-lg-8">
          <VendorSearchForm />
          <VendorProductLists />
          <VendorPagination />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ShopSidebar from "~/components/widgets/sidebar/ShopSidebar.vue";
import VendorSearchForm from "~/components/widgets/vendor/VendorSearchForm.vue";
import VendorProductLists from "~/components/widgets/vendor/VendorProductLists.vue";
import VendorPagination from "~/components/widgets/vendor/VendorPagination.vue";
</script>
