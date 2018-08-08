import ajax from './axios'
// 查询用户权限,登录接口
interface Login {
  username: string
  password: string
}

export const login = (params: Login) => {
  return ajax.post('/login', params)
}

export const register = (params: Login) => {
  return ajax.post('/register', params)
}
