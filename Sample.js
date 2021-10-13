// alert("Connected");
var dict = {
    1: [99.97, 107.98, 111.72, 121.12],
    18: [107.82, 114.26, 121.92, 129.27],
    19: [118.74, 125.18, 132.84, 140.19],
    20: [118.74, 125.18, 132.84, 140.19],
    21: [118.74, 125.18, 132.84, 140.19],
    22: [118.74, 125.18, 132.84, 140.19],
    23: [118.74, 125.18, 132.84, 140.19],
    24: [118.74, 125.18, 132.84, 140.19],
    25: [118.74, 125.18, 132.84, 140.19],
    26: [120.23, 126.77, 139.66, 142.10],
    27: [121.76, 128.35, 136.46, 144.00],
    28: [123.27, 129.95, 138.29, 145.95],
    29: [124.76, 131.56, 140.14, 147.85],
    30: [126.49, 133.30, 142.16, 149.97],
    31: [128.46, 135.21, 145.51, 152.85],
    32: [130.48, 137.13, 148.91, 155.79],
    33: [132.44, 139.03, 152.32, 158.73],
    34: [134.47, 140.94, 155.73, 161.69],
    35: [136.48, 142.90, 159.10, 164.61],
    36: [140.90, 147.05, 164.40, 169.57],
    37: [145.37, 151.25, 169.77, 174.62],
    38: [149.78, 155.49, 175.10, 179.68],
    39: [154.26, 159.77, 180.47, 184.83],
    40: [158.77, 163.99, 185.84, 189.92],
    41: [164.41, 169.67, 193.83, 197.53],
    42: [170.13, 175.41, 201.95, 205.23],
    43: [176.02, 181.22, 210.29, 213.06],
    44: [182.05, 187.21, 218.78, 221.04],
    45: [188.14, 193.15, 227.35, 229.06],
    46: [195.79, 199.21, 237.65, 237.09],
    47: [203.42, 205.29, 247.94, 245.15],
    48: [211.11, 211.36, 258.29, 253.23],
    49: [218.84, 217.45, 268.75, 261.34],
    50: [226.69, 223.63, 279.23, 269.56],
    51: [235.94, 230.03, 291.41, 278.01],
    52: [245.22, 236.42, 303.64, 286.55],
    53: [245.58, 242.84, 316.00, 295.10],
    54: [264.01, 249.30, 328.38, 303.70],
    55: [273.40, 255.85, 340.83, 312.38],
    56: [286.08, 265.50, 356.98, 323.86],
    57: [298.99, 274.73, 373.34, 335.45],
    58: [312.02, 284.27, 389.90, 347.09],
    59: [325.27, 293.95, 406.68, 358.88],
    60: [338.59, 303.77, 423.48, 370.97],
    61: [352.32, 313.58, 441.26, 383.58],
    62: [366.21, 323.48, 459.15, 396.28],
    63: [380.04, 333.49, 477.00, 409.09],
    64: [394.05, 343.47, 495.08, 421.92]
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