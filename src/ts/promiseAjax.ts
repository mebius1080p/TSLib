"use strict";

interface IPromiseAjaxParam {
	method: string;
	url: string;
	type: string;
	data: string | Document | XMLHttpRequestBodyInit | null | undefined;
}

// customize function from "html5 rocks promise"
export function promiseAjax(param: IPromiseAjaxParam) {
	// Return a new promise.
	return new Promise((resolve, reject) => {
		// Do the usual XHR stuff
		const req = new XMLHttpRequest();
		req.open(param.method, param.url);

		req.onloadend = () => {
			// console.dir(req.getResponseHeader("Content-Type"));
			// This is called even on 404 etc
			// so check the status
			if (req.status === 200) {
				// Resolve the promise with the response text
				switch (param.type) {
					case "xml":
						if (req.responseXML === null) {
							reject(req);
						} else {
							resolve(req.responseXML);
						}
						break;
					case "json":
						const json = JSON.parse(req.response);
						resolve(json);
						break;
					default:
						resolve(req.response);
						break;
				}
			} else {
				// Otherwise reject with the status text
				// which will hopefully be a meaningful error
				reject(new Error(req.statusText));
			}
		};
		// Make the request
		if (param.method.toUpperCase() === "GET") {
			req.send();
		} else {
			req.send(param.data);
		}
	});
}
