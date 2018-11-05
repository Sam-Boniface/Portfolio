var tabName = ["A","B","C", "D"];
var tabArea = ["AA","BB","CC", "DD"];
var tabName1 = ["A1","B1","C1"];
var tabArea1 = ["AA1","BB1","CC1"];
var tabName2 = ["A2","B2","C2"];
var tabArea2 = ["AA2","BB2","CC2"];
var tabName3 = ["A3","B3","C3"];
var tabArea3 = ["AA3","BB3","CC3"];
var i = [0,1,2,3];
var n;

function change(i) {
	n = 0;
	for (n=0; n<tabName.length; n++) {
		var element1 = document.getElementById(tabName[n]);
		var element2 = document.getElementById(tabArea[n]);
		element1.classList.remove("tab-front");
		element2.classList.remove("tab-show");
	}
}

function showTab(i) {
	var element1 = document.getElementById(tabName[i]);
	var element2 = document.getElementById(tabArea[i]);
	element1.classList.add("tab-front");
	element2.classList.add("tab-show");
}

function change1(i) {
	n = 0;
	for (n=0; n<tabName1.length; n++) {
		var element1 = document.getElementById(tabName1[n]);
		var element2 = document.getElementById(tabArea1[n]);
		element1.classList.remove("tab-front");
		element2.classList.remove("tab-show");
	}
}

function showTab1(i) {
	var element1 = document.getElementById(tabName1[i]);
	var element2 = document.getElementById(tabArea1[i]);
	element1.classList.add("tab-front");
	element2.classList.add("tab-show");
}

function change2(i) {
	n = 0;
	for (n=0; n<tabName2.length; n++) {
		var element1 = document.getElementById(tabName2[n]);
		var element2 = document.getElementById(tabArea2[n]);
		element1.classList.remove("tab-front");
		element2.classList.remove("tab-show");
	}
}

function showTab2(i) {
	var element1 = document.getElementById(tabName2[i]);
	var element2 = document.getElementById(tabArea2[i]);
	element1.classList.add("tab-front");
	element2.classList.add("tab-show");
}

function change3(i) {
	n = 0;
	for (n=0; n<tabName3.length; n++) {
		var element1 = document.getElementById(tabName3[n]);
		var element2 = document.getElementById(tabArea3[n]);
		element1.classList.remove("tab-front");
		element2.classList.remove("tab-show");
	}
}

function showTab3(i) {
	var element1 = document.getElementById(tabName3[i]);
	var element2 = document.getElementById(tabArea3[i]);
	element1.classList.add("tab-front");
	element2.classList.add("tab-show");
}