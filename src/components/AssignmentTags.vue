<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    tags: {
        type: Array<string>,
        required: true,
    },
    modelValue: {
        type: String,
        required: true,
    },
});

const alltags = computed(() => {
    return ["All", ...new Set(props.tags)];
});
</script>

<template>
    <div class="flex gap-2 my-2">
        <button
            @click="$emit('update:modelValue', tag)"
            class="border rounded px-1 py-px text-xs"
            :class="{ 'bg-blue-500 text-white': modelValue === tag }"
            v-for="tag in alltags"
            :key="tag"
        >
            {{ tag }}
        </button>
    </div>
</template>
