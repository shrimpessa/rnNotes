// import * as SQLite from 'react-native-sqlite-storage';

// SQLite.enablePromise(true);

// const db = SQLite.openDatabase(
//     {
//         name: 'notesdb',
//         location: 'default'
//     },
//     () => {}, // if successfull
//     error => { console.log(error) }
// )

// export class DB {
//     static init() {
//         return new Promise((resolve, reject) => {
//             db.transaction(tx => {
//                 tx.executeSql(
//                     'CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY NOT NULL, noteName TEXT NOT NULL, noteText TEXT NOT NULL)',
//                     [],
//                     resolve, // if successfull                    
//                     (_, error) => reject(error)
//                 )
//             })
//             db.transaction(tx => {
//                 tx.executeSql(
//                     'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, userName TEXT NOT NULL, userPass TEXT NOT NULL)',
//                     [],
//                     resolve,                  
//                     (_, error) => reject(error)
//                 )
//             })
//         })
//     }

//     static getNotes() {
//         return new Promise((resolve, reject) => {
//             db.transaction(tx => {
//                 tx.executeSql(
//                     'SELECT * FROM notes',
//                     [],
//                     (_, result) => resolve(result.rows._array),
//                     (_, error) => reject(error)
//                 )
//             })
//         })
//     }

//     static createNote({ noteName, noteText }) {
//         return new Promise((resolve, reject) => {
//             db.transaction(tx => {
//                 tx.executeSql(
//                     `INSERT INTO notes (noteName, noteText) VALUES (?, ?)`,
//                     [noteName, noteText],
//                     (_, result) => resolve(result.insertId),
//                     (_, error) => reject(error)
//                 )
//             })
//         })
//     }

//     static updateNote(note) {
//         return new Promise((resolve, reject) => {
//             db.transaction(tx => {
//                 tx.executeSql(
//                     'UPDATE notes SET noteName = ?, noteText = ? WHERE id = ?',
//                     [note.noteName, note.noteText, note.id],
//                     resolve,                  
//                     (_, error) => reject(error)
//                 )
//             })
//         })
//     }

//     static removeNote(id) {
//         return new Promise((resolve, reject) => {
//             db.transaction(tx => {
//                 tx.executeSql(
//                     'DELETE FROM notes WHERE id = ?',
//                     [id],
//                     resolve,                  
//                     (_, error) => reject(error)
//                 )
//             })
//         })
//     }
// }