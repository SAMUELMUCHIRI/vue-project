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
    <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
            <Test title="good">Assignment Tracker</Test>
        </div>
    </div>
</template>
