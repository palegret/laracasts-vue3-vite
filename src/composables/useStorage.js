import { ref, watch } from "vue";

export function useStorage(key, defaultValue = null) {
  const storedItem = read();

  let storedItemRef;

  if (storedItem) {
    storedItemRef = ref(storedItem);
  } else {
    storedItemRef = ref(defaultValue);
    write();
  }

  watch(storedItemRef, write, { deep: true });

  function isJson(s) {
    try {
      JSON.parse(s);
    } catch {
      return false;
    }

    return true;
  }

  function read() {
    const storedItem = localStorage.getItem(key);

    if (isJson(storedItem)) {
      return JSON.parse(storedItem);
    } else {
      return storedItem;
    }
  }

  function write() {
    if (storedItemRef.value) {
      localStorage.setItem(key, JSON.stringify(storedItemRef.value));
    } else {
      localStorage.removeItem(key);
    }
  }

  return storedItemRef;
}
