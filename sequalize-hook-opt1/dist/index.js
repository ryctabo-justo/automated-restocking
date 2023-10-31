"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("./config/sequelize"));
const user_1 = require("./entities/user");
const uuid_1 = require("uuid");
const userRepository = sequelize_1.default.getRepository(user_1.UserEntity);
void (async () => {
    try {
        await sequelize_1.default.authenticate();
        console.log('Sequelize has been connected successfully!');
        await sequelize_1.default.sync();
        await userRepository.truncate();
        const ryctaboId = (0, uuid_1.v4)();
        await userRepository.create({
            id: ryctaboId,
            email: 'ryctabo@gmail.com',
            name: 'Gustavo Pacheco'
        });
        const carimileId = (0, uuid_1.v4)();
        await userRepository.create({
            id: carimileId,
            email: 'carinamilena1995@gmail.com',
            name: 'Carina Pájaro'
        });
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        setTimeout(async () => {
            const user = await userRepository.findByPk(ryctaboId);
            await user?.update({
                email: 'ryctabo@outlook.com',
                name: 'Ryctabo'
            });
            console.log('PRINTING ONLY RYCTABO USER');
            console.log(JSON.stringify(user));
        }, 3000);
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        setTimeout(async () => {
            const user = await userRepository.findByPk(carimileId);
            await user?.destroy();
        }, 5000);
    }
    catch (err) {
        console.error('Error executing process in the database', err);
    }
})();
