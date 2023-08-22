import axios from "axios"
const pulseAPI = axios.create({
  baseURL: "https://pulse-43002.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return pulseAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_location_list(payload) {
  return pulseAPI.get(`/api/v1/location/`)
}
function api_v1_location_create(payload) {
  return pulseAPI.post(`/api/v1/location/`, payload.data)
}
function api_v1_location_retrieve(payload) {
  return pulseAPI.get(`/api/v1/location/${payload.id}/`)
}
function api_v1_location_update(payload) {
  return pulseAPI.put(`/api/v1/location/${payload.id}/`, payload.data)
}
function api_v1_location_partial_update(payload) {
  return pulseAPI.patch(`/api/v1/location/${payload.id}/`, payload.data)
}
function api_v1_location_destroy(payload) {
  return pulseAPI.delete(`/api/v1/location/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return pulseAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_notificationsetting_list(payload) {
  return pulseAPI.get(`/api/v1/notificationsetting/`)
}
function api_v1_notificationsetting_create(payload) {
  return pulseAPI.post(`/api/v1/notificationsetting/`, payload.data)
}
function api_v1_notificationsetting_retrieve(payload) {
  return pulseAPI.get(`/api/v1/notificationsetting/${payload.id}/`)
}
function api_v1_notificationsetting_update(payload) {
  return pulseAPI.put(
    `/api/v1/notificationsetting/${payload.id}/`,
    payload.data
  )
}
function api_v1_notificationsetting_partial_update(payload) {
  return pulseAPI.patch(
    `/api/v1/notificationsetting/${payload.id}/`,
    payload.data
  )
}
function api_v1_notificationsetting_destroy(payload) {
  return pulseAPI.delete(`/api/v1/notificationsetting/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return pulseAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return pulseAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return pulseAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return pulseAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return pulseAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return pulseAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return pulseAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return pulseAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return pulseAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return pulseAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return pulseAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return pulseAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_location_list,
  api_v1_location_create,
  api_v1_location_retrieve,
  api_v1_location_update,
  api_v1_location_partial_update,
  api_v1_location_destroy,
  api_v1_login_create,
  api_v1_notificationsetting_list,
  api_v1_notificationsetting_create,
  api_v1_notificationsetting_retrieve,
  api_v1_notificationsetting_update,
  api_v1_notificationsetting_partial_update,
  api_v1_notificationsetting_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
