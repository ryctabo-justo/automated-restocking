"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let UserEntity = class UserEntity extends sequelize_typescript_1.Model {
    static notifyChange(instance) {
        const { _options: opt } = instance;
        const { isNewRecord } = opt;
        if (isNewRecord) {
            console.log('Created(User):', instance.get());
        }
        else if (instance.changed() === false) {
            console.log('Deleted(User):', instance.get());
        }
        else {
            console.log('Updated(User) Before:', instance.previous());
            console.log('Updated(User) After:', instance.get());
        }
    }
    static myAfterBulkCreate(instance) {
        console.log('AfterBulkUpdate', instance);
    }
    static myAfterBulkUpdate(instance) {
        console.log('AfterBulkUpdate', instance);
    }
    static myAfterBulkDestroy(instance) {
        console.log('AfterBulkDestroy', instance);
    }
};
exports.UserEntity = UserEntity;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, primaryKey: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.IsEmail,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.AfterCreate,
    sequelize_typescript_1.AfterUpdate,
    sequelize_typescript_1.AfterDestroy,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserEntity]),
    __metadata("design:returntype", void 0)
], UserEntity, "notifyChange", null);
__decorate([
    sequelize_typescript_1.AfterBulkUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserEntity, "myAfterBulkCreate", null);
__decorate([
    sequelize_typescript_1.AfterBulkUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserEntity, "myAfterBulkUpdate", null);
__decorate([
    sequelize_typescript_1.AfterBulkDestroy,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserEntity, "myAfterBulkDestroy", null);
exports.UserEntity = UserEntity = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true })
], UserEntity);
