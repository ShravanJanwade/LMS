export const BatchIp="http://172.18.5.20:8085"
export const ProgressIp="http://172.18.5.20:8085"
// export const BatchIp="http://172.18.4.243:8090";
// export const ProgressIp="http://172.18.4.233:2222";
// export const ProgressIp="http://172.18.4.233:2222";
// export const AttendanceIp = "http://172.18.5.20:8085/attendance";
export const AttendanceIp = "http://172.18.4.243:1215/attendance";
export const LearningPlanIp = "http://172.18.5.20:8085";
export const token="eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJQcmFuYXkiLCJyb2xlIjoiQURNSU4iLCJlbXBsb3llZUlkIjo3NDk3LCJzdWIiOiJwcmFuYXlfcmVkZHlAdGhicy5jb20iLCJpYXQiOjE3MTcxMjcxNjMsImV4cCI6MTcyMDcyNzE2M30.uiTYjzX739GxqLyMONe-sePx25cH0hujm26YIbLgiPg"
export const myHeaders = new Headers({
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS,GET"
  });