<script setup>
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
const r_comp = ref(false);
const new_assignment = ref("");
const tag_arr = computed(() => {
    return [
        "all",
        ...new Set(assignments.value.map((assignment) => assignment.tag)),
    ];
});

const fil_assignments = computed(() => {
    if (currentTag.value === "all") {
        return assignments.value;
    } else {
        return assignments.value.filter(
            (assignment) => assignment.tag === currentTag.value,
        );
    }
});

const Inprogress = computed(() =>
    fil_assignments.value.filter((assignment) => !assignment.completed),
);

const Completed = computed(() =>
    fil_assignments.value.filter((assignment) => assignment.completed),
);

function add(name) {
    assignments.value.push({
        id: assignments.value.length + 1,
        name: name,
        completed: false,
    });
}

const currentTag = ref("all");
</script>
<template>
    <h1
        :class="{
            'text-2xl font-bold p-2 rounded-xl  text-center': true,
        }"
    >
        <slot />
    </h1>
    <div class="flex gap-2">
        <button
            @click="currentTag = tag"
            class="border rounded px-1 py-px text-xs"
            :class="{ 'bg-blue-500 text-white': currentTag === tag }"
            v-for="tag in tag_arr"
            :key="tag"
        >
            {{ tag }}
        </button>
    </div>
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
