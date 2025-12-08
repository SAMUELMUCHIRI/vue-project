<script setup>
import { computed, ref } from "vue";
import AssignmentList from "./AssignmentList.vue";
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
const new_assignment = ref("");

defineProps({
    title: String,
});

const Inprogress = computed(() =>
    assignments.value.filter((assignment) => !assignment.completed),
);

const Completed = computed(() =>
    assignments.value.filter((assignment) => assignment.completed),
);

function add() {
    assignments.value.push({
        id: assignments.value.length + 1,
        name: new_assignment.value,
        completed: false,
    });
    new_assignment.value = "";
}
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
    <section class="space-y-6">
        <AssignmentList
            :AssignmentList="Inprogress"
            AssignmentName="In Progress"
        ></AssignmentList>
        <AssignmentList
            :AssignmentList="Completed"
            AssignmentName="Completed"
        ></AssignmentList>
        <form @submit.prevent="add">
            <div
                class="flex items-center justify-between border bg-white text-black border-gray-700"
            >
                <input
                    v-model="new_assignment"
                    placeholder="New Assignment"
                    class="p-2"
                />
                <button type="submit" class="p-2 border-l border-gray-600">
                    Add
                </button>
            </div>
        </form>
    </section>
</template>
