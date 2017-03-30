'use strict'
const express = require('express');

function index(req, res, next) {
  const users = [
  {id:1,usuario:'edgar18',
  nombre:'Edgar',primerapellido:'Peinado',
  segundoApellido:'Garcia'},
  {id:2,usuario:'erik21',
  nombre:'Erik',primerapellido:'Zubia',
  segundoApellido:'Hernandez'},
  {id:3,usuario:'Daniela8',
  nombre:'Daniela',primerapellido:'Santi',
  segundoApellido:'Castro'}
];
res.render('users/index', {'users':users});
}

function newUser(req, res, next) {
  res.render('users/new', {});
}

function create(req, res, next) {
  console.log(req.body.usuario);
  console.log(req.body.nombre);
  console.log(req.body.primerApellido);
  console.log(req.body.segundoApellido);
}

function show(req, res, next) {

};

function edit(req, res, next) {

};

function update(req, rest, next){

};

function destroy(req, res, next){

};

module.exports = {
  index,
  newUser,
  create,
  show,
  edit,
  update,
  destroy
}
