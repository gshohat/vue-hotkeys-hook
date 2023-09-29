# Vue chat elements

![NPM License](https://img.shields.io/npm/l/vue-hotkeys-hook)

**Lightweight** [Vue](https://vuejs.org/) hook for using keyboard shortcuts in components in a declarative way **< 5k** 😎 <br>

## Usage

`npm i vue-hotkeys-hook`
``
```
<script setup>
import {useHotkeys} from 'vue-hotkeys-hook';
import {ref} from 'vue';

const counter = ref(0);

useHotkeys('shift+g', () => {
  counter.value++;
});
</script>


<template>
 <div>
    counter: {{counter}}
  </div>
</template
```


## Contact
Feel free to ping me 💫
<br>
connect@giladshohat.com

[giladshohat.com](https://giladshohat.com)
