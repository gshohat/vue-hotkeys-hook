# Vue Hotkeys Hook

![NPM License](https://img.shields.io/npm/l/vue-hotkeys-hook)

**Lightweight** [Vue](https://vuejs.org/) hook for using keyboard shortcuts in components in a declarative way **< 5k** 😎 <br>

![hotkeys-hook](https://github.com/gshohat/vue-hotkeys-hook/assets/91323932/97d80fe1-f516-4fcb-878d-ad05a9bd6647)

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
