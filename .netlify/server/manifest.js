export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["baka.png","bil.png","duscha.png","favicon.png","fotboll.png","lekplats.png","lera.png","pappa.png","promenera.png","pussel.png","rita.png","skrana.png","spela.png","tv.png","valle.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.16952f7a.js","app":"_app/immutable/entry/app.7f6ca3ce.js","imports":["_app/immutable/entry/start.16952f7a.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.4c60f552.js","_app/immutable/entry/app.7f6ca3ce.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ff16eba4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
