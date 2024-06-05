export const BatchIp="http://172.18.5.20:8085"
export const ProgressIp="http://172.18.5.20:8085"
// export const BatchIp="http://172.18.4.243:8090";
// export const ProgressIp="http://172.18.4.233:2222";
// export const ProgressIp="http://172.18.4.233:2222";
export const AttendanceIp = "http://172.18.5.20:8085/attendance";
// export const AttendanceIp = "http://172.18.4.243:1215/attendance";
export const LearningPlanIp = "http://172.18.5.20:8085";
export const token="eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJCaGFyYXRlc2giLCJyb2xlIjoiVVNFUiIsImVtcGxveWVlSWQiOjc0ODEsInN1YiI6ImJoYXJhdGVzaF9raGFydmlAdGhicy5jb20iLCJpYXQiOjE3MTc0ODIwNTgsImV4cCI6MTcyMTA4MjA1OH0.BqHy0OXAooLdBAbq0vlNmaNj70Dpmzr9_xyQfFeH_vQ"
export const myHeaders = new Headers({
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS,GET"
  });