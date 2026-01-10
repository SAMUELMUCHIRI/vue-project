<script setup lang="ts">
import { inject, type Ref } from "vue";
import { useStorage } from "@/composables/useStorage";

const inputValue = useStorage("inputValue");
import Badge from "@/components/ui/badge/Badge.vue";

const heading = inject("heading") as Ref<number>;

setInterval(() => {
    heading.value++;
}, 10000);
</script>

<template>
    <div class="flex flex-col gap-2">
        <Badge class="h-5 min-w-5" variant="default">{{ heading }}</Badge>
        <div>
            <input
                v-model="inputValue"
                placeholder="any text"
                class="bg-white text-black rounded-l-lg p-2"
            />
            <button class="bg-blue-500 text-white rounded-r-lg p-2">
                Submit
            </button>
        </div>
    </div>
</template>
