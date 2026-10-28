export type ZoneStatus = "OPEN" | "CLOSED";
export interface Zone {
  id: string;
  name: string;
  capacity: number;
  status: ZoneStatus;
}
export type ZoneInput = Omit<Zone, "id">;
 