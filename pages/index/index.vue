<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title" @tap="shangchuan">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			uniCloud.callFunction({
				name: 'test',
				data: {
					a: 1,
					b:2,
					c:3
				},
				success(res) {
					console.log(res)
				},
				fail(err) {
					console.log(err)
				},
				complete() {}
			});
		},
		methods: {
			shangchuan() {
				//前端代码
				uni.chooseImage({
					count: 1,
					success(res) {
						console.log(res);
						if (res.tempFilePaths.length > 0) {
							let filePath = res.tempFilePaths[0]
							//进行上传操作

							// promise方式
							//         const result = await uniCloud.uploadFile({
							//             filePath: filePath,
							// cloudPath: 'a.jpg',
							//             onUploadProgress: function(progressEvent) {
							//                   console.log(progressEvent);
							//                   var percentCompleted = Math.round(
							//                     (progressEvent.loaded * 100) / progressEvent.total
							//                   );
							//                 }
							//         });

							// callback方式，与promise方式二选一即可
							uniCloud.uploadFile({
								filePath: filePath,
								cloudPath: 'a.jpg',
								onUploadProgress: function(progressEvent) {
									console.log(progressEvent);
									var percentCompleted = Math.round(
										(progressEvent.loaded * 100) / progressEvent.total
									);
								},
								success(res) {
									console.log(res)
								},
								fail() {},
								complete() {}
							});

						}
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
