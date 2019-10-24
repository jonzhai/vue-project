'use strict';

import express from 'express'
import AuthorHandle from '../controller/author/index'
import BaseComponent from '../prototype/baseComponent'

const baseHandle = new BaseComponent();
const router = express.Router();

router.post('/login', AuthorHandle.login);


 
export default router