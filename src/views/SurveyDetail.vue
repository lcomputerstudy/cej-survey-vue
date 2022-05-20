<template>
  <div style="width: 100%">
    <v-card class="mx-auto" width="80%">
      <v-card-text>
        <div>survey num_{{ SurveyDetail.s_num }}</div>
        <span class="text-h4 text--primary"> {{ SurveyDetail.title }} </span>
        <span>: {{ SurveyDetail.disc }}</span>
        <p>{{ SurveyDetail.datetime }}</p>
        <br />
        <component
          v-for="(item, index) in SurveyDetail.questions"
          :is="item.t"
          :key="index"
          :question="item.q"
          :q_num="item.q_num"
          :index="index"
          :answers="item.answers"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn text color="teal accent-4" @click="submit"> submit </v-btn>
        <v-btn text color="teal accent-4" router @click="results">
          View results
        </v-btn>
      </v-card-actions>
    </v-card>
    <br />
    <v-col cols="12" align="right">
      <v-btn @click="deleteSurvey">Delete</v-btn>
    </v-col>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShortQ from "../views/ShortQ.vue";
import LongQ from "../views/LongQ.vue";
import RadioQ from "../views/RadioQ.vue";
import CheckQ from "../views/CheckQ.vue";
import DropQ from "../views/DropQ.vue";

export default {
  components: { ShortQ, LongQ, RadioQ, CheckQ, DropQ },
  data() {
    return {};
  },
  computed: {
    ...mapState(["SurveyDetail"]),
  },
  methods: {
    submit() {
      this.$store.dispatch("SubmitAnswers");
    },
    results() {
      this.$store.dispatch("getResults", this.SurveyDetail.s_num);
    },
    deleteSurvey() {
      this.$store.dispatch("deleteSurvey", this.SurveyDetail.s_num);
    },
  },
  created() {
    this.$store.state.Answers = { s_num: "", questions: [] };
    this.$store.commit("update_S_num", this.SurveyDetail.s_num);
  },
};
</script>