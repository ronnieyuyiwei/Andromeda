/**
 * Created by swallow on 2017/9/23.
 */
const mongoose = require('./mongoose')
const Schema = mongoose.Schema
const StroyRootSchema = new Schema({
  date: { type: Date, default: Date.now },
  name: String,
  lc: {
    type: Schema.Types.ObjectId,
    default: null,
    ref: 'Story'
  },
  rb: {
    type: Schema.Types.ObjectId,
    default: null,
    ref: 'Story'
  }
})
const StoryRoot = mongoose.model('StoryRoot', StroyRootSchema)
module.exports = StoryRoot
