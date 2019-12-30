/*
 * @Descripttion: 登录路由控制器
 * @version: 
 * @Author: rufeike
 * @Date: 2019-12-30 14:56:53
 * @Email: rufeike@163.com
 */
'use stict'
const KoaRouter = require('koa-router');
const AwaitFs = require('await-fs');//使用第三方同步读取文件await-fs
const Path = require('path');

let router = new KoaRouter();

router.get('/',async (ctx,next)=>{
    // console.log(ctx.url);
    await ctx.render('admin/login',{title:'标题'});//使用Ejs渲染
})

router.post('/',async (ctx,next)=>{
    let params = ctx.request.fields;
    let admins = JSON.parse(await AwaitFs.readFile(Path.resolve(__dirname,'../../../admins.json')));

    ctx.body = admins;
    
})


module.exports = router.routes();
