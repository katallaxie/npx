#!/usr/bin/env node

'use strict'

const fs = require('fs')
const path = require('path')
const clear = require('clear')
const output = fs.readFileSync(path.join(__dirname, 'output'), 'utf8')

console.log(output)
