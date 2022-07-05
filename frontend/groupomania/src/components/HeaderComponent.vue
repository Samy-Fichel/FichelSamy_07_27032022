/* eslint-disable vue/no-multiple-template-root */
<script>
import ImageUrl from "../components/ImageUrl.vue";
export default {
	name: "HeaderComponent",
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
								<router-link :to="{ name: 'login' }"><a class="nav-link active" aria-current="page">S’identifier</a></router-link>
							</li>
							<li class="nav-item">
								<router-link :to="{ name: 'signup' }"><a class="nav-link">S’inscrire</a></router-link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<style>
.header {
	background-color: #eee;
}
.bg-custom {
	background-color: #4e5166;
}

.logo-gp {
	height: 40px;
}
</style>
