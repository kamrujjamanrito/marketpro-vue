<template>
  <section class="cart py-80">
    <div class="container container-lg">
      <div class="row gy-4">
        <div class="col-lg-11">
          <div class="cart-table border border-gray-100 rounded-8">
            <div class="overflow-x-auto scroll-sm scroll-sm-horizontal">
              <table class="table rounded-8 overflow-hidden">
                <thead>
                  <tr class="border-bottom border-neutral-100">
                    <th class="h6 mb-0 text-lg fw-bold px-40 py-32 border-end border-neutral-100">
                      Delete
                    </th>
                    <th class="h6 mb-0 text-lg fw-bold px-40 py-32 border-end border-neutral-100">
                      Product Name
                    </th>
                    <th class="h6 mb-0 text-lg fw-bold px-40 py-32 border-end border-neutral-100">
                      Unit Price
                    </th>
                    <th class="h6 mb-0 text-lg fw-bold px-40 py-32 border-end border-neutral-100">
                      Stock Status
                    </th>
                    <th class="h6 mb-0 text-lg fw-bold px-40 py-32"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in items" :key="item.id">
                    <td class="px-40 py-32 border-end border-neutral-100">
                      <button
                        type="button"
                        class="remove-tr-btn flex-align gap-12 hover-text-danger-600"
                        @click="removeItem(item.id)"
                      >
                        <i class="ph ph-x-circle text-2xl d-flex"></i> Remove
                      </button>
                    </td>
                    <td class="px-40 py-32 border-end border-neutral-100">
                      <div class="table-product d-flex align-items-center gap-24">
                        <NuxtLink
                          :to="item.detailLink"
                          class="table-product__thumb border border-gray-100 rounded-8 flex-center"
                        >
                          <NuxtImg :src="item.image" :alt="item.name" />
                        </NuxtLink>
                        <div class="table-product__content text-start">
                          <h6 class="title text-lg fw-semibold mb-8">
                            <NuxtLink :to="item.detailLink" class="link text-line-2" tabindex="0">{{
                              item.name
                            }}</NuxtLink>
                          </h6>
                          <div class="flex-align gap-16 mb-16">
                            <div class="flex-align gap-6">
                              <span class="text-md fw-medium text-warning-600 d-flex"
                                ><i class="ph-fill ph-star"></i
                              ></span>
                              <span class="text-md fw-semibold text-gray-900">{{
                                item.rating
                              }}</span>
                            </div>
                            <span class="text-sm fw-medium text-gray-200">|</span>
                            <span class="text-neutral-600 text-sm">{{ item.reviews }} Reviews</span>
                          </div>
                          <div class="flex-align gap-16">
                            <NuxtLink
                              v-for="tag in item.tags"
                              :key="tag"
                              to="/cart"
                              class="product-card__cart btn bg-gray-50 text-heading text-sm hover-bg-main-600 hover-text-white py-7 px-8 rounded-8 flex-center gap-8 fw-medium"
                            >
                              {{ tag }}
                            </NuxtLink>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-40 py-32 border-end border-neutral-100">
                      <span class="text-lg h6 mb-0 fw-semibold">${{ item.price.toFixed(2) }}</span>
                    </td>
                    <td class="px-40 py-32 border-end border-neutral-100">
                      <span class="text-lg h6 mb-0 fw-semibold">{{
                        item.inStock ? "In Stock" : "Out of Stock"
                      }}</span>
                    </td>
                    <td class="px-40 py-32">
                      <NuxtLink to="/cart" class="btn btn-main-two rounded-8 px-64">
                        Add To Cart <i class="ph ph-shopping-cart"></i>
                      </NuxtLink>
                    </td>
                  </tr>
                  <tr v-if="items.length === 0">
                    <td colspan="5" class="text-center py-32">Your cart is empty.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { cartItems, type CartItem } from "~/data/wishlist";

const items = ref<CartItem[]>([...cartItems]);

const removeItem = (id: number) => {
  items.value = items.value.filter(item => item.id !== id);
};
</script>
