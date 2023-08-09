const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define("User",{
	username: {
		type: DataTypes.STRING
	},
	email: {
		type: DataTypes.STRING,
		unique: true
	},
	hash: {
		type: DataTypes.STRING
	},
	salt: {
		type: DataTypes.STRING
	},
	name: {
		type: DataTypes.STRING,
		allowNull: true
	},
	birthDate: {
		type: DataTypes.DATEONLY,
		allowNull: true
	}
});

module.exports = User;
