//buat module prisma connector ke database

const { PrismaClient } = require ('@prisma/client')
const prisma = new PrismaClient()

// prisma ini buat ngegantiin pool yg ada di database.js
module.exports = { prisma }