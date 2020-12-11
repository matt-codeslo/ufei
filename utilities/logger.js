const winston = require("winston");
const WinstonCloudWatch = require('winston-cloudwatch');
const { transports } = require("winston");
const CloudWatchTransport = require("winston-aws-cloudwatch");
const path = require('path');

const cloudWatchConfig = {
  logGroupName: 'ufei-log-group',
  logStreamName: 'ufei-log-stream',
  awsAccessKeyId: process.env.AWS_KEY,
  awsSecretKey: process.env.AWS_SECRET,
  awsRegion: process.env.AWS_REGION
}


// winston.error(1);


const logger = winston.createLogger({
  // level: "info",
  // colorize: true,
  // prettyPrint: true,
  // // format: winston.format.combine(
  // //   winston.format.timestamp(),
  // //   winston.format.simple(),
  // // ),
  // defaultMeta: {
  //   service: "user-service",
  // },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.simple(),
        winston.format.colorize(),
        winston.format.timestamp()
      )
    }),
    new winston.transports.File({
      format: winston.format.combine(
        winston.format.simple(),
        winston.format.timestamp(),
        winston.format.colorize(),
      ),
      name: 'info-file',
      level: 'info',
      filename: path.join(__dirname, '/logs/winston-log-file'),

    })
  ],

});

if (process.env.NODE_ENV !== 'local') {
  logger.add(new WinstonCloudWatch(cloudWatchConfig))
}


module.exports = logger;
