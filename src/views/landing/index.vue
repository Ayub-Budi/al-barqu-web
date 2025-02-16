<template>
    <LandingNavbar />
    <LandingHero :store="landingStore" />
    <LandingAboutUs :store="landingStore" />
    <LandingArtikel :store="landingStore" />
    <LandingPengumuman :store="landingStore" />
    <LandingFooter :store="landingStore" />
</template>
<script>
import { useLandingStore } from "@/stores/landing/landing.store.js"
import { storeToRefs } from "pinia";
export default {
    data() {
        return {
            landingStore: useLandingStore()
        }
    },
    mounted() {
        this.landingStore.fetch()
    }
}
</script>
<style>
    
</style>