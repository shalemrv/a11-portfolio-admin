export interface Visitor {
	slNo: number;
	visitorID: number;
	sessionID: string;
	timeRaw: number;
	entryTime: Date;
	ipAddress: string;
	location: Location;
	address: string[];
	flag: string;
}

interface Location {
	city: string;
	region: string;
	country: string;
	zip: string;
	fullAddress: string;
}
