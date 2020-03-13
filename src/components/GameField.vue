<template>
  <div id="field" :class="$style.wrapper" :style="styles">
    <NumberButton
      v-for="(val, index) in createNumbers(size ** 2)"
      :key="index"
      :figure="val"
      :size="size"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api';
import NumberButton from '@/components/NumberButton.vue';

type Props = {
  size: number;
};

const GameField = defineComponent({
  components: {
    NumberButton
  },
  props: {
    size: {
      type: Number,
      required: true
    }
  },
  setup(props: Props) {
    props.size;

    const state = reactive({
      message: 'hello!'
    });

    const styles = computed(() => {
      return {
        '--size': props.size
      };
    });

    // 連番の配列を生成
    const createNumbers = (length: number): number[] => {
      return [...Array(length).keys()].map((_, i) => i + 1);
    };

    return {
      state,
      styles,
      createNumbers
    };
  }
});

export default GameField;
</script>

<style module>
.wrapper {
  --size: 5;

  display: grid;
  grid-template-columns: repeat(var(--size), 1fr);
  width: 90%;
  max-width: 500px;
  margin: auto;
}
</style>
