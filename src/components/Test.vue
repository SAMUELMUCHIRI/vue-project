<script setup lang="ts">
import { computed, ref } from "vue";
import AssignmentList from "./AssignmentList.vue";
import AssignmentCreate from "./AssignmentCreate.vue";

const assignments = ref([
    {
        id: 1,
        name: "Assignment 1",
        tag: "math",
        completed: false,
    },
    {
        id: 2,
        name: "Assignment 2",
        tag: "science",

        completed: false,
    },
    {
        id: 3,
        name: "Assignment 3",
        tag: "math",

        completed: false,
    },
    {
        id: 4,
        name: "Assignment 4",
        tag: "science",

        completed: false,
    },
]);

const Inprogress = computed(() =>
    assignments.value.filter((assignment) => !assignment.completed),
);

const Completed = computed(() =>
    assignments.value.filter((assignment) => assignment.completed),
);

function add(name: string) {
    assignments.value.push({
        id: assignments.value.length + 1,
        name: name,
        tag: "math",
        completed: false,
    });
}
</script>
<template>
    <h1
        :class="{
            'text-2xl font-bold p-2 rounded-xl  text-center': true,
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
        <AssignmentCreate @add="add"></AssignmentCreate>
    </section>
</template>
