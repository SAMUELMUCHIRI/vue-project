<script setup>
defineProps({
    assignment: Object,
});
</script>
<template>
    <li>
        <label class="px-4 flex items-center justify-between"
            >{{ assignment.name }}
            <input v-model="assignment.completed" type="checkbox"
        /></label>
    </li>
</template>
