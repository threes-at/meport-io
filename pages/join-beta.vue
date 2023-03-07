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

    <form name="beta" @submit.prevent="handleSubmit" class="mx-auto mt-12 max-w-xl sm:mt-18">
      <div v-if="success" class="flex flex-col items-center justify-center p-8 space-y-4 text-center bg-green-50 mb-6">
        <svg class="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 13l4 4L19 7"></path>
        </svg>
        <p class="text-lg font-medium text-green-800">Thank you for your interest!</p>
        <p class="text-sm text-gray-500">We will get in touch once we are ready.</p>
      </div>

      <input type="hidden" name="form-name" value="beta" />

      <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
          <div class="mt-2.5">
            <input v-model="firstName" required type="text" name="first-name" id="first-name" autocomplete="given-name"
              class="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
          <div class="mt-2.5">
            <input v-model="lastName" required type="text" name="last-name" id="last-name" autocomplete="family-name"
              class="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label>
          <div class="mt-2.5">
            <input v-model="company" required type="text" name="company" id="company" autocomplete="organization"
              class="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div class="mt-2.5">
            <input v-model="email" required type="email" name="email" id="email" autocomplete="email"
              class="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Why you want to try
            MePort?</label>
          <div class="mt-2.5">
            <textarea v-model="message" name="message" id="message" rows="4"
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

const agreed = ref(false)
const success = ref(false)

const firstName = ref('')
const lastName = ref('')
const company = ref('')
const email = ref('')
const message = ref('')

const encode = (data: any) => {
  return Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
}

const handleSubmit = () => {
  if (!agreed.value) return
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ 
      "form-name": "beta",
      firstName: firstName.value,
      lastName: lastName.value,
      company: company.value,
      email: email.value,
      message: message.value
    })
  })
}

</script>
  