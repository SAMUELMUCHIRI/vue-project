<script setup lang="ts">
import Panel from "@/components/Panel.vue";
</script>

<template>
    <div class="grid gap-6">
        <Panel>
            <template #heading> Hello World </template>
            This is my default content
        </Panel>
        <Panel>
            <template #heading> Hello World </template>
            This is my default content
        </Panel>
        <Panel theme="light">
            <template #heading> Hello World </template>
            This is my default content
            <template #footer> Click Here to learn more</template>
        </Panel>
    </div>
</template>
