import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useAboutStore = defineStore({
  id: "about",
  state: () => ({
    data: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/about`;
      const res = await axiosWrapper.get(url);
      if (res) {
        this.data = res;
      }
    },

    async update(data) {
      let rest = await axiosWrapper.put(`${baseUrl}/about`, data, true);
      if (rest.status == 200) {
        this.fetch();
        return rest;
      }
    },

    async uploadImage(data) {
      let rest = await axiosWrapper.post(`${baseUrl}/about/update-image`, data, true,"multipart/form-data",0,true);
      if (rest.status == 200) {
        this.fetch();
        return rest;
      }
    },
  },
});
