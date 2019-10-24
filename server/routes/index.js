'use strict';

import author from './author'


export default app => {
	app.use('/author', author);
}