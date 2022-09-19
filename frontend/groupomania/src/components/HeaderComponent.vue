/* eslint-disable vue/no-multiple-template-root */
<script>

import ImageUrl from "../components/ImageUrl.vue";
let logout = () => {
	localStorage.removeItem('token')
	localStorage.removeItem('userId')
	localStorage.removeItem('isAdmin')
}
export default {
	name: "HeaderComponent",
	methods:{
		logout(){
			logout()
			this.$router.push('/login')
		}
	},
	component: {
		ImageUrl,
	},
};
</script>

<template>
	<header class="header">
		<div>
			<nav class="navbar navbar-expand-lg navbar-dark bg-custom static-top">
				<div class="container">
					<a class="navbar-brand" href="#">
						<img src="../assets/logo.png" class="logo-gp" alt="..." />
					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto">
							<li class="nav-item">
								<router-link :to="{ name: 'login' }"><a class="menu-link nav-link active" aria-current="page">S’identifier</a></router-link>
							</li>
							<li class="nav-item">
								<router-link :to="{ name: 'signup' }"><a class="menu-link nav-link">S’inscrire</a></router-link>
							</li>
							<li>
								<button @click="logout()" class="logout">Se déconnecter</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<style>
	.menu-link{
		color: #4E5166 !important;
	}
.header {
	background-color: #eee;

}
.bg-custom {
	background-color: #FFD7D7;
}

.logo-gp {
	height: 40px;
}
.logout{
	margin: auto;
    padding: 4px;
	background-color:#fcd7d7;
}
.logout:hover {
	background-color: rgb(78, 81, 102);
	color: white;
}
.logout:active{
	box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                inset 2px 2px 3px rgba(0, 0, 0, .6);
}
</style>
