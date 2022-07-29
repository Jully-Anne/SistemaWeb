// server.js

const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const routerMenu = jsonServer.router(__dirname)
const routerDashboard = jsonServer.router(path.join(__dirname, 'dashboard.json'))
const routerFurnaceHistoricalAlarms = jsonServer.router(path.join(__dirname, 'furnaceHistoricalAlarms.json'))
const routerFurnaceHistoricalAnalysis = jsonServer.router(path.join(__dirname, 'furnaceHistoricalAnalysis.json'))
const routerFurnaceRealTimeAnalysis = jsonServer.router(path.join(__dirname, 'furnaceRealTime.json'))
const routerMachineHistoricalAnalysis = jsonServer.router(path.join(__dirname, 'machineHistoricalAnalysis.json'))
const routerMachineRealTimeAnalysis = jsonServer.router(path.join(__dirname, 'machineRealTimeAnalysis.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(routerMenu)
server.use(routerDashboard)
server.use(routerFurnaceHistoricalAlarms)
server.use(routerFurnaceHistoricalAnalysis)
server.use(routerFurnaceRealTimeAnalysis)
server.use(routerMachineHistoricalAnalysis)
server.use(routerMachineRealTimeAnalysis)

