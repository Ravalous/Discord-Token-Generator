
// Libs
const crypto = require("crypto")
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
const { uniqueNamesGenerator, adjectives, colors, animals, countries, names, languages, starWars } = require('unique-names-generator')
const { PuppeteerBlocker } = require('@cliqz/adblocker-puppeteer')
const {fetch} = require('cross-fetch')
const fs = require('fs')
const { Console } = require('console')

// rest 
