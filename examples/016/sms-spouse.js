const config = require('./config');
const readLineSync = require('readline-sync');
const Twilio = require('twilio');

/**
 * Twilio v3
 *
 * Before you can send an SMS from Node.js,
 * you'll need to sign up for a Twilio account
 * and purchase an SMS-capable phone number.
 * When you search for a number to buy, you'll
 * be able to see what types of communication it can power.
 */

const {
  TWILIO_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER,
  MY_SPOUSE_NUMBER,
} = config;

