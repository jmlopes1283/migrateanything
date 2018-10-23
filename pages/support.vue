<template>
	<div>
		<div class="masthead txt-white flex-box one-column flex-end">
			<div class="inner txt-shadow">
				<h2>Support Documentation</h2>
				<p>Please, follow the instructions below.</p>
			</div>
		</div>
		<div class="layer background-white pad-vert more layer">
		    <div class="inner">
		        <h2>Before Getting Started</h2>
				<p>Please familiarize yourself with the <nuxt-link to="/plugin-guide">Plugin Guide</nuxt-link>.</p>
		    </div>
		</div>
    </div>

</template>

<style scoped>
.layer {
	position: relative;
	z-index: 2;
}

.masthead {
	background: #092756;
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%,rgba(138, 114, 76, 0) 40%), linear-gradient(to bottom, rgba(57, 173, 219, .25) 0%,rgba(42, 60, 87, .4) 100%), linear-gradient(135deg, #092756 0%,#6bffe6 100%);
    height: 230px;
    max-height: 100vh;
    padding: 0;
    position: relative;
    z-index: 1;
}

.flex-box.one-column > .inner {
	margin: 0 auto 2em;
	width: 97%;
}

.masthead h2,
.masthead p {
	margin: 0;
}

</style>