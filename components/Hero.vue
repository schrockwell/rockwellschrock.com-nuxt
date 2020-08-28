<template>
  <div
    class="bg-orange-600 text-white font-display text-4xl md:text-6xl leading-tight tracking-tight md:leading-tighter py-4 md:py-8 mb-8 md:mt-12 md:mb-16 shadow-md md:shadow-lg -mx-2 md:mx-0 overflow-hidden"
  >
    <div class="container mx-auto px-4 md:px-0 relative">
      <div class="w-full h-full absolute flex items-center">
        <div
          class="hidden md:block absolute font-bold text-white opacity-25"
          style="left: -0.8em; font-size: 5em; letter-spacing: -0.2em;"
        >
          //
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>
