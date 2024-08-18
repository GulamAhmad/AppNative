import axiosInstance from "./service";

export const getFleetDetails = async (selectedFleet: number) => {
  try {
    const res = await axiosInstance.get(
      `/vehicle_fleet/getfleetdetails/${selectedFleet}/`
    );
    return res.data.fleet_details;
  } catch (err) {
    return err;
  }
};

export const getFleetTable = async (fleet_id: number) => {
  try {
    const res = await axiosInstance.get(`/vehicle_fleet/gettable/${fleet_id}/`);
    return res.data.vehicle_table;
  } catch (err) {
    return err;
  }
};
