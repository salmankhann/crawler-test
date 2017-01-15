import { Promise } from 'es6-promise';
var fetch = require('node-fetch');
var $ = require('cheerio');
var parse = require('url-parse');
var fs = require('fs');
var imdb = require('imdb-api');


namespace MovieCrawler {
    
    export interface CinemaNetworkMechanism {
        fetchData(fromUrl: string);
    }
}