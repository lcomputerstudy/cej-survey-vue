<template>
  <v-card-actions>
    <v-col cols="12" align="right">
      <v-btn rounded text @click="addQuestion">
        <font-awesome-icon icon="plus-circle" />
      </v-btn>
      <v-btn rounded text @click="deleteQuestion">
        <font-awesome-icon icon="trash-alt" />
      </v-btn>
    </v-col>
  </v-card-actions>
</template>
<script>
export default {
  methods: {
    addQuestion() {
      this.$emit("addQuestion");
    },
    deleteQuestion() {
      this.$emit("deleteQuestion");
    },
  },
};
</script>