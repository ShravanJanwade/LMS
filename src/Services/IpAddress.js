export const AttendanceIp = "http://172.18.4.233:1212";
export const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJhYmR1bGxhaCIsInJvbGUiOiJVU0VSIiwic3ViIjoicmFzaGFkdGhic3NzQGdtYWlsLmNvbSIsImlhdCI6MTcxNDQ2NzE3OSwiZXhwIjoxNzE0NTAzMTc5fQ.4XguDHt1Tl-2a60cVtoJqq8rARBZtf7nUWrb503FPQY";
export const myHeaders = new Headers({
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": false,
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS,GET",
});
