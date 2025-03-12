import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const usePengumumanStore = defineStore({
  id: "pengumuman",
  state: () => ({
    data: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/announcements`;
      const res = await axiosWrapper.get(url);
      if (res) {
        this.data = res;
      }
    },

    async update(data) {
      let res = await axiosWrapper.put(`${baseUrl}/announcements`, data, true);
      if (res.status == 200) {
        this.fetch();
        return res;
      }
    },

    async add(data) {
      let res = await axiosWrapper.post(`${baseUrl}/announcements`, data, true);
      if (res.status == 201) {
        this.fetch();
        return res;
      }
    },

    async delete(id) {
      let res = await axiosWrapper.delete(`${baseUrl}/announcements/${id}`, {}, true);
      if (res.status == 200) {
        this.fetch();
        return res;
      }
    },
  },
});
