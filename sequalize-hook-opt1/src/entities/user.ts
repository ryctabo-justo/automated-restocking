import {
  AfterBulkCreate,
  AfterBulkDestroy,
  AfterBulkUpdate,
  AfterCreate,
  AfterDestroy,
  AfterUpdate,
  Column,
  DataType,
  IsEmail,
  Model,
  Table
} from 'sequelize-typescript'

interface User {
  id: string
  email: string
  name: string
}

@Table({ timestamps: true })
export class UserEntity extends Model<User> {
  @Column({ type: DataType.STRING, primaryKey: true })
  declare id: string

  @IsEmail
  @Column({ type: DataType.STRING, allowNull: false })
  declare email: string

  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string

  declare _options: { isNewRecord: boolean }

  @AfterCreate
  @AfterUpdate
  @AfterDestroy
  static notifyChange(instance: UserEntity): void {
    const { _options: opt } = instance
    const { isNewRecord } = opt

    if (isNewRecord) {
      console.log('Created(User):', instance.get())
    } else if (instance.changed() === false) {
      console.log('Deleted(User):', instance.get())
    } else {
      console.log('Updated(User) Before:', instance.previous())
      console.log('Updated(User) After:', instance.get())
    }
  }

  @AfterBulkCreate
  static myAfterBulkCreate(instance: any): void {
    console.log('AfterBulkUpdate', instance)
  }

  @AfterBulkUpdate
  static myAfterBulkUpdate(instance: any): void {
    console.log('AfterBulkUpdate', instance)
  }

  @AfterBulkDestroy
  static myAfterBulkDestroy(instance: any): void {
    console.log('AfterBulkDestroy', instance)
  }
}
