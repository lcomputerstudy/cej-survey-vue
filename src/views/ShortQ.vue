<template>
  <div>
    <br />
    <p>Q. {{ this.question }}</p>
    <v-col cols="12" md="5">
      <v-text-field v-model="answer" label="단답형입니다."></v-text-field>
    </v-col>
  </div>
</template>
<script>
export default {
  props: ["question", "q_num", "index"],
  computed: {
    answer: {
      get() {
        return this.$store.state.Answers.questions[this.index].answers[0];
      },
      set(value) {
        let data = { value: value, index: this.index };
        this.$store.commit("update_SingleAnswer", data);
      },
    },
  },
  created() {
    this.$store.state.Answers.questions.push({
      q_num: this.q_num,
      t: "ShortQ",
      answers: [],
    });
  },
};
</script>