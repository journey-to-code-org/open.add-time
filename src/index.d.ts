export interface TimeDelta { years?:number;months?:number;weeks?:number;days?:number;hours?:number;minutes?:number;seconds?:number;milliseconds?:number; }
export function addTime(value: Date|string|number, delta?: TimeDelta): Date;

