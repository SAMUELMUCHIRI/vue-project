<script setup lang="ts">
import Test from "@/components/Test.vue";
import Panel from "@/components/Panel.vue";
</script>

<template>
    <div class="grid gap-6">
        <Test>Assignment Tracker</Test>
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
