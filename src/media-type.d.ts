// since *.mp4 is non-js content we need to declare this as a wildcard module
declare module '*.mp4' {
	const src: string;
	export default src;
}
