<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";

import { provide, ref, type Ref } from "vue";

const heading: Ref<number> = ref(0);

provide("heading", heading);
</script>

<template>
    <div class="grid gap-6">
        <nav class="flex gap-4">
            <RouterLink to="/"><Button>Home</Button></RouterLink>
            <RouterLink to="/about"><Button>About</Button></RouterLink>
            <RouterLink to="/test"><Button>Test</Button></RouterLink>
            <RouterLink to="/panels"><Button>Panels</Button></RouterLink>
        </nav>

        <RouterView></RouterView>
    </div>
</template>
