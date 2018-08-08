import ajax from './axios';

interface Login {
  params: any
}

export const teachersList = (params: Login) => {
  return ajax.get('/teachers', params)
};

// export const deleteStudent = (params: number) => {
//   return ajax.post(`/student/delete/${params}`)
// }