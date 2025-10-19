<template>
  <ul
    class="pagination flex-center flex-wrap gap-16"
    role="navigation"
    aria-label="Pagination Navigation"
  >
    <li class="page-item">
      <NuxtLink
        to="/vendor"
        class="page-link h-64 w-64 flex-center text-xxl rounded-circle fw-medium text-neutral-600 border border-gray-100"
        aria-label="Previous page"
      >
        <i class="ph-bold ph-arrow-left"></i>
      </NuxtLink>
    </li>

    <li class="page-item active" aria-current="page">
      <NuxtLink
        to="/vendor"
        class="page-link h-64 w-64 flex-center text-md rounded-circle fw-medium text-neutral-600 border border-gray-100"
      >
        01
      </NuxtLink>
    </li>

    <li class="page-item">
      <NuxtLink
        to="/vendor"
        class="page-link h-64 w-64 flex-center text-md rounded-circle fw-medium text-neutral-600 border border-gray-100"
      >
        02
      </NuxtLink>
    </li>

    <li class="page-item">
      <NuxtLink
        to="/vendor"
        class="page-link h-64 w-64 flex-center text-md rounded-circle fw-medium text-neutral-600 border border-gray-100"
      >
        03
      </NuxtLink>
    </li>

    <li class="page-item">
      <NuxtLink
        to="/vendor"
        class="page-link h-64 w-64 flex-center text-md rounded-circle fw-medium text-neutral-600 border border-gray-100"
      >
        04
      </NuxtLink>
    </li>

    <li class="page-item">
      <NuxtLink
        to="/vendor"
        class="page-link h-64 w-64 flex-center text-md rounded-circle fw-medium text-neutral-600 border border-gray-100"
      >
        05
      </NuxtLink>
    </li>

    <li class="page-item">
      <NuxtLink
        to="/vendor"
        class="page-link h-64 w-64 flex-center text-md rounded-circle fw-medium text-neutral-600 border border-gray-100"
      >
        06
      </NuxtLink>
    </li>

    <li class="page-item">
      <NuxtLink
        to="/vendor"
        class="page-link h-64 w-64 flex-center text-md rounded-circle fw-medium text-neutral-600 border border-gray-100"
      >
        07
      </NuxtLink>
    </li>

    <li class="page-item">
      <NuxtLink
        to="/vendor"
        class="page-link h-64 w-64 flex-center text-xxl rounded-circle fw-medium text-neutral-600 border border-gray-100"
        aria-label="Next page"
      >
        <i class="ph-bold ph-arrow-right"></i>
      </NuxtLink>
    </li>
  </ul>
</template>
