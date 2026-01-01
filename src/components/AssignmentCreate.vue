<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { ref } from "vue";
const emit = defineEmits(["add"]);

const new_assignment = ref("");

function add() {
    emit("add", new_assignment.value);
    new_assignment.value = "";
}
</script>

<template>
    <form @submit.prevent="add">
        <div
            class="flex items-center justify-between border bg-white rounded text-black border-gray-700"
        >
            <Input
                v-model="new_assignment"
                placeholder="New Assignment"
                class="p-2"
            />
            <button type="submit" class="p-2 border-l border-gray-600">
                Add
            </button>
        </div>
    </form>
</template>
