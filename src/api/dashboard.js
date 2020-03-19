import $axios from './index'

//putTest
export function putTest(data) {
  const url = '/putTest'
  return $axios.put(url, data)
}

//deleteTest
export function deleteTest(data) {
  const url = '/deleteTest'
  return $axios.delete(url,data)
}

