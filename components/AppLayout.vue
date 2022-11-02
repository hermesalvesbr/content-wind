
<template>
    <div class="sm:pt-6 sm:pb-10">
        <Html lang="en" />
        <Meta property="og:image" :content="cover" />
        <Meta name="twitter:card" content="summary_large_image" />
        <AppLoadingBar />
        <AppNavbar />
        <slot />
        <div class="text-xs flex justify-center place-content-center gap-1 p-2">
            Modo escuro
            <ColorModeSwitch class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300" />
        </div>
    </div>
</template>
<script setup lang="ts">
const { cover } = useAppConfig()
</script>

<style lang="postcss">
/**   @apply bg-primary-50 dark:bg-primary-900; */
body {
    @apply bg-primary-50
}
</style>