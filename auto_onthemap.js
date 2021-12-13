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
radius.value = '1'

//it doesn't work below bc the page doesn't know there is an input for radius//
let confirmButton = document.querySelector('#id_280')
confirmButton.click()


// var clickEvent  = document.createEvent ('MouseEvents');
// clickEvent.initEvent ('dblclick', true, true);
// radius.dispatchEvent (clickEvent);
