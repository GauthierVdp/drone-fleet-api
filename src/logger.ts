import winston from 'winston';

// Configuratie van de logger
const logger = winston.createLogger({
  level: 'info',  // De minimum logniveau (info betekent dat info en hogere niveaus worden gelogd)
  format: winston.format.combine(
    winston.format.timestamp(),    // Voeg tijdstempels toe aan de logs
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;  // Log bericht formaat
    })
  ),
  transports: [
    new winston.transports.Console({  // Log naar de console
      format: winston.format.combine(
        winston.format.colorize(),    // Kleuren voor logniveaus
        winston.format.simple()
      )
    }),
    new winston.transports.File({    // Log naar een bestand
      filename: 'logs/app.log',
      level: 'info',                  // Alleen loggen van info en hoger naar bestand
    }),
  ],
});

export default logger;
