const express = require("express")
var app1 = express();

var routeprofile = require("../routes/routeprofile")
var routeeducation = require("../routes/routeeducation")
var routeworkexp = require("../routes/routeworkexp")
var routelang = require("../routes/routelang")
var routeextrac = require("../routes/routeextrac")


app1.use("/profile", routeprofile)

app1.use("/education", routeeducation)

app1.use("/workexperience", routeworkexp)

app1.use("/extracurricular", routeextrac)

app1.use("/lang", routelang)


