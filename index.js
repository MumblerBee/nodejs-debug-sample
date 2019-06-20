

var pattern=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\")){4,}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i


function testPattern(str){
	var success = pattern.test(str);
	console.log(`${str} was successfully matched successfully. The result is ${success}` )
}


testPattern("hello world the length of this string will NOT cause a high CPU utilization")

testPattern("helloworldthisstringwillcauseahigh")
console.log("The next test of regular expression will cause a failure")

// testPattern("helloworldthelengthofthisstringwillcauseahighCPUutilization")

