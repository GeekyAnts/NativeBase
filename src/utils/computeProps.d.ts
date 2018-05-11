declare module 'native-base/dist/src/utils/computeProps' {
	export default function <PT extends object>(incomingProps: PT, defaultProps: Partial<PT>): PT;
}