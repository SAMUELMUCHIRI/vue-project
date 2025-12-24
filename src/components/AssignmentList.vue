<script setup>
import { computed, ref } from "vue";
import Assignment from "./Assignment.vue";
defineProps({
    AssignmentList: {
        type: Array,
        required: true,
    },
    AssignmentName: {
        type: String,
        required: true,
    },
});
</script>
<template>
    <div
        name="{{ AssignmentName }}"
        v-if="AssignmentList.length > 0"
        class="flex-1 flex-col"
    >
        <p class="font-bold">
            {{ AssignmentName }} ({{ AssignmentList.length }})
        </p>
        <ul class="border border-gray-700 rounded-md divide-y divide-gray-700">
            <Assignment
                v-for="assignment in AssignmentList"
                :key="assignment.id"
                :assignment="assignment"
            >
            </Assignment>
        </ul>
    </div>
</template>
