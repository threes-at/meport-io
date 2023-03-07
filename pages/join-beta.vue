<template>
  <div class="relative isolate px-6 pt-24 sm:pt-40 lg:px-8">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg viewBox="0 0 1155 678" aria-hidden="true"
        class="absolute bottom-full -left-40 -mb-48 w-[72.1875rem] transform-gpu blur-3xl sm:left-auto sm:right-1/2 sm:-mb-64">
        <path fill="url(#d5d4d369-6b90-4398-a6aa-ab9a062d6e3c)" fill-opacity=".25"
          d="M317.219 518.975 203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079Z" />
        <defs>
          <linearGradient id="d5d4d369-6b90-4398-a6aa-ab9a062d6e3c" x1="1155.49" x2="-78.208" y1=".177" y2="474.645"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#9089FC" />
            <stop offset="1" stop-color="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="mx-auto max-w-xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join the beta</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">Sign up now to access our beta program, we will get in touch once we
        are ready.</p>
    </div>



    <form name="beta-waitlist" @submit.prevent="handleFormSubmit" data-netlify="true"
      class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div v-if="isSuccess" class="rounded-md bg-green-50 p-4 mb-10">
        <div class="flex">
          <div class="flex-shrink-0">
            <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-green-800">Successfully applied</p>
          </div>
          <div class="ml-auto pl-3">
            <div class="-mx-1.5 -my-1.5">
              <button type="button"
                class="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
                <span class="sr-only">Dismiss</span>
                <XMarkIcon class="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
          <div class="mt-2.5">
            <input required type="text" name="first-name" id="first-name" autocomplete="given-name"
              class="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
          <div class="mt-2.5">
            <input required type="text" name="last-name" id="last-name" autocomplete="family-name"
              class="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label>
          <div class="mt-2.5">
            <input required type="text" name="company" id="company" autocomplete="organization"
              class="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div class="mt-2.5">
            <input required type="email" name="email" id="email" autocomplete="email"
              class="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Why you want to try
            MePort?</label>
          <div class="mt-2.5">
            <textarea name="message" id="message" rows="4"
              class="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
          </div>
        </div>
        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <Switch v-model="agreed"
              :class="[agreed ? 'bg-indigo-600' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">
              <span class="sr-only">Agree to policies</span>
              <span aria-hidden="true"
                :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
            </Switch>
          </div>
          <SwitchLabel class="text-sm leading-6 text-gray-600">
            By selecting this, you agree to our
            {{ ' ' }}
            <nuxt-link to="/privacy" class="font-semibold text-indigo-600">privacy&nbsp;policy</nuxt-link>.
          </SwitchLabel>
        </SwitchGroup>
      </div>
      <div class="mt-10">
        <button :disabled="!agreed" type="submit"
          class="disabled:opacity-40 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply
          now</button>
      </div>
    </form>
  </div>
</template>
  
  
<script setup lang="ts">
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';

const isSuccess = ref(false)

const agreed = ref(false)

const handleFormSubmit = (event: any) => {
  event.preventDefault()
  const form = event.target
  const formData = new FormData(form)

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    // @ts-expect-error - FormData doesn't have a toString method
    body: new URLSearchParams(formData).toString(),
  }).then(() => {
    isSuccess.value = true
  }).catch(err => {
    alert(err)
  })
}

</script>
  