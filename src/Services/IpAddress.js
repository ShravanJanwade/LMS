// export const BatchIp="http://172.18.5.20:8888"
// export const ProgressIp="http://172.18.5.20:8888"
export const BatchIp="http://172.18.4.242:8090";
export const ProgressIp="http://172.18.4.233:2222";
// export const ProgressIp="http://172.18.4.160:2222";
export const token="eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJhYmR1bGxhaCIsInJvbGUiOiJVU0VSIiwic3ViIjoicmFzaGFkYnM1NTVAZ21haWwuY29tIiwiaWF0IjoxNzEzNTIzMDc3LCJleHAiOjE3MTM1MjY2Nzd9.upE3abwpf1i2rWT-L_gTvGbaJEIL5YDPq_J-46d-vYE"
export const myHeaders = new Headers({
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS,GET"
  });