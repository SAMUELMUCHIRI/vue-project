<script setup>
import { computed, ref } from "vue";
import Assignment from "./Assignment.vue";
import AssignmentTags from "./AssignmentTags.vue";
const propsList = defineProps({
    AssignmentList: {
        type: Array,
        required: true,
    },
    AssignmentName: {
        type: String,
        required: true,
    },
});
const currentTag = ref("All");

const fil_assignments = computed(() => {
    if (currentTag.value === "All") {
        return propsList.AssignmentList;
    } else {
        return propsList.AssignmentList.filter(
            (assignment) => assignment.tag === currentTag.value,
        );
    }
});
</script>
<template>
    <div
        name="{{ AssignmentName }}"
        v-if="propsList.AssignmentList.length > 0"
        class="flex-1 flex-col"
    >
        <p class="font-bold">
            {{ propsList.AssignmentName }} ({{ fil_assignments.length }})
        </p>
        <AssignmentTags
            :tags="propsList.AssignmentList.map((assignment) => assignment.tag)"
            :currentTag="currentTag"
            @change="currentTag = $event"
        ></AssignmentTags>

        <ul class="border border-gray-700 rounded-md divide-y divide-gray-700">
            <Assignment
                v-for="assignment in fil_assignments"
                :key="assignment.id"
                :assignment="assignment"
            >
            </Assignment>
        </ul>
    </div>
</template>
