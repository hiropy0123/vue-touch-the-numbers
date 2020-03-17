<template>
  <div class="timer">
    <span>Time: </span>
    <span>{{ state.time }}</span>
    <button @click="start">Start</button>
    <button @click="stop">Stop</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';

let startTime: DateConstructor;
let elapsedTime = 0;
let timerId;
let timeToAdd = 0;

function updateTimeText() {
  // 分: 60000ミリ秒で割った商
  const m = Math.floor(elapsedTime / 60000);
  // 秒
  const s = Math.floor((elapsedTime % 60000) / 1000);
  // ミリ秒
  const ms = Math.floor(elapsedTime % 1000);
  // padStart(桁数,'パディング文字') ゼロパディング
  return (
    String(m).padStart(2, '0') +
    ':' +
    String(s).padStart(2, '0') +
    ':' +
    String(ms).padStart(3, '0')
  );
}

function countUp() {
  timerId = setTimeout(() => {
    elapsedTime = Date.now() - startTime + timeToAdd;

    countUp();
  }, 10);
}

const Timer = defineComponent({
  setup() {
    const state = reactive({
      time: '00:00:000'
    });

    // Methods
    const start = () => {
      startTime = Date.now();
      updateTimeText();
    };

    const stop = () => {
      updateTimeText();
    };

    const reset = () => {
      updateTimeText();
    };

    return { state, start, stop, reset };
  }
});

export default Timer;
</script>
