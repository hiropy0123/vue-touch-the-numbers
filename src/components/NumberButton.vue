<template>
  <div class="number-button" :style="styles">
    <span>{{ figure }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api';

type Props = {
  figure: number;
  size: number;
};

const NumberButton = defineComponent({
  props: {
    figure: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      required: true
    }
  },
  setup(props: Props) {
    props.figure;
    props.size;

    const state = reactive({});
    const styles = computed(() => {
      return {
        '--size': props.size
      };
    });

    return { state, styles };
  }
});

export default NumberButton;
</script>

<style scoped>
.number-button {
  --size: 5;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  background: rgb(255, 153, 0);
  width: calc(500px / var(--size));
  height: calc(500px / var(--size));
  border: 1px solid rgb(253, 209, 179);
  border-radius: 0.2em;
}

.number-button:hover {
  cursor: pointer;
}
</style>
