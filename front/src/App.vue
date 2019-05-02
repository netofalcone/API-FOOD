<template>

<div id="app" :class="{'hide-menu': !isMenuVisible || !usuario}">

	 <Header  title="Food Delivery" 
	:hideToggle="!usuario"
	:hideUserDropdown="!usuario"/>
	<Menu v-if="usuario"/>
	<Content />
	<Footer />  

	
	
 </div>
</template>

<script>

import {mapState} from 'vuex'
import Restaurant from '@/config/restaurants'
import axios from "axios"
import { baseApiUrl, userKey } from "@/config/global"

import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

export default {

	name: "App",
	components: {Header, Menu, Content, Footer},
	computed: mapState(['isMenuVisible', 'usuario']),
	data: function() {
		return {
			validatingToken: true
		}
	},
	methods: {
		async validateToken() {
			this.validatingToken = true

			const json = localStorage.getItem(userKey)
			const userData = JSON.parse(json)
			this.$store.commit('setUser', null)

			if(!userData) {
				this.validatingToken = false
				this.$router.push({ name: 'auth' })
				return
			}

			const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

			if (res.data) {
				this.$store.commit('setUser', userData)

				if(this.$mq === 'xs' || this.$mq === 'sm') {
					this.$store.commit('toggleMenu', false)
				}
			} else {
				localStorage.removeItem(userKey)
				this.$router.push({ name: 'auth' })
			}

			this.validatingToken = false
		}
	},
	created() {
		this.validateToken()
	}
}
</script>

<style>
  
  * {
	  font-family: "Roboto", sans-serif;
  }

  body {
	  margin:0%;
  }

  #app {
	
	  -moz-osx-font-smoothing: grayscale;

	  height: 100vh;
	  display: grid;

	  grid-template-rows: 90px 1fr 40px;
	  grid-template-columns: 300px 1fr;
	  grid-template-areas:
	  "header header"
	  "menu content"
	  "menu footer"
  }

#app.hide-menu {
	 grid-template-areas:
	  "header header"
	  "content content"
	  "footer footer"
}

</style>

