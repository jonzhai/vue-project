'use strict';

import BaseComponent from '../../prototype/baseComponent'
import UserModel from '../../models/author/index'
import formidable from 'formidable'

class User extends BaseComponent{
	constructor(){
		super()
		// this.addAddress = this.addAddress.bind(this);

	}
	async login(req, res, next){
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			const {username, password} = fields;
			try{
				if(!username){
					throw new Error('账号不能为空');
				}else if(!password){
					throw new Error('密码不能为空');
				}
			}catch(err){
				console.log(err.message);
				res.send({
					code: 500,
					data: null,
					message: err.message
				})
				return
			}
            // const newpassword = this.encryption(password);
			try{
				const admin = await UserModel.findOne({username})
				if (!admin) {
					res.send({
                        code: 500,
                        data: null,
						message: '该用户不存在，请注册后登陆',
					})
				}else if(password.toString() != admin.password.toString()){
					console.log('管理员登录密码错误');
					res.send({
                        code: 500,
                        data: null,
						message: '密码输入错误，请重试！',
					})
				}else{
					req.session.admin_id = admin.id;
					res.send({
                        code: 200,
                        data: null,
						success: '登录成功'
					})
				}
			}catch(err){
				console.log('登录失败', err);
				res.send({
					status: 500,
                    data: null,
					message: '登录失败',
				})
			}
		})
	}
	
	async regist(req, res, next){
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			const {username, password, phone} = fields;
			try{
				if(!username){
					throw new Error('账号不能为空');
				}else if(!password){
					throw new Error('密码不能为空');
				}
			}catch(err){
				console.log(err.message);
				res.send({
					code: 500,
					data: null,
					message: err.message
				})
				return
			}
            // const newpassword = this.encryption(password);
			try{
				const admin = await UserModel.findOne({username})
				if (admin) {
                    res.send({
                        code: 500,
                        data: null,
						message: '用户已存在，请直接登陆！！',
					})
				}else {
                    const newUser = {
                        phone,
						username, 
						password, 
						created_at: dtime().format('YYYY-MM-DD HH:mm'),
					}
					await UserModel.create(newUser)
					res.send({
                        code: 200,
                        data: null,
						success: '注册成功'
					})
				}
			}catch(err){
				console.log('注册失败', err);
				res.send({
					status: 500,
                    data: null,
					message: '注册失败',
				})
			}
		})
	}
	
}

export default new User()