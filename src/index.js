function clone(v){const d=v instanceof Date?new Date(v):new Date(v);if(Number.isNaN(d.getTime()))throw new RangeError("Invalid date");return d;}
export function addTime(value, delta = {}) {
  const d=clone(value);
  const get=(k)=>delta[k]??0;
  d.setUTCFullYear(d.getUTCFullYear()+get("years"));
  d.setUTCMonth(d.getUTCMonth()+get("months"));
  d.setUTCDate(d.getUTCDate()+get("weeks")*7+get("days"));
  d.setUTCHours(d.getUTCHours()+get("hours"));
  d.setUTCMinutes(d.getUTCMinutes()+get("minutes"));
  d.setUTCSeconds(d.getUTCSeconds()+get("seconds"));
  d.setUTCMilliseconds(d.getUTCMilliseconds()+get("milliseconds"));
  return d;
}
