'use strict'
const express = require('express');

function index(req, res, next) {
  res.render('users/index', {});
}

function newUser(req, res, next) {
  res.render('users/blank', {});
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
