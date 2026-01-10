import { ref, watch } from "vue";

export function useStorage(key: string, val: any = null) {
  function read() {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }
    return null;
  }

  const storage = read();
  if (storage) {
    val = ref(storage);
  } else {
    val = ref(val);
    write();
  }

  watch(val, write, { deep: true });

  function write() {
    if (val.value === "" || val.value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(val.value));
    }
  }

  return val;
}
