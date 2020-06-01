const db = require('../database/dbConfig.js');

module.exports = {
	find,
	findBy,
	findById,
	findUserItems,
	findUser,
	insert,
	update,
	remove
};

function find() {
	return db('users').select('id', 'username', 'profileImg').orderBy('id');
}

function findBy(filter) {
	return db('users')
		.select('id', 'username', 'password', 'profileImg')
		.where(filter);
}

function findById(id) {
	return db('users')
		.select('id', 'username', 'profileImg')
		.where({ id })
		.first();
}

function findUserItems(id) {
	return db('users')
		.join('items', 'users.id', 'items.user_id')
		.select('items.name', 'items.description', 'items.price', 'items.category', 'items.location', 'items.itemImg')
		.where('users.id', id)
}

function findUser(id) {
	const promises = [findById(id), findUserItems(id)]
	return Promise.all(promises)
		.then(function (results) {
			let [user, items] = results;
			if (user) {
				user.items = items;
				return user
			}
		})
}

function insert(user) {
	return db('users')
		.insert(user, 'id')
		.then(ids => {
			const [id] = ids;
			return findById(id);
		});
}

function update(id, changes) {
	return db('users')
		.where({ id })
		.update(changes);
}

function remove(id) {
	return db('users')
		.where({ id })
		.del();
}