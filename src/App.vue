<script setup>
import { computed, ref } from "vue";

const count = ref(0);
const text = ref("Hello World");

const assignments = ref([
    {
        id: 1,
        name: "Assignment 1",

        completed: false,
    },
    {
        id: 2,
        name: "Assignment 2",

        completed: false,
    },
    {
        id: 3,
        name: "Assignment 3",
        completed: false,
    },
    {
        id: 4,
        name: "Assignment 4",

        completed: false,
    },
]);

const Inprogress = computed(() =>
    assignments.value.filter((assignment) => !assignment.completed),
);

const Completed = computed(() =>
    assignments.value.filter((assignment) => assignment.completed),
);

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
            <div
                name="inprogress"
                v-if="Inprogress.length > 0"
                class="flex-1 flex-col"
            >
                <p class="font-bold">In Progress</p>
                <li v-for="item in Inprogress" :key="item.id">
                    <label class="px-4"
                        >{{ item.name }}
                        <input v-model="item.completed" type="checkbox"
                    /></label>
                </li>
            </div>

            <div
                name="completed"
                v-if="Completed.length > 0"
                class="flex-1 flex-col"
            >
                <p class="font-bold">Completed</p>
                <li v-for="item in Completed" :key="item.id">
                    <label class="px-4 line-through">{{ item.name }} </label>
                </li>
            </div>
        </div>
    </div>
</template>
