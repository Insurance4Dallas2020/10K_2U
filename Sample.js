// alert("Connected");
var dict = {
    1: [165.84, 179.70, 187.05, 203.31],
    18: [173.69, 185.98, 197.25, 211.46],
    19: [184.61, 196.90, 208.17, 222.38],
    20: [184.61, 196.90, 208.17, 222.38],
    21: [184.61, 196.90, 208.17, 222.38],
    22: [184.61, 196.90, 208.17, 222.38],
    23: [184.61, 196.90, 208.17, 222.38],
    24: [184.61, 196.90, 208.17, 222.38],
    25: [184.61, 196.90, 208.17, 222.38],
    26: [187.02, 199.53, 211.08, 225.53],
    27: [189.48, 202.14, 213.98, 228.62],
    28: [191.92, 204.77, 216.91, 231.78],
    29: [194.35, 210.17, 219.86, 234.89],
    30: [197.00, 210.17, 222.95, 238.21],
    31: [199.90, 213.11, 227.38, 242.28],
    32: [202.85, 216.07, 231.86, 246.42],
    33: [205.75, 219.00, 236.39, 250.57],
    34: [208.72, 221.92, 240.87, 254.75],
    35: [211.65, 224.92, 245.31, 258.85],
    36: [218.11, 231.33, 253.02, 266.46],
    37: [224.64, 237.81, 260.78, 274.16],
    38: [231.12, 244.32, 268.50, 281.85],
    39: [237.63, 250.88, 276.27, 289.66],
    40: [244.17, 257.34, 284.04, 297.40],
    41: [252.59, 266.06, 295.27, 308.58],
    42: [261.11, 274.91, 306.67, 319.90],
    43: [269.81, 283.81, 318.32, 331.38],
    44: [278.68, 292.96, 330.13, 343.04],
    45: [287.62, 302.06, 342.02, 354.75],
    46: [299.29, 311.37, 357.01, 366.56],
    47: [310.90, 320.32, 371.93, 378.37],
    48: [322.51, 329.86, 386.88, 390.16],
    49: [334.12, 339.09, 401.88, 401.92],
    50: [345.80, 348.36, 416.86, 413.74],
    51: [359.45, 357.98, 434.17, 425.97],
    52: [373.05, 367.56, 451.44, 438.25],
    53: [386.70, 377.14, 468.82, 450.49],
    54: [400.34, 386.70, 486.16, 462.73],
    55: [413.89, 396.34, 503.43, 474.98],
    56: [433.31, 410.84, 527.48, 492.50],
    57: [453.00, 425.57, 551.80, 510.18],
    58: [472.89, 440.36, 576.36, 527.94],
    59: [493.02, 455.31, 601.22, 545.90],
    60: [513.29, 470.47, 626.12, 564.22],
    61: [534.02, 485.03, 652.06, 582.43],
    62: [554.87, 499.72, 678.11, 600.70],
    63: [575.69, 514.51, 704.15, 619.11],
    64: [569.69, 529.26, 730.37, 637.52]
};

var submit = document.querySelector("#submit");
var male = document.querySelector("#male");
var female = document.querySelector("#female");
var age = document.querySelector("#age");
var tno = document.querySelector("#tno");
var tyes = document.querySelector("#tyes");
var answer = document.querySelector("#final");

var ind = 0;
var final = "";
submit.addEventListener("click",function() {
if(male.checked == false && female.checked == false){
	alert("Please select either Male or Female.")
	return;
}
if(age.value == ""){
	alert("Please enter your age.")
	return;
}
if(tno.checked == false && tyes.checked == false){
	alert("Please select either Yes or No for tobacco.")
	return;
}
if(male.checked == true){
	if(tno.checked == true)
		ind = 0;
	else
		ind = 2;
}
else{
	if(tno.checked == true)
		ind = 1;
	else
		ind = 3;
}
var A = age.value;
if(A <= 17)
	Age = 1;
else
	Age = A;
ans = dict[Age][ind];
final = "Here's your quote  $" +  ans;
alert(final);
});