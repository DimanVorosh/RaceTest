import ergastApi from '../api/index';

export const getDrivers = async (limit: number, offset: number) =>
  await ergastApi.get('/drivers.json', {
    params: {limit, offset},
  });

export const getDriverDetails = async (driverId: string) =>
  await ergastApi.get(`/drivers/${driverId}.json`);

export const getDriverRaces = async (
  driverId: string,
  season: string = 'current',
) =>
  await ergastApi.get(`/drivers/${driverId}/results.json`, {
    params: {season},
  });
