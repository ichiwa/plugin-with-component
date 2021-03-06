import Vue, { PluginFunction } from "vue";

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

export interface ConfirmProps {
  text: string;
}

export interface ConfirmMethod {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (props: Partial<ConfirmProps>): Promise<any>;
}

declare module "vue/types/vue" {
  interface Vue {
    $confirm: ConfirmMethod;
  }
}

declare class VueConfirmPlugin {
  static install: PluginFunction<ConfirmMethod>;
}

export default VueConfirmPlugin;
