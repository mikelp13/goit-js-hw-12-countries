import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';

function queryError(){
 return error({
    text: 'Too many matches found. Please enter a more specific query!'})
}

function searchingError(){
  return  error({
      text: 'Requested country does not exist. Please, try again!'
    });
}

export {queryError, searchingError}