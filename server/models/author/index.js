'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
	id: Number,
	phone: String,
	user_id: Number,
	created_at: {type: Date, default: Date.now()},
    username: String,
    password: String
})

userSchema.index({id: 1});

const User = mongoose.model('User', userSchema);

export default User