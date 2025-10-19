<template>
  <div>
    <Breadcrumb title="Vendor Details" />
    <VendorDetails />
    <ShippingOverviewTwo />
    <NewsletterThree />
  </div>
</template>

<script setup lang="ts">
import { useSeo } from "#imports";
import Breadcrumb from "~/components/layout/banner/Breadcrumb.vue";
import VendorDetails from "~/components/containers/vendor/VendorDetails.vue";
import ShippingOverviewTwo from "~/components/containers/shipping/ShippingOverviewTwo.vue";
import NewsletterThree from "~/components/widgets/newsletter/NewsletterThree.vue";

useSeo({
  title: "Vendor Details",
  description: "eCommerce Multivendor Vue JS 3, Nuxt JS 4, Bootstrap 5 Template",
  keywords: ["ecommerce", "fashion", "electronics", "grocery", "shop", "store", "multipurpose"],
});
</script>
