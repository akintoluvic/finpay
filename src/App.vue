<script setup lang="ts">
</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Login</RouterLink>
    <RouterLink to="/signup">Go to Signup</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>