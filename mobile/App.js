/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import React from 'react';
import * as SQLite from 'expo-sqlite';
import Routes from '~/routes';

export default function Index() {
  const db = SQLite.openDatabase('database.db');

  db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
    // eslint-disable-next-line no-console
    console.log('Foreign keys turned on')
  );

  const sql = [
    `create table if not exists user (
      nome text,
      picture text,
      email text,
      coins integer,
      trophies integer,
      level integer,
      token text
    );`,
    `create table if not exists category (
      id integer primary key autoincrement,
      titulo text,
      color text
    );`,
    `create table if not exists task (
      id integer primary key autoincrement,
      titulo text,
      time text,
      endDateTime text,
      category_id int,
      father_task_id int,
      foreign key (category_id) references category (id)
      foreign key (father_task_id) references task (id)
    );`,
    `create table if not exists subtask (
      id integer primary key autoincrement,
      father_id int,
      titulo text,
      time text,
      endDateTime text,
      foreign key (father_id) references task (id)
    );`,
    `create table if not exists checklist (
      id integer primary key autoincrement,
      titulo text,
      done boolean
    );`,
    `create table if not exists checkbox (
      id integer primary key autoincrement,
      titulo text,
      done boolean,
      checklist_id int,
      foreign key (checklist_id) references checklist (id)
    );`,
  ];

  db.transaction(
    (tx) => {
      for (let i = 0; i < sql.length; i++) {
        console.log(`execute sql : ${sql[i]}`);
        tx.executeSql(sql[i]);
      }
    },
    (error) => {
      console.log(`error call back : ${JSON.stringify(error)}`);
      console.log(error);
    },
    () => {
      console.log('transaction complete call back ');
    }
  );

  return <Routes />;
}
