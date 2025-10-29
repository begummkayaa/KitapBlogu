// server/models/ReadingList.js
const mongoose = require('mongoose');

const readingListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Her listenin adının benzersiz olmasını sağlar
    trim: true,
  },
  // Bu şemaya eklemek istediğiniz başka alanlar olabilir,
  // örneğin bir description veya oluşturulma tarihi
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ReadingList = mongoose.model('ReadingList', readingListSchema);

module.exports = ReadingList;