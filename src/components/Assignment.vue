<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
    assignment: {
        type: Object as PropType<{
            id: number;
            name: string;
            tag: string;
            completed: boolean;
        }>,
        required: true,
    },
});
</script>
<template>
    <li>
        <label class="px-4 flex items-center justify-between"
            >{{ assignment.name }}
            <input v-model="assignment.completed" type="checkbox"
        /></label>
    </li>
</template>
