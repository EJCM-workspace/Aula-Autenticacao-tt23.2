const User = require("../models/User");
const Auth = require("../config/auth");

const create = async(req,res) => {
	try {

		//Hash and Salt
		const { password } = req.body;
		const hashAndSalt = Auth.generatePassword(password);
		const salt = hashAndSalt.salt;
		const hash = hashAndSalt.hash;

		const newUserData = {
			email: req.body.email,
			name: req.body.name,
			birthDate: req.body.birthDate,
			username: req.body.username,
			hash: hash,
			salt: salt
		}
		
		const user = await User.create(newUserData);
		return res.status(201).json({user: user});
	} catch (e) {
		return res.status(500).json({err: e});
	}
}

const show = async(req,res) => {
	try {
		const {id} = req.params;
		const user = await User.findByPk(id);
		return res.status(200).json({user: user});
	} catch (e) {
		return res.status(500).json({err: e});
	}
}

const index = async(req,res) => {
	try {
		const users = await User.findAll();
		return res.status(200).json({users: users});
	} catch (e) {
		return res.status(500).json({err: e});
	}
}

const update = async(req,res) => {
	try {
		const {id} = req.params;
		const usersAffected = await User.update(req.body, {where: {id: id}});
		return res.status(200).json({usersAffected: usersAffected});
	} catch (e) {
		return res.status(500).json({err: e});
	}
}

const destroy = async(req,res) => {
	try {
		const {id} = req.params;
		await User.destroy({where: {id: id}});
		return res.status(200).json({message: "Deleteado com sucesso"});
	} catch (e) {
		return res.status(500).json({err: e});
	}
}

module.exports = {
	create,
	index,
	show,
	update,
	destroy
}
