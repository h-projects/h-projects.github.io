
if (avigator.userAgent=== /[(Android*)]/
|| navigator.userAgent=== /[(webOS*)]/
|| navigator.userAgent=== /[(iPhone*)]/
|| navigator.userAgent=== /[(iPad*)]/
|| navigator.userAgent=== /[(iPod*)]/
|| navigator.userAgent=== /[(Blackberry*)]/
|| navigator.userAgent=== /[(Windows Phone*)]/) {
	window.location.replace("/clicker/mobileAlert")
} else {
 	return;
}