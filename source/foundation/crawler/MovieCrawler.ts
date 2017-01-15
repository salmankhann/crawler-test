import { Promise } from 'es6-promise';
import fetch = require('node-fetch');
import $ = require('cheerio');
import parse = require('url-parse');
import fs = require('fs');
import imdb = require('imdb-api');

export interface CinemaNetworkMechanism {
    fetchData(fromUrl: string);
}