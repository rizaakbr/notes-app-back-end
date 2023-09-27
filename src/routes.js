const { addNoteHandler, getAllNotesHandler, editNoteByHandler, getNoteByIdHandler, deleteNoteByIdHandler} = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
      options: {
        cors: {
          origin: ['*'],
        },
      },
    },
    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
      options: {
        cors: {
          origin: ['*'],
        },
      },
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: getNoteByIdHandler,
      options: {
        cors: {
          origin: ['*'],
        },
      },
    },
    {
      method:'PUT',
      path:"/note/{id}",
      handler: editNoteByHandler,
      options: {
        cors: {
          origin: ['*'],
        },
      },
    },
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: deleteNoteByIdHandler,
    },
  
];
   
module.exports = routes;