const User = require('./users.js')
const Post = require('./posts.js')
const Note = require('./notes.js')


User.hasMany(Post, { foreignKey: 'uid' })
Post.belongsTo(User, { foreignKey: 'uid' })

User.hasMany(Note, { foreignKey: 'uid' })
Note.belongsTo(User, { foreignKey: 'uid' })

Post.hasMany(Note, { foreignKey: 'pid' })
Note.belongsTo(Post, { foreignKey: 'pid' })


module.exports = { User, Post, Note }