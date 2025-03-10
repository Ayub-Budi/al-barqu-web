import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useArtikelStore = defineStore({
  id: "artikel",
  state: () => ({
    datas: null,
    data: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/articles`;
      const res = await axiosWrapper.get(url);
      if (res) {
        this.datas = res;
      }
    },

    async detail(id) {
      let url = `${baseUrl}/articles/${id}`;
      const res = await axiosWrapper.get(url);
      if (res) {
        this.data = res.data;
      }
    },

    async add(data) {
      let rest = await axiosWrapper.post(`${baseUrl}/articles`, data, true, "multipart/form-data", 0, true);
      if (rest.status == 201) { 
        this.fetch(); 
        this.$router.push('/artikel');
        return rest;
       }
    },

    async update(data) {
      let rest = await axiosWrapper.put(`${baseUrl}/articles`, data, true);
      if (rest.status == 200) {
        this.fetch();
        return rest;
      }
    },

    async delete(id) {
      let rest = await axiosWrapper.delete(`${baseUrl}/articles/${id}`, {}, true);
      if (rest.status == 200) {
        this.fetch();
        return rest;
      }
    },
  },
});
