<script setup lang="ts">
import { ArrowTrendingUpIcon, BeakerIcon, ChartBarIcon } from '@heroicons/vue/24/outline'


const features = [
  {
    name: 'Real-time analytics',
    description:
      'Analyze your websites traffic and events in real-time. See exacly what users visit and use your application.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Performance monitoring',
    description:
      'Measure your web-apps performance over time using standardized web vitals.',
    href: '#',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Testing tools',
    description:
      'Create A/B tests, feature flags and more to test new changes and funnels.',
    href: '#',
    icon: BeakerIcon,
  },
]

definePageMeta({
  title: 'MePort | Home',
  name: 'Home',
})
</script>

<template>
  <section class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the europe's most innovative teams
      </h2>
      <div
        class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158"
          height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158"
          height="48" />
        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158"
          height="48" />
      </div>
    </div>
  </section>

  <section class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-blue-600">Know your user</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to analyze your traffic
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          We provide a wide range of tools to help you understand your users and their behavior, with a privacy first approach.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              <component :is="feature.icon" class="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
              {{ feature.name }}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p class="flex-auto">{{ feature.description }}</p>
              <p class="mt-6">
                <a :href="feature.href" class="text-sm font-semibold leading-6 text-blue-600">Learn more <span
                    aria-hidden="true">→</span></a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
