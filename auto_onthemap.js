let siteLat = 29.592265 
let siteLong = -98.451525
let gps = document.querySelector('.otm_tool.otm_gps')
gps.click()
let long = document.querySelector('#id_94')
let lat = document.querySelector('#id_93')
long.value = siteLong
lat.value = siteLat
let importButton = document.querySelector('#dijit_form_Button_7_label')
importButton.click()

let ringRadio = document.querySelector('#dijit_form_RadioButton_1')
ringRadio.click()
let radius = document.querySelector('#dijit_form_TextBox_0')
radius.value = 1.0
// let whiteSpace = document.querySelectorAll('.tabLabel')[2]
// whiteSpace.click()
radius.focus()
radius.blur()
let confirmButton = document.querySelector('#id_280')
confirmButton.click()


