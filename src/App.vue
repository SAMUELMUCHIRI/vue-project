<script setup>
import { computed, ref } from "vue";
import Test from "./components/Test.vue";

const count = ref(0);
const text = ref("Hello World");

function addData() {
    count.value++;
}

function minusData() {
    count.value--;
}

function resetData() {
    count.value = 0;
}
</script>

<template>
    <div class="flex gap-8">
        <div class="flex flex-col gap-2">
            <input
                v-model="text"
                type="text"
                class="border border-gray-300 rounded p-2 border-2 text-gray-400"
            />
            <p class="">{{ text }}</p>

            <p class="font-bold">{{ count }}</p>
            <button
                @click="addData"
                class="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Data
            </button>
            <button
                @click="minusData"
                class="bg-red-500 text-white px-4 py-2 rounded"
            >
                Minus Data
            </button>
            <button
                @click="resetData"
                class="bg-green-500 text-white px-4 py-2 rounded"
            >
                Reset Data
            </button>
        </div>
        <div class="flex flex-col gap-2">
            <Test>Assignmet Tracker</Test>
        </div>
    </div>
</template>
