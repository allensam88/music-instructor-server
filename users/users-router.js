const router = require('express').Router();
const Users = require('./users-model.js');

router.get('/', (req, res) => {
	Users.find()
		.then(users => {
			res.json(users);
		})
		.catch(err => res.send(err));
});

router.get('/:id', async (req, res) => {
	try {
		const user = await Users.findById(req.params.id);
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(400).json({ message: 'user cannot be found' })
		}
	} catch (error) {
		res.status(500).json({ error, message: 'unable to find user items' });
	}
});

router.get('/:id/items', async (req, res) => {
	try {
		const userItems = await Users.findUser(req.params.id);
		if (userItems) {
			res.status(200).json(userItems);
		} else {
			res.status(400).json({ message: 'user cannot be found' })
		}
	} catch (error) {
		res.status(500).json({ error, message: 'unable to find user' });
	}
});

router.put('/:id', async (req, res) => {
	try {
		const updatedUser = await Users.update(req.params.id, req.body);
		if (updatedUser) {
			res.status(200).json({ updatedUser, message: 'info updated' });
		} else {
			res.status(404).json({ message: 'user could not be found' });
		}
	} catch (error) {
		console.log(error)
		res.status(500).json({ error, message: 'unable to update this user' });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const count = await Users.remove(req.params.id);
		if (count > 0) {
			res.status(200).json({ message: "user deleted" });
		} else {
			res.status(404).json({ message: 'user could not be found' });
		}
	} catch (error) {
		res.status(500).json({ error, message: 'unable to delete this user' });
	}
});

module.exports = router;