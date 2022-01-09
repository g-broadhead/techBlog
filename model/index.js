const notes = require('./notes.js')
const posts = require('./posts.js')
const users = require('./users.js')


users.hasMany(posts, { foreignKey: 'uid' })
posts.belongsTo(users, { foreignKey: 'uid' })

users.hasMany(notes, { foreignKey: 'uid' })
notes.belongsTo(users, { foreignKey: 'uid' })

posts.hasMany(notes, { foreignKey: 'pid' })
notes.belongsTo(posts, { foreignKey: 'pid' })


module.exports = { notes, posts, users }