import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useLandingStore = defineStore({
  id: "landing",
  state: () => ({
    datas: null,
    data: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/landing`;
      const res = await axiosWrapper.get(url);
      if (res) {
        this.datas = res.data;
      }
    },
  },
});
