<script setup lang="ts">
defineProps({
    theme: {
        type: String,
        default: "dark",
    },
});
</script>

<template>
    <div>
        <div
            :class="{
                'bg-gray-700 p-4 border rounded-lg': true,
                'border-gray-600  bg-gray-700 text-white': theme === 'dark',
                'border-gray-300 text-black bg-white': theme === 'light',
            }"
        >
            <h2 v-if="$slots.heading" class="font-bold mb-2">
                <slot name="heading"></slot>
            </h2>
            <slot />
            <h2
                v-if="$slots.footer"
                class="border-t border-gray-600 pt-4 mt-4 text-sm"
            >
                <slot name="footer"></slot>
            </h2>
        </div>
    </div>
</template>
