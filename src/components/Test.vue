<script setup>
import { computed, ref } from "vue";
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
const r_comp = ref(false);
function removeCompleted() {
    r_comp.value = true;
    for (let assignment of assignments.value) {
        assignment.completed = false;
    }
}
defineProps({
    title: String,
});
const Inprogress = computed(() =>
    assignments.value.filter((assignment) => !assignment.completed),
);

const Completed = computed(() =>
    assignments.value.filter((assignment) => assignment.completed),
);
</script>
<template>
    <h1
        :class="{
            'text-2xl font-bold p-2 rounded-xl  text-center': true,
            'bg-amber-200': title === 'good',
            'bg-red-200': title === 'bad',
        }"
    >
        <slot />
    </h1>
    <div name="inprogress" v-if="Inprogress.length > 0" class="flex-1 flex-col">
        <p class="font-bold">In Progress</p>
        <li v-for="item in Inprogress" :key="item.id">
            <label class="px-4"
                >{{ item.name }}
                <input v-model="item.completed" type="checkbox"
            /></label>
        </li>
    </div>

    <div name="completed" v-if="Completed.length > 0" class="flex-1 flex-col">
        <p class="font-bold">Completed</p>
        <li v-for="item in Completed" :key="item.id">
            <label class="px-4 line-through">{{ item.name }} </label>
        </li>
    </div>
    <button
        @click="removeCompleted"
        type="button"
        :class="{
            'rounded p-2 font-bold text-white bg-amber-500 hover:bg-amber-400': true,
            'disabled:opacity-50': Completed.length < 1,
        }"
        :disabled="Completed.length < 1"
    >
        Remove Completed
    </button>
</template>
