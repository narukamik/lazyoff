import React from 'react';
import Routes from '~/routes';
import { DatabaseConnection } from '~/database/database-connection'

export default function Index() {
  const db = DatabaseConnection.getConnection();

  var sql = [
    `
    create table if not exists category (
    id integer primary key autoincrement,
    name text
    );`,

    `create table if not exists status (
    id integer primary key autoincrement,
    name text
    );`,

    `create table if not exists task (
    id integer primary key autoincrement,
    category_id int,
    status_id int,
    name text,
    startDateTime text,
    endDateTime text,
    description text,
    foreign key (status_id) references status (id),
    foreign key (category_id) references category (id)
    );`
    ];
    

db.transaction(
  tx => {
    for (var i = 0; i < sql.length; i++) {
      console.log("execute sql : " + sql[i]);
      tx.executeSql(sql[i]);
    }
  }, (error) => {
    console.log("error call back : " + JSON.stringify(error));
    console.log(error);
  }, () => {
    console.log("transaction complete call back ");
  });
  
  return <Routes />;
}
