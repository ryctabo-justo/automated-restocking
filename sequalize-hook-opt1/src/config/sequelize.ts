import dotenv from 'dotenv'
import { Sequelize } from 'sequelize-typescript'
import { UserEntity } from '../entities/user'

dotenv.config()

const POSTGRES_URI = process.env.POSTGRESQL_URI

if (POSTGRES_URI === null || POSTGRES_URI === undefined) {
  throw Error('Environment variable POSTGRES_URI is required to init project')
}

const sequelize = new Sequelize(POSTGRES_URI, { repositoryMode: true, models: [UserEntity], logging: false })

export default sequelize
