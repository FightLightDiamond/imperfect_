export const GET_FILE_LESSON = 'GET_FILE_LESSON'
export const UPDATE_FILE_LESSON = 'UPDATE_FILE_LESSON'
export const UPDATE_FILE_LESSON_ERROR = 'UPDATE_FILE_LESSON_ERROR'
export const UPDATE_FILE_LESSON_SUCCESS = 'UPDATE_FILE_LESSON_SUCCESS'
export const DELETE_FILE_LESSON = 'DELETE_FILE_LESSON'
export const DELETE_FILE_LESSON_ERROR = 'DELETE_FILE_LESSON_ERROR'
export const DELETE_FILE_LESSON_SUCCESS = 'DELETE_FILE_LESSON_SUCCESS'

export const getFileLessonAction = (files) => ({
  type: GET_FILE_LESSON,
  payload: {files}
});

export const updateFileLessonAction = (id, file) => ({
  type: UPDATE_FILE_LESSON,
  payload: { id, file }
});

export const updateFileLessonErrorAction = (fileURL) => ({
  type: UPDATE_FILE_LESSON_ERROR,
  payload: {fileURL}
});

export const updateFileLessonSuccessAction = (fileURL) => ({
  type: UPDATE_FILE_LESSON_SUCCESS,
  payload: {fileURL}
});

export const deleteFileLessonAction = (index) => ({
  type: DELETE_FILE_LESSON,
  payload: {index}
});

export const deleteFileLessonErrorAction = (index) => ({
  type: DELETE_FILE_LESSON_ERROR,
  payload: {index}
});

export const deleteFileLessonSuccessAction = (index) => ({
  type: DELETE_FILE_LESSON_SUCCESS,
  payload: {index}
});
