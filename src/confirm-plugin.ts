import Vue from "vue";
import Confirm from "@/components/Confirm.vue";

type _Vue = typeof Vue;

const ConfirmPlugin = (props: Partial<{ text: string }> = {}) => {
  const defaults = { text: "default text" };
  const _props = { ...defaults, ...props };
  return new Promise((resolve, reject) => {
    const instance = new Confirm({
      el: document.createElement("div"),
      propsData: _props,
      methods: {
        onOk() {
          resolve();
        },
        onCancel() {
          reject();
        }
      }
    });
    document.body.appendChild(instance.$el);
  });
};

export default {
  install(Vue: _Vue) {
    Vue.prototype.$confirm = ConfirmPlugin;
  }
};
