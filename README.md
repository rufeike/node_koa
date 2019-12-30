<!--
 * @Descripttion: 
 * @version: 
 * @Author: rufeike
 * @Date: 2019-12-30 09:17:52
 * @Email: rufeike@163.com
 -->

# Koa框架开发流程
>koa开发基本流程

## 模块结构
```html
├─libs
├─log
├─node_modules
│  └─...
├─routers
├─static
├─template
└─upload

```


## 开发项目常用模块
- koa 框架
- koa-static 静态文件读取模块
- koa-router 路由模块
- koa-ejs 模板渲染模块
- koa-session SESSION处理模块
- koa-better-body 表单处理模块
- mysql mysql数据库模块
- co-mysql mysql数库封装同步模块

```shell
npm install koa koa-static koa-router koa-ejs koa-session koa-better-body mysql co-mysql -D
```