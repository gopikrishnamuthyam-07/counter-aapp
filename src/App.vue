<script setup>
import { ref } from 'vue'

const count = ref(0)

function onAdd() {
  count.value++
}
function onSub(){
  if (count.value === 0){
    count.value = 0
  }
  else{
    count.value--
  }
  return count
}

function onSave(){
  sessionStorage.setItem('count', count.value)
}
count.value = sessionStorage.getItem('count') ?  count.value  = sessionStorage.getItem('count') : 0;
</script>

<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="onAdd">Add</button>
    <button @click="onSub">SUB</button>
    <div>
      <button @click="onSave">SAVE</button>
    </div>
   
  </div>
  
</template>