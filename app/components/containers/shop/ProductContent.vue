<template>
  <div class="pt-80">
    <div class="product-dContent border rounded-24">
      <div
        class="product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16"
      >
        <ul id="pills-tab" class="nav common-tab nav-pills mb-3" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              id="pills-description-tab"
              class="nav-link active"
              data-bs-toggle="pill"
              data-bs-target="#pills-description"
              type="button"
              role="tab"
              aria-controls="pills-description"
              aria-selected="true"
            >
              Description
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              id="pills-reviews-tab"
              class="nav-link"
              data-bs-toggle="pill"
              data-bs-target="#pills-reviews"
              type="button"
              role="tab"
              aria-controls="pills-reviews"
              aria-selected="false"
            >
              Reviews
            </button>
          </li>
        </ul>
        <NuxtLink
          to="/"
          class="btn bg-color-one rounded-16 flex-align gap-8 text-main-600 hover-bg-main-600 hover-text-white"
        >
          <NuxtImg src="/images/icon/satisfaction-icon.png" alt="" />
          100% Satisfaction Guaranteed
        </NuxtLink>
      </div>
      <div class="product-dContent__box">
        <div id="pills-tabContent" class="tab-content">
          <div
            id="pills-description"
            class="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="pills-description-tab"
            tabindex="0"
          >
            <div class="mb-40">
              <h6 class="mb-24">Product Description</h6>
              <p>
                Wherever celebrations and good times happen, the LAY'S brand will be there just as
                it has been for more than 75 years. With flavors almost as rich as our history, we
                have a chip or crisp flavor guaranteed to bring a smile on your face.
              </p>
              <p>
                Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc
                a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat
                eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet
                eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur
                laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo.
                Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet
                consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus
                commodo vel.
              </p>
              <ul class="list-inside mt-32 ms-16">
                <li class="text-gray-400 mb-4">8.0 oz. bag of LAY'S Classic Potato Chips</li>
                <li class="text-gray-400 mb-4">Tasty LAY's potato chips are a great snack</li>
                <li class="text-gray-400 mb-4">
                  Includes three ingredients: potatoes, oil, and salt
                </li>
                <li class="text-gray-400 mb-4">Gluten free product</li>
              </ul>
              <ul class="mt-32">
                <li class="text-gray-400 mb-4">Made in USA</li>
                <li class="text-gray-400 mb-4">Ready To Eat.</li>
              </ul>
            </div>
            <div class="mb-40">
              <h6 class="mb-24">Product Specifications</h6>
              <ul class="mt-32">
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-heading fw-medium">
                    Product Type:
                    <span class="text-gray-500"> Chips & Dips</span>
                  </span>
                </li>
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-heading fw-medium">
                    Product Name:
                    <span class="text-gray-500"> Potato Chips Classic </span>
                  </span>
                </li>
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-heading fw-medium">
                    Brand:
                    <span class="text-gray-500"> Lay's</span>
                  </span>
                </li>
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-heading fw-medium">
                    FSA Eligible:
                    <span class="text-gray-500"> No</span>
                  </span>
                </li>
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-heading fw-medium">
                    Size/Count:
                    <span class="text-gray-500"> 8.0oz</span>
                  </span>
                </li>
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-heading fw-medium">
                    Item Code:
                    <span class="text-gray-500"> 331539</span>
                  </span>
                </li>
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-heading fw-medium">
                    Ingredients:
                    <span class="text-gray-500"> Potatoes, Vegetable Oil, and Salt.</span>
                  </span>
                </li>
              </ul>
            </div>
            <div class="mb-40">
              <h6 class="mb-24">Nutrition Facts</h6>
              <ul class="mt-32">
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-heading fw-medium"> Total Fat 10g 13%</span>
                </li>
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-heading fw-medium"> Saturated Fat 1.5g 7%</span>
                </li>
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-heading fw-medium"> Cholesterol 0mg 0%</span>
                </li>
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-heading fw-medium"> Sodium 170mg 7%</span>
                </li>
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-heading fw-medium"> Potassium 350mg 6%</span>
                </li>
              </ul>
            </div>
            <div class="mb-0">
              <h6 class="mb-24">More Details</h6>
              <ul class="mt-32">
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-gray-500">
                    Lunarlon midsole delivers ultra-plush responsiveness</span
                  >
                </li>
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-gray-500">
                    Encapsulated Air-Sole heel unit for lightweight cushioning</span
                  >
                </li>
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-gray-500">
                    Colour Shown: Ale Brown/Black/Goldtone/Ale Brown</span
                  >
                </li>
                <li class="text-gray-400 mb-14 flex-align gap-14">
                  <span
                    class="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle"
                  >
                    <i class="ph ph-check"></i>
                  </span>
                  <span class="text-gray-500"> Style: 805899-202</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="pills-reviews"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="pills-reviews-tab"
            tabindex="0"
          >
            <div class="row g-4">
              <div class="col-lg-6">
                <h6 class="mb-24">Product Description</h6>
                <div
                  class="d-flex align-items-start gap-24 pb-44 border-bottom border-gray-100 mb-44"
                >
                  <img
                    src="/images/thumbs/comment-img1.png"
                    alt=""
                    class="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0"
                  />
                  <div class="flex-grow-1">
                    <div class="flex-between align-items-start gap-8">
                      <div class="">
                        <h6 class="mb-12 text-md">Nicolas cage</h6>
                        <div class="flex-align gap-8">
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
                      </div>
                      <span class="text-gray-800 text-xs">3 Days ago</span>
                    </div>
                    <h6 class="mb-14 text-md mt-24">Greate Product</h6>
                    <p class="text-gray-700">
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by injected humour
                    </p>

                    <div class="flex-align gap-20 mt-44">
                      <button class="flex-align gap-12 text-gray-700 hover-text-main-600">
                        <i class="ph-bold ph-thumbs-up"></i>
                        Like
                      </button>
                      <a
                        href="#comment-form"
                        class="flex-align gap-12 text-gray-700 hover-text-main-600"
                      >
                        <i class="ph-bold ph-arrow-bend-up-left"></i>
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-start gap-24">
                  <img
                    src="/images/thumbs/comment-img1.png"
                    alt=""
                    class="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0"
                  />
                  <div class="flex-grow-1">
                    <div class="flex-between align-items-start gap-8">
                      <div class="">
                        <h6 class="mb-12 text-md">Nicolas cage</h6>
                        <div class="flex-align gap-8">
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
                      </div>
                      <span class="text-gray-800 text-xs">3 Days ago</span>
                    </div>
                    <h6 class="mb-14 text-md mt-24">Greate Product</h6>
                    <p class="text-gray-700">
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by injected humour
                    </p>

                    <div class="flex-align gap-20 mt-44">
                      <button class="flex-align gap-12 text-gray-700 hover-text-main-600">
                        <i class="ph-bold ph-thumbs-up"></i>
                        Like
                      </button>
                      <a
                        href="#comment-form"
                        class="flex-align gap-12 text-gray-700 hover-text-main-600"
                      >
                        <i class="ph-bold ph-arrow-bend-up-left"></i>
                        Reply
                      </a>
                    </div>
                  </div>
                </div>

                <div class="mt-56">
                  <div class="">
                    <h6 class="mb-24">Write a Review</h6>
                    <span class="text-heading mb-8">What is it like to Product?</span>
                    <div class="flex-align gap-8">
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
                  </div>
                  <div class="mt-32">
                    <form action="#">
                      <div class="mb-32">
                        <label for="title" class="text-neutral-600 mb-8">Review Title</label>
                        <input
                          id="title"
                          type="text"
                          class="common-input rounded-8"
                          placeholder="Great Products"
                        />
                      </div>
                      <div class="mb-32">
                        <label for="desc" class="text-neutral-600 mb-8">Review Content</label>
                        <textarea id="desc" class="common-input rounded-8">
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</textarea
                        >
                      </div>
                      <button type="submit" class="btn btn-main rounded-pill mt-48">
                        Submit Review
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="ms-xxl-5">
                  <h6 class="mb-24">Customers Feedback</h6>
                  <div class="d-flex flex-wrap gap-44">
                    <div
                      class="border border-gray-100 rounded-8 px-40 py-52 flex-center flex-column flex-shrink-0 text-center"
                    >
                      <h2 class="mb-6 text-main-600">4.8</h2>
                      <div class="flex-center gap-8">
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
                      <span class="mt-16 text-gray-500">Average Product Rating</span>
                    </div>
                    <div class="border border-gray-100 rounded-8 px-24 py-40 flex-grow-1">
                      <div class="flex-align gap-8 mb-20">
                        <span class="text-gray-900 flex-shrink-0">5</span>
                        <div
                          class="progress w-100 bg-gray-100 rounded-pill h-8"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="progress-bar bg-main-600 rounded-pill"
                            style="width: 70%"
                          ></div>
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
                      <div class="flex-align gap-8 mb-20">
                        <span class="text-gray-900 flex-shrink-0">4</span>
                        <div
                          class="progress w-100 bg-gray-100 rounded-pill h-8"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="progress-bar bg-main-600 rounded-pill"
                            style="width: 50%"
                          ></div>
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
                      <div class="flex-align gap-8 mb-20">
                        <span class="text-gray-900 flex-shrink-0">3</span>
                        <div
                          class="progress w-100 bg-gray-100 rounded-pill h-8"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="35"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="progress-bar bg-main-600 rounded-pill"
                            style="width: 35%"
                          ></div>
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
                      <div class="flex-align gap-8 mb-20">
                        <span class="text-gray-900 flex-shrink-0">2</span>
                        <div
                          class="progress w-100 bg-gray-100 rounded-pill h-8"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="progress-bar bg-main-600 rounded-pill"
                            style="width: 20%"
                          ></div>
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
                      <div class="flex-align gap-8 mb-0">
                        <span class="text-gray-900 flex-shrink-0">1</span>
                        <div
                          class="progress w-100 bg-gray-100 rounded-pill h-8"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="5"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="progress-bar bg-main-600 rounded-pill"
                            style="width: 5%"
                          ></div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
