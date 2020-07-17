<template>
  <div />
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Confirm extends Vue {
  @Prop()
  private text!: string;

  created() {
    if (window.confirm(this.text)) {
      this.onOk();
    } else {
      this.onCancel();
    }
  }

  onOk() {
    this.$emit("ok");
  }

  onCancel() {
    this.$emit("cancel");
  }
}
</script>

<style scoped lang="scss"></style>
