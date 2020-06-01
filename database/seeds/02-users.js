const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
	return knex('users').insert([
		{ username: 'allensam88', password: bcrypt.hashSync('1234', 8), first_name: 'Sam', last_name: 'Allen', profileImg: 'https://tinyurl.com/ughtj3s', role: 2 },
		{ username: 'millertime', password: bcrypt.hashSync('56789', 8), first_name: 'Ted', last_name: 'Miller', profileImg: 'https://tinyurl.com/tzvjmup', role: 1 },
		{ username: 'epic_piano!', password: bcrypt.hashSync('abcd', 8), first_name: 'Sergei', last_name: 'Rachmaninov', profileImg: 'https://tinyurl.com/tqaoms3', role: 2 },
		{ username: 'beginner27', password: bcrypt.hashSync('efgh', 8), first_name: 'Nate', last_name: 'McClung', profileImg: 'https://tinyurl.com/vyfmthr', role: 1 },
		{ username: 'drumMaster99', password: bcrypt.hashSync('ijkl', 8), first_name: 'Neil', last_name: 'Peart', profileImg: 'https://tinyurl.com/qswlzsl', role: 2 },
		{ username: 'level42', password: bcrypt.hashSync('mnop', 8), first_name: 'Sally', last_name: 'Smith', profileImg: 'https://tinyurl.com/t7tldbx', role: 1 },
		{ username: 'star_composer', password: bcrypt.hashSync('qrst', 8), first_name: 'John', last_name: 'Williams', profileImg: 'https://tinyurl.com/ughtj3s', role: 2 },
		{ username: 'music-hobby2', password: bcrypt.hashSync('uvwx', 8), first_name: 'Tommy', last_name: 'Hume', profileImg: 'https://tinyurl.com/tzvjmup', role: 1 }
	]);
};