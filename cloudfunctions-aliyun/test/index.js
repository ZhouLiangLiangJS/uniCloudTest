'use strict';
exports.main = await (event, context) => {
	console.log(event)
	//event为客户端上传的参数
	// let os = context.OS //客户端操作系统，返回值：android、ios    等
	// let platform = context.PLATFORM //运行平台，返回值为 mp-weixin、app-plus等
	// let appid = context.APPID // manifest.json中配置的appid
	// let clientIP = context.CLIENTIP // 客户端ip信息
	// let clientUA = context.CLIENTUA // 客户端user-agent
	// console.log({
	// 	os,
	// 	platform,
	// 	appid,
	// 	clientIP,
	// 	clientUA
	// })
	//查询客户端ip 仅支持腾讯云
	// const auth = uniCloud.auth();
	// const IP = auth.getClientIP()
	// console.log(IP)
	//数据库操作
	const db = uniCloud.database();
	const collection = db.collection('uni-id-log');
	//添加一条数据
	// let res = await collection.add({
	//   properties: 'Ben'
	// })

	//查询一条数据
	// let res = await collection.where({
	// 	properties: "Ben"
	// }).get()

	//删除一条数据
	// let res = await collection.where({
	// 	properties: "Ben"
	// }).get()
	// res.data.map(async(document) => {
	//   return await collection.doc(document._id).remove();
	// });

	//更新一条数据
	// var moment = require('moment');
	// var current_time =  moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
	// let res = await collection.doc('5f55d8a4a0da5b0001a3a1ab').update({
	// 	properties: "哈哈可以更改了",
	// 	ip:"192.168.0.109",
	// 	create_date:current_time
	// });

	//删除云数据库中的文件
	
	// let result = await uniCloud.deleteFile({
	// 	fileList: [ //参数fileList为文件id
	// 		"58ed3b6b-44bc-43c0-8c7c-91171aff27c5",
	// 		"b631a4cb-5fdb-47fe-9c52-f593d6b7ed1f"
	// 	]
	// });
	//返回数据给客户端
	return JSON.stringify(event)
};
