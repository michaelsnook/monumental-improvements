walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bVandals defaced\b/g, "Heroes improved");
	v = v.replace(/\bVandals\b/g, "Heroes");
	v = v.replace(/\bvandals\b/g, "heroes");
	v = v.replace(/\bdefaced\b/g, "improved");
	v = v.replace(/\bDefaced\b/g, "Improved");
	v = v.replace(/\bvandalized\b/g, "corrected");
	v = v.replace(/\bpolitical correctness\b/g, "treating others with respect");
	v = v.replace(/\bPolitical correctness\b/g, "Treating others with respect");
	v = v.replace(/\bpolitically correct\b/g, "respectful of others");
	v = v.replace(/\bPolitically correct\b/g, "Respectful of others");
	v = v.replace(/\bPolitically Correct\b/g, "Respectful of Others");
	v = v.replace(/\bPC police\b/g, "Respectful people");
	v = v.replace(/\bPC-police\b/g, "Respectful people");
	v = v.replace(/\bun-PC\b/g, "shitty to people");
	v = v.replace(/\binvandring\b/g, "sushi");
	v = v.replace(/\bInvandring\b/g, "Sushi");
	v = v.replace(/\bVolymer\b/g, "Teriyaki");
	v = v.replace(/\bvolymer\b/g, "teriyaki");

	textNode.nodeValue = v;
}
