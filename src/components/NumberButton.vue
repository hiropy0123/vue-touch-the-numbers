<template>
  <div
    class="number-button"
    :style="styles"
    :class="{ pushed: state.pushed }"
    @click="tap"
  >
    <span>{{ figure }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api';

type Props = {
  figure: number;
  size: number;
  count: number;
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
    },
    count: {
      type: Number,
      required: true
    }
  },
  setup(props: Props, { emit }) {
    props.figure;
    props.size;
    props.count;

    const state = reactive({
      pushed: false
    });
    const styles = computed(() => {
      return {
        '--size': props.size
      };
    });

    const tap = () => {
      if (props.count === props.figure) {
        state.pushed = true;
        emit('countup', props.count);
      }
    };

    return { state, styles, tap };
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
  background: linear-gradient(
    0deg,
    rgb(218, 133, 7) 0%,
    rgb(252, 199, 25) 100%
  );
  width: calc(500px / var(--size));
  height: calc(500px / var(--size));
  border: 1px solid rgb(253, 209, 179);
  border-radius: 0.2em;
}

.number-button:hover {
  cursor: pointer;
}

.number-button.pushed {
  background: linear-gradient(0deg, rgb(48, 33, 11) 0%, rgb(87, 70, 17) 100%);
}
</style>
