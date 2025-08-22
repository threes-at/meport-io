<script setup lang="ts">
import { CogIcon, ClockIcon, ChartBarSquareIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Unified Workspace',
    description:
      'Bring together development, product, marketing, and sales teams in one platform. No more context switching between scattered tools.',
    href: '/features/workspace',
    icon: CogIcon,
  },
  {
    name: 'Real-time Collaboration',
    description:
      'Stay synchronized with live updates, time tracking, and instant notifications across all your projects and teams.',
    href: '/features/collaboration',
    icon: ClockIcon,
  },
  {
    name: 'GDPR-Compliant Analytics',
    description:
      'Get powerful insights into team productivity, project progress, and business KPIs while maintaining European privacy standards.',
    href: '/features/analytics',
    icon: ChartBarSquareIcon,
  },
]

definePageMeta({
  name: 'Home',
})
</script>

<template>
  <!-- Hero Section -->
  <section v-if="false" class="bg-gradient-to-br from-blue-50 to-indigo-100 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          One Platform for
          <span class="text-blue-600">Everything</span>
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          The all-in-one workspace that brings development, product, marketing, and sales teams together. 
          Built for European businesses with privacy and compliance at its core.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="/signup" class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            Start Free Trial
          </a>
          <a href="/demo" class="text-sm font-semibold leading-6 text-gray-900">
            Watch Demo <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Social Proof -->
  <section class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
        Trusted by Europe's fastest-growing product teams
      </h2>
      <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <!-- Replace with actual customer logos -->
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="" alt="Customer 1" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="" alt="Customer 2" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="" alt="Customer 3" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          src="" alt="Customer 4" width="158" height="48" />
        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          src="" alt="Customer 5" width="158" height="48" />
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-blue-600">Work Smarter Together</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything your product team needs to ship faster
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          From initial concept to customer delivery, manage your entire product lifecycle in one integrated platform 
          designed for modern European businesses.
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
                <a :href="feature.href" class="text-sm font-semibold leading-6 text-blue-600">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>

  <!-- Problem/Solution Section -->
  <section class="bg-gray-50 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Stop juggling 10+ tools
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Most teams waste hours switching between Jira, Slack, Trello, Asana, HubSpot, and countless other tools. 
          We bring it all together in one beautiful, GDPR-compliant platform.
        </p>
      </div>
      
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
        <!-- Before -->
        <div class="relative lg:row-start-1">
          <div class="absolute inset-px rounded-lg bg-red-50 lg:rounded-l-[2rem]"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-red-600">Before: Tool Chaos</p>
              <p class="mt-2 max-w-lg text-sm/6 text-red-700">
                Context switching, duplicate data entry, broken communication, missed deadlines
              </p>
            </div>
            <div class="relative min-h-[30rem] w-full grow">
              <!-- Scattered tools visualization -->
              <div class="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-red-300 bg-red-100">
                <!-- Add icons/logos of scattered tools -->
              </div>
            </div>
          </div>
        </div>

        <!-- After -->
        <div class="relative lg:row-start-1">
          <div class="absolute inset-px rounded-lg bg-green-50 lg:rounded-r-[2rem]"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-green-600">After: One Platform</p>
              <p class="mt-2 max-w-lg text-sm/6 text-green-700">
                Unified workspace, real-time sync, single source of truth, faster delivery
              </p>
            </div>
            <div class="relative min-h-[30rem] w-full grow">
              <!-- Unified platform visualization -->
              <div class="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-green-300 bg-green-100">
                <!-- Add unified platform mockup -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-blue-600 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to unite your teams?
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
          Join hundreds of European product teams who've already made the switch to our unified platform.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="/signup" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Start Free Trial
          </a>
          <a href="/contact" class="text-sm font-semibold leading-6 text-white">
            Talk to Sales <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
