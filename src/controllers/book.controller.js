const sequelize = require('sequelize');
const { Book } = require('../models');

exports.create = async (req, res) => {
	try {
		await Book.create(req.body);
		const result = await Book.findAll();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send({
			message: err.message || 'Something went wrong, please try again!',
		});
	}
};

exports.readByID = async (req, res) => {
	const { id } = req.params;
	try {
		const result = await Book.findOne({ where: { id: id } });
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send({
			message: err.message || 'Something went wrong, please try again!',
		});
	}
};

exports.readAll = async (req, res) => {
	try {
		const result = await Book.findAll();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send({
			message: err.message || 'Something went wrong, please try again!',
		});
	}
};

exports.update = async (req, res) => {
	const { id, title, categoryId, author, pages } = req.body;
	try {
		await Book.update(
			{
				title,
				categoryId,
				author,
				pages,
			},
			{ where: { id } }
		);
		const result = await Book.findAll();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send({
			message: err.message || 'Something went wrong, please try again!',
		});
	}
};

exports.search = async (req, res) => {
	const { categoryId = 0 } = req.params;
	try {
		const result = categoryId == 0 ? await Book.findAll() : await Book.findAll({ where: { categoryId } });

		res.status(200).send(result);
	} catch (err) {
		res.status(500).send({
			message: err.message || 'Something went wrong, please try again!',
		});
	}
};

exports.delete = async (req, res) => {
	const { id } = req.params;

	try {
		await Book.destroy({ where: { id: id } });
		const result = await Book.findAll();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send({
			message: err.message || 'Something went wrong, please try again!',
		});
	}
};
