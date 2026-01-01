<script setup lang="ts">
interface AssignmentType {
    id: number;
    name: string;
    tag: string;
    completed: boolean;
}

import { computed, ref } from "vue";
import Assignment from "./Assignment.vue";
import AssignmentTags from "./AssignmentTags.vue";
const propsList = defineProps({
    AssignmentList: {
        type: Array<AssignmentType>,
        required: true,
    },
    AssignmentName: {
        type: String,
        required: true,
    },
    toggleable: {
        type: Boolean,
        default: false,
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
    <div>
        <div
            name="{{ AssignmentName }}"
            v-if="propsList.AssignmentList.length > 0"
            class="flex-1 flex-col"
        >
            <div class="flex justify-between items-center">
                <p class="font-bold">
                    {{ propsList.AssignmentName }} ({{
                        fil_assignments.length
                    }})
                </p>
                <button v-show="toggleable" @click="$emit('toggle')">
                    &times;
                </button>
            </div>
            <AssignmentTags
                :tags="
                    propsList.AssignmentList.map((assignment) => assignment.tag)
                "
                v-model="currentTag"
            ></AssignmentTags>

            <ul
                class="border border-gray-700 rounded-md divide-y divide-gray-700"
            >
                <Assignment
                    v-for="assignment in fil_assignments"
                    :key="assignment.id"
                    :assignment="assignment"
                >
                </Assignment>
            </ul>
        </div>
        <slot></slot>
    </div>
</template>
