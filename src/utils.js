const isDevEnviroment = () =>
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined


module.exports = {
  isDevEnviroment: isDevEnviroment,
}