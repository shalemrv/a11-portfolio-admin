export interface Visitor{
	slNo: number;
	visitorID: number;
	sessionID: string;
	timeRaw: number;
	entryTime: string;
	ipAddress: string;
	city: string;
	region: string;
	country: string;
	zip: string;
	flag: string;
	fullAddress: string;
}