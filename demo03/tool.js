	function createElementWithTxt(tagName, txt){
		var node = document.createElement(tagName);
		var oTxt = document.createTextNode(txt);
		node.appendChild(oTxt)
		return node;
	}