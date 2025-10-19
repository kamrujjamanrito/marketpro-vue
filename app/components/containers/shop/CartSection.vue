<template>
  <section class="cart py-80">
    <div class="container container-lg">
      <div class="row gy-4">
        <div class="col-xl-9 col-lg-8">
          <div class="cart-table border border-gray-100 rounded-8 px-40 py-48">
            <div class="overflow-x-auto scroll-sm scroll-sm-horizontal">
              <table class="table style-three">
                <thead>
                  <tr>
                    <th class="h6 mb-0 text-lg fw-bold">Delete</th>
                    <th class="h6 mb-0 text-lg fw-bold">Product Name</th>
                    <th class="h6 mb-0 text-lg fw-bold">Price</th>
                    <th class="h6 mb-0 text-lg fw-bold">Quantity</th>
                    <th class="h6 mb-0 text-lg fw-bold">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartItems" :key="item.id">
                    <td>
                      <button
                        type="button"
                        class="remove-tr-btn flex-align gap-12 hover-text-danger-600"
                        @click="removeItem(item.id)"
                      >
                        <i class="ph ph-x-circle text-2xl d-flex"></i>
                        Remove
                      </button>
                    </td>
                    <td>
                      <div class="table-product d-flex align-items-center gap-24">
                        <NuxtLink
                          to="/product-details-two"
                          class="table-product__thumb border border-gray-100 rounded-8 flex-center"
                        >
                          <NuxtImg :src="item.image" alt="Product Image" />
                        </NuxtLink>
                        <div class="table-product__content text-start">
                          <h6 class="title text-lg fw-semibold mb-8">
                            <NuxtLink to="/product-details" class="link text-line-2" tabindex="0">
                              {{ item.name }}
                            </NuxtLink>
                          </h6>

                          <div class="flex-align gap-16 mb-16">
                            <div class="flex-align gap-6">
                              <span class="text-md fw-medium text-warning-600 d-flex">
                                <i class="ph-fill ph-star"></i>
                              </span>
                              <span class="text-md fw-semibold text-gray-900">
                                {{ item.rating }}
                              </span>
                            </div>
                            <span class="text-sm fw-medium text-gray-200">|</span>
                            <span class="text-neutral-600 text-sm">
                              {{ item.reviews }} Reviews
                            </span>
                          </div>

                          <div class="flex-align gap-16">
                            <NuxtLink
                              v-for="(tag, tagIndex) in item.tags"
                              :key="tagIndex"
                              to="/cart"
                              class="product-card__cart btn bg-gray-50 text-heading text-sm hover-bg-main-600 hover-text-white py-7 px-8 rounded-8 flex-center gap-8 fw-medium"
                            >
                              {{ tag }}
                            </NuxtLink>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="text-lg h6 mb-0 fw-semibold">
                        ${{ item.price.toFixed(2) }}
                      </span>
                    </td>
                    <td>
                      <div class="d-flex rounded-4 overflow-hidden">
                        <button
                          type="button"
                          class="quantity__minus border border-end border-gray-100 flex-shrink-0 h-48 w-48 text-neutral-600 flex-center hover-bg-main-600 hover-text-white"
                          @click="decreaseQuantity(item)"
                        >
                          <i class="ph ph-minus"></i>
                        </button>
                        <input
                          type="number"
                          class="quantity__input flex-grow-1 border border-gray-100 border-start-0 border-end-0 text-center w-32 px-4"
                          :value="item.quantity"
                          readonly
                        />
                        <button
                          type="button"
                          class="quantity__plus border border-end border-gray-100 flex-shrink-0 h-48 w-48 text-neutral-600 flex-center hover-bg-main-600 hover-text-white"
                          @click="increaseQuantity(item)"
                        >
                          <i class="ph ph-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <span class="text-lg h6 mb-0 fw-semibold">
                        ${{ (item.quantity * item.price).toFixed(2) }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="flex-between flex-wrap gap-16 mt-16">
              <div class="flex-align gap-16">
                <input type="text" class="common-input" placeholder="Coupon Code" />
                <button type="submit" class="btn btn-main py-18 w-100 rounded-8">
                  Apply Coupon
                </button>
              </div>
              <button type="submit" class="text-lg text-gray-500 hover-text-main-600">
                Update Cart
              </button>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4">
          <div class="cart-sidebar border border-gray-100 rounded-8 px-24 py-40">
            <h6 class="text-xl mb-32">Cart Totals</h6>
            <div class="bg-color-three rounded-8 p-24">
              <div class="mb-32 flex-between gap-8">
                <span class="text-gray-900 font-heading-two">Subtotal</span>
                <span class="text-gray-900 fw-semibold">${{ subtotal.toFixed(2) }}</span>
              </div>
              <div class="mb-32 flex-between gap-8">
                <span class="text-gray-900 font-heading-two">Estimated Delivery</span>
                <span class="text-gray-900 fw-semibold">Free</span>
              </div>
              <div class="mb-0 flex-between gap-8">
                <span class="text-gray-900 font-heading-two">Estimated Tax</span>
                <span class="text-gray-900 fw-semibold">USD {{ estimatedTax.toFixed(2) }}</span>
              </div>
            </div>
            <div class="bg-color-three rounded-8 p-24 mt-24">
              <div class="flex-between gap-8">
                <span class="text-gray-900 text-xl fw-semibold">Total</span>
                <span class="text-gray-900 text-xl fw-semibold">${{ total.toFixed(2) }}</span>
              </div>
            </div>
            <NuxtLink to="/checkout" class="btn btn-main mt-40 py-18 w-100 rounded-8">
              Proceed to checkout
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { CartItem } from "~/data/cart-items";
import { cartItems as initialCartItems } from "~/data/cart-items";

const cartItems = ref<CartItem[]>([...initialCartItems]);

function increaseQuantity(item: CartItem) {
  item.quantity++;
}

function decreaseQuantity(item: CartItem) {
  if (item.quantity > 1) {
    item.quantity--;
  }
}

function removeItem(id: number) {
  cartItems.value = cartItems.value.filter(item => item.id !== id);
}

const subtotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

const estimatedTax = computed(() => {
  return 10;
});

const total = computed(() => subtotal.value + estimatedTax.value);
</script>
