const request = require('async-request');
const download = require('image-downloader')
const mkdirp = require('mkdirp');
const fs = require('fs');
const cheerio = require('cheerio');
const strains = require('./data/newestData');
const https = require('https');
const req = require('request');
const BASE_URL = 'https://potguide.com/strain-profiles/';

class ImageLoader{
	static async getImage(url, name){
		mkdirp(`images/${name}`);

		let strainName = url.split('/');
		strainName = strainName[strainName.length - 1];
		const file = fs.createWriteStream(`images/${name}/${strainName}`);
		const r = req.get(url)
		await r.on('response', (res) =>  res.pipe(file));
	}
	
	static getStrainNames(){
		return strains.map(v => v.UrlName);
	}


	static load(){
		let i = 0;
		mkdirp('images');
		this.loadPageData(i);
	}

	static async loadPageData(i){
		const names = this.getStrainNames();
		const totalNames = names.length - 1;
		const self = this;
		
		if(i <= names.length){
			const name = names[i];
			const url = BASE_URL + name;
			console.log(url);
			
			const urls = await this.getImageUrls(url);
			
			urls.map(url => this.getImage(url, name));
			this.loadPageData(i + 1);
		}



	}


	static async getImageUrls(url, name){
		const data = await request(url);
		const $ = cheerio.load(data.body);
		const urls = [];

		$('#gallery1 img').each(function() {
			urls.push($(this).attr('src'));
		});
		return urls;

	}
}

module.exports = ImageLoader;
ImageLoader.load();