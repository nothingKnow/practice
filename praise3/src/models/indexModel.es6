import rqA from 'request-promise';
class indexModel{
	constructor(ctx) {
		this.ctx = ctx;
	}
	updateNum() {
		const options = {
			method: 'GET',
			uri: 'http://localhost:8900/praisethumb.php'
		}
		return new Promise((resolve, reject) => {
			rqA(options).then(function (result) {
		        const info = JSON.parse(result);
	            if (info) {
	                resolve({ data: info.result });
	            } else {
	                reject({});
	            }
		    })
		    .catch(function (err) {
		        // Crawling failed or Cheerio choked...
		    });
		})
		
	}
}

export default indexModel;