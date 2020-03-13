<template>
  <div id="app">
    <h1>Touch The Numbers Vue</h1>
    <p>
      select size:
      <span>
        <input
          class="size-selector"
          type="number"
          v-model="state.fieldSize"
          min="2"
          max="8"
        />
      </span>
    </p>

    <GameField :size="Number(state.fieldSize)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import GameField from '@/components/GameField.vue';

const App = defineComponent({
  components: {
    GameField
  },
  setup() {
    const state = reactive({
      fieldSize: 5
    });

    return {
      state
    };
  }
});

export default App;
</script>

<style scoped>
.size-selector {
  font-size: 20px;
  padding: 0.3em 1em;
}
</style>
