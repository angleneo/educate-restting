import ajax from './axios';

interface Login {
  params: any
};

export const studentsList = (params: Login) => {
  return ajax.get('/students', params);
};

export const createStudent = (params: Login) => {
  return ajax.post('/createStudent', params);
};

export const deleteStudent = (params: number) => {
  return ajax.post(`/student/delete/${params}`);
};

