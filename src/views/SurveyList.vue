<template>
  <div style="width: 100%">
    <v-col cols="12" align="right">
      <v-btn depressed router :to="{ name: 'WriteSurvey' }"
        >Create a Survey</v-btn
      >
    </v-col>
    <v-card>
      <v-card-title>
        Survey List
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        v-model="selected"
        :single-select="singleSelect"
        show-select
        item-key="s_num"
        :headers="headers"
        :items="SurveyList"
        :search="search"
        @click:row="surveyDetail"
      ></v-data-table>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      singleSelect: false,
      selected: [],
      search: "",
      headers: [
        {
          text: "NUM",
          align: "start",
          sortable: false,
          value: "rownum",
        },
        { text: "TITLE", value: "title" },
        { text: "WRITER", value: "writer" },
        { text: "DATE_TIME", value: "datetime" },
        { text: "HIT", value: "hit" },
        { text: "s_num", value: "s_num", align: " d-none" },
      ],
    };
  },
  computed: {
    ...mapState(["SurveyList"]),
  },
  methods: {
    ...mapActions(["getSurveyDetail"]),

    surveyDetail(row) {
      this.getSurveyDetail(row.s_num);
    },
  },
  created() {
    this.$store.dispatch("getSurveyList");
  },
};
</script>