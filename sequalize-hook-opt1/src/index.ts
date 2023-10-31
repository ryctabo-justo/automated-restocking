import sequelize from './config/sequelize'
import { UserEntity } from './entities/user'
import { v4 as uuidv4 } from 'uuid'

const userRepository = sequelize.getRepository(UserEntity)

void (async () => {
  try {
    await sequelize.authenticate()
    console.log('Sequelize has been connected successfully!')
    await sequelize.sync()

    await userRepository.truncate()

    const ryctaboId = uuidv4()
    await userRepository.create({
      id: ryctaboId,
      email: 'ryctabo@gmail.com',
      name: 'Gustavo Pacheco'
    })

    const carimileId = uuidv4()
    await userRepository.create({
      id: carimileId,
      email: 'carinamilena1995@gmail.com',
      name: 'Carina Pájaro'
    })

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    setTimeout(async () => {
      const user = await userRepository.findByPk(ryctaboId)

      await user?.update({
        email: 'ryctabo@outlook.com',
        name: 'Ryctabo'
      })

      console.log('PRINTING ONLY RYCTABO USER')
      console.log(JSON.stringify(user))
    }, 3000)

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    setTimeout(async () => {
      const user = await userRepository.findByPk(carimileId)
      await user?.destroy()
    }, 5000)
  } catch (err) {
    console.error('Error executing process in the database', err)
  }
})()
