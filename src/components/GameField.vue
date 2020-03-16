<template>
  <div id="field" :class="$style.wrapper" :style="styles">
    <NumberButton
      v-for="(val, index) in state.numbers"
      :key="index"
      :figure="val"
      :size="size"
      :count="state.count"
      @countup="countup"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  onMounted
} from '@vue/composition-api';
import NumberButton from '@/components/NumberButton.vue';

type Props = {
  size: number;
};

type State = {
  count: number;
  numbers: number[];
};

// 連番の配列を生成
const createSerialNumbers = (length: number): number[] => {
  return [...Array(length).keys()].map((_, i) => i + 1);
};

// 配列をシャッフルする
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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

    const state: State = reactive({
      count: 1,
      numbers: []
    });

    const styles = computed(() => {
      return {
        '--size': props.size
      };
    });

    // ランダムな配列を生成
    const createNumbers = (length: number) => {
      state.numbers = shuffle(createSerialNumbers(length));
    };

    const countup = (count: number) => {
      state.count = count + 1;
    };

    onMounted(() => {
      createNumbers(props.size ** 2);
    });

    return {
      state,
      styles,
      createNumbers,
      countup
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
