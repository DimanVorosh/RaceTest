export interface Driver {
  driverId: string;
  givenName: string;
  familyName: string;
}

export interface DriverDetail {
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
}

export interface DriverRace {
  raceName: string;
  season: string;
  Circuit: {
    Location: {
      country: string;
    };
    circuitName: string;
  };
  Results: {
    Driver: DriverDetail;
    laps: string;
    position: string;
    number: string;
    points: string;
  }[];
}
