'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
	id: Number,
    username: String,
    password: String,
	phone: String,
	user_id: Number,
	created_at: {type: Date, default: Date.now()},
})

userSchema.index({id: 1});

const User = mongoose.model('User', userSchema);

export default User