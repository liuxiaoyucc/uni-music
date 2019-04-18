<template>
	<view class="page">
		<!-- <image class="bg-image" mode="aspectFill" :src="bgi"></image> -->
	</view>
</template>

<script>
	import style from '@/config/style.js';

	export default {
		data() {
			return {
				bgi:style.BGI
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		background: #FF0000;
	}
	/* .bg-image{
		width: 750upx;
		height: 100%;
		position: absolute;
	} */
</style>
