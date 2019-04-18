<template>
	<view>
	<input type="text" v-model="changenickname"  placeholder="输入新昵称" required="required" value=""/>
	<button @tap="changeNickname(changenickname)" class="green-btn">确认</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				changenickname:''
			};
		},
		onLoad() {
	},
		methods:{
		changeNickname:function(changenickname){
			var _this = this;
			uni.request({
			url: 'http://localhost:8080/api/user/nickname?id='+uni.getStorageSync('login_key').userId,
			method:'put',
			data:changenickname,
			header: { 'content-type':'application/json' },
				success: res => {
					uni.navigateBack();
					}
			});
		}	
		}
	}
</script>

<style>
input {
	height: 50px;
	border-bottom: 1px solid #eee;
	margin-bottom: 5px;
}
</style>
