<template>
  <section class="checkout py-80">
    <div class="container container-lg">
      <div class="border border-gray-100 rounded-8 px-30 py-20 mb-40">
        <span>
          Have a coupon?
          <NuxtLink
            to="/cart"
            class="fw-semibold text-gray-900 hover-text-decoration-underline hover-text-main-600"
          >
            Click here to enter your code
          </NuxtLink>
        </span>
      </div>

      <div class="row">
        <div class="col-xl-9 col-lg-8">
          <CheckoutForm ref="formRef" />
        </div>
        <div class="col-xl-3 col-lg-4">
          <div class="checkout-sidebar">
            <div class="bg-color-three rounded-8 p-24 text-center">
              <span class="text-gray-900 text-xl fw-semibold">Your Orders</span>
            </div>

            <div class="border border-gray-100 rounded-8 px-24 py-40 mt-24">
              <div class="mb-32 pb-32 border-bottom border-gray-100 flex-between gap-8">
                <span class="text-gray-900 fw-medium text-xl font-heading-two">Product</span>
                <span class="text-gray-900 fw-medium text-xl font-heading-two">Subtotal</span>
              </div>

              <div v-for="n in 4" :key="n" class="flex-between gap-24 mb-32">
                <div class="flex-align gap-12">
                  <span class="text-gray-900 fw-normal text-md font-heading-two w-144"
                    >HP Chromebook With Intel Celeron</span
                  >
                  <span class="text-gray-900 fw-normal text-md font-heading-two"
                    ><i class="ph-bold ph-x"></i
                  ></span>
                  <span class="text-gray-900 fw-semibold text-md font-heading-two">1</span>
                </div>
                <span class="text-gray-900 fw-bold text-md font-heading-two">$250.00</span>
              </div>

              <div class="border-top border-gray-100 pt-30 mt-30">
                <div class="mb-32 flex-between gap-8">
                  <span class="text-gray-900 font-heading-two text-xl fw-semibold">Subtotal</span>
                  <span class="text-gray-900 font-heading-two text-md fw-bold">$859.00</span>
                </div>
                <div class="mb-0 flex-between gap-8">
                  <span class="text-gray-900 font-heading-two text-xl fw-semibold">Total</span>
                  <span class="text-gray-900 font-heading-two text-md fw-bold">$859.00</span>
                </div>
              </div>
            </div>

            <div class="mt-32">
              <div v-for="method in paymentMethods" :key="method.id" class="payment-item">
                <div class="form-check common-check common-radio py-16 mb-0">
                  <input
                    :id="method.id"
                    v-model="selectedPayment"
                    class="form-check-input"
                    type="radio"
                    name="payment"
                    :value="method.id"
                  />
                  <label class="form-check-label fw-semibold text-neutral-600" :for="method.id">
                    {{ method.label }}
                  </label>
                </div>
                <div
                  v-if="selectedPayment === method.id"
                  class="payment-item__content px-16 py-24 rounded-8 bg-main-50 position-relative"
                >
                  <p class="text-gray-800">{{ method.description }}</p>
                </div>
              </div>
            </div>

            <div class="mt-32 pt-32 border-top border-gray-100">
              <p class="text-gray-500">
                Your personal data will be used to process your order, support your experience
                throughout this website, and for other purposes described in our
                <NuxtLink to="/" class="text-main-600 text-decoration-underline">
                  privacy policy </NuxtLink
                >.
              </p>
            </div>

            <button
              class="btn btn-main mt-40 py-18 w-100 rounded-8 mt-56"
              @click="formRef?.handleSubmit()"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { paymentMethods } from "~/data/payment-methods";
import CheckoutForm from "~/components/widgets/form/CheckoutForm.vue";

const formRef = ref<InstanceType<typeof CheckoutForm>>();

const selectedPayment = ref("payment1");
</script>
