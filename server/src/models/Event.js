const Model = require('./Model')

class Event extends Model {
  static get tableName() {
    return 'events'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'date'],
      properties: {
        name: { type: 'string' },
        date: { type: ['string', 'integer'] },
        userId: { type: ['integer', 'string'] }
      }
    }
  }

  static get relationMappings() {
    const User = require('./index')

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'events.userId',
          to: 'users.id'
        }
      }
    }
  }
}

module.exports = Event
