<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import AssignmentList from "./AssignmentList.vue";
import AssignmentCreate from "./AssignmentCreate.vue";
interface AssignmentType {
    id: number;
    name: string;
    tag: string;
    completed: boolean;
}

const assignments = ref<AssignmentType[]>([]);

onMounted(async () => {
    try {
        const response = await fetch("http://localhost:3000/assignments");
        assignments.value = await response.json();
    } catch (error) {
        console.log("Local source of assignments not found");
        assignments.value = [];
    }
});
const Inprogress = computed(() =>
    assignments.value.filter((assignment) => !assignment.completed),
);

const Completed = computed(() =>
    assignments.value.filter((assignment) => assignment.completed),
);
const showCompleted = ref(true);
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

    <section class="space-y-6 flex gap-8">
        <AssignmentList
            :AssignmentList="Inprogress"
            AssignmentName="In Progress"
        >
            <AssignmentCreate @add="add"></AssignmentCreate>
        </AssignmentList>
        <AssignmentList
            v-if="showCompleted"
            :AssignmentList="Completed"
            AssignmentName="Completed"
            toggleable
            @toggle="showCompleted = !showCompleted"
        ></AssignmentList>
    </section>
</template>
